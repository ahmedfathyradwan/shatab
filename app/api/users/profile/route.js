// app/api/users/profile/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - جلب الملف الشخصي
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
                exhibitionType: true,
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
        console.error('❌ Error in GET /api/users/profile:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب الملف الشخصي' },
            { status: 500 }
        );
    }
}

// PUT - تحديث الملف الشخصي
export async function PUT(req) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول' },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, SECRET);
        const body = await req.json();

        // حقول يمكن تحديثها
        const allowedFields = [
            'fullName', 'email', 'bio', 'address', 'city', 'governorate',
            'avatar', 'coverImage', 'exhibitionType', 'specialization',
            'jobTitle', 'companyName', 'yearsExperience', 'avgPrice', 'portfolio'
        ];

        const updateData = {};
        for (const field of allowedFields) {
            if (body[field] !== undefined) {
                updateData[field] = body[field];
            }
        }

        // تحديث كلمة المرور إذا تم إرسالها
        if (body.newPassword) {
            if (!body.currentPassword) {
                return NextResponse.json(
                    { error: 'كلمة المرور الحالية مطلوبة' },
                    { status: 400 }
                );
            }

            const user = await prisma.user.findUnique({
                where: { id: decoded.id },
                select: { password: true }
            });

            const isMatch = await bcrypt.compare(body.currentPassword, user.password);
            if (!isMatch) {
                return NextResponse.json(
                    { error: 'كلمة المرور الحالية غير صحيحة' },
                    { status: 400 }
                );
            }

            updateData.password = await bcrypt.hash(body.newPassword, 10);
        }

        // تحديث البيانات
        const updatedUser = await prisma.user.update({
            where: { id: decoded.id },
            data: updateData,
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
                exhibitionType: true,
                specialization: true,
                jobTitle: true,
                companyName: true,
                yearsExperience: true,
                avgPrice: true,
                portfolio: true,
                averageRating: true,
                totalRatings: true
            }
        });

        return NextResponse.json({
            message: 'تم تحديث الملف الشخصي بنجاح ✅',
            user: updatedUser
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in PUT /api/users/profile:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في تحديث الملف الشخصي' },
            { status: 500 }
        );
    }
}
