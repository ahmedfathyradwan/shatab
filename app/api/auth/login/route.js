// app/api/auth/login/route.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { validate, loginSchema } from '@/server/utils/validation';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

export async function POST(req) {
    try {
        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(loginSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const { phone, password } = validation.data;

        // البحث عن المستخدم
        const user = await prisma.User.findUnique({
            where: { phone },
            select: {
                id: true,
                fullName: true,
                phone: true,
                email: true,
                password: true,
                role: true,
                providerType: true,
                avatar: true,
                isVerified: true,
                isActive: true,
                isBanned: true,
                banReason: true
            }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'رقم الهاتف أو كلمة المرور غير صحيحة' },
                { status: 401 }
            );
        }

        // التحقق من حالة الحساب
        if (user.isBanned) {
            return NextResponse.json(
                { error: 'تم حظر حسابك', reason: user.banReason },
                { status: 403 }
            );
        }

        if (!user.isActive) {
            return NextResponse.json(
                { error: 'حسابك غير نشط - يرجى التواصل مع الدعم' },
                { status: 403 }
            );
        }

        if (!user.isVerified) {
            return NextResponse.json(
                { error: 'يجب تفعيل حسابك أولاً', needsVerification: true },
                { status: 403 }
            );
        }

        // التحقق من كلمة المرور
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { error: 'رقم الهاتف أو كلمة المرور غير صحيحة' },
                { status: 401 }
            );
        }

        // إنشاء JWT token
        const token = jwt.sign(
            {
                id: user.id,
                phone: user.phone,
                role: user.role,
                providerType: user.providerType
            },
            SECRET,
            { expiresIn: '30d' }
        );

        // إزالة كلمة المرور من الاستجابة
        const { password: _, ...userData } = user;

        // إنشاء الاستجابة
        const res = NextResponse.json({
            message: 'تم تسجيل الدخول بنجاح ✅',
            user: userData,
            token
        });

        // حفظ الـ token في الـ cookie
        res.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60, // 30 days
            path: '/',
        });

        return res;

    } catch (error) {
        console.error('❌ Server error in /api/auth/login:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في السيرفر' },
            { status: 500 }
        );
    }
}
