// app/components/responsive/examples/DashboardLayout.jsx
'use client';
import { ResponsiveContainer } from '../index';

/**
 * مثال: تخطيط Dashboard متجاوب
 */
export default function DashboardLayoutExample({ children }) {
    return (
        <div className="min-h-screen bg-backgroundColor">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <ResponsiveContainer>
                    <div className="flex justify-between align-center py-4">
                        <h2 className="h3 m-0">لوحة التحكم</h2>
                        <div className="flex align-center gap-2">
                            <button className="btn btn-primary d-none d-md-flex">
                                إضافة جديد
                            </button>
                            <div className="w-10 h-10 rounded-full bg-primaryColor"></div>
                        </div>
                    </div>
                </ResponsiveContainer>
            </header>

            {/* Main Content */}
            <ResponsiveContainer>
                <div className="sidebar-layout py-6">
                    {/* Sidebar - يظهر فقط على الشاشات الكبيرة */}
                    <aside className="d-none d-lg-block">
                        <nav className="card sticky top-24">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a href="#" className="flex align-center gap-2 p-3 rounded hover-opacity transition">
                                        <span>📊</span>
                                        <span>الإحصائيات</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex align-center gap-2 p-3 rounded hover-opacity transition">
                                        <span>📦</span>
                                        <span>المنتجات</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex align-center gap-2 p-3 rounded hover-opacity transition">
                                        <span>👥</span>
                                        <span>العملاء</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex align-center gap-2 p-3 rounded hover-opacity transition">
                                        <span>⚙️</span>
                                        <span>الإعدادات</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main>
                        {children}
                    </main>
                </div>
            </ResponsiveContainer>

            {/* Mobile Bottom Navigation */}
            <nav className="mobNav d-lg-none">
                <div className="flex justify-around align-center bg-white rounded-full shadow-lg p-2 max-w-md mx-auto">
                    <a href="#" className="flex flex-col align-center gap-1 p-2">
                        <span>📊</span>
                        <span className="small">الرئيسية</span>
                    </a>
                    <a href="#" className="flex flex-col align-center gap-1 p-2">
                        <span>📦</span>
                        <span className="small">المنتجات</span>
                    </a>
                    <a href="#" className="flex flex-col align-center gap-1 p-2">
                        <span>👥</span>
                        <span className="small">العملاء</span>
                    </a>
                    <a href="#" className="flex flex-col align-center gap-1 p-2">
                        <span>⚙️</span>
                        <span className="small">المزيد</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}
