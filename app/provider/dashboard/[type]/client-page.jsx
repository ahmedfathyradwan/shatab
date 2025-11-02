'use client';

import { useParams } from 'next/navigation';

export default function ClientPage({ type }) {
  const { type: typeFromParams } = useParams(); // استخدام مزدوج للباراميترات
  
  // استخدم type أو typeFromParams حسب احتياجك
  const currentType = type || typeFromParams;

  return (
    <div>
      <h1>لوحة التحكم - {currentType}</h1>
      {/* محتوى الصفحة حسب النوع */}
      {currentType === 'projects' && <div>مشاريعك</div>}
      {currentType === 'messages' && <div>الرسائل</div>}
      {currentType === 'settings' && <div>الإعدادات</div>}
    </div>
  );
}