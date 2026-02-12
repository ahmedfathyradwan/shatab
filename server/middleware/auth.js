// server/middleware/auth.js
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

/**
 * Middleware للتحقق من JWT token
 */
export async function authenticateUser(req, res, next) {
  try {
    const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'غير مصرح - يجب تسجيل الدخول' });
    }

    const decoded = jwt.verify(token, SECRET);

    // جلب بيانات المستخدم من قاعدة البيانات
    const user = await prisma.User.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        fullName: true,
        phone: true,
        email: true,
        role: true,
        providerType: true,
        isActive: true,
        isBanned: true,
        isVerified: true,
      }
    });

    if (!user) {
      return res.status(401).json({ error: 'المستخدم غير موجود' });
    }

    if (user.isBanned) {
      return res.status(403).json({ error: 'تم حظر حسابك' });
    }

    if (!user.isActive) {
      return res.status(403).json({ error: 'حسابك غير نشط' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ error: 'يجب تفعيل حسابك أولاً' });
    }

    // إضافة بيانات المستخدم للـ request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'توكن غير صالح' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'انتهت صلاحية الجلسة - يرجى تسجيل الدخول مرة أخرى' });
    }
    console.error('❌ Auth middleware error:', error);
    return res.status(500).json({ error: 'خطأ في التحقق من الهوية' });
  }
}

/**
 * Middleware للتحقق من نوع المستخدم (Role)
 */
export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'غير مصرح - يجب تسجيل الدخول' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'ليس لديك صلاحية للوصول لهذا المورد',
        requiredRole: allowedRoles,
        yourRole: req.user.role
      });
    }

    next();
  };
}

/**
 * Middleware للتحقق من أن المستخدم هو مقدم خدمة
 */
export function requireServiceProvider(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'غير مصرح - يجب تسجيل الدخول' });
  }

  if (req.user.role !== 'serviceProvider') {
    return res.status(403).json({ error: 'هذه الخدمة متاحة لمقدمي الخدمات فقط' });
  }

  next();
}

/**
 * Middleware للتحقق من أن المستخدم هو صاحب الموقع
 */
export function requireSiteOwner(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'غير مصرح - يجب تسجيل الدخول' });
  }

  if (req.user.role !== 'siteOwner') {
    return res.status(403).json({ error: 'هذه الخدمة متاحة لصاحب الموقع فقط' });
  }

  next();
}

/**
 * Middleware للتحقق من ملكية المورد
 */
export function requireOwnership(resourceUserIdField = 'userId') {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'غير مصرح - يجب تسجيل الدخول' });
    }

    const resourceUserId = req.resource?.[resourceUserIdField];

    if (!resourceUserId) {
      return res.status(400).json({ error: 'لم يتم العثور على معرف المالك' });
    }

    // صاحب الموقع يمكنه الوصول لكل شيء
    if (req.user.role === 'siteOwner') {
      return next();
    }

    // التحقق من الملكية
    if (resourceUserId !== req.user.id) {
      return res.status(403).json({ error: 'ليس لديك صلاحية لتعديل هذا المورد' });
    }

    next();
  };
}

/**
 * Optional authentication - لا يفشل إذا لم يكن هناك token
 */
export async function optionalAuth(req, res, next) {
  try {
    const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      req.user = null;
      return next();
    }

    const decoded = jwt.verify(token, SECRET);
    const user = await prisma.User.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        fullName: true,
        phone: true,
        email: true,
        role: true,
        providerType: true,
        isActive: true,
        isBanned: true,
        isVerified: true,
      }
    });

    req.user = user && user.isActive && !user.isBanned ? user : null;
    next();
  } catch (error) {
    req.user = null;
    next();
  }
}
