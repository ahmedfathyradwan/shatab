// app/api/donations/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, donationSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';
import { notifyDonationApproved } from '@/server/utils/notifications';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة التبرعات المعتمدة
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 20;
        const userId = searchParams.get('userId');

        const skip = (page - 1) * limit;

        const where = {
            status: 'approved',
            ...(userId && { userId: parseInt(userId) })
        };

        const [donations, total] = await Promise.all([
            prisma.donation.findMany({
                where,
                include: {
                    user: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            }),
            prisma.donation.count({ where })
        ]);

        return NextResponse.json({
            donations,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('❌ Error in GET /api/donations:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب التبرعات' },
            { status: 500 }
        );
    }
}

// POST - إضافة تبرع جديد
export async function POST(req) {
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
            select: { id: true, isActive: true, isBanned: true }
        });

        if (!user || user.isBanned || !user.isActive) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(donationSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        // التحقق من وجود الصورة
        if (!body.image) {
            return NextResponse.json(
                { error: 'صورة التبرع مطلوبة' },
                { status: 400 }
            );
        }

        // إنشاء التبرع (في انتظار الموافقة)
        const donation = await prisma.donation.create({
            data: {
                ...validation.data,
                image: body.image,
                userId: user.id,
                status: 'pending'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true
                    }
                }
            }
        });

        return NextResponse.json({
            message: 'تم إرسال التبرع بنجاح - في انتظار موافقة الإدارة ✅',
            donation
        }, { status: 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/donations:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في إضافة التبرع' },
            { status: 500 }
        );
    }
}
