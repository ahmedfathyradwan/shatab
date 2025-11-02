'use client';

import requests from '../../../mockData/requests';
import styles from './myRequests.module.css';

export default function MyRequests() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>طلبات التشطيب الخاصة بي</h2>
      {requests.map((req, index) => (
        <div key={index} className={styles.requestCard}>
          {req.image && (
            <img
              src={req.image}
              alt="صورة للمكان"
              className={styles.image}
            />
          )}

          <p className={styles.label}>نوع الخدمة:</p>
          <p className={styles.value}>{req.serviceType}</p>
          <br />
          <p className={styles.label}>المساحة:</p>
          <p className={styles.value}>{req.area} م²</p>
          <br />
          <p className={styles.label}>العنوان:</p>
          <p className={styles.value}>{req.address}</p>
          <br />
          <p className={styles.label}>الوصف:</p>
          <p className={styles.value}>{req.description}</p>
          <br />
          <p className={styles.label}>تاريخ الطلب:</p>
          <p className={styles.value}>{req.date}</p>

          {/* زر حذف الطلب */}
          <button className={styles.deleteButton}>
            حذف الطلب
          </button>
        </div>
      ))}
    </div>
  );
}
