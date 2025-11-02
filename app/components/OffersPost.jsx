"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import offersData from "../mockData/offersData";
import styles from "../styles/home/OffersPost.module.css";

export default function OffersPost() {
  const router = useRouter();
  const [filter, setFilter] = useState("الأفضل");

  // 🔹 فلترة حسب الاختيار
  const filteredOffers =
    filter === "الكل"
      ? offersData
      : filter === "الأفضل"
      ? offersData.filter((offer) => offer.isBest) // هنضيف حقل isBest في البيانات
      : offersData.filter((offer) => offer.type === filter);

  const visibleOffers = filteredOffers.slice(0, 5);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>عروض الشهر</h2>

      {/* 🔹 أزرار الفلترة */}
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

      {/* 🔹 شبكة العروض */}
      <div className={styles.offersGrid}>
        {visibleOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <img
              src={offer.image}
              alt={offer.title || "صورة عرض"}
              className={styles.image}
            />
            <p>{offer.description}</p>

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
