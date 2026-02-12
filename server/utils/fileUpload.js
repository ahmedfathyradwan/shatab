// server/utils/fileUpload.js
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = process.env.UPLOAD_DIR || './public/uploads';
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = (process.env.ALLOWED_IMAGE_TYPES || 'image/jpeg,image/png,image/webp,image/jpg').split(',');

/**
 * تكوين multer للتخزين
 */
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const uploadPath = path.join(UPLOAD_DIR, 'temp');
        try {
            await fs.mkdir(uploadPath, { recursive: true });
            cb(null, uploadPath);
        } catch (error) {
            cb(error);
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

/**
 * فلتر أنواع الملفات
 */
const fileFilter = (req, file, cb) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('نوع الملف غير مسموح - يُسمح فقط بالصور'), false);
    }
};

/**
 * إعداد multer
 */
export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: MAX_FILE_SIZE,
    }
});

/**
 * معالجة وضغط الصورة
 */
export async function processImage(filePath, options = {}) {
    const {
        width = 1200,
        quality = 80,
        format = 'webp',
        createThumbnail = true,
        thumbnailWidth = 300
    } = options;

    try {
        const filename = path.basename(filePath, path.extname(filePath));
        const outputDir = path.join(UPLOAD_DIR, 'images');
        await fs.mkdir(outputDir, { recursive: true });

        // الصورة الأساسية
        const mainImagePath = path.join(outputDir, `${filename}.${format}`);
        await sharp(filePath)
            .resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .toFormat(format, { quality })
            .toFile(mainImagePath);

        let thumbnailPath = null;

        // إنشاء thumbnail
        if (createThumbnail) {
            const thumbDir = path.join(UPLOAD_DIR, 'thumbnails');
            await fs.mkdir(thumbDir, { recursive: true });
            thumbnailPath = path.join(thumbDir, `${filename}_thumb.${format}`);

            await sharp(filePath)
                .resize(thumbnailWidth, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .toFormat(format, { quality: 70 })
                .toFile(thumbnailPath);
        }

        // حذف الملف المؤقت
        await fs.unlink(filePath);

        return {
            main: `/uploads/images/${filename}.${format}`,
            thumbnail: thumbnailPath ? `/uploads/thumbnails/${filename}_thumb.${format}` : null
        };
    } catch (error) {
        console.error('❌ Error processing image:', error);
        // حذف الملف المؤقت في حالة الخطأ
        try {
            await fs.unlink(filePath);
        } catch { }
        throw new Error('فشل معالجة الصورة');
    }
}

/**
 * معالجة عدة صور
 */
export async function processMultipleImages(files, options = {}) {
    const results = [];

    for (const file of files) {
        try {
            const processed = await processImage(file.path, options);
            results.push(processed);
        } catch (error) {
            console.error(`❌ Error processing file ${file.originalname}:`, error);
            // الاستمرار في معالجة الملفات الأخرى
        }
    }

    return results;
}

/**
 * حذف ملف من السيرفر
 */
export async function deleteFile(filePath) {
    try {
        const fullPath = path.join(process.cwd(), 'public', filePath);
        await fs.unlink(fullPath);

        // محاولة حذف thumbnail إذا كان موجود
        if (filePath.includes('/images/')) {
            const thumbnailPath = filePath.replace('/images/', '/thumbnails/').replace(/\.(jpg|jpeg|png|webp)$/, '_thumb.$1');
            const fullThumbnailPath = path.join(process.cwd(), 'public', thumbnailPath);
            try {
                await fs.unlink(fullThumbnailPath);
            } catch { }
        }

        return true;
    } catch (error) {
        console.error('❌ Error deleting file:', error);
        return false;
    }
}

/**
 * حذف عدة ملفات
 */
export async function deleteMultipleFiles(filePaths) {
    const results = await Promise.allSettled(
        filePaths.map(filePath => deleteFile(filePath))
    );

    return results.map((result, index) => ({
        path: filePaths[index],
        success: result.status === 'fulfilled' && result.value
    }));
}

/**
 * التحقق من حجم الملف
 */
export function validateFileSize(size) {
    return size <= MAX_FILE_SIZE;
}

/**
 * التحقق من نوع الملف
 */
export function validateFileType(mimetype) {
    return ALLOWED_IMAGE_TYPES.includes(mimetype);
}
