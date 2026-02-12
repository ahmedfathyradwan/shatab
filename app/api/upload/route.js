// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { upload, processImage, processMultipleImages } from '@/server/utils/fileUpload';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'supersecret';

// Next.js Route Segment Config
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req) {
    try {
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
            select: { id: true, isActive: true, isBanned: true }
        });

        if (!user || user.isBanned || !user.isActive) {
            return NextResponse.json(
                { error: 'غير مصرح' },
                { status: 403 }
            );
        }

        // الحصول على FormData
        const formData = await req.formData();
        const files = formData.getAll('files');
        const single = formData.get('file');

        if (!files.length && !single) {
            return NextResponse.json(
                { error: 'لم يتم رفع أي ملفات' },
                { status: 400 }
            );
        }

        // معالجة ملف واحد
        if (single) {
            const buffer = Buffer.from(await single.arrayBuffer());
            const tempPath = `./public/uploads/temp/${Date.now()}-${single.name}`;

            await fs.writeFile(tempPath, buffer);
            const processed = await processImage(tempPath);

            return NextResponse.json({
                message: 'تم رفع الملف بنجاح ✅',
                file: processed
            });
        }

        // معالجة عدة ملفات
        const uploadedFiles = [];
        for (const file of files) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const tempPath = `./public/uploads/temp/${Date.now()}-${file.name}`;

            await fs.writeFile(tempPath, buffer);
            uploadedFiles.push({ path: tempPath });
        }

        const processed = await processMultipleImages(uploadedFiles);

        return NextResponse.json({
            message: 'تم رفع الملفات بنجاح ✅',
            files: processed
        });

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return NextResponse.json(
                { error: 'جلسة غير صالحة' },
                { status: 401 }
            );
        }
        console.error('❌ Error in POST /api/upload:', error);
        return NextResponse.json(
            { error: 'حدث خطأ في رفع الملفات' },
            { status: 500 }
        );
    }
}
