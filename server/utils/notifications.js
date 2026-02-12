// server/utils/notifications.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * إنشاء إشعار جديد
 */
export async function createNotification({ userId, type, title, message, link = null }) {
    try {
        const notification = await prisma.notification.create({
            data: {
                userId,
                type,
                title,
                message,
                link
            }
        });
        return notification;
    } catch (error) {
        console.error('❌ Error creating notification:', error);
        return null;
    }
}

/**
 * إشعار عند استلام عرض سعر جديد
 */
export async function notifyNewProposal(requestOwnerId, proposalId, providerName) {
    return createNotification({
        userId: requestOwnerId,
        type: 'newProposal',
        title: 'عرض سعر جديد',
        message: `تلقيت عرض سعر جديد من ${providerName}`,
        link: `/finishing/requests/${proposalId}`
    });
}

/**
 * إشعار عند قبول عرض السعر
 */
export async function notifyProposalAccepted(providerId, requestTitle) {
    return createNotification({
        userId: providerId,
        type: 'proposalAccepted',
        title: 'تم قبول عرضك',
        message: `تم قبول عرض السعر الخاص بك على "${requestTitle}"`,
        link: `/profile/proposals`
    });
}

/**
 * إشعار عند رفض عرض السعر
 */
export async function notifyProposalRejected(providerId, requestTitle) {
    return createNotification({
        userId: providerId,
        type: 'proposalRejected',
        title: 'تم رفض عرضك',
        message: `تم رفض عرض السعر الخاص بك على "${requestTitle}"`,
        link: `/profile/proposals`
    });
}

/**
 * إشعار عند استلام تقييم جديد
 */
export async function notifyNewRating(providerId, clientName, rating) {
    return createNotification({
        userId: providerId,
        type: 'newRating',
        title: 'تقييم جديد',
        message: `تلقيت تقييم ${rating} نجوم من ${clientName}`,
        link: `/profile/ratings`
    });
}

/**
 * إشعار عند اعتماد تبرع
 */
export async function notifyDonationApproved(userId, donationTitle) {
    return createNotification({
        userId,
        type: 'donationApproved',
        title: 'تم اعتماد تبرعك',
        message: `تم اعتماد تبرعك "${donationTitle}" ونشره على الموقع`,
        link: `/donations`
    });
}

/**
 * إشعار عام
 */
export async function notifyGeneral(userId, title, message, link = null) {
    return createNotification({
        userId,
        type: 'general',
        title,
        message,
        link
    });
}

/**
 * إرسال إشعار لعدة مستخدمين
 */
export async function notifyMultipleUsers(userIds, { type, title, message, link = null }) {
    try {
        const notifications = userIds.map(userId => ({
            userId,
            type,
            title,
            message,
            link
        }));

        await prisma.notification.createMany({
            data: notifications
        });

        return true;
    } catch (error) {
        console.error('❌ Error creating multiple notifications:', error);
        return false;
    }
}

/**
 * تحديث حالة الإشعار إلى مقروء
 */
export async function markAsRead(notificationId, userId) {
    try {
        await prisma.notification.updateMany({
            where: {
                id: notificationId,
                userId
            },
            data: {
                isRead: true
            }
        });
        return true;
    } catch (error) {
        console.error('❌ Error marking notification as read:', error);
        return false;
    }
}

/**
 * تحديث جميع الإشعارات إلى مقروءة
 */
export async function markAllAsRead(userId) {
    try {
        await prisma.notification.updateMany({
            where: {
                userId,
                isRead: false
            },
            data: {
                isRead: true
            }
        });
        return true;
    } catch (error) {
        console.error('❌ Error marking all notifications as read:', error);
        return false;
    }
}

/**
 * حذف الإشعارات القديمة (أكثر من 30 يوم)
 */
export async function cleanOldNotifications() {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const result = await prisma.notification.deleteMany({
            where: {
                createdAt: {
                    lt: thirtyDaysAgo
                },
                isRead: true
            }
        });

        console.log(`✅ Deleted ${result.count} old notifications`);
        return result.count;
    } catch (error) {
        console.error('❌ Error cleaning old notifications:', error);
        return 0;
    }
}
