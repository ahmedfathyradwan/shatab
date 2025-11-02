"use client";
import { useState } from "react";
import Image from "next/image";
import offersData from "../mockData/offersData";
import styles from "./OffersPost.module.css";

export default function OffersPostPage() {
  // ✅ الافتراضي هو "الأفضل"
  const [filter, setFilter] = useState("الأفضل");

  // ✅ فلترة العروض حسب النوع
  const filteredOffers =
    filter === "الكل"
      ? offersData
      : filter === "الأفضل"
      ? offersData.filter((offer) => offer.isBest)
      : offersData.filter((offer) => offer.type === filter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>جميع عروض الشهر</h1>

      {/* 🔹 أزرار الفلترة */}
      <div className={styles.filterButtons}>
        {["الأفضل", "الكل", "سيراميك", "خشب", "أبواب", "دهانات"].map(
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
        {filteredOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <Image
              src={offer.image}
              alt={offer.alt || "صورة عرض"}
              width={400}
              height={250}
              className={styles.image}
              style={{ objectFit: "cover" }}
              priority={false}
            />
            <p>{offer.description}</p>

            {/* 🔹 زرارين الاتصال والواتساب */}
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
    </div>
  );
}
