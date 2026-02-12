// app/api/finishing/requests/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, finishingRequestSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة طلبات التشطيب
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 20;
        const status = searchParams.get('status');
        const isCompanyRequest = searchParams.get('isCompanyRequest');
        const clientId = searchParams.get('clientId');
        const city = searchParams.get('city');
        const governorate = searchParams.get('governorate');

        const skip = (page - 1) * limit;

        const where = {
            ...(status && { status }),
            ...(isCompanyRequest !== null && { isCompanyRequest: isCompanyRequest === 'true' }),
            ...(clientId && { clientId: parseInt(clientId) }),
            ...(city && { city }),
            ...(governorate && { governorate })
        };

        const [requests, total] = await Promise.all([
            prisma.finishingRequest.findMany({
                where,
                include: {
                    client: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true,
                            city: true,
                            governorate: true
                        }
                    },
                    _count: {
                        select: { proposals: true }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            }),
            prisma.finishingRequest.count({ where })
        ]);

        return NextResponse.json({
            requests,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('❌ Error in GET /api/finishing/requests:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب الطلبات' },
            { status: 500 }
        );
    }
}

// POST - إنشاء طلب تشطيب (clients only)
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
            select: { id: true, role: true, isActive: true, isBanned: true }
        });

        if (!user || user.isBanned || !user.isActive) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        const body = await req.json();

        // التحقق من صحة البيانات
        const validation = validate(finishingRequestSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const data = validation.data;

        // إنشاء الطلب
        const request = await prisma.finishingRequest.create({
            data: {
                ...data,
                images: body.images || [],
                clientId: user.id
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

        return NextResponse.json({
            message: 'تم إنشاء الطلب بنجاح ✅',
            request
        }, { status: 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/finishing/requests:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في إنشاء الطلب' },
            { status: 500 }
        );
    }
}
