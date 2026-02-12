// app/components/responsive/examples/ProductsPage.jsx
'use client';
import {
    ResponsiveContainer,
    ResponsiveGrid,
    ResponsiveCard,
    ResponsiveImage,
    ResponsiveSection
} from '../index';

/**
 * مثال: صفحة منتجات متجاوبة بالكامل
 */
export default function ProductsPageExample() {
    const products = [
        { id: 1, name: 'منتج 1', price: '500 جنيه', image: '/products/1.jpg' },
        { id: 2, name: 'منتج 2', price: '750 جنيه', image: '/products/2.jpg' },
        { id: 3, name: 'منتج 3', price: '1000 جنيه', image: '/products/3.jpg' },
        { id: 4, name: 'منتج 4', price: '1250 جنيه', image: '/products/4.jpg' },
    ];

    return (
        <>
            {/* Hero Section */}
            <ResponsiveSection bg="secondary" spacing="lg">
                <ResponsiveContainer>
                    <div className="text-center">
                        <h1 className="mb-3">العروض المميزة</h1>
                        <p className="body">اكتشف أفضل العروض على منصة شطبها</p>
                    </div>
                </ResponsiveContainer>
            </ResponsiveSection>

            {/* Products Grid */}
            <ResponsiveSection spacing="md">
                <ResponsiveContainer>
                    <ResponsiveGrid cols={1} sm={2} md={3} lg={4} gap="3">
                        {products.map(product => (
                            <ResponsiveCard key={product.id} hover>
                                <ResponsiveImage
                                    src={product.image}
                                    alt={product.name}
                                    aspectRatio="square"
                                    fit="cover"
                                    className="rounded mb-2"
                                />
                                <h3 className="h4">{product.name}</h3>
                                <p className="small text-primaryColor font-bold">{product.price}</p>
                                <button className="btn btn-primary w-full mt-2">
                                    اشتري الآن
                                </button>
                            </ResponsiveCard>
                        ))}
                    </ResponsiveGrid>
                </ResponsiveContainer>
            </ResponsiveSection>
        </>
    );
}
