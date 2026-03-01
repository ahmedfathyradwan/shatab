"use client";
import { useState } from "react";
import Image from "next/image";
import offersData from "../mockData/offersData";
import styles from "./OffersPost.module.css";

export default function OffersPostPage() {
  const [filter, setFilter] = useState("الأفضل");

  const filteredOffers =
    filter === "الكل"
      ? offersData
      : filter === "الأفضل"
      ? offersData.filter((offer) => offer.isBest)
      : offersData.filter((offer) => offer.type === filter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>عروض الشهر</h1>

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

      <div className={styles.offersGrid}>
        {filteredOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <Image
              src={offer.image}
              alt={offer.alt || "صورة عرض"}
              width={400}
              height={250}
              className={styles.image}
            />

            <div className={styles.textBox}>
              <p className={styles.description}>{offer.description}</p>

              <div className={styles.contactButtons}>
                <a href={`tel:${offer.phone}`} className={styles.callButton}>
                  اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${offer.phone.replace(/^0/, "2")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                   واتساب
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
