"use client";
import React from 'react';
import styles from '../../styles/withcompany/withcompany.module.css';
import CloseArrowIcon from '../../components/icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';

const withcompany = () => {
  const router = useRouter();
  
  const cards = [
    {
      title: 'نشر طلب تشطيب',
      image: '/images/freelance/3.jpg',
      link: '/finishChoice/freelance/finishingRequest',
    },
    {
      title: 'مكاتب وشركات تشطيب',
      image: '/images/withcompany/1.jpg',
      link: '/finishChoice/withcompany/company',
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>التشطيب مع شركة</h2>
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <div
                className={styles.cardFooter}
                onClick={() => router.push(card.link)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{card.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(card.link);
                  }}
                  className={styles.arrowButton}
                >
                  <CloseArrowIcon className={styles.icon} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.marginBottom}></div>
    </>
  );
};

export default withcompany;
