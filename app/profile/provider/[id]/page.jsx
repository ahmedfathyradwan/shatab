"use client";

import { useState, useRef } from "react";
import styles from "./provider.module.css";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import MyPost from "./MyPost";
import freelancerData from "../../../mockData/freelancerData";

export default function ProviderPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("/images/avatar.png");
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fileInputRef = useRef(null);

  const freelancer = freelancerData[0];
  const name = freelancer.name;

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
        
        {/* 🔹 الأزرار */}
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.switchButton} ${
              activeTab === "profile" ? styles.activeButton : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            الملف الشخصي
          </button>
          <button
            className={`${styles.switchButton} ${
              activeTab === "orders" ? styles.activeButton : ""
            }`}
            onClick={() => setActiveTab("orders")}
          >
            الطلبات المتاحة
          </button>
        </div>

        {/* 🔹 الهيدر */}
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
            <h2 className={styles.userName}>{name}</h2>
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
              style={{ display: "none" }}
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

        {/* 🔹 المحتوى */}
        <div className={styles.content}>
           {activeTab === "profile" && (
    <>
      <ProfileTab data={freelancer} />
      <MyPost data={freelancer} />
    </>
  )}
          {activeTab === "orders" && <OrdersTab />}
        </div>
      </div>

      {/* 📸 عرض الصورة */}
      {isPreviewOpen && (
        <div className={styles.modal} onClick={() => setIsPreviewOpen(false)}>
          <img src={imageUrl} className={styles.fullImage} alt="صورة المستخدم" />
        </div>
      )}

      {/* 🔸 تأكيد تسجيل الخروج */}
      {confirmLogout && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log("تم تسجيل الخروج");
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

      {/* 🔸 تأكيد حذف الحساب */}
      {confirmDelete && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد حذف الحساب؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log("تم حذف الحساب");
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
