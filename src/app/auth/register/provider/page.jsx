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
            onClick={() => handleSelect("فني", "/auth/register/technician")}
          >
            إنشاء حساب فني
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("معرض (مورد خامات)", "/auth/register/materials")}
          >
            إنشاء حساب معرض
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("مقاول", "/auth/register/contractor")}
          >
            إنشاء حساب مقاول
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("شركة صيانة", "/auth/register/maintenance-company")}
          >
            إنشاء حساب شركة صيانة
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("مهندس تنفيذ", "/auth/register/engineer")}
          >
            إنشاء حساب إشراف أو تنفيذ
          </button>

          <button
            className={styles.providerBtn}
            onClick={() => handleSelect("شركة تشطيب", "/auth/register/finishing-company")}
          >
            إنشاء حساب شركة تشطيب
          </button>

          <button
            className={styles.providerBtn}
            onClick={() =>
              handleSelect("مصمم داخلي / شركة تصميم / رسام أوتوكاد", "/auth/register/designer")
            }
          >
            إنشاء حساب مصمم أو رسام
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
