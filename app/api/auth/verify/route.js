// app/api/auth/verify/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { phone, otp } = await req.json();

        if (!phone || !otp) {
            return NextResponse.json(
                { error: 'رقم الهاتف و OTP مطلوبان' },
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

        if (user.isVerified) {
            return NextResponse.json(
                { message: 'الحساب مفعّل بالفعل' },
                { status: 200 }
            );
        }

        // التحقق من OTP
        if (user.otp !== otp) {
            return NextResponse.json(
                { error: 'رمز التحقق غير صحيح' },
                { status: 400 }
            );
        }

        // تفعيل الحساب
        await prisma.User.update({
            where: { phone },
            data: {
                isVerified: true,
                otp: null // حذف OTP بعد التفعيل
            }
        });

        return NextResponse.json({
            message: 'تم تفعيل حسابك بنجاح ✅'
        });

    } catch (error) {
        console.error('❌ Server error in /api/auth/verify:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في السيرفر' },
            { status: 500 }
        );
    }
}
