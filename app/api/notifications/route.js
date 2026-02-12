// app/api/notifications/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { markAsRead, markAllAsRead } from '@/server/utils/notifications';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// GET - قائمة إشعارات المستخدم
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
        const { searchParams } = new URL(req.url);
        const unreadOnly = searchParams.get('unreadOnly') === 'true';
        const limit = parseInt(searchParams.get('limit')) || 50;

        const where = {
            userId: decoded.id,
            ...(unreadOnly && { isRead: false })
        };

        const [notifications, unreadCount] = await Promise.all([
            prisma.notification.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit
            }),
            prisma.notification.count({
                where: { userId: decoded.id, isRead: false }
            })
        ]);

        return NextResponse.json({
            notifications,
            unreadCount
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in GET /api/notifications:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في جلب الإشعارات' },
            { status: 500 }
        );
    }
}

// PUT - تحديث حالة الإشعارات
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
        const { notificationId, markAll } = await req.json();

        if (markAll) {
            await markAllAsRead(decoded.id);
            return NextResponse.json({
                message: 'تم تحديث جميع الإشعارات ✅'
            });
        }

        if (notificationId) {
            await markAsRead(notificationId, decoded.id);
            return NextResponse.json({
                message: 'تم تحديث الإشعار ✅'
            });
        }

        return NextResponse.json(
            { error: 'يجب تحديد notificationId أو markAll' },
            { status: 400 }
        );

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in PUT /api/notifications:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في تحديث الإشعارات' },
            { status: 500 }
        );
    }
}
