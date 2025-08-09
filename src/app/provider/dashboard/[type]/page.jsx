"use client";
import React, { useState } from "react";
import styles from "./type.module.css";

// Mock data imports (ضيف باقي الأنواع حسب الحاجة)
import finishingCompanies from "../../../mockData/finishingCompanies";
// ...

const dataMap = {
  "finishing-companies": { title: "شركات التشطيب", data: finishingCompanies },
  "technicians": { title: "الفنيين", data: technicians },
  "contractors": { title: "المقاولين", data: contractors },
  // ...
};

const ProviderListPage = ({ params }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const type = params.type;

  const provider = dataMap[type];
  if (!provider) return <div>نوع مقدم الخدمة غير موجود</div>;

  const { title, data } = provider;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{title}</h1>

      <div className={styles.cardContainer}>
        {data.map((company) => (
          <div key={company.id} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.infoHeader}>
                <img src={company.avatar} alt={company.name} className={styles.avatar} />
                <p className={styles.name}>{company.name}</p>
              </div>

              {company.pricePerMeter !== undefined && company.pricePerMeter !== null && (
                <p className={styles.label}>
                    متوسط السعر:{" "}
                    <span className={styles.value}>
                        {company.pricePerMeter
                        ? `${company.pricePerMeter} جنيه`
                        : "لم يتم تحديد السعر بعد"}
                    </span>
                    </p>
              )}

              {company.governorate && (
                <p className={styles.label}>
                  العنوان: <span className={styles.value}>{company.governorate}</span>
                </p>
              )}
            </div>

            {company.works && company.works.length > 0 && (
              <>
                <label className={styles.value}>بعض أعمال الشركة</label>
                <div className={styles.works}>
                  {company.works.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`عمل ${index + 1}`}
                      className={styles.workImage}
                      onClick={() => setSelectedImage(src)}
                    />
                  ))}
                </div>
              </>
            )}

            <div className={styles.actions}>
              <button className={styles.btn}>الملف الشخصي</button>
              <a href={`tel:${company.phone}`} className={styles.btn}>مكالمة هاتفية</a>
              <a
                href={`https://wa.me/2${company.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                محادثة واتساب
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="عمل مكبر" className={styles.popupImage} />
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderListPage;
