'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../auth/form.module.css';

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purpose, setPurpose] = useState('register'); // الحالة الافتراضية
  const [message, setMessage] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('registerData'));
    if (data?.phone) {
      setPhoneNumber(data.phone);
      setPurpose(data.purpose || 'register');

      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      setSentCode(generatedCode);
      console.log('كود التحقق هو:', generatedCode);
    } else {
      router.push('/auth/register/client');
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const handleResend = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(newCode);
    setSeconds(30);
    setCanResend(false);
    setMessage('✅ تم إرسال كود جديد');
    console.log('📨 كود جديد:', newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === sentCode) {
      setMessage('✅ تم تأكيد رقم الهاتف بنجاح');

      localStorage.removeItem('registerData');

      setTimeout(() => {
        if (purpose === 'reset') {
          router.push('/auth/resetpassword');
        } else {
          router.push('/auth/login');
        }
      }, 1500);
    } else {
      setMessage('❌ الكود غير صحيح، حاول مرة أخرى');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>تأكيد رقم الهاتف</h2>
        <p className={styles.labelVerify}>
          تم إرسال كود تحقق إلى رقم الهاتف: <strong>{phoneNumber}</strong>
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.labelVerify}>ادخل كود التحقق</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              className={styles.input}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="مثال: 123456"
              required
            />
          </div>

          <button type="submit" className={styles.buttonVerify}>
            تأكيد الكود
          </button>
        </form>

        <div className={styles.formGroup}>
          {canResend ? (
            <button className={styles.smallButtonVerify} onClick={handleResend}>
              إعادة إرسال الكود
            </button>
          ) : (
            <p className={styles.labelVerify}>يمكنك إعادة الإرسال خلال {seconds} ثانية</p>
          )}
        </div>

        {message && <p className={styles.labelVerify}>{message}</p>}
      </div>
    </div>
  );
}
