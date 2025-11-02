import ClientPage from './client-page';

// حدد الأنواع المتوقعة هنا
const validTypes = ['projects', 'messages', 'settings']; // استبدل هذه بالقيم الفعلية

export async function generateStaticParams() {
  return validTypes.map((type) => ({
    type,
  }));
}

export default function Page({ params }) {
  return <ClientPage type={params.type} />;
}