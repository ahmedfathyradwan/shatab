"use client";
import { useState } from "react";
import Link from "next/link";
import onlineServicesData from "../data/onlineServicesData";
import styles from "../online/onlinePage.module.css";

export default function OnlineSection() {
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

  const visibleServices = filteredServices.slice(0, 5);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>خدمات تشطيب أونلاين</h2>
      <p className={styles.intro}>
        خدمات رقمية تساعدك في تنفيذ أو متابعة التشطيب بسهولة من أي مكان.
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

      <div className={styles.horizontal}>
        {visibleServices.map((service) => (
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

              {service.benefits && (
                <ul className={styles.benefits}>
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

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

      <div className={styles.buttonContainer}>
        <Link href="/online" className={styles.showAllBtn}>
          عرض كل الخدمات
        </Link>
      </div>
    </section>
  );
}
