// app/api/maintenance/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, maintenanceRequestSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة طلبات الصيانة
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 20;
        const status = searchParams.get('status');
        const specialization = searchParams.get('specialization');
        const urgency = searchParams.get('urgency');
        const city = searchParams.get('city');

        const skip = (page - 1) * limit;

        const where = {
            ...(status && { status }),
            ...(specialization && { specialization }),
            ...(urgency && { urgency }),
            ...(city && { city })
        };

        const [requests, total] = await Promise.all([
            prisma.maintenanceRequest.findMany({
                where,
                include: {
                    client: {
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true,
                            phone: true
                        }
                    }
                },
                orderBy: [
                    { urgency: 'desc' },
                    { createdAt: 'desc' }
                ],
                skip,
                take: limit
            }),
            prisma.maintenanceRequest.count({ where })
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
        console.error('❌ Error in GET /api/maintenance:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب طلبات الصيانة' },
            { status: 500 }
        );
    }
}

// POST - إنشاء طلب صيانة
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
        const validation = validate(maintenanceRequestSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        // إنشاء الطلب
        const request = await prisma.maintenanceRequest.create({
            data: {
                ...validation.data,
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
            message: 'تم إنشاء طلب الصيانة بنجاح ✅',
            request
        }, { status: 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/maintenance:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في إنشاء طلب الصيانة' },
            { status: 500 }
        );
    }
}
