"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/home/OnlineSection.module.css";
import onlineServicesData from "../data/onlineServicesData";

export default function OnlineSection() {
  // ✅ الفلتر الافتراضي هو "الأفضل"
  const [filter, setFilter] = useState("الأفضل");

  // ✅ ترتيب الفئات
  const categories = [
    "الأفضل",
    "الكل",
    "مستلزمات تشطيب",
    "خدمات تشطيب",
    "أثاث وديكور",
    "صناع محتوى",
  ];

  // ✅ فلترة البيانات
  const filteredServices =
    filter === "الكل"
      ? onlineServicesData
      : filter === "الأفضل"
      ? onlineServicesData.filter((s) => s.isBest)
      : onlineServicesData.filter((s) => s.category === filter);

  return (
    <section className={styles.onlineSection}>
      <h2 className={styles.title}>خدمات التشطيب الأونلاين</h2>
      <p className={styles.intro}>
        خدمات رقمية تساعدك في تنفيذ أو متابعة التشطيب بسهولة من أي مكان.
      </p>

      {/* 🔹 الفلتر */}
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

      {/* 🔹 الكروت الأفقية */}
      <div className={styles.cardsContainer}>
        {filteredServices.map((service) => (
          <div key={service.id} className={styles.card}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
              loading="lazy"
            />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>

            {/* ✅ المميزات إن وجدت */}
            {service.benefits && (
              <ul className={styles.benefits}>
                {service.benefits.slice(0, 2).map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>
            )}

            {/* ✅ عرض اللينكات — يدعم link أو links */}
            <div className={styles.linksContainer}>
              {service.links ? (
                service.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.moreLink}
                  >
                    {link.label}
                  </a>
                ))
              ) : service.link ? (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.moreLink}
                >
                  تصفح
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 زر عرض الكل */}
      <div className={styles.buttonContainer}>
        <Link href="/online" className={styles.showAllBtn}>
          عرض كل الخدمات
        </Link>
      </div>
    </section>
  );
}
