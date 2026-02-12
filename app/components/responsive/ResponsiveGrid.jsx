// app/components/responsive/ResponsiveGrid.jsx
'use client';

/**
 * Grid متجاوب مع تحكم كامل في عدد الأعمدة لكل breakpoint
 * @param {number} cols - عدد الأعمدة الافتراضي (موبايل)
 * @param {number} sm - عدد الأعمدة على 430px+
 * @param {number} md - عدد الأعمدة على 768px+
 * @param {number} lg - عدد الأعمدة على 1024px+
 * @param {number} xl - عدد الأعمدة على 1280px+
 * @param {string} gap - حجم الفجوة (1-4)
 */
export default function ResponsiveGrid({
    children,
    cols = 1,
    sm,
    md,
    lg,
    xl,
    gap = '3',
    className = ''
}) {
    const classes = [
        'grid',
        `gap-${gap}`,
        sm && `grid-${sm}-cols-sm`,
        md && `grid-${md}-cols-md`,
        lg && `grid-${lg}-cols-lg`,
        xl && `grid-${xl}-cols-xl`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

// مثال الاستخدام:
// <ResponsiveGrid cols={1} sm={2} md={3} lg={4} gap="3">
//   <Card />
//   <Card />
//   <Card />
// </ResponsiveGrid>
