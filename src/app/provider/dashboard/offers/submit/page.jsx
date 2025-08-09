'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import requests from "../../../../mockData/clientRequests";
import styles from "./submit.module.css";

const SubmitOffer = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const request = requests.find((r) => r.id === Number(id));

  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const egyptianPhoneRegex = /^01[0-9]{9}$/;

    if (!price || !duration || !startDate || !phone || !notes) {
      setError("يرجى ملء جميع الحقول.");
      return;
    }

    if (!egyptianPhoneRegex.test(phone)) {
      setError("يرجى إدخال رقم هاتف مصري صحيح.");
      return;
    }

    if (!agreed) {
      setError("يجب الموافقة على الشروط قبل تقديم العرض.");
      return;
    }

    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);

    // إفراغ الحقول
    setNotes("");
    setPrice("");
    setDuration("");
    setStartDate("");
    setPhone("");
    setAgreed(false);
  };

  if (!request) return <p className={styles.noResults}>هذا الطلب غير موجود.</p>;

  return (
    <div className={styles.profileSection}>
      {/* كارت الطلب */}
      <div className={styles.card}>
        {request.image && (
          <a href={request.image} target="_blank" rel="noopener noreferrer">
            <img src={request.image} alt="صورة المكان" className={styles.image} />
          </a>
        )}
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.label}>الخدمة المطلوبة:</span>
            <span className={styles.value}>{request.serviceType}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>المساحة:</span>
            <span className={styles.value}>{request.area} متر مربع</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>العنوان:</span>
            <span className={styles.value}>{request.address}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>الوصف:</span>
            <span className={styles.value}>{request.description}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>تاريخ النشر:</span>
            <span className={styles.value}>{request.date}</span>
          </div>
        </div>
      </div>

      {/* العنوان */}
      <h2 className={styles.title}>تقديم عرض</h2>

      {/* الفورم */}
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.labelForm}>كتابة عرض للعميل</label>
        <textarea
          placeholder="كتابة عرض للعميل وشرح ما سأقوم به"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={5}
          className={styles.textarea}
        />

        <label className={styles.labelForm}>السعر التقريبي</label>
        <input
          type="text"
          placeholder="السعر تقريبًا"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className={styles.labelForm}>مدة التنفيذ المتوقعة</label>
        <input
          type="text"
          placeholder="مدة التنفيذ المتوقعة"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label className={styles.labelForm}>تاريخ البدء المتوقع</label>
        <input
          type="date"
          placeholder="تاريخ البدء في التنفيذ"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label className={styles.labelForm}>رقم الهاتف</label>
        <input
          type="tel"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => {
            const input = e.target.value;
            if (/^0?$/.test(input) || /^01[0-9]{0,9}$/.test(input)) {
              setPhone(input);
            }
          }}
          onBlur={() => {
            if (phone && !/^01[0-9]{9}$/.test(phone)) {
              alert("رقم الهاتف غير صحيح. يجب أن يكون رقم مصري مكوّن من 11 رقمًا ويبدأ بـ01");
            }
          }}
        />

        <p className={styles.note}>
          هام جدًا ... يُرجى طلب صورة البطاقة الشخصية للعميل قبل البدء في التنفيذ وإعلام عائلتك بمكان عملك
        </p>

        <div className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label>الموافقة على الشروط</label>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {submitted && <p className={styles.success}>تم تقديم العرض بنجاح</p>}

        <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
          تقديم عرض
        </button>
      </form>
    </div>
  );
};

export default SubmitOffer;
