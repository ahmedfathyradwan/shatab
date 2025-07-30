'use client';

import { useState, useRef } from 'react';
import styles from './dashboard.module.css';
import MyRequests from './MyRequests';
import MyOffers from './MyOffers';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('requests');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('/images/avatar.png');
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
          <div className={styles.avatarWrapper}>
            <img
              src={imageUrl}
              alt="صورة المستخدم"
              className={styles.avatar}
              onClick={() => setIsPreviewOpen(true)}
            />
          </div>

          <div className={styles.userInfo}>
            <h2 className={styles.userName}>أ. {name}</h2>
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
          {activeTab === 'requests' ? <MyRequests /> : <MyOffers />}
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
    </>
  );
}
