"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import offersData from "../mockData/offersData";
import styles from "../offersPost/OffersPost.module.css";

export default function OffersPost() {
  const router = useRouter();
  const [filter, setFilter] = useState("الأفضل");

  const filteredOffers =
    filter === "الكل"
      ? offersData
      : filter === "الأفضل"
      ? offersData.filter((offer) => offer.isBest)
      : offersData.filter((offer) => offer.type === filter);

  const visibleOffers = filteredOffers.slice(0, 5);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>عروض الشهر</h2>

      <div className={styles.filterButtons}>
        {["الأفضل", "الكل", "سيراميك", "خشب", "أبواب", "دهانات", "تشطيب"].map(
          (type) => (
            <button
              key={type}
              className={`${styles.filterButton} ${
                filter === type ? styles.active : ""
              }`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          )
        )}
      </div>

      {/* استخدم horizontal لو عايزها سكرول */}
      <div className={`${styles.offersGrid} ${styles.horizontal}`}>
        {visibleOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <img
              src={offer.image}
              alt={offer.title || "صورة عرض"}
              className={styles.image}
            />

            <div className={styles.textBox}>
              <p className={styles.description}>{offer.description}</p>

              <div className={styles.contactButtons}>
                <a href={`tel:${offer.phone}`} className={styles.callButton}>
                  📞 اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${offer.phone.replace(/^0/, "2")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.moreButton}
        onClick={() => router.push("/offersPost")}
      >
        عرض المزيد
      </button>
    </div>
  );
}
