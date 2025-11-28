'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './forgetpassword.module.css';

const ForgetPassword = () => {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSendCode = () => {
    const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;

    if (!phone) {
      alert('يرجى إدخال رقم الهاتف');
      return;
    }

    if (!egyptianPhoneRegex.test(phone)) {
      alert('يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقم');
      return;
    }

    // حفظ الرقم والغرض من التحقق في localStorage
    localStorage.setItem(
      'registerData',
      JSON.stringify({ phone, purpose: 'reset' })
    );

    // تحويل المستخدم لصفحة التحقق
    router.push('/auth/verify');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>نسيت كلمة المرور؟</h1>
        <div className={styles.formGroup}>
          <p className={styles.label}>ادخل رقم الهاتف لإرسال كود التحقق</p>
<input
  type="tel"
  placeholder="رقم الهاتف"
  value={phone}
  onChange={(e) => {
    let val = e.target.value;

    // تحويل الأرقام العربية إلى إنجليزية
    val = val.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

    // السماح بالأرقام فقط
    if (/^\d*$/.test(val)) {
      setPhone(val);
    }
  }}
  maxLength={11}
  required
  className={styles.input}
/>
        </div>

        <button className={styles.button} onClick={handleSendCode}>
          إرسال الكود
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
