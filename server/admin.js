// server/admin.js
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/prisma';
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

// Register Prisma adapter
AdminJS.registerAdapter({ Database, Resource });

// Configure AdminJS
const adminJs = new AdminJS({
  resources: [
    {
      resource: { model: prisma.user, client: prisma },
      options: {
        navigation: { name: 'إدارة المستخدمين', icon: 'User' },
        properties: {
          password: { isVisible: false },
          otp: { isVisible: { list: false, filter: false, show: true, edit: false } }
        }
      }
    },
    {
      resource: { model: prisma.offer, client: prisma },
      options: {
        navigation: { name: 'العروض', icon: 'Tag' }
      }
    },
    {
      resource: { model: prisma.finishingRequest, client: prisma },
      options: {
        navigation: { name: 'طلبات التشطيب', icon: 'Home' }
      }
    },
    {
      resource: { model: prisma.proposal, client: prisma },
      options: {
        navigation: { name: 'عروض الأسعار', icon: 'FileText' }
      }
    },
    {
      resource: { model: prisma.maintenanceRequest, client: prisma },
      options: {
        navigation: { name: 'طلبات الصيانة', icon: 'Tool' }
      }
    },
    {
      resource: { model: prisma.rating, client: prisma },
      options: {
        navigation: { name: 'التقييمات', icon: 'Star' }
      }
    },
    {
      resource: { model: prisma.donation, client: prisma },
      options: {
        navigation: { name: 'التبرعات', icon: 'Heart' }
      }
    },
    {
      resource: { model: prisma.onlineService, client: prisma },
      options: {
        navigation: { name: 'الخدمات الأونلاين', icon: 'Globe' }
      }
    },
    {
      resource: { model: prisma.staticContent, client: prisma },
      options: {
        navigation: { name: 'المحتوى الثابت', icon: 'FileText' }
      }
    },
    {
      resource: { model: prisma.notification, client: prisma },
      options: {
        navigation: { name: 'الإشعارات', icon: 'Bell' }
      }
    },
    {
      resource: { model: prisma.message, client: prisma },
      options: {
        navigation: { name: 'الرسائل', icon: 'Mail' }
      }
    }
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'لوحة تحكم شطبها',
    logo: false,
    withMadeWithLove: false
  },
  locale: {
    language: 'ar',
    translations: {
      labels: {
        navigation: 'القائمة الرئيسية'
      }
    }
  }
});

// Setup Express router for AdminJS
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return { email };
    }
    return null;
  },
  cookiePassword: process.env.ADMIN_COOKIE_SECRET,
});

// Setup server
const app = express();
app.use(adminJs.options.rootPath, router);

const PORT = process.env.ADMIN_PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ AdminJS running on http://localhost:${PORT}${adminJs.options.rootPath}`);
});
