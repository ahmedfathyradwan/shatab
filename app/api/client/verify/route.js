import { PrismaClient } from "../../../../generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, otp } = body;

    // ✅ التحقق من إدخال البيانات
    if (!phone || !otp) {
      return Response.json(
        { error: "من فضلك أدخل رقم الهاتف ورمز التأكيد" },
        { status: 400 }
      );
    }

    // ✅ البحث عن العميل برقم الهاتف
    const client = await prisma.CLINTE.findUnique({ where: { phone } });

    if (!client) {
      return Response.json(
        { error: "رقم الهاتف غير مسجل" },
        { status: 404 }
      );
    }

    // ✅ التحقق من الكود
    if (client.otp !== otp) {
      return Response.json(
        { error: "رمز التأكيد غير صحيح" },
        { status: 400 }
      );
    }

    // ✅ تحديث الحالة إلى verified
    await prisma.CLINTE.update({
      where: { phone },
      data: {
        isVerified: true,
        otp: null, // نحذف الكود بعد التفعيل
      },
    });

    return Response.json({
      message: "تم تأكيد الحساب بنجاح ✅",
      verified: true,
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return Response.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
