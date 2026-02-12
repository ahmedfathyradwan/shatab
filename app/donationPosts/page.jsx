"use client";
import { useState } from "react";
import Image from "next/image";
import donationData from "../mockData/donationData";
import styles from "./DonationPosts.module.css";

export default function DonationPosts() {
  const [filter, setFilter] = useState("الكل");

  const filteredDonations =
    filter === "الكل"
      ? donationData
      : donationData.filter((item) => item.type === filter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>التبرعات</h1>

      <div className={styles.filterButtons}>
        {["الكل", "المساجد", "الأشخاص"].map((type) => (
          <button
            key={type}
            className={`${styles.filterButton} ${
              filter === type ? styles.active : ""
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredDonations.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title || "صورة تبرع"}
              width={400}
              height={250}
              className={styles.image}
            />

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <div className={styles.contactButtons}>
                <a href={`tel:${item.phone}`} className={styles.callButton}>
                  📞 اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${item.phone.replace(/^0/, "2")}`}
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
    </div>
  );
}
