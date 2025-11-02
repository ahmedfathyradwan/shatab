"use client";
import React from "react";
import styles from "../../../styles/freelance/cost.module.css";

const finishingPackages = [
  {
    id: 1,
    title: "تشطيب اقتصادي",
    price: "2250 - 2750 جنيه/متر",
    features: [
      "تشطيب أساسي بجودة مقبولة.",
      "مناسب للشقق الصغيرة أو الاستثماري.",
      "مواد محلية، بدون تفاصيل تصميمية معقدة.",
      "أعمال سباكة وكهرباء تقليدية.",
    ],
  },
  {
    id: 2,
    title: "تشطيب متوسط",
    price: "3000 - 4000 جنيه/متر",
    features: [
      "تشطيب متكامل بجودة جيدة.",
      "تشطيبات قياسية مع لمسات تصميمية.",
      "مواد محلية أو مستوردة متوسطة.",
      "جبسون بورد بسيط - إضاءة سبوتات - أبواب HDF.",
    ],
  },
  {
    id: 3,
    title: "تشطيب لوكس",
    price: "4500 - 5500 جنيه/متر",
    features: [
      "تشطيب عالي الجودة بخامات ممتازة.",
      "تفاصيل تصميم مميزة (خشب طبيعي، رخام، بورسلين إيطالي).",
      "أجهزة ذكية - سباكة عالية الجودة.",
      "تشطيب يناسب الطبقة المتوسطة العليا.",
    ],
  },
  {
    id: 4,
    title: "تشطيب فاخر (فندقي)",
    price: "6000 - 7000+ جنيه/متر",
    features: [
      "أعلى مستوى من الخامات (رخام مستورد، أخشاب مخصصة).",
      "ديكورات معمارية، سقف متعدد المستويات.",
      "نظام ذكي متكامل في الكهرباء والإضاءة.",
      "تشطيب يناسب الفيلات والقصور والشقق الفاخرة جدًا.",
    ],
  },
];

const FinishingDetails = () => {
  return (
    <div className={styles.finishingDetails}>
      <h2 className={styles.sectionTitle}>شرح لأشهر باقات التشطيب</h2>

      {finishingPackages.map((pkg) => (
        <div key={pkg.id} className={styles.finishingType}>
          <h3 className={styles.finishingTitle}>
            {pkg.id} - {pkg.title}
          </h3>
          <p className={styles.finishingSubtitle}>متوسط السعر: {pkg.price}</p>
          <ul className={styles.finishingList}>
            {pkg.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FinishingDetails;
