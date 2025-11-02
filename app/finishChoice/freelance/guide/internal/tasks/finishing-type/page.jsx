"use client";
import { useState } from "react";
import Image from "next/image";
import finishingTypes from "../../../../../../data/finishingTypes";
import styles from "./finishing-type.module.css";

export default function FinishingTypePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>أشهر أنواع التشطيب الداخلي</h1>

      {finishingTypes.map((type) => (
        <div key={type.id} className={styles.typeCard}>
          {/* العنوان + الرقم */}
          <h2 className={styles.typeTitle}>
            <span className={styles.typeSpan}>({type.id})</span> {type.title}
          </h2>

          {/* الصورة */}
          <div 
            className={styles.imageWrapper} 
            onClick={() => setSelectedImage(type.image)}
          >
            <Image
              src={type.image}
              alt={type.title}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>

          {/* المميزات */}
          <h3 className={styles.featuresTitle}>المميزات:</h3>
          <ul className={styles.featuresList}>
            {type.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* مناسب لمين */}
          <p className={styles.suitableFor}>{type.suitableFor}</p>

          {/* اللينك */}
          {type.moreImagesLink && (
            <a
              href={type.moreImagesLink}
              className={styles.moreImagesLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              للمزيد من الصور حول هذا النوع
            </a>
          )}
        </div>
      ))}

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent}>
            <Image
              src={selectedImage}
              alt="Expanded"
              width={1000}
              height={700}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
