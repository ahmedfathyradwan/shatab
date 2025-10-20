'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import suppliers from '../../data/suppliers';
import styles from './suppliers.module.css';

export default function SuppliersPage() {
  // 🏷️ أنواع المعارض للفلتر
  const storeTypes = [
    "معرض خامات بناء وتشطيب",
    "معرض أدوات سباكة",
    "معرض أدوات كهربائية وإضاءة",
    "معرض أدوات صحية",
    "معرض أبواب وشبابيك",
    "معرض أثاث منزلي",
    "معرض حديد وبويات",
    "معرض سيراميك وبورسلين",
    "معرض زجاج",
    "معرض مطابخ خشب",
    "معرض مطابخ ألوميتال",
    "معرض تشطيبات عامة",
    "معرض أجهزة كهربائية",
    "معرض ستائر وسجاد",
    "معرض زرع ونباتات داخلية",
    "معرض نباتات طبيعية وحدائق"
  ];

  const [selectedType, setSelectedType] = useState('');

  // 🔹 تصفية الموردين حسب نوع المعرض
  const filteredSuppliers = selectedType
    ? suppliers.filter((s) => s.specialty.includes(selectedType))
    : suppliers;

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>الموردين المتاحين</h1>
        <p className={styles.lead}>قائمة مختصرة بالموردين المسجلين على الموقع</p>
      </header>

      {/* 🔹 فلتر نوع المعرض */}
      <div className={styles.filterBox}>
        <label htmlFor="filter" className={styles.filterLabel}>
          اختر نوع المعرض
        </label>
        <select
          id="filter"
          className={styles.select}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">الكل</option>
          {storeTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <main className={styles.grid}>
        {filteredSuppliers.length > 0 ? (
          filteredSuppliers.map((s) => (
            <article key={s.id} className={styles.card}>
              <div className={styles.logoWrap}>
                <img
                  src={s.image}
                  alt={`${s.name} logo`}
                  className={styles.logo}
                />
              </div>

              <div className={styles.body}>
                <h2 className={styles.name}>{s.name}</h2>
                <p className={styles.specialty}>{s.specialty}</p>

                <div className={styles.row}>
                  <strong>العنوان:</strong> <span>{s.address}</span>
                </div>

                {s.images && s.images.length > 0 && (
                  <div className={styles.gallery}>
                    {s.images.slice(0, 5).map((img, i) => (
                      <img key={i} src={img} alt={`${s.name} photo ${i + 1}`} />
                    ))}
                  </div>
                )}

                <div className={styles.meta}>
                  <div className={styles.row}>
                    <strong>التليفون:</strong>
                    <div className={styles.btnGroup}>
                      <a
                        href={`tel:${s.phone}`}
                        className={`${styles.button} ${styles.callBtn}`}
                      >
                        📞 اتصال
                      </a>
                      <a
                        href={`https://wa.me/${s.phone.replace(/^0/, '2')}`}
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
                  <Link href={`/suppliers/${s.id}`} className={styles.button}>
                    تفاصيل أكتر
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.noResults}>لا توجد نتائج لهذا النوع من المعارض.</p>
        )}
      </main>

      <footer className={styles.footer}>
        عرض تجريبي — الصور افتراضية (logo.png)
      </footer>
    </div>
  );
}
