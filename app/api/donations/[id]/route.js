// app/api/donations/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { notifyDonationApproved } from '@/server/utils/notifications';
import { deleteFile } from '@/server/utils/fileUpload';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// POST - اعتماد/رفض تبرع (site owner only)
export async function POST(req, { params }) {
    try {
        const id = parseInt(params.id);

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

        const { action, rejectionReason } = await req.json();

        if (!['approve', 'reject'].includes(action)) {
            return NextResponse.json(
                { error: 'إجراء غير صالح' },
                { status: 400 }
            );
        }

        const donation = await prisma.donation.findUnique({
            where: { id },
            select: { id: true, userId: true, title: true, status: true }
        });

        if (!donation) {
            return NextResponse.json(
                { error: 'التبرع غير موجود' },
                { status: 404 }
            );
        }

        if (donation.status !== 'pending') {
            return NextResponse.json(
                { error: 'تم معالجة هذا التبرع بالفعل' },
                { status: 400 }
            );
        }

        // تحديث حالة التبرع
        const updatedDonation = await prisma.donation.update({
            where: { id },
            data: {
                status: action === 'approve' ? 'approved' : 'rejected',
                ...(action === 'reject' && rejectionReason && { rejectionReason })
            }
        });

        // إرسال إشعار للمستخدم
        if (action === 'approve') {
            await notifyDonationApproved(donation.userId, donation.title);
        }

        return NextResponse.json({
            message: action === 'approve' ? 'تم اعتماد التبرع بنجاح ✅' : 'تم رفض التبرع',
            donation: updatedDonation
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/donations/[id]:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في معالجة التبرع' },
            { status: 500 }
        );
    }
}

// DELETE - حذف تبرع
export async function DELETE(req, { params }) {
    try {
        const id = parseInt(params.id);

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

        const donation = await prisma.donation.findUnique({
            where: { id }
        });

        if (!donation) {
            return NextResponse.json(
                { error: 'التبرع غير موجود' },
                { status: 404 }
            );
        }

        // التحقق من الملكية أو صاحب الموقع
        if (donation.userId !== user.id && user.role !== 'siteOwner') {
            return NextResponse.json(
                { error: 'ليس لديك صلاحية لحذف هذا التبرع' },
                { status: 403 }
            );
        }

        // حذف التبرع
        await prisma.donation.delete({
            where: { id }
        });

        // حذف الصورة
        await deleteFile(donation.image);

        return NextResponse.json({
            message: 'تم حذف التبرع بنجاح ✅'
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in DELETE /api/donations/[id]:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في حذف التبرع' },
            { status: 500 }
        );
    }
}
