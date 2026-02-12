// app/components/responsive/ResponsiveSection.jsx
'use client';

/**
 * Section متجاوب مع padding تلقائي
 * @param {string} bg - لون الخلفية
 * @param {string} spacing - 'sm' | 'md' | 'lg'
 */
export default function ResponsiveSection({
    children,
    bg = 'transparent',
    spacing = 'md',
    className = ''
}) {
    const spacings = {
        sm: 'py-8 md:py-12',
        md: 'section',
        lg: 'py-12 md:py-20 lg:py-32'
    };

    const bgColors = {
        transparent: 'bg-transparent',
        white: 'bg-white',
        primary: 'bg-primaryColor',
        secondary: 'bg-backgroundColor'
    };

    return (
        <section
            className={`${spacings[spacing]} ${bgColors[bg] || bg} ${className}`}
        >
            {children}
        </section>
    );
}
