"use client";
import React from 'react';
import styles from '../styles/freelance/freelance.module.css';
import CloseArrowIcon from '../components/icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';

const Freelance = () => {
  const router = useRouter();

  const cards = [
    {
      title: 'حساب التكلفة',
      image: '/images/freelance/1.jpg',
      link: '/freelance/cost',
    },
    {
      title: 'دليل التشطيب',
      image: '/images/freelance/2.jpg',
      link: '/freelance/guide',
    },
    {
      title: 'طلب تشطيب',
      image: '/images/freelance/3.jpg',
      link: '/freelance/tpost',
    },
    {
      title: 'مقاولون',
      image: '/images/freelance/4.jpg',
      link: '/freelance/contractors',
    },
    {
      title: 'شركات صيانة',
      image: '/images/freelance/5.jpg',
      link: '/freelance/maintenance',
    },
    {
      title: 'فنيين',
      image: '/images/freelance/6.jpg',
      link: '/freelance/technicians',
    },
    {
      title: 'المعارض',
      image: '/images/freelance/7.jpg',
      link: '/freelance/suppliers',
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>التشطيب الحر</h2>
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
      </div>
      <div className={styles.marginBottom}></div>
    </>
  );
};

export default Freelance;
