"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import donationData from "../mockData/donationData";
import styles from "../styles/home/DonationSection.module.css";

export default function DonationSection() {
  const router = useRouter();
  const [filter, setFilter] = useState("الكل");

  const filteredDonations =
    filter === "الكل"
      ? donationData
      : donationData.filter((item) => item.type === filter);

  const visibleDonations = filteredDonations.slice(0, 5);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>تبرعات التشطيب</h2>

      <div className={styles.filterButtons}>
        {["الكل", "المساجد", "الأشخاص"].map((type) => (
          <button
            key={type}
            className={`${styles.filterButton} ${
              filter === type ? styles.active : ""
            }`}
            onClick={() => setFilter(type)}
            aria-pressed={filter === type}
          >
            {type}
          </button>
        ))}
      </div>

      <div className={styles.horizontalScroll}>
        {visibleDonations.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title || "صورة تبرع"}
              width={260}
              height={160}
              style={{ objectFit: "cover" }}
              priority={false}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            {/* 🔹 أزرار الاتصال والواتساب */}
            <div className={styles.contactButtons}>
              <a
                href={`tel:${item.phone}`}
                className={styles.callButton}
                aria-label="اتصال"
              >
                📞 اتصال
              </a>
              <a
                href={`https://wa.me/${item.phone.replace(/^0/, "2")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                aria-label="واتساب"
              >
                💬 واتساب
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.moreButton}
        onClick={() => router.push("/donationPosts")}
      >
        عرض المزيد
      </button>
    </div>
  );
}
