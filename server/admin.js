// server/admin.js
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/prisma';
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

// 1️⃣ سجل adapter الخاص بـ Prisma
AdminJS.registerAdapter({ Database, Resource });

// 2️⃣ إعداد AdminJS
const adminJs = new AdminJS({
  resources: [
    { resource: prisma.client },
    { resource: prisma.serviceProvider },
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'Shatab Dashboard',
  },
});

// 3️⃣ إعداد Express router للـ AdminJS
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

// 4️⃣ إعداد السيرفر
const app = express();
app.use(adminJs.options.rootPath, router);

const PORT = process.env.ADMIN_PORT || 3001;
app.listen(PORT, () => {
  console.log(`AdminJS running on http://localhost:${PORT}${adminJs.options.rootPath}`);
});
