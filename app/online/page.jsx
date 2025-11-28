"use client";
import { useState } from "react";
import styles from "./onlinePage.module.css";
import onlineServicesData from "../data/onlineServicesData";

export default function OnlinePage() {
  // ✅ الفلتر الافتراضي هو "الأفضل"
  const [filter, setFilter] = useState("الأفضل");

  // ✅ الفئات بما فيها "الأفضل"
  const categories = [
    "الأفضل",
    "الكل",
    "مستلزمات تشطيب",
    "خدمات تشطيب",
    "أثاث وديكور",
    "صناع محتوى",
  ];

  // ✅ الفلترة حسب الفئة أو الأفضل
  const filteredServices =
    filter === "الكل"
      ? onlineServicesData
      : filter === "الأفضل"
      ? onlineServicesData.filter((s) => s.isBest)
      : onlineServicesData.filter((s) => s.category === filter);

  return (
    <section className={styles.pageSection}>
      <h1 className={styles.title}>كل الخدمات الأونلاين في التشطيب</h1>
      <p className={styles.intro}>
        تصفح أفضل الخدمات الأونلاين اللي تقدر تستخدمها في مصر — من أول التصميم لحد التنفيذ والتشطيب الكامل.
      </p>

      {/* 🔹 فلتر الفئات */}
      <div className={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${
              filter === cat ? styles.active : ""
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 شبكة الخدمات */}
      <div className={styles.grid}>
        {filteredServices.map((service) => (
          <div key={service.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.image}
                loading="lazy"
              />
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>

              {/* 🔗 عرض كل اللينكات */}
              <div className={styles.linksContainer}>
                {service.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.moreLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
