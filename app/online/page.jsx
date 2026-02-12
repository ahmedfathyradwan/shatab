"use client";
import { useState } from "react";
import onlineServicesData from "../data/onlineServicesData";
import styles from "./onlinePage.module.css";

export default function OnlinePage() {
  const [filter, setFilter] = useState("الأفضل");

  const categories = [
    "الأفضل",
    "الكل",
    "مستلزمات تشطيب",
    "خدمات تشطيب",
    "أثاث وديكور",
    "صناع محتوى",
  ];

  const filteredServices =
    filter === "الكل"
      ? onlineServicesData
      : filter === "الأفضل"
      ? onlineServicesData.filter((s) => s.isBest)
      : onlineServicesData.filter((s) => s.category === filter);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>خدمات تشطيب الأونلاين</h1>
      <p className={styles.intro}>
        تصفح أفضل الخدمات الأونلاين اللي تقدر تستخدمها في مصر — من أول التصميم لحد التنفيذ.
      </p>

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

              <div className={styles.linksContainer}>
                {service.links?.map((link, i) => (
                  <a
                    key={i}
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
