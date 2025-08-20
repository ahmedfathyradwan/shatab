'use client';

import { useState, useRef } from 'react';
import styles from './dashboard.module.css';
import MyRequests from './MyRequests';
import MyOffers from './MyOffers'; // ✅ استيراد MyOffers

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('requests');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('/shatab/images/avatar.png');
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fileInputRef = useRef(null);

  const name = 'أحمد فؤاد';

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.topHeader}>
            <div className={styles.avatarWrapper}>
              <img
                src={imageUrl}
                alt="صورة المستخدم"
                className={styles.avatar}
                onClick={() => setIsPreviewOpen(true)}
              />
            </div>
            <h2 className={styles.userName}>أ. {name}</h2>
          </div>
          <div className={styles.editToggleRow}>
            <button
              className={styles.editButton}
              onClick={() => fileInputRef.current.click()}
            >
              تغيير الصورة
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <button className={styles.logoutBtn} onClick={() => setConfirmLogout(true)}>
              تسجيل خروج
            </button>
            <button className={styles.deleteBtn} onClick={() => setConfirmDelete(true)}>
              حذف حسابي
            </button>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.switchButton} ${activeTab === 'requests' ? styles.activeButton : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            طلباتي
          </button>
          <button
            className={`${styles.switchButton} ${activeTab === 'offers' ? styles.activeButton : ''}`}
            onClick={() => setActiveTab('offers')}
          >
            العروض المقدمة
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'requests' && <MyRequests />}
          {activeTab === 'offers' && <MyOffers />}
        </div>
      </div>

      {/* Preview modal */}
      {isPreviewOpen && (
        <div className={styles.modal} onClick={() => setIsPreviewOpen(false)}>
          <img
            src={imageUrl}
            className={styles.fullImage}
            alt="صورة المستخدم مكبرة"
          />
        </div>
      )}

      {/* تأكيد تسجيل الخروج */}
      {confirmLogout && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log('تم تسجيل الخروج');
                  setConfirmLogout(false);
                }}
              >
                تأكيد
              </button>
              <button
                className={styles.cancelDelete}
                onClick={() => setConfirmLogout(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* تأكيد حذف الحساب */}
      {confirmDelete && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد حذف الحساب؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log('تم حذف الحساب');
                  setConfirmDelete(false);
                }}
              >
                حذف
              </button>
              <button
                className={styles.cancelDelete}
                onClick={() => setConfirmDelete(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
