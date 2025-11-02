import { PrismaClient } from "../../../../generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, password } = body;

    // ✅ تحقق من إدخال البيانات
    if (!phone || !password) {
      return Response.json(
        { error: "من فضلك أدخل رقم الهاتف وكلمة المرور" },
        { status: 400 }
      );
    }

    // ✅ البحث عن العميل
    const client = await prisma.cLINTE.findUnique({ where: { phone } });

    if (!client) {
      return Response.json({ error: "رقم الهاتف غير مسجل" }, { status: 404 });
    }

    // ✅ تحقق من أن الحساب متأكد
    if (!client.isVerified) {
      return Response.json({ error: "من فضلك فعّل حسابك أولًا" }, { status: 403 });
    }

    // ✅ تحقق من كلمة المرور (بعد التشفير)
    const isMatch = await bcrypt.compare(password, client.password);

    if (!isMatch) {
      return Response.json({ error: "كلمة المرور غير صحيحة" }, { status: 401 });
    }

    // ✅ نجاح تسجيل الدخول
    const { password: _, ...clientData } = client;

    return Response.json({
      message: "تم تسجيل الدخول بنجاح ✅",
      client: clientData,
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return Response.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
