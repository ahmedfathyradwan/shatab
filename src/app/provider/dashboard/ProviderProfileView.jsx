'use client';

import styles from './dashboard.module.css';

export default function ProviderProfileView({ provider }) {
  // إضافة حماية في حالة عدم وجود provider
  if (!provider) {
    return <div className={styles.profileSection}>جاري التحميل...</div>;
  }

  return (
    <div className={styles.profileSection}>
      <h2 className={styles.sectionTitle}>الملف الشخصي لمقدم الخدمة</h2>

      <div className={styles.infoCard}>
        <p className={styles.name}>م . {provider.name || 'غير محدد'}</p>
        <p className={styles.role}>{provider.role || 'غير محدد'}</p>
        <p>
          <span className={styles.label}>متوسط السعر اليومي :</span>
          <span className={styles.value}> {provider.dailyPrice || 'غير محدد'} جنيه</span>
        </p>
        <p>
          <span className={styles.label}>العنوان :</span>
          <span className={styles.value}> {provider.address || 'غير محدد'}</span>
        </p>
        <p>
          <span className={styles.label}>رقم الهاتف :</span>
          <span className={styles.value}> {provider.phone || 'غير محدد'}</span>
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