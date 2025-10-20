'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import freelancers from '../../data/freelancer';
import freelancerTypes from '../../data/freelancerTypes'; // ملف التخصصات
import styles from './technicians.module.css';

export default function TechniciansPage() {
  const [selectedType, setSelectedType] = useState('');

  // فلترة الفنيين حسب التخصص المختار
  const filteredFreelancers = selectedType
    ? freelancers.filter((f) => f.specialty.includes(selectedType))
    : freelancers;

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>الفنيين المتاحين</h1>
        <p className={styles.lead}>قائمة مختصرة بالفنيين والخبراء المتوفرين على الموقع</p>

        {/* قائمة اختيار التخصص */}
        <div className={styles.filterBox}>
          <label htmlFor="filter" className={styles.filterLabel}>
            اختر التخصص:
          </label>
          <select
            id="filter"
            className={styles.select}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">الكل</option>
            {freelancerTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className={styles.grid}>
        {filteredFreelancers.length > 0 ? (
          filteredFreelancers.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.logoWrap}>
                <img src={c.image} alt={`${c.name} logo`} className={styles.logo} />
              </div>

              <div className={styles.body}>
                <h2 className={styles.name}>{c.name}</h2>
                <p className={styles.specialty}>{c.specialty}</p>

                <div className={styles.row}>
                  <strong>العنوان:</strong> <span>{c.address}</span>
                </div>

                <p className={styles.price}>
                  💰 <strong>متوسط السعر:</strong> {c.averagePrice}
                </p>

                {c.images && c.images.length > 0 && (
                  <div className={styles.gallery}>
                    {c.images.slice(0, 5).map((img, i) => (
                      <img key={i} src={img} alt={`${c.name} photo ${i + 1}`} />
                    ))}
                  </div>
                )}

                <div className={styles.meta}>
                  <div className={styles.row}>
                    <strong>التليفون:</strong>
                    <div className={styles.btnGroup}>
                      <a href={`tel:${c.phone}`} className={`${styles.button} ${styles.callBtn}`}>
                        📞 اتصال
                      </a>
                      <a
                        href={`https://wa.me/${c.phone.replace(/^0/, '2')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.whatsappBtn}`}
                      >
                        💬 واتساب
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.actions}>
                  <Link href={`/technicians/${c.id}`} className={styles.button}>
                    تفاصيل أكتر
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.noResults}>لا يوجد فنيين بهذا التخصص حالياً</p>
        )}
      </main>

      <footer className={styles.footer}>عرض تجريبي — الصور افتراضية (logo.png)</footer>
    </div>
  );
}
