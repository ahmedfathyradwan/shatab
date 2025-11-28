import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, password } = body;

    if (!phone || !password) {
      return NextResponse.json(
        { error: "من فضلك أدخل رقم الهاتف وكلمة المرور" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user)
      return NextResponse.json({ error: "رقم الهاتف غير مسجل" }, { status: 404 });
    if (!user.isVerified)
      return NextResponse.json({ error: "من فضلك فعّل حسابك أولًا" }, { status: 403 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return NextResponse.json({ error: "كلمة المرور غير صحيحة" }, { status: 401 });

    const token = jwt.sign(
      { id: user.id, phone: user.phone, role: user.role },
      SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...userData } = user;

    // 🔹 ترجع JSON فقط بدون redirect
    const res = NextResponse.json({
      message: "تم تسجيل الدخول بنجاح ✅",
      userType: user.role,
      user: userData
    });

    // 🔹 حفظ الكوكي
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    console.log("💾 Cookie set:", token);

    return res;
  } catch (error) {
    console.error("❌ Server error in /api/login:", error);
    return NextResponse.json(
      { error: "حدث خطأ في السيرفر" },
      { status: 500 }
    );
  }
}
