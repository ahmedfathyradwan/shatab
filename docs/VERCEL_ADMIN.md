# نشر الموقع على Vercel - دليل لوحة التحكم

## 🚀 خيارات الوصول للوحة التحكم والبيانات

### الخيار 1: Prisma Studio (الأسهل) ⭐

**المميزات:**
- واجهة بصرية سهلة
- عرض وتعديل جميع البيانات
- لا يحتاج نشر إضافي

**الطريقة:**

1. **على جهازك المحلي:**

```bash
# في ملف .env.local أو .env
DATABASE_URL="postgresql://user:password@your-production-db.com/shatab_db"

# شغل Prisma Studio
npx prisma studio
```

2. **افتح المتصفح:** `http://localhost:5555`

3. **ستشاهد جميع الجداول:**
   - Users (العملاء ومقدمي الخدمات)
   - Offers (العروض)
   - FinishingRequests (طلبات التشطيب)
   - Proposals (عروض الأسعار)
   - Ratings (التقييمات)
   - Donations (التبرعات)
   - وغيرها...

**⚠️ ملاحظة أمنية:** 
- لا تشارك رابط قاعدة البيانات
- استخدم VPN إذا كانت قاعدة البيانات محمية بـ IP whitelist

---

### الخيار 2: AdminJS على Vercel (متقدم)

**المشكلة:** AdminJS يحتاج Express server، وVercel serverless.

**الحل:** استخدم Vercel Edge Functions أو API Routes

#### الطريقة الأولى: API Routes بسيطة

أنشئ صفحة admin مخصصة:

```bash
# إنشاء صفحة Admin بسيطة
app/admin-dashboard/page.js
```

**مثال بسيط:**

```javascript
// app/admin-dashboard/page.js
'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // جلب الإحصائيات
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data));
      
    // جلب المستخدمين
    fetch('/api/admin/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <div className="admin-dashboard">
      <h1>لوحة تحكم شطبها</h1>
      
      {stats && (
        <div className="stats">
          <div>إجمالي المستخدمين: {stats.totalUsers}</div>
          <div>العروض النشطة: {stats.activeOffers}</div>
          <div>الطلبات المفتوحة: {stats.openRequests}</div>
        </div>
      )}
      
      <div className="users-table">
        <h2>المستخدمين</h2>
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>الهاتف</th>
              <th>النوع</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.isActive ? 'نشط' : 'غير نشط'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

**APIs المطلوبة:**

```javascript
// app/api/admin/stats/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(req) {
  // تحقق من أن المستخدم هو site owner
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { role: true }
  });
  
  if (user?.role !== 'siteOwner') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  // جلب الإحصائيات
  const [totalUsers, activeOffers, openRequests, pendingDonations] = await Promise.all([
    prisma.user.count(),
    prisma.offer.count({ where: { status: 'active' } }),
    prisma.finishingRequest.count({ where: { status: 'open' } }),
    prisma.donation.count({ where: { status: 'pending' } })
  ]);
  
  return NextResponse.json({
    totalUsers,
    activeOffers,
    openRequests,
    pendingDonations
  });
}
```

---

### الخيار 3: خدمات خارجية (الأسهل للإنتاج)

#### 1. **Prisma Data Platform** (مجاني)
- رابط: https://cloud.prisma.io
- اربط قاعدة البيانات
- واجهة مثل Prisma Studio لكن أونلاين

#### 2. **Retool** (قوي جداً)
- رابط: https://retool.com
- بناء لوحة تحكم مخصصة
- اتصال مباشر بـ PostgreSQL
- مجاني للمشاريع الصغيرة

#### 3. **Forest Admin**
- رابط: https://www.forestadmin.com
- لوحة تحكم جاهزة
- اتصال بـ Prisma مباشرة

---

## 📊 الوصول للبيانات الحقيقية

### 1. **من خلال APIs موجودة**

استخدم APIs التي بنيناها:

```bash
# مثال: جلب جميع المستخدمين
curl -X GET https://your-site.vercel.app/api/users \
  -H "Authorization: Bearer YOUR_SITE_OWNER_TOKEN"

# جلب العروض
curl -X GET https://your-site.vercel.app/api/offers

# جلب التبرعات المعلقة
curl -X GET https://your-site.vercel.app/api/donations/pending \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 2. **قاعدة البيانات مباشرة**

#### باستخدام pgAdmin أو DBeaver:

1. حمل pgAdmin: https://www.pgadmin.org/
2. أضف اتصال جديد:
   - Host: من Vercel Postgres
   - Port: 5432
   - Database: shatab_db
   - Username: من .env
   - Password: من .env

3. ستشاهد جميع الجداول والبيانات

#### باستخدام SQL مباشرة:

```bash
# اتصل بقاعدة البيانات
psql "postgresql://user:pass@host/shatab_db"

# استعلامات مفيدة
SELECT * FROM "User" WHERE role = 'siteOwner';
SELECT * FROM "Offer" WHERE status = 'active';
SELECT * FROM "Donation" WHERE status = 'pending';

# إحصائيات
SELECT role, COUNT(*) FROM "User" GROUP BY role;
SELECT status, COUNT(*) FROM "Offer" GROUP BY status;
```

---

## 🔐 الأمان

### حماية لوحة التحكم:

1. **استخدم Middleware:**

```javascript
// app/admin-dashboard/middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // تحقق من أن المستخدم site owner
    if (decoded.role !== 'siteOwner') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/admin-dashboard/:path*'
};
```

2. **IP Whitelisting على Vercel:**
   - في Vercel Dashboard → Settings → Environment Variables
   - أضف `ALLOWED_ADMIN_IPS=your.ip.address`

---

## 🎯 التوصية النهائية

**للتطوير:**
- استخدم Prisma Studio على Local

**للإنتاج:**
- **الخيار الأفضل:** بناء صفحة admin مخصصة في Next.js نفسه
- **البديل السهل:** Prisma Studio من جهازك متصل بـ production DB
- **للمشاريع الكبيرة:** Retool أو Forest Admin

---

## 📝 خطوات سريعة للبدء

1. **سجل دخول كـ Site Owner:**
```bash
POST /api/auth/login
{
  "phone": "01000000000",
  "password": "your_password"
}
```

2. **احفظ الـ Token**

3. **استخدم APIs الموجودة:**
   - `/api/donations/pending` - التبرعات المعلقة
   - `/api/users` - المستخدمين
   - `/api/offers` - العروض

4. **أو استخدم Prisma Studio:**
```bash
DATABASE_URL="your_production_url" npx prisma studio
```

هل تريد مني بناء صفحة Admin Dashboard كاملة داخل Next.js؟
