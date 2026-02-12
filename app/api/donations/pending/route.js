// app/api/donations/pending/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة التبرعات المعلقة (site owner only)
export async function GET(req) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول' },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, role: true }
        });

        if (!user || user.role !== 'siteOwner') {
            return NextResponse.json(
                { error: 'هذه الخدمة متاحة لصاحب الموقع فقط' },
                { status: 403 }
            );
        }

        const donations = await prisma.donation.findMany({
            where: { status: 'pending' },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                        phone: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ donations });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in GET /api/donations/pending:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب التبرعات المعلقة' },
            { status: 500 }
        );
    }
}
