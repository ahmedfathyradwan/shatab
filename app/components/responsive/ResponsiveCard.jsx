// app/components/responsive/ResponsiveCard.jsx
'use client';

/**
 * بطاقة متجاوبة مع تأثيرات hover
 * @param {boolean} hover - تفعيل تأثير hover
 * @param {string} variant - 'default' | 'outlined' | 'elevated'
 */
export default function ResponsiveCard({
    children,
    hover = true,
    variant = 'default',
    className = ''
}) {
    const variants = {
        default: 'card',
        outlined: 'card shadow-none',
        elevated: 'card shadow-lg'
    };

    const hoverClass = hover ? 'hover-lift transition' : '';

    return (
        <div className={`${variants[variant]} ${hoverClass} ${className}`}>
            {children}
        </div>
    );
}
