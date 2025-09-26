'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

const LoginPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;

    if (!phone) {
      alert('يرجى إدخال رقم الهاتف');
      return;
    }

    if (!egyptianPhoneRegex.test(phone)) {
      alert('يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقم');
      return;
    }

    if (!password) {
      alert('يرجى إدخال كلمة المرور');
      return;
    }

    // تابع تسجيل الدخول
    console.log('Logging in with:', phone, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/images/signMob.jpg" className={styles.signImg} />
      </div>

      <div className={styles.borderCont}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>SHATAB<span className={styles.titleSpan}>.eg</span></h1>
          <p className={styles.description}>سهلنا التشطيب</p>
          <div className={styles.registerBtnCont}>
            <button className={styles.registerBtn} onClick={() => router.push('/auth/register')}>
              إنشاء حساب
            </button>
          </div>

          <input
            type="tel"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) setPhone(val);
            }}
            maxLength={11}
            required
            className={styles.input}
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />

          <button className={styles.button} onClick={handleLogin}>
            تسجيل دخول
          </button>

          <p className={styles.forget} onClick={() => router.push('/auth/forgetpassword')}>
            نسيت كلمة المرور؟
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;