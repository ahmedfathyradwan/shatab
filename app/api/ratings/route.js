// app/api/ratings/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, ratingSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';
import { notifyNewRating } from '@/server/utils/notifications';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة التقييمات
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const providerId = searchParams.get('providerId');
        const clientId = searchParams.get('clientId');

        const where = {
            ...(providerId && { providerId: parseInt(providerId) }),
            ...(clientId && { clientId: parseInt(clientId) })
        };

        const ratings = await prisma.rating.findMany({
            where,
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true
                    }
                },
                provider: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                        providerType: true,
                        companyName: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ ratings });

    } catch (error) {
        console.error('❌ Error in GET /api/ratings:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب التقييمات' },
            { status: 500 }
        );
    }
}

// POST - إضافة تقييم
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
            select: { id: true, fullName: true, isActive: true, isBanned: true }
        });

        if (!user || user.isBanned || !user.isActive) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(ratingSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const { providerId, rating, comment } = validation.data;

        // التحقق من وجود مقدم الخدمة
        const provider = await prisma.user.findUnique({
            where: { id: providerId },
            select: { id: true, role: true }
        });

        if (!provider || provider.role !== 'serviceProvider') {
            return NextResponse.json(
                { error: 'مقدم الخدمة غير موجود' },
                { status: 404 }
            );
        }

        // التحقق من عدم تقييم نفسه
        if (user.id === providerId) {
            return NextResponse.json(
                { error: 'لا يمكنك تقييم نفسك' },
                { status: 400 }
            );
        }

        // إنشاء أو تحديث التقييم
        const existingRating = await prisma.rating.findUnique({
            where: {
                clientId_providerId: {
                    clientId: user.id,
                    providerId
                }
            }
        });

        let ratingRecord;

        if (existingRating) {
            // تحديث التقييم الموجود
            ratingRecord = await prisma.rating.update({
                where: { id: existingRating.id },
                data: { rating, comment },
                include: {
                    client: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true
                        }
                    }
                }
            });
        } else {
            // إنشاء تقييم جديد
            ratingRecord = await prisma.rating.create({
                data: {
                    clientId: user.id,
                    providerId,
                    rating,
                    comment
                },
                include: {
                    client: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true
                        }
                    }
                }
            });

            // إرسال إشعار لمقدم الخدمة
            await notifyNewRating(providerId, user.fullName, rating);
        }

        // تحديث متوسط التقييم
        const allRatings = await prisma.rating.findMany({
            where: { providerId },
            select: { rating: true }
        });

        const averageRating = allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length;

        await prisma.user.update({
            where: { id: providerId },
            data: {
                averageRating: parseFloat(averageRating.toFixed(2)),
                totalRatings: allRatings.length
            }
        });

        return NextResponse.json({
            message: existingRating ? 'تم تحديث التقييم بنجاح ✅' : 'تم إضافة التقييم بنجاح ✅',
            rating: ratingRecord
        }, { status: existingRating ? 200 : 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/ratings:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في إضافة التقييم' },
            { status: 500 }
        );
    }
}
