"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import facadesData from "../../../data/facades";
import styles from "./facades.module.css";

export default function Page() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null); // ✅ الصورة المختارة

  const guide = {
    title: "دليل الواجهات الخارجية",
    content:
      "اكتشف أنواع تشطيبات الواجهات المختلفة ومميزاتها ومناسبتها للمشروعات المختلفة.",
  };

  return (
    <div className={styles.facadeContainer}>
      <h1 className={styles.facadeTitle}>{guide.title}</h1>
      <p className={styles.facadeDescription}>{guide.content}</p>

      <div className={styles.facadeGrid}>
        {facadesData.map((facade) => (
          <div key={facade.id} className={styles.facadeCard}>
            {/* ✅ الصورة */}
            <img
              src={facade.image}
              alt={facade.title}
              className={styles.facadeImage}
              onClick={() => setSelectedImage(facade.image)} // 🔍 تكبير الصورة
              style={{ cursor: "pointer" }}
            />

            {/* ✅ العنوان */}
            <h2 className={styles.facadeName}>{facade.title}</h2>

            {/* ✅ المميزات */}
            <ul className={styles.featureList}>
              {facade.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>

            {/* ✅ المسؤولين */}
            <div className={styles.responsibleList}>
              <h4>المسؤولين:</h4>
              <ul>
                {facade.responsible.map((person, idx) => (
                  <li key={idx}>{person}</li>
                ))}
              </ul>
            </div>

            {/* ✅ روابط عرض الصور */}
            <div className={styles.facadeLinks}>
              {facade.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.facadeLink}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* ✅ الزرّ — توجيه داخلي */}
            <button
              className={styles.facadeBtn}
              onClick={() =>
                router.push(`/freelance/technicians?type=${facade.slug}`)
              }
            >
              اختيار منفذ الخدمة المناسب
            </button>
          </div>
        ))}
      </div>

      {/* ✅ المودال (تكبير الصورة) */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)} // إغلاق عند الضغط بالخارج
        >
          <img src={selectedImage} alt="Facade full view" className={styles.modalImage} />
        </div>
      )}
    </div>
  );
}
