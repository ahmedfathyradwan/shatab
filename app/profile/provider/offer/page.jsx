"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import requests from "../../../mockData/requests";
import styles from "./OfferPage.module.css";

export default function OfferPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const request = requests.find((r) => r.id === Number(id)) || requests[0];

  // ✅ نمنع الـ mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // يمنع الـ hydration error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmChecked) {
      alert("يجب تأكيد أنك طلبت صورة البطاقة الشخصية من العميل قبل المتابعة.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>تقديم عرض</h2>

      {/* 🔹 تفاصيل الطلب */}
      <div className={styles.requestCard}>
        <div className={styles.requestInfo}>
          <p>
            <strong>الخدمة المطلوبة:</strong> {request.serviceType}
          </p>
          <p>
            <strong>المنطقة:</strong> {request.address}
          </p>
          <p>
            <strong>تاريخ النشر:</strong> {request.date}
          </p>
          <p className={styles.desc}>{request.description}</p>
          <p>
            <strong>اسم العميل:</strong> {request.providerType} | {request.area} م²
          </p>
        </div>
        <img
          src={request.image}
          alt={request.serviceType}
          className={styles.image}
        />
      </div>

      {/* 🔹 بعد التقديم */}
      {submitted ? (
        <div className={styles.successBox}>
          <p>✅ تم تقديم عرضك بنجاح</p>
          <p>في انتظار قبول العميل لعرضك بالتوفيق!</p>

          <button
            className={styles.backButton}
            onClick={() => router.push(`/profile/provider/${id}`)}
          >
            الرجوع إلى الملف الشخصي
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="السعر تقريبا"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="مدة التنفيذ المتوقعة"
            className={styles.input}
            required
          />
          <input
            type="date"
            placeholder="تاريخ البدء في التنفيذ"
            className={styles.input}
            required
          />
          <input
  type="tel"
  placeholder="رقم الهاتف"
  className={styles.input}
  required
  pattern="^(010|011|012|015)[0-9]{8}$"
  title="الرجاء إدخال رقم هاتف مصري صحيح مكون من 11 رقمًا (يبدأ بـ 010 أو 011 أو 012 أو 015)"
/>

          {/* ✅ التشيك بوكس */}
          <div className={styles.warningBox}>
            <input
              type="checkbox"
              id="confirm"
              checked={confirmChecked}
              onChange={(e) => setConfirmChecked(e.target.checked)}
              required
            />
            <label htmlFor="confirm" className={styles.warning}>
              هام جدًا: برجاء طلب صورة البطاقة الشخصية للعميل قبل بدء التنفيذ وإعطائها لأحد أفراد عائلتك وإعلامهم بمكان عملك.
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            تقديم عرض
          </button>
        </form>
      )}
    </div>
  );
}
