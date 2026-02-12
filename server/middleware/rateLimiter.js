// server/middleware/rateLimiter.js
import rateLimit from 'express-rate-limit';

const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100;

/**
 * Rate limiter عام للـ API
 */
export const generalLimiter = rateLimit({
    windowMs: WINDOW_MS,
    max: MAX_REQUESTS,
    message: { error: 'تم تجاوز الحد المسموح من الطلبات، يرجى المحاولة لاحقاً' },
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * Rate limiter صارم للتسجيل والدخول
 */
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 محاولات فقط
    message: { error: 'تم تجاوز عدد محاولات تسجيل الدخول، يرجى المحاولة بعد 15 دقيقة' },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true, // لا تحسب الطلبات الناجحة
});

/**
 * Rate limiter لرفع الملفات
 */
export const uploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // 20 ملف في الساعة
    message: { error: 'تم تجاوز الحد المسموح لرفع الملفات، يرجى المحاولة لاحقاً' },
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * Rate limiter لإنشاء المحتوى (عروض، طلبات، إلخ)
 */
export const createContentLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 منشورات في الساعة
    message: { error: 'تم تجاوز الحد المسموح لإنشاء المحتوى، يرجى المحاولة لاحقاً' },
    standardHeaders: true,
    legacyHeaders: false,
});
