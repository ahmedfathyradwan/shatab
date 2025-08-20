"use client";

import React from "react";
import styles from "../register/register.module.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleSelect = (type) => {
    router.push(`/auth/register/${type}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
                <img src="/shatab/images/signMob.jpg" className={styles.signImg} />
      </div>
      <div className={styles.borderCont}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>SHATAB<span className={styles.titleSpan}>.eg</span></h1>
          <p className={styles.description}>سهلنا التشطيب</p>
          <button
            className={styles.clientButton}
            onClick={() => handleSelect("client")}
          >
            حساب عميل
          </button>
          <button
            className={styles.providerButton}
            onClick={() => handleSelect("provider")}
          >
            حساب مقدم خدمة <br /><span className={styles.btnSpan}>( مهندس / رسام / فني / مقاول / معرض<br />  مكتب / شركة ...إلخ )</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
