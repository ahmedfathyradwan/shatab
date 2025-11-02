import { PrismaClient } from "../../../../generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, password, address, providerType, exhibitionType, specialization, jobTitle, avgPrice } = body;

    // تحقق من البيانات المشتركة
    if (!fullName || !phone || !password || !address || !providerType) {
      return Response.json({ error: "من فضلك أدخل جميع البيانات المطلوبة" }, { status: 400 });
    }

    // تحقق من نوع المزود
    const validTypes = ["exhibition", "company", "freelancer"];
    if (!validTypes.includes(providerType)) {
      return Response.json({ error: "نوع مقدم الخدمة غير صالح" }, { status: 400 });
    }

    // تحقق من الحقول الخاصة بالنوع
    if (providerType === "exhibition" && !exhibitionType) {
      return Response.json({ error: "من فضلك أدخل نوع المعرض" }, { status: 400 });
    }
    if (providerType === "company" && !specialization) {
      return Response.json({ error: "من فضلك أدخل نوع التخصص" }, { status: 400 });
    }
    if (providerType === "freelancer" && (!jobTitle || !avgPrice)) {
      return Response.json({ error: "من فضلك أدخل المسمى الوظيفي ومتوسط السعر" }, { status: 400 });
    }

    // تحقق من وجود الهاتف مسبقًا
    const existing = await prisma.serviceProvider.findUnique({ where: { phone } });
    if (existing) {
      return Response.json({ error: "رقم الهاتف مسجل بالفعل" }, { status: 409 });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء مقدم الخدمة
    const newProvider = await prisma.serviceProvider.create({
      data: {
        fullName,
        phone,
        password: hashedPassword,
        address,
        providerType,
        exhibitionType: exhibitionType || null,
        specialization: specialization || null,
        jobTitle: jobTitle || null,
        avgPrice: avgPrice || null,
      },
    });

    // إزالة الباسورد من الرد
    const { password: _, ...providerData } = newProvider;

    return Response.json({ message: "تم إنشاء الحساب بنجاح ✅", provider: providerData });

  } catch (error) {
    console.error("❌ Server error:", error);
    return Response.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
