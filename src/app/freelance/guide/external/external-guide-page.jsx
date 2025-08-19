'use client';
// app/freelance/guide/external/external-guide-page.jsx
import { useRouter } from 'next/navigation';

export default function ExternalGuidePage({ guide }) {
  const router = useRouter();

  // معالجة التفاعلات هنا
  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>{guide.title}</h1>
      <p>{guide.content}</p>
      <button onClick={handleBack}>العودة</button>
    </div>
  );
}