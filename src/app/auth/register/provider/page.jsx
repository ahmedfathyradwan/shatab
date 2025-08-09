"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "../provider/provider.module.css";
import WhatsappIcon from "../../../components/icons/WhatsappIcon.jsx";
import TelegramIcon from "../../../components/icons/TelegramIcon.jsx";

const ProviderTypePage = () => {
  const router = useRouter();

  const handleSelect = (type, path) => {
    localStorage.setItem("providerType", type);
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.titleProvider}>إنشاء حساب مقدم خدمة</h2>
        <div className={styles.formProvider}>
          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("فردي", "/auth/register/freelancer")}
          >
            إنشاء حساب فردي
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("معرض", "/auth/register/materials")}
          >
            إنشاء حساب معرض
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("شركة", "/auth/register/company")}
          >
            إنشاء حساب شركة أو مكتب
          </button>

          <p className={styles.contactText}>
            إذا واجهتك أي مشكلة في التسجيل، برجاء التواصل معنا:
          </p>
          <div className={styles.chatButtons}>
            <a
              href="https://wa.me/2001205040743"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              واتساب
              <WhatsappIcon className={styles.icon} />
            </a>
            <a
              href="https://t.me/ah_fathy_74"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramButton}
            >
              تيليجرام
              <TelegramIcon className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderTypePage;
