"use client";
import styles from "./onlinePage.module.css";
import onlineServicesData from "../data/onlineServicesData";

export default function OnlinePage() {
  return (
    <section className={styles.pageSection}>
      <h1 className={styles.title}>كل الخدمات الأونلاين في التشطيب</h1>
      <p className={styles.intro}>
        هنا تقدر تتصفح كل الخدمات الأونلاين اللي بتساعدك في كل مراحل التشطيب — من التصميم لحد الإدارة.
      </p>

      <div className={styles.grid}>
        {onlineServicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <ul className={styles.benefits}>
              {service.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.moreLink}
            >
              تصفح أمثلة
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
