'use client';

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./maintenanceRequest.module.css";
import serviceToProviderMap from "../../data/serviceToProviderMap";

// اجعل MySelectClient client-only
const MySelectClient = dynamic(
  () => import("../../components/ClientMySelectWrapper"),
  { ssr: false }
);

const providerOptions = [
  { value: "both", label: "جميع مقدمي الخدمات" },
  { value: "company", label: "شركات ومكاتب صيانة فقط" },
  { value: "freelance", label: "فنيين ومقاولين فقط" },
];

const serviceOptions = Object.keys(serviceToProviderMap).map((service) => ({
  value: service,
  label: service,
}));

const MaintenanceRequestPage = () => {
  // اجعل كل ال-state controlled من البداية
  const [serviceType, setServiceType] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [providerType, setProviderType] = useState("");
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!serviceType || !area.trim() || !address.trim() || !providerType || !agreed) {
      setError("يرجى ملء جميع الحقول والموافقة على الشروط");
      return;
    }

    setError("");
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 10000);
  };

  const resetForm = () => {
    setServiceType("");
    setArea("");
    setAddress("");
    setProviderType("");
    setDescription("");
    setAgreed(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>نشر طلب صيانة</h2>
      <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
        
        <label className={styles.label}>نوع الخدمة المطلوبة</label>
        <div className={styles.selectContainer}>
          <MySelectClient
            value={serviceType}
            onChange={setServiceType}
            options={serviceOptions}
            placeholder="اختر نوع الخدمة"
          />
        </div>

        <label className={styles.label}>العنوان تفصيلاً قدر الإمكان</label>
        <input
          type="text"
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label className={styles.label}>نوع مقدمي الخدمة المراد التعامل معهم</label>
        <div className={styles.selectContainer}>
          <MySelectClient
            value={providerType}
            onChange={setProviderType}
            options={providerOptions}
            placeholder="اختر نوع مقدم الخدمة"
          />
        </div>

        <label className={styles.label}>وصف للمطلوب تنفيذه</label>
        <textarea
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
        />

        <label className={styles.label}>إضافة صورة للمكان (اختياري)</label>
        <div className={styles.uploadWrapper}>
          <label htmlFor="fileUpload" className={styles.uploadButton}>
            اختر صورة
          </label>
          <input type="file" id="fileUpload" className={styles.hiddenInput} />
        </div>

        <p className={styles.note}>
          هام: اطلب صورة البطاقة من منفذ الخدمة "للأمان"
        </p>

        <div className={styles.typeCont}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label className={styles.label}>الموافقة على الشروط</label>
        </div>

        <Link href="/freelance/terms" className={styles.termsLink}>
          اقرأ الشروط والأحكام
        </Link>

        {error && (
          <p style={{ color: "red", textAlign: "center", fontSize: "var(--fs15)" }}>
            {error}
          </p>
        )}

        <button type="button" className={styles.calculateButton} onClick={handleSubmit}>
          نشر طلب صيانة
        </button>

        {submitted && (
          <div className={styles.result}>
            <p>تم نشر طلبك بنجاح</p>
            <p>في انتظار العروض</p>
          </div>
        )}
      </form>
    </div>
  );
};

// اجعل الصفحة client-only بالكامل لمنع Hydration Errors
export default dynamic(() => Promise.resolve(MaintenanceRequestPage), { ssr: false });
