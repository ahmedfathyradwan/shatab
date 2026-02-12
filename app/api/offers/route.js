// app/api/offers/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, offerSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة العروض
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 20;
        const isFeatured = searchParams.get('featured') === 'true';
        const providerId = searchParams.get('providerId');
        const status = searchParams.get('status') || 'active';

        const skip = (page - 1) * limit;

        const where = {
            status,
            ...(isFeatured && { isFeatured: true }),
            ...(providerId && { providerId: parseInt(providerId) })
        };

        const [offers, total] = await Promise.all([
            prisma.offer.findMany({
                where,
                include: {
                    provider: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true,
                            providerType: true,
                            companyName: true,
                            averageRating: true,
                            totalRatings: true
                        }
                    }
                },
                orderBy: [
                    { isFeatured: 'desc' },
                    { createdAt: 'desc' }
                ],
                skip,
                take: limit
            }),
            prisma.offer.count({ where })
        ]);

        return NextResponse.json({
            offers,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('❌ Error in GET /api/offers:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب العروض' },
            { status: 500 }
        );
    }
}

// POST - إنشاء عرض جديد (service providers only)
export async function POST(req) {
    try {
        // التحقق من المصادقة
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
            select: { id: true, role: true, isActive: true, isBanned: true }
        });

        if (!user || user.isBanned || !user.isActive) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        if (user.role !== 'serviceProvider') {
            return NextResponse.json(
                { error: 'هذه الخدمة متاحة لمقدمي الخدمات فقط' },
                { status: 403 }
            );
        }

        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(offerSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const data = validation.data;

        // التحقق من وجود الصورة
        if (!body.image) {
            return NextResponse.json(
                { error: 'صورة العرض مطلوبة' },
                { status: 400 }
            );
        }

        // إنشاء العرض
        const offer = await prisma.offer.create({
            data: {
                ...data,
                image: body.image,
                providerId: user.id
            },
            include: {
                provider: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                        providerType: true,
                        companyName: true
                    }
                }
            }
        });

        return NextResponse.json({
            message: 'تم إنشاء العرض بنجاح ✅',
            offer
        }, { status: 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/offers:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في إنشاء العرض' },
            { status: 500 }
        );
    }
}
