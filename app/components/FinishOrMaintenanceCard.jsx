'use client';

import CloseArrowIcon from './icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';
import styles from '../styles/home/FinishOrMaintenanceCard.module.css';

export default function FinishOrMaintenanceCard() {
  const router = useRouter();

  const cards = [
    {
      title: 'قسم التشطيب',
      image: '/images/finishing.jpg',
      link: '/finishChoice',
    },
    {
      title: 'قسم الصيانة',
      image: '/images/Plumbing.jpg',
      link: '/maintenance',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>إختيار الخدمة</h2>
      <h3 className={styles.description}>
        اختر بين التشطيب الكامل لشقتك
        <br />
        أو خدمات الصيانة المنزلية المتنوعة
      </h3>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <div
            className={styles.cardFooter}
            onClick={() => router.push(card.link)}
            style={{ cursor: 'pointer' }}
          >
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <button
              className={styles.arrowButton}
              onClick={(e) => {
                e.stopPropagation(); 
                router.push(card.link);
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
