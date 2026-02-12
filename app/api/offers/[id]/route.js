// app/api/offers/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validate, offerSchema } from '@/server/utils/validation';
import jwt from 'jsonwebtoken';
import { deleteFile } from '@/server/utils/fileUpload';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - تفاصيل عرض
export async function GET(req, { params }) {
    try {
        const id = parseInt(params.id);

        const offer = await prisma.offer.findUnique({
            where: { id },
            include: {
                provider: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                        coverImage: true,
                        bio: true,
                        providerType: true,
                        companyName: true,
                        specialization: true,
                        city: true,
                        governorate: true,
                        averageRating: true,
                        totalRatings: true,
                        portfolio: true
                    }
                }
            }
        });

        if (!offer) {
            return NextResponse.json(
                { error: 'العرض غير موجود' },
                { status: 404 }
            );
        }

        return NextResponse.json({ offer });

    } catch (error) {
        console.error('❌ Error in GET /api/offers/[id]:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب العرض' },
            { status: 500 }
        );
    }
}

// PUT - تحديث عرض (owner only)
export async function PUT(req, { params }) {
    try {
        const id = parseInt(params.id);

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
            select: { id: true, role: true }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        // جلب العرض
        const offer = await prisma.offer.findUnique({
            where: { id }
        });

        if (!offer) {
            return NextResponse.json(
                { error: 'العرض غير موجود' },
                { status: 404 }
            );
        }

        // التحقق من الملكية (أو صاحب الموقع)
        if (offer.providerId !== user.id && user.role !== 'siteOwner') {
            return NextResponse.json(
                { error: 'ليس لديك صلاحية لتعديل هذا العرض' },
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

        // تحديث العرض
        const updatedOffer = await prisma.offer.update({
            where: { id },
            data: {
                ...validation.data,
                ...(body.image && { image: body.image })
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

        // حذف الصورة القديمة إذا تم تغييرها
        if (body.image && body.image !== offer.image) {
            await deleteFile(offer.image);
        }

        return NextResponse.json({
            message: 'تم تحديث العرض بنجاح ✅',
            offer: updatedOffer
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in PUT /api/offers/[id]:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في تحديث العرض' },
            { status: 500 }
        );
    }
}

// DELETE - حذف عرض (owner only)
export async function DELETE(req, { params }) {
    try {
        const id = parseInt(params.id);

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
            select: { id: true, role: true }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        // جلب العرض
        const offer = await prisma.offer.findUnique({
            where: { id }
        });

        if (!offer) {
            return NextResponse.json(
                { error: 'العرض غير موجود' },
                { status: 404 }
            );
        }

        // التحقق من الملكية (أو صاحب الموقع)
        if (offer.providerId !== user.id && user.role !== 'siteOwner') {
            return NextResponse.json(
                { error: 'ليس لديك صلاحية لحذف هذا العرض' },
                { status: 403 }
            );
        }

        // حذف العرض
        await prisma.offer.delete({
            where: { id }
        });

        // حذف الصورة
        await deleteFile(offer.image);

        return NextResponse.json({
            message: 'تم حذف العرض بنجاح ✅'
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in DELETE /api/offers/[id]:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في حذف العرض' },
            { status: 500 }
        );
    }
}
