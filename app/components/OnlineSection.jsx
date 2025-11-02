"use client";
import styles from "../styles/home/OnlineSection.module.css";
import onlineServicesData from "../data/onlineServicesData";
import Link from "next/link";


export default function OnlineSection() {
  return (
    <section className={styles.onlineSection}>
      <h2 className={styles.title}>خدمات التشطيب الأونلاين</h2>
      <p className={styles.intro}>
        خدمات رقمية تساعدك في تنفيذ أو متابعة التشطيب بسهولة من أي مكان.
      </p>

      {/* ✅ الحاوية الأفقية */}
      <div className={styles.cardsContainer}>
        {onlineServicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            {service.benefits && (
              <ul className={styles.benefits}>
                {service.benefits.map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>
            )}
            {service.moreLink && (
              <a href={service.moreLink} target="_blank" className={styles.moreLink}>
                اعرف المزيد
              </a>
            )}
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
