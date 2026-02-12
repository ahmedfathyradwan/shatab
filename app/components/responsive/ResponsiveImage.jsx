// app/components/responsive/ResponsiveImage.jsx
'use client';
import Image from 'next/image';

/**
 * صورة متجاوبة مع lazy loading
 * @param {string} src - مصدر الصورة
 * @param {string} alt - نص بديل
 * @param {string} fit - 'cover' | 'contain' | 'responsive'
 * @param {string} aspectRatio - 'square' | 'video' | '4-3'
 */
export default function ResponsiveImage({
    src,
    alt,
    fit = 'cover',
    aspectRatio,
    width = 800,
    height = 600,
    priority = false,
    className = ''
}) {
    const fitClasses = {
        cover: 'img-cover',
        contain: 'img-contain',
        responsive: 'img-responsive'
    };

    const aspectClasses = {
        square: 'aspect-square',
        video: 'aspect-video',
        '4-3': 'aspect-4-3'
    };

    const classes = [
        fitClasses[fit],
        aspectRatio && aspectClasses[aspectRatio],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className={fitClasses[fit]}
            />
        </div>
    );
}
