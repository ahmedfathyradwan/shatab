// app/components/responsive/ResponsiveContainer.jsx
'use client';

/**
 * Container متجاوب مع خيارات متعددة
 * @param {string} variant - 'default' | 'fluid' | 'narrow' | 'wide'
 * @param {string} className - classes إضافية
 */
export default function ResponsiveContainer({
    children,
    variant = 'default',
    className = ''
}) {
    const variants = {
        default: 'container',
        fluid: 'container-fluid',
        narrow: 'container max-w-md',
        wide: 'container max-w-xl'
    };

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}
