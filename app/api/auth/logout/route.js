// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    const res = NextResponse.json({
        message: 'تم تسجيل الخروج بنجاح'
    });

    // حذف الـ token cookie
    res.cookies.delete('token');

    return res;
}
