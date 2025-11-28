'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;
    setError('');

    if (!phone) {
      setError('يرجى إدخال رقم الهاتف');
      return;
    }

    if (!egyptianPhoneRegex.test(phone)) {
      setError('يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقم');
      return;
    }

    if (!password) {
      setError('يرجى إدخال كلمة المرور');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem(
          'userData',
          JSON.stringify({
            ...data.user,
            userType: data.userType,
          })
        );
        router.push('/home');
      } else {
        setError(data.error || 'حدث خطأ أثناء تسجيل الدخول');
      }
    } catch (err) {
      console.error('❌ Client-side error:', err);
      setError('حدث خطأ في الاتصال بالسيرفر');
    } finally {
      setLoading(false);
    }
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
        <div className={styles.formContainer}>
          <h1 className={styles.title}>
            SHATABHA<span className={styles.titleSpan}>.com</span>
          </h1>
          <p className={styles.description}>سهلنا التشطيب</p>

          <div className={styles.registerBtnCont}>
            <button
              className={styles.registerBtn}
              onClick={() => router.push('/auth/register')}
            >
              إنشاء حساب
            </button>
          </div>

<input
  type="tel"
  placeholder="رقم الهاتف"
  value={phone}
  onChange={(e) => {
    let val = e.target.value;

    // تحويل الأرقام العربية إلى إنجليزية
    val = val.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

    // السماح بالأرقام فقط
    val = val.replace(/[^0-9]/g, "");

    // منع تجاوز 11 رقم
    val = val.slice(0, 11);

    setPhone(val);
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
            maxLength={6}
          />

          {error && <p className={styles.errorText}>{error}</p>}

          <button
            className={styles.button}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل دخول'}
          </button>

          <p
            className={styles.forget}
            onClick={() => router.push('/auth/forgetpassword')}
          >
            نسيت كلمة المرور؟
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
