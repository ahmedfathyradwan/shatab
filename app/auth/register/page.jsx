"use client";

import Image from "next/image";
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
                  <Image
          src="/images/logo.png"
          alt="Logo"
          width={176}
          height={200}
          className={styles.signImg}
        />
      </div>
      <div className={styles.borderCont}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>SHATABHA<span className={styles.titleSpan}>.com</span></h1>
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
