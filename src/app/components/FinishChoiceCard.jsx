'use client';

import CloseArrowIcon from './icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';
import styles from '../styles/home/finishChoice.module.css';

export default function FinishChoiceCard() {
  const router = useRouter();

  const cards = [
    {
      title: 'التشطيب مع شركة',
      image: '/shatab/images/withcompany.jpg',
      link: '/withcompany',
    },
    {
      title: 'التشطيب الحر',
      image: '/shatab/images/freelance.jpg',
      link: '/freelance',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>إختيار طريقة التشطيب</h2>
      <h3 className={styles.description}>
        ريح دماغك وإختار شركة تشطيب تريحك من كل التفاصيل
        <br />
        أو شطب بنفسك واختار كل حاجه في شقتك بنفسك
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
                e.stopPropagation(); // يمنع تكرار الانتقال لو تم الضغط على الزر نفسه
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
