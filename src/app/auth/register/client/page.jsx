"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../form.module.css";

const ClientRegister = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف أو أكثر");
      return;
    }

    const data = {
      name,
      phone,
      password,
      accountType: "client",
    };

    localStorage.setItem("registerData", JSON.stringify(data));
    router.push("/auth/verify");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>إنشاء حساب عميل</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label className={styles.label}>الإسم ثنائي بالعربية</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>رقم الهاتف</label>
          <input
            type="tel"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}>كلمة المرور</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.errorText}>{error}</p>}

        <button type="submit" className={styles.button}>
          إنشاء حساب
        </button>
      </form>
      </div>
    </div>
  );
};

export default ClientRegister;
