'use client';

import React, { useState } from "react";
import clientRequests from "../../mockData/clientRequests.js";
import styles from "./availableRequests.module.css";
import serviceToProviderMap from "../../data/serviceToProviderMap.json";
import MySelect from "../../components/MySelect.jsx";

const AvailableRequests = () => {
  const [filterService, setFilterService] = useState("الكل");

  const serviceOptions = ["الكل", ...Object.keys(serviceToProviderMap)].map((service) => ({
    label: service,
    value: service,
  }));

  const filteredRequests =
    filterService === "الكل"
      ? clientRequests
      : clientRequests.filter((req) => req.serviceType === filterService);

  return (
    <div className={styles.profileSection}>
      <h2 className={styles.title}>الطلبات المتاحة</h2>

      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>فلترة حسب نوع الخدمة المطلوبة:</label>
        <MySelect
          value={{ label: filterService, value: filterService }}
          onChange={(selected) => setFilterService(selected.value)}
          options={serviceOptions}
        />
      </div>

      <div className={styles.cardsWrapper}>
        {filteredRequests.length === 0 ? (
          <p className={styles.noResults}>لا يوجد طلبات متاحة حاليًا لهذه الخدمة.</p>
        ) : (
          filteredRequests.map((req) => (
            <div key={req.id} className={styles.card}>
              {req.image && (
                <img src={req.image} alt="صورة المكان" className={styles.image} />
              )}
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>الخدمة المطلوبة:</span>
                  <span className={styles.value}>{req.serviceType}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>المساحة:</span>
                  <span className={styles.value}>{req.area} متر مربع</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>العنوان:</span>
                  <span className={styles.value}>{req.address}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>الوصف:</span>
                  <span className={styles.value}>{req.description}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>تاريخ النشر:</span>
                  <span className={styles.value}>{req.date}</span>
                </div>
                <button
                  className={styles.offerButton}
                  onClick={() => window.location.href = `/provider/dashboard/offers/submit?id=${req.id}`}
                >
                  تقديم عرض
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableRequests;
