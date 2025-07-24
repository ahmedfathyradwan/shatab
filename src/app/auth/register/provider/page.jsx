"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "../../form.module.css";

const ProviderTypePage = () => {
  const router = useRouter();

  const handleSelect = (type) => {
    localStorage.setItem("providerType", type);
    console.log("Selected provider type:", type);
  };

  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <h2 className={styles.title}>إنشاء حساب مقدم خدمة</h2>
        <div className={styles.form}>
        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("فني")}
        >
          إنشاء حساب فني
        </button>

        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("مهندس تنفيذ")}
        >
          إنشاء حساب مهندس تنفيذ
        </button>

        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("مقاول")}
        >
          إنشاء حساب مقاول
        </button>

        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("معرض (مورد خامات)")}
        >
          إنشاء حساب معرض
        </button>

        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("شركة صيانة")}
        >
          إنشاء حساب شركة صيانة
        </button>

        <button
          className={styles.providerBtn}
          onClick={() => handleSelect("شركة تشطيب")}
        >
          إنشاء حساب شركة تشطيب
        </button>

        <button
          className={styles.providerBtn}
          onClick={() =>
            handleSelect("مصمم داخلي / شركة تصميم / رسام أوتوكاد")
          }
        >
          إنشاء حساب مصمم داخلي / شركة تصميم / رسام أوتوكاد
        </button>
      </div>
        </div>
    </div>
  );
};

export default ProviderTypePage;
