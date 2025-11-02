import guideData from '../../../../../data/finishingStepsDetails.js';
import ClientPage from './client-page.jsx';

export const dynamicParams = true;

export async function generateStaticParams() {
  return guideData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;

  const { slug } = resolvedParams;

  console.log('🔹 params:', resolvedParams);
  console.log('🔹 guideData:', guideData);

  const step = guideData.find((item) => item.slug === slug);

  if (!step) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        المرحلة غير موجودة
      </div>
    );
  }

  return <ClientPage step={step} />;
}
