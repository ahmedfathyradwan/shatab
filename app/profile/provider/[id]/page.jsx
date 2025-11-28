'use client';

import { useState, useRef } from 'react';
import styles from './provider.module.css';
import MyRequests from './OrdersTab';
import MyOffers from './MyPost';
import ConfirmModal from '../../../components/ConfirmModal';

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState('requests');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('/images/avatar.png');
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

  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (res.ok) {
        localStorage.removeItem('userData');
        window.location.href = "/auth/login";
      } else {
        alert("حدث خطأ أثناء تسجيل الخروج ❌");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("تعذر الاتصال بالسيرفر 😞");
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

            <button
              className={styles.logoutBtn}
              onClick={() => setConfirmLogout(true)}
            >
              تسجيل خروج
            </button>

            <button
              className={styles.deleteBtn}
              onClick={() => setConfirmDelete(true)}
            >
              حذف حسابي
            </button>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.switchButton} ${
              activeTab === 'requests' ? styles.activeButton : ''
            }`}
            onClick={() => setActiveTab('requests')}
          >
            طلباتي
          </button>
          <button
            className={`${styles.switchButton} ${
              activeTab === 'offers' ? styles.activeButton : ''
            }`}
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

      {/* Confirm Logout Modal */}
      {confirmLogout && (
        <ConfirmModal
          message="هل أنت متأكد أنك تريد تسجيل الخروج؟"
          onConfirm={() => {
            setConfirmLogout(false);
            logoutHandler();
          }}
          onCancel={() => setConfirmLogout(false)}
        />
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <ConfirmModal
          message="هل أنت متأكد أنك تريد حذف الحساب؟"
          onConfirm={() => {
            console.log('تم حذف الحساب');
            setConfirmDelete(false);
          }}
          onCancel={() => setConfirmDelete(false)}
        />
      )}
    </>
  );
}
