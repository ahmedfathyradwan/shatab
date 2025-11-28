import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // أي زيارة للصفحة الرئيسية
  if (pathname === "/") {
    const token = request.cookies.get("token")?.value || null;

    if (!token) {
      // لا يوجد توكن → redirect مباشرة للـ login
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      jwt.verify(token, SECRET);
      return NextResponse.next(); // توكن صالح → السماح بالدخول
    } catch {
      // توكن غير صالح → redirect للـ login
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // الصفحات العامة مثل /login أو /api/login /api/logout
  return NextResponse.next();
}

// matcher لجميع الصفحات (عدا ملفات النظام)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
