// app/api/auth/me/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

export async function GET(req) {
    try {
        const token = req.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, SECRET);

        const user = await prisma.User.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                fullName: true,
                phone: true,
                email: true,
                role: true,
                providerType: true,
                avatar: true,
                coverImage: true,
                bio: true,
                address: true,
                city: true,
                governorate: true,
                specialization: true,
                jobTitle: true,
                companyName: true,
                yearsExperience: true,
                avgPrice: true,
                portfolio: true,
                averageRating: true,
                totalRatings: true,
                isActive: true,
                createdAt: true
            }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'المستخدم غير موجود' },
                { status: 404 }
            );
        }

        return NextResponse.json({ user });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Server error in /api/auth/me:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في السيرفر' },
            { status: 500 }
        );
    }
}
