import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, otp } = body;

    // ✅ التحقق من إدخال البيانات
    if (!phone || !otp) {
      return NextResponse.json(
        { error: "من فضلك أدخل رقم الهاتف ورمز التأكيد" },
        { status: 400 }
      );
    }

    // ✅ البحث عن المستخدم برقم الهاتف
    const user = await prisma.user.findUnique({ where: { phone } });

    if (!user) {
      return NextResponse.json(
        { error: "رقم الهاتف غير مسجل" },
        { status: 404 }
      );
    }

    // ✅ طباعة رمز التحقق في الكونسول
    console.log('📨 رمز التحقق:', user.otp);

    // ✅ التحقق من الكود
    if (user.otp !== otp) {
      return NextResponse.json(
        { error: "رمز التأكيد غير صحيح" },
        { status: 400 }
      );
    }

    // ✅ تحديث الحالة إلى verified
    await prisma.user.update({
      where: { phone },
      data: {
        isVerified: true,
        otp: null, // نحذف الكود بعد التفعيل
      },
    });

    return NextResponse.json({
      message: "تم تأكيد الحساب بنجاح ✅",
      verified: true,
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
