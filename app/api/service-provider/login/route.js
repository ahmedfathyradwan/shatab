import { PrismaClient } from "../../../../generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, password } = body;

    if (!phone || !password) {
      return Response.json({ error: "من فضلك أدخل رقم الهاتف وكلمة المرور" }, { status: 400 });
    }

    const provider = await prisma.serviceProvider.findUnique({ where: { phone } });

    if (!provider) {
      return Response.json({ error: "رقم الهاتف غير مسجل" }, { status: 404 });
    }

    if (!provider.isVerified) {
      return Response.json({ error: "من فضلك فعّل حسابك أولًا" }, { status: 403 });
    }

    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) {
      return Response.json({ error: "كلمة المرور غير صحيحة" }, { status: 401 });
    }

    const { password: _, ...providerData } = provider;
    return Response.json({ message: "تم تسجيل الدخول بنجاح ✅", provider: providerData });

  } catch (error) {
    console.error("❌ Server error:", error);
    return Response.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
