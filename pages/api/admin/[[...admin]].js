import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSPrisma from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';

// Singleton Prisma Client
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

console.log('AdminJS DEBUG: Starting setupAdmin...');

const setupAdmin = async () => {
    const { Database, Resource } = AdminJSPrisma;

    console.log('AdminJS DEBUG: AdminJS keys:', Object.keys(AdminJS));
    console.log('AdminJS DEBUG: registerAdapter type:', typeof AdminJS.registerAdapter);

    try {
        AdminJS.registerAdapter({ Database, Resource });
        console.log('AdminJS DEBUG: Adapters after registration:', AdminJS.adapters?.length);
    } catch (e) {
        console.error('AdminJS DEBUG: registerAdapter FAILED:', e.message);
    }

    try {
        console.log('AdminJS DEBUG: Manually creating resource...');
        const userResource = new Resource({ model: prisma.user, client: prisma });

        const adminOptions = {
            resources: [
                {
                    resource: userResource,
                    options: {
                        navigation: { name: 'إدارة المستخدمين', icon: 'User' },
                    }
                }
            ],
            rootPath: '/admin',
        };

        const adminJs = new AdminJS(adminOptions);
        console.log('AdminJS DEBUG: Instance created successfully');

        const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
            authenticate: async (email, password) => {
                if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                    return { email };
                }
                return null;
            },
            cookiePassword: process.env.ADMIN_COOKIE_SECRET || 'some-secret-password-must-be-at-least-32-characters-long',
        }, null, {
            resave: false,
            saveUninitialized: true,
            secret: process.env.SESSION_SECRET || 'some-secret-session-key',
        });

        return { adminRouter: router };
    } catch (err) {
        console.error('AdminJS DEBUG: FAILED TO CREATE INSTANCE:', err.message);
        throw err;
    }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

export default async function handler(req, res) {
    const { adminRouter } = await setupAdmin();
    return adminRouter(req, res);
}
