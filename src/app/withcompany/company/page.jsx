'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import companies from '../../data/companies';
import styles from './company.module.css';

export default function CompanyPage() {
  const companyTypes = [
    "مكتب إشراف",
    "شركة إشراف",
    "مكتب تنفيذ",
    "شركة تنفيذ",
    "مكتب مقاولات",
    "شركة مقاولات",
    "مكتب تصميم داخلي",
    "شركة تصميم داخلي",
    "مكتب تشطيب",
    "شركة تشطيب",
    "مكتب تصميم وتشطيب",
    "شركة تصميم وتشطيب",
    "مكتب صيانة",
    "شركة صيانة"
  ];

  const [selectedType, setSelectedType] = useState('');

  // 🔹 تصفية الشركات حسب التخصص المختار
  const filteredCompanies = selectedType
    ? companies.filter((c) => c.specialty.includes(selectedType))
    : companies;

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>الشركات المتاحة</h1>
        <p className={styles.lead}>قائمة مختصرة بالشركات المتوفرة على الموقع</p>
      </header>

      {/* 🔹 فلتر اختيار نوع الشركة */}
      <div className={styles.filterBox}>
        <label htmlFor="filter" className={styles.filterLabel}>
          اختر نوع الشركة
        </label>
        <select
          id="filter"
          className={styles.select}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">الكل</option>
          {companyTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 عرض النتائج */}
      <main className={styles.grid}>
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.logoWrap}>
                <img
                  src={c.image}
                  alt={`${c.name} logo`}
                  className={styles.logo}
                />
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
                      <a
                        href={`tel:${c.phone}`}
                        className={`${styles.button} ${styles.callBtn}`}
                      >
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
                  <Link href={`/companies/${c.id}`} className={styles.button}>
                    تفاصيل أكتر
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.noResults}>لا توجد شركات بهذا النوع.</p>
        )}
      </main>

      <footer className={styles.footer}>
        عرض تجريبي — الصور افتراضية (logo.png)
      </footer>
    </div>
  );
}
