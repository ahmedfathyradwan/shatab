import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "تم تسجيل الخروج بنجاح 👋" });

  // حذف الكوكي مباشرة
  res.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return res;
}
