// app/api/finishing/proposals/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, proposalSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';
import { notifyNewProposal } from '@/server/utils/notifications';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة العروض (proposals)
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const requestId = searchParams.get('requestId');
        const providerId = searchParams.get('providerId');
        const status = searchParams.get('status');

        const where = {
            ...(requestId && { requestId: parseInt(requestId) }),
            ...(providerId && { providerId: parseInt(providerId) }),
            ...(status && { status })
        };

        const proposals = await prisma.proposal.findMany({
            where,
            include: {
                provider: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                        providerType: true,
                        companyName: true,
                        specialization: true,
                        averageRating: true,
                        totalRatings: true
                    }
                },
                request: {
                    select: {
                        id: true,
                        title: true,
                        clientId: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ proposals });

    } catch (error) {
        console.error('❌ Error in GET /api/finishing/proposals:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب العروض' },
            { status: 500 }
        );
    }
}

// POST - تقديم عرض سعر (service providers only)
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
            select: { id: true, fullName: true, role: true, isActive: true, isBanned: true }
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
        const validation = validate(proposalSchema, body);
        if (!validation.valid) {
            return NextResponse.json(
                { error: 'بيانات غير صحيحة', errors: validation.errors },
                { status: 400 }
            );
        }

        const { requestId, ...data } = body;

        // التحقق من وجود الطلب
        const request = await prisma.finishingRequest.findUnique({
            where: { id: parseInt(requestId) },
            select: { id: true, status: true, clientId: true, title: true }
        });

        if (!request) {
            return NextResponse.json(
                { error: 'الطلب غير موجود' },
                { status: 404 }
            );
        }

        if (request.status !== 'open') {
            return NextResponse.json(
                { error: 'هذا الطلب لم يعد مفتوحاً لاستقبال العروض' },
                { status: 400 }
            );
        }

        // التحقق من عدم تقديم عرض سابق
        const existingProposal = await prisma.proposal.findFirst({
            where: {
                requestId: request.id,
                providerId: user.id
            }
        });

        if (existingProposal) {
            return NextResponse.json(
                { error: 'لقد قدمت عرضاً على هذا الطلب بالفعل' },
                { status: 400 }
            );
        }

        // إنشاء العرض
        const proposal = await prisma.proposal.create({
            data: {
                ...validation.data,
                attachments: body.attachments || [],
                requestId: request.id,
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

        // إرسال إشعار لصاحب الطلب
        await notifyNewProposal(request.clientId, proposal.id, user.fullName);

        return NextResponse.json({
            message: 'تم تقديم العرض بنجاح ✅',
            proposal
        }, { status: 201 });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/finishing/proposals:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في تقديم العرض' },
            { status: 500 }
        );
    }
}
