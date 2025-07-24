"use client";

import React, { useState } from "react";
import styles from "../../styles/freelance/tPost.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const MySelectClient = dynamic(() => import("@/app/components/ClientMySelectWrapper"), {
  ssr: false,
});

const providerOptions = [
  { value: "company", label: "شركات تشطيب فقط" },
  { value: "freelance", label: "فنيين ومقاولين وشركات صيانة فقط" },
  { value: "both", label: "كلا النوعين ( للمقارنة )" },
];

const PostPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [providerType, setProviderType] = useState(null);
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      !serviceType.trim() ||
      !area.trim() ||
      !address.trim() ||
      !providerType ||
      !agreed
    ) {
      setError("يرجى ملء جميع الحقول والموافقة على الشروط");
      return;
    }

    setError("");
    setSubmitted(true);
    resetForm();

    // ✅ إخفاء الرسالة بعد 10 ثواني
    setTimeout(() => setSubmitted(false), 10000);
  };

  const resetForm = () => {
    setServiceType("");
    setArea("");
    setAddress("");
    setProviderType(null);
    setDescription("");
    setAgreed(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>نشر طلب تشطيب</h2>
      <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>نوع الخدمة المطلوبة</label>
        <input
          type="text"
          placeholder="مثال :  تشطيب كامل - سباكة - محارة .... إلخ"
          className={styles.input}
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        />

        <label className={styles.label}>مساحة المكان بالمتر المربع</label>
        <input
          type="number"
          placeholder="مساحة المكان تساوي حاصل ضرب طول المكان بالمتر في عرضه بالمتر"
          className={styles.input}
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <label className={styles.label}>العنوان تفصيلا قدر الإمكان</label>
        <input
          type="text"
          placeholder="محافظة - مدينة - حي - شارع - رقم المنزل"
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
          placeholder="برجاء شرح تفاصيل طلبك"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
        />

        <label className={styles.label}>إضافة صورة للمكان المراد تشطيبه (اختياري)</label>
        <div className={styles.uploadWrapper}>
          <label htmlFor="fileUpload" className={styles.uploadButton}>
            اختر صورة
          </label>
          <input type="file" id="fileUpload" className={styles.hiddenInput} />
        </div>

        <p className={styles.note}>
          هام جدا ... يرجى طلب صورة البطاقة الشخصية لمن سيختاره لتنفيذ طلبك قبل البدء في التنفيذ
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
          نشر طلب تشطيب
        </button>

        {submitted && (
          <div className={styles.result}>
            <p>تم نشر طلبك بنجاح</p>
            <p>في انتظار تقديم العروض من مقدمي الخدمات</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default PostPage;
