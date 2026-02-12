"use client";
import React from 'react';
import styles from './maintenance.module.css';
import CloseArrowIcon from '../components/icons/CloseArrowIcon';
import { useRouter } from 'next/navigation';

const Maintenance = () => {
  const router = useRouter();

  const cards = [
    {
      title: 'نشر طلب صيانة',
      image: '/images/freelance/3.jpg',
      link: '/maintenance/maintenanceRequest',
    },
    {
      title: 'مكاتب وشركات صيانة',
      image: '/images/withcompany/1.jpg',
      link: '/maintenance/maintenanceCompanies',
    },
    {
      title: 'مقدمي خدمة مستقلين',
      image: '/images/Plumbing.jpg',
      link: '/maintenance/maintenanceTechnicians',
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>قسم الصيانة</h2>
        <p className={styles.par}>أعمال الصيانة المنزلية وصيانة الأجهزة المنزلية</p>
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

export default Maintenance;
