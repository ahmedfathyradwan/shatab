'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './internal.module.css';
import guideData from '../../../../data/finishingSteps';

export default function InternalGuidePage() {
  const router = useRouter();
  const [checkedSteps, setCheckedSteps] = useState([]);

  // تحميل البيانات من localStorage أول مرة
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('checkedSteps');
      if (saved) {
        setCheckedSteps(JSON.parse(saved));
      }
    }
  }, []);

  // حفظ التغيرات في localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkedSteps', JSON.stringify(checkedSteps));
    }
  }, [checkedSteps]);

  const toggleCheck = (id) => {
    setCheckedSteps((prev) =>
      prev.includes(id)
        ? prev.filter((stepId) => stepId !== id)
        : [...prev, id]
    );
  };

  const internalSteps = Array.isArray(guideData)
    ? guideData.filter((step) => step.link?.startsWith('/internal'))
    : [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>التشطيب الداخلي</h2>
      {internalSteps.map((card) => {
        const isChecked = checkedSteps.includes(card.id);

        return (
          <div
            key={card.id}
            className={styles.card}
            onClick={() =>
              router.push(`/finishChoice/freelance/guide/internal/${card.slug}`)
            }
            style={{ cursor: 'pointer' }}
          >
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
            />

            <div
              className={`${styles.cardFooter} ${
                isChecked ? styles.checked : ''
              }`}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {/* البوكس الصغير */}
              <div
                className={`${styles.checkBox} ${
                  isChecked ? styles.activeBox : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCheck(card.id);
                }}
              >
                {isChecked && <span className={styles.checkMark}>✔</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
