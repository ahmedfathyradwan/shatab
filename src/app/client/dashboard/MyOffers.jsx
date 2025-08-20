'use client';

import React from "react";
import allOffers from "../../mockData/submittedOffers";
import styles from "./myOffers.module.css";

const MyOffers = () => {
  const offers = allOffers;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>العروض المقدمة</h2>

      {offers.length === 0 ? (
        <p className={styles.noResults}>لا يوجد عروض حتى الآن.</p>
      ) : (
        <div className={styles.cardsWrapper}>
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={styles.card}
              onClick={() => {
                // افتح صفحة الملف الشخصي - عدل المسار حسب ما يناسبك
                window.location.href = `/provider/dashboard`;
              }}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.details}>
                {/* صورة واسم مقدم العرض */}
                <div className={styles.avatarRow}>
                  <img
                    src={offer.providerImage || "/shatab/images/avatar.png"}
                    alt="مقدم العرض"
                    className={styles.avatar}
                  />
                  <p className={styles.name}>م . {offer.providerName}</p>
                </div>
                <br />
                <p className={styles.label}>العرض:</p>
                <p className={styles.value}>{offer.notes}</p>
                <br />
                <p className={styles.label}>مدة التنفيذ:</p>
                <p className={styles.value}>{offer.duration}</p>
                <br />
                <p className={styles.label}>تاريخ البدء في التنفيذ :</p>
                <p className={styles.value}>{offer.startDate}</p>
                <br />
                <p className={styles.label}>السعر:</p>
                <p className={styles.value}>{offer.price} جنيه</p>
                {/* أزرار التواصل */}
                <div className={styles.contactButtons}>
                  <a href={`tel:${offer.phone}`} className={styles.contactBtn}>
                    اتصال هاتفي
                  </a>
                  <a
                    href={`https://wa.me/2${offer.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                    onClick={(e) => e.stopPropagation()} // عشان الضغط على الزر ما يفتحش صفحة البروفايل
                  >
                    محادثة واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOffers;
