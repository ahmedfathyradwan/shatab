'use client';

import CloseArrowIcon from '../../../components/icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';
import styles from './internal.module.css';
import guideData from '../../../data/finishingSteps';

export default function InternalGuidePage() {
  const router = useRouter();

  // فلترة المراحل الداخلية فقط
  const internalSteps = Array.isArray(guideData)
    ? guideData.filter((step) => step.link?.startsWith('/internal'))
    : [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>التشطيب الداخلي</h2>
      {internalSteps.map((card) => (
        <div
          key={card.id}
          className={styles.card}
          onClick={() =>
            router.push(`/freelance/guide/internal/${card.slug}`)
          }
          style={{ cursor: 'pointer' }}
        >
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <div className={styles.cardFooter}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <button
              className={styles.arrowButton}
              onClick={(e) => {
                e.stopPropagation(); // عشان ما يشغلش حدث الكارت
                router.push(`/freelance/guide/internal/${card.slug}`);
              }}
            >
              <CloseArrowIcon className={styles.icon} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}