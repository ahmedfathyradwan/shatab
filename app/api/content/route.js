// app/api/content/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { validate, staticContentSchema } from '@/server/utils/validation';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - جلب محتوى ثابت
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const key = searchParams.get('key'); // 'about' or 'contact'

        if (!key) {
            // جلب كل المحتوى
            const content = await prisma.staticContent.findMany();
            return NextResponse.json({ content });
        }

        const content = await prisma.staticContent.findUnique({
            where: { key }
        });

        if (!content) {
            return NextResponse.json(
                { error: 'المحتوى غير موجود' },
                { status: 404 }
            );
        }

        return NextResponse.json({ content });

    } catch (error) {
        console.error('❌ Error in GET /api/content:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب المحتوى' },
            { status: 500 }
        );
    }
}

// PUT - تحديث محتوى ثابت (site owner only)
export async function PUT(req) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول' },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, role: true }
        });

        if (!user || user.role !== 'siteOwner') {
            return NextResponse.json(
                { error: 'هذه الخدمة متاحة لصاحب الموقع فقط' },
                { status: 403 }
            );
        }

        const body = await req.json();
        const { key, ...data } = body;

        if (!key || !['about', 'contact'].includes(key)) {
            return NextResponse.json(
                { error: 'مفتاح غير صالح - يجب أن يكون about أو contact' },
                { status: 400 }
            );
        }

        // التحقق من صحة البيانات
        const validation = validate(staticContentSchema, data);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        // تحديث أو إنشاء المحتوى
        const content = await prisma.staticContent.upsert({
            where: { key },
            update: validation.data,
            create: {
                key,
                ...validation.data
            }
        });

        return NextResponse.json({
            message: 'تم تحديث المحتوى بنجاح ✅',
            content
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in PUT /api/content:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في تحديث المحتوى' },
            { status: 500 }
        );
    }
}
