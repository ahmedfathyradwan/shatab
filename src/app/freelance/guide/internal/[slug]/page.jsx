'use client';

import { useParams } from 'next/navigation';
import guideData from '../../../../data/finishingStepsDetails.js';
import styles from './slug.module.css';

// دالة لتحويل أي لينك يوتيوب/فيميو لرابط embed
const getEmbedUrl = (url) => {
  if (!url) return '';

  try {
    const u = new URL(url);

    // YouTube
    if (u.hostname.includes('youtube.com')) {
      // watch?v=...
      if (u.pathname === '/watch') {
        const id = u.searchParams.get('v');
        const list = u.searchParams.get('list');
        return `https://www.youtube.com/embed/${id}${list ? `?list=${list}` : ''}`;
      }
      // shorts
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/')[2];
        return `https://www.youtube.com/embed/${id}`;
      }
      // embed جاهز
      if (u.pathname.startsWith('/embed/')) return url;
    }

    // youtu.be
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }

    // Vimeo
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0];
      return `https://player.vimeo.com/video/${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

export default function StepDetailsPage() {
  const { slug } = useParams();
  const step = guideData.find((item) => item.slug === slug);

  if (!step) {
    return <div className={styles.notFound}>المرحلة غير موجودة</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{step.title}</h1>

      <div className={styles.imageCont}>
        <img
          src={step.image}
          alt={step.title}
          className={styles.image}
        />
      </div>

      <div className={styles.textCont}>
        <div className={styles.section}>
          <h3 className={styles.subTitle}>المطلوب تنفيذه في هذه المرحلة :</h3>
          <p className={styles.text}>{step.tasks}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>متوسط وقت التنفيذ (لشقة 100م) :</h3>
          <p className={styles.text}>{step.averageTime}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>متوسط السعر الحالي :</h3>
          <p className={styles.text}>{step.averageCost}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>ملاحظات وتنبيهات هامة :</h3>
          <p className={styles.text}>{step.notes}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>طريقة التأكد من جودة التنفيذ :</h3>
          <p className={styles.text}>{step.qualityCheck}</p>
        </div>
        {step.videoUrls && step.videoUrls.length > 0 && (
        <div>
          <h3 className={styles.subTitle2}>فيديوهات متعلقة بالمرحلة :</h3>
          {step.videoUrls.map((url, index) => (
            <div key={index} className={styles.videoWrapper}>
              <iframe
                src={getEmbedUrl(url)}
                title={`${step.title} - فيديو ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
