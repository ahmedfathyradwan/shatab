import { PrismaClient } from "../../../../generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, password } = body;

    // ✅ التحقق من القيم المطلوبة
    if (!fullName || !phone || !password) {
      return Response.json({ error: "كل الحقول مطلوبة" }, { status: 400 });
    }

    // ✅ تحقق إن رقم الهاتف مش مستخدم قبل كده
    const existing = await prisma.cLINTE.findUnique({ where: { phone } });
    if (existing) {
      return Response.json({ error: "الرقم مستخدم بالفعل" }, { status: 400 });
    }

    // ✅ تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ توليد رمز تأكيد (OTP)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // ✅ إنشاء العميل الجديد
    const newClient = await prisma.cLINTE.create({
      data: {
        fullName,
        phone,
        password: hashedPassword,
        otp,
      },
    });

    // ✅ الرد بالنجاح
    return Response.json({
      message: "تم إنشاء الحساب بنجاح، تم إرسال رمز التأكيد",
      clientId: newClient.id,
      otp: otp,
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return Response.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
