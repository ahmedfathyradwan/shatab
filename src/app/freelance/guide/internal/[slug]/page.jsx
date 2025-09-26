import guideData from '../../../../data/finishingStepsDetails.js';
import ClientPage from './client-page';

export async function generateStaticParams() {
  return guideData.map((item) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }) {
  const { slug } = params;
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