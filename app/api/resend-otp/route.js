import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { phone } = body;

        if (!phone) {
            return NextResponse.json(
                { error: 'رقم الهاتف مطلوب' },
                { status: 400 }
            );
        }

        // البحث عن المستخدم
        const user = await prisma.User.findUnique({
            where: { phone }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'المستخدم غير موجود' },
                { status: 404 }
            );
        }

        // إنشاء OTP جديد (mock)
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // تحديث المستخدم بالـ OTP الجديد
        await prisma.User.update({
            where: { phone },
            data: { otp }
        });

        // في الإنتاج، يتم إرسال OTP عبر SMS
        console.log(`📱 New OTP for ${phone}: ${otp}`);

        return NextResponse.json({
            message: 'تم إرسال الكود بنجاح ✅',
            otp: process.env.NODE_ENV === 'development' ? otp : undefined
        });

    } catch (error) {
        console.error('❌ Server error in /api/resend-otp:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في السيرفر' },
            { status: 500 }
        );
    }
}
