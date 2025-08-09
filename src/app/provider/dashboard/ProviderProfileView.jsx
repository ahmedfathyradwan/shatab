'use client';

import styles from './dashboard.module.css';

export default function ProviderProfileView({ provider }) {
  return (
    <div className={styles.profileSection}>
      <h2 className={styles.sectionTitle}>الملف الشخصي لمقدم الخدمة</h2>

      <div className={styles.infoCard}>
        <p className={styles.name}>م . {provider.name}</p>
        <p className={styles.role}>{provider.role}</p>
        <p>
          <span className={styles.label}>متوسط السعر اليومي :</span>
          <span className={styles.value}> {provider.dailyPrice} جنيه</span>
        </p>
        <p>
          <span className={styles.label}>العنوان :</span>
          <span className={styles.value}> {provider.address}</span>
        </p>
        <p>
          <span className={styles.label}>رقم الهاتف :</span>
          <span className={styles.value}> {provider.phone}</span>
        </p>
      </div>

      <h3 className={styles.sectionSubtitle}>بعض أعماله السابقة</h3>

      {provider.images && provider.images.length > 0 ? (
        <div className={styles.imageGrid}>
          {provider.images.map((url, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={url} alt={`عمل ${index + 1}`} className={styles.thumb} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.instructions}>
          لا توجد صور معروضة حالياً.
        </div>
      )}
    </div>
  );
}
