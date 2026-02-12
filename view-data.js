// Script to view database data
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('./prisma/generated/sqlite-client');

const prisma = new PrismaClient();

async function viewData() {
    try {
        console.log('📊 عرض البيانات من قاعدة البيانات\n');

        // عرض المستخدمين
        const users = await prisma.User.findMany({
            select: {
                id: true,
                fullName: true,
                phone: true,
                email: true,
                role: true,
                providerType: true,
                isVerified: true,
                isActive: true,
                createdAt: true
            }
        });

        console.log('👥 المستخدمين المسجلين:', users.length);
        console.log('─'.repeat(80));
        users.forEach(user => {
            console.log(`
ID: ${user.id}
الاسم: ${user.fullName}
الهاتف: ${user.phone}
البريد: ${user.email || 'غير محدد'}
الدور: ${user.role}
نوع المزود: ${user.providerType || 'غير محدد'}
مفعل: ${user.isVerified ? '✅' : '❌'}
نشط: ${user.isActive ? '✅' : '❌'}
تاريخ التسجيل: ${user.createdAt.toLocaleString('ar-EG')}
${'─'.repeat(80)}`);
        });

        // عرض العروض
        const offers = await prisma.Offer.findMany({
            include: {
                provider: {
                    select: {
                        fullName: true,
                        phone: true
                    }
                }
            }
        });

        console.log(`\n🎁 العروض المتاحة: ${offers.length}`);
        console.log('─'.repeat(80));
        offers.forEach(offer => {
            console.log(`
ID: ${offer.id}
العنوان: ${offer.title}
السعر: ${offer.price || 'غير محدد'}
الخصم: ${offer.discount || 0}%
الحالة: ${offer.status}
مقدم الخدمة: ${offer.provider.fullName} (${offer.provider.phone})
${'─'.repeat(80)}`);
        });

        // عرض طلبات التشطيب
        const finishingRequests = await prisma.FinishingRequest.findMany({
            include: {
                client: {
                    select: {
                        fullName: true,
                        phone: true
                    }
                }
            }
        });

        console.log(`\n🏗️ طلبات التشطيب: ${finishingRequests.length}`);
        console.log('─'.repeat(80));
        finishingRequests.forEach(req => {
            console.log(`
ID: ${req.id}
العنوان: ${req.title}
الميزانية: ${req.budget || 'غير محددة'}
الموقع: ${req.location}
المدينة: ${req.city}
الحالة: ${req.status}
العميل: ${req.client.fullName} (${req.client.phone})
${'─'.repeat(80)}`);
        });

        // عرض التبرعات
        const donations = await prisma.Donation.findMany({
            include: {
                user: {
                    select: {
                        fullName: true,
                        phone: true
                    }
                }
            }
        });

        console.log(`\n💝 التبرعات: ${donations.length}`);
        console.log('─'.repeat(80));
        donations.forEach(donation => {
            console.log(`
ID: ${donation.id}
العنوان: ${donation.title}
الحالة: ${donation.status}
المستخدم: ${donation.user.fullName} (${donation.user.phone})
${'─'.repeat(80)}`);
        });

        // إحصائيات عامة
        console.log('\n📈 إحصائيات عامة:');
        console.log('═'.repeat(80));
        console.log(`إجمالي المستخدمين: ${users.length}`);
        console.log(`العملاء: ${users.filter(u => u.role === 'client').length}`);
        console.log(`مقدمي الخدمات: ${users.filter(u => u.role === 'serviceProvider').length}`);
        console.log(`المستخدمين المفعلين: ${users.filter(u => u.isVerified).length}`);
        console.log(`إجمالي العروض: ${offers.length}`);
        console.log(`طلبات التشطيب: ${finishingRequests.length}`);
        console.log(`التبرعات: ${donations.length}`);
        console.log('═'.repeat(80));

    } catch (error) {
        console.error('❌ خطأ في قراءة البيانات:', error);
    } finally {
        await prisma.$disconnect();
    }
}

viewData();
