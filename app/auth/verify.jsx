"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register/register.module.css";

const Verify = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleVerify = (e) => {
    e.preventDefault();

    // التحقق من الكود
    if (code === "1234") {
      const data = JSON.parse(localStorage.getItem("registerData"));
      console.log("تم التسجيل بنجاح:", data);

      // تقدر هنا تبعت البيانات لـ API فعلي في المستقبل
      alert("تم إنشاء الحساب بنجاح ✅");

      // توجيه المستخدم للصفحة الرئيسية أو صفحة تسجيل الدخول
      router.push("/");
    } else {
      setError("كود التحقق غير صحيح ❌");
    }
  };

  return (
    <div className={styles.clientContainer}>
      <h2 className={styles.clientTitle}>تأكيد رقم الهاتف</h2>

      <form className={styles.form} onSubmit={handleVerify}>
        <div className={styles.formGroup}>
          <label className={styles.label}>أدخل كود التحقق</label>
          <input
            type="text"
            className={styles.input}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="أدخل 1234 كتجربة"
            required
          />
        </div>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

        <button type="submit" className={styles.submitBtn}>
          تأكيد
        </button>
      </form>
    </div>
  );
};

export default Verify;
