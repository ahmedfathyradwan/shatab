// app/api/register/route.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      password,
      role,          // "client" أو "serviceProvider"
      address,
      providerType,
      exhibitionType,
      specialization,
      jobTitle,
      avgPrice
    } = body;

    // التحقق من الحقول الأساسية
    if (!fullName || !phone || !password || !role) {
      return NextResponse.json(
        { error: 'كل الحقول الأساسية مطلوبة' },
        { status: 400 }
      );
    }

    // التحقق من الدور
    if (!['client', 'serviceProvider'].includes(role)) {
      return NextResponse.json(
        { error: 'الدور غير صالح' },
        { status: 400 }
      );
    }

    // تحقق من وجود الهاتف مسبقًا
    const existingUser = await prisma.user.findUnique({ where: { phone } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'رقم الهاتف مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // بيانات المستخدم الأساسية
    let userData = {
      fullName,
      phone,
      password: hashedPassword,
      role,
      otp: Math.floor(100000 + Math.random() * 900000).toString(),
      isVerified: false
    };

    // إذا كان مقدم خدمة
    if (role === 'serviceProvider') {
      if (!address || !providerType) {
        return NextResponse.json(
          { error: 'عنوان ونوع مقدم الخدمة مطلوبان' },
          { status: 400 }
        );
      }
      userData = {
        ...userData,
        address,
        providerType,
        exhibitionType: exhibitionType || null,
        specialization: specialization || null,
        jobTitle: jobTitle || null,
        avgPrice: avgPrice || null
      };
    }

    // إنشاء المستخدم
    const newUser = await prisma.user.create({ data: userData });

    // إزالة كلمة المرور من الاستجابة
    const { password: _, ...responseUser } = newUser;

    return NextResponse.json({
      message: 'تم إنشاء الحساب بنجاح ✅',
      user: responseUser
    });
  } catch (error) {
    console.error('❌ Server error in /api/register:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في السيرفر' },
      { status: 500 }
    );
  }
}
