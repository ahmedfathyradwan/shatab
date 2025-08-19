'use client';

import React, { useState } from "react";
import clientRequests from "../../mockData/clientRequests.js";
import styles from "./availableRequests.module.css";
import serviceToProviderMap from "../../data/serviceToProviderMap.json";
import MySelect from "../../components/MySelect.jsx";

const AvailableRequests = () => {
  const [filterService, setFilterService] = useState("الكل");

  // حماية من عدم وجود البيانات
  const safeServiceToProviderMap = serviceToProviderMap || {};
  const safeClientRequests = clientRequests || [];

  const serviceOptions = ["الكل", ...Object.keys(safeServiceToProviderMap)].map((service) => ({
    label: service,
    value: service,
  }));

  const filteredRequests =
    filterService === "الكل"
      ? safeClientRequests
      : safeClientRequests.filter((req) => req.serviceType === filterService);

  const handleOfferClick = (reqId) => {
    // استخدام router بدلاً من window.location للتوافق مع static export
    const url = `/provider/dashboard/offers/submit?id=${reqId}`;
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

  return (
    <div className={styles.profileSection}>
      <h2 className={styles.title}>الطلبات المتاحة</h2>

      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>فلترة حسب نوع الخدمة المطلوبة:</label>
        <MySelect
          value={{ label: filterService, value: filterService }}
          onChange={(selected) => setFilterService(selected?.value || "الكل")}
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
                <img 
                  src={req.image} 
                  alt="صورة المكان" 
                  className={styles.image}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>الخدمة المطلوبة:</span>
                  <span className={styles.value}>{req.serviceType || 'غير محدد'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>المساحة:</span>
                  <span className={styles.value}>{req.area || 'غير محدد'} متر مربع</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>العنوان:</span>
                  <span className={styles.value}>{req.address || 'غير محدد'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>الوصف:</span>
                  <span className={styles.value}>{req.description || 'لا يوجد وصف'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>تاريخ النشر:</span>
                  <span className={styles.value}>{req.date || 'غير محدد'}</span>
                </div>
                <button
                  className={styles.offerButton}
                  onClick={() => handleOfferClick(req.id)}
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