"use client";

import { useState } from "react";
import styles from "./openSpaces.module.css";

// 👇 بيانات تجريبية — ممكن تستبدلها من ملف data لاحقًا
const spacesData = [
  {
    id: 1,
    title: "حديقة خارجية",
    description: "تصميم حديقة أمامية بمساحات خضراء وأحواض نباتية.",
    image:
      "https://i.pinimg.com/originals/1e/23/8a/1e238a1ad3045f1df10ce2c84d3b65b7.jpg",
    features: [
      "استخدام نباتات مقاومة للحرارة",
      "تصميم ممرات حجرية طبيعية",
      "إضاءة خافتة ليلية",
    ],
    links: [
      "https://www.pinterest.com/search/pins/?q=garden%20landscape",
      "https://www.pinterest.com/search/pins/?q=modern%20garden%20design",
    ],
  },
  {
    id: 2,
    title: "تراس مفتوح",
    description: "منطقة جلوس عصرية مفتوحة بإطلالة جميلة.",
    image:
      "https://i.pinimg.com/originals/0a/19/6a/0a196a23cde77711ce69a604d064b998.jpg",
    features: ["أثاث خارجي مقاوم للعوامل الجوية", "إضاءة دافئة", "نباتات زينة"],
    links: [
      "https://www.pinterest.com/search/pins/?q=open%20terrace",
      "https://www.pinterest.com/search/pins/?q=outdoor%20patio",
    ],
  },
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>المساحات المفتوحة (Open Spaces)</h1>
      <p className={styles.pageDescription}>
        اكتشف أفكار وتصميمات المساحات المفتوحة للمنازل والمشروعات الحديثة.
      </p>

      <div className={styles.grid}>
        {spacesData.map((space) => (
          <div key={space.id} className={styles.card}>
            {/* ✅ الصورة */}
            <img
              src={space.image}
              alt={space.title}
              className={styles.image}
              onClick={() => setSelectedImage(space.image)}
            />

            <h2 className={styles.cardTitle}>{space.title}</h2>
            <p className={styles.cardDesc}>{space.description}</p>

            <ul className={styles.features}>
              {space.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            <div className={styles.links}>
              {space.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهدة المزيد
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/*  المودال لتكبير الصور */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Open space view"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}
