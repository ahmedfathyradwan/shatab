'use client';

import { useParams } from 'next/navigation';
import guideData from '../../../../data/finishingStepsDetails.js';
import styles from './slug.module.css';

// دالة لتحويل رابط يوتيوب لرابط embed
const getEmbedUrl = (url) => {
  if (!url) return '';
  if (url.includes('watch?v=')) {
    return url.replace('watch?v=', 'embed/');
  }
  if (url.includes('youtu.be/')) {
    return url.replace('youtu.be/', 'www.youtube.com/embed/');
  }
  return url; // لو أصلاً embed أو نوع تاني من الفيديو
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
          <h3 className={styles.subTitle}>المطلوب تنفيذه :</h3>
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
      </div>

      {step.videoUrls && step.videoUrls.length > 0 && (
        <>
          <h3 className={styles.subTitle2}>محتوى خاص بالمرحلة</h3>
          {step.videoUrls.map((url, index) => (
            <div key={index} className={styles.videoWrapper}>
              <iframe
                src={getEmbedUrl(url)}
                title={`${step.title} - فيديو ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
