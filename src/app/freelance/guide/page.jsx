'use client';
import CloseArrowIcon from '../../components/icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';
import styles from './guide.module.css';

export default function FinishTypeChoiceCard() {
  const router = useRouter();

  const cards = [
    {
      title: 'التشطيب الداخلي',
      image: '/images/guide/internal.jpg',
      link: '/freelance/guide/internal',
    },
    {
      title: 'تشطيب الواجهات',
      image: '/images/guide/external.jpg',
      link: '/freelance/guide/external',
    },
    {
      title: 'المساحات المفتوحة',
      image: '/images/guide/open-spaces.jpg',
      link: '/freelance/guide/openSpaces',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>إختيار نوع التشطيب</h2>
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