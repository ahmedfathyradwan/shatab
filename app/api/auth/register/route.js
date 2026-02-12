// app/api/auth/register/route.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { validate, registerSchema } from '@/server/utils/validation';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(registerSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const data = validation.data;

        // التحقق من عدم وجود المستخدم مسبقاً
        const existingUser = await prisma.User.findFirst({
            where: {
                OR: [
                    { phone: data.phone },
                    ...(data.email ? [{ email: data.email }] : [])
                ]
            }
        });

        if (existingUser) {
            if (existingUser.phone === data.phone) {
                return NextResponse.json(
                    { error: 'رقم الهاتف مستخدم بالفعل' },
                    { status: 400 }
                );
            }
            if (data.email && existingUser.email === data.email) {
                return NextResponse.json(
                    { error: 'البريد الإلكتروني مستخدم بالفعل' },
                    { status: 400 }
                );
            }
        }

        // تشفير كلمة المرور
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // إنشاء OTP (mock - في الإنتاج يتم إرساله عبر SMS)
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // إنشاء المستخدم
        const newUser = await prisma.User.create({
            data: {
                ...data,
                password: hashedPassword,
                otp,
                isVerified: process.env.NODE_ENV === 'development' // auto-verify في التطوير
            }
        });

        // إزالة البيانات الحساسة
        const { password, otp: userOtp, ...userData } = newUser;

        // في الإنتاج، يتم إرسال OTP عبر SMS
        console.log(`📱 OTP for ${data.phone}: ${otp}`);

        return NextResponse.json({
            message: 'تم إنشاء الحساب بنجاح ✅',
            user: userData,
            ...(process.env.NODE_ENV === 'development' && { otp }) // إرجاع OTP في التطوير فقط
        }, { status: 201 });

    } catch (error) {
        console.error('❌ Server error in /api/auth/register:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في السيرفر' },
            { status: 500 }
        );
    }
}
