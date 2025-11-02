'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../auth/form.module.css';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('registerData'));
    if (data?.phone) {
      setPhone(data.phone);
    } else {
      router.push('/auth/forgetpassword');
    }
  }, []);

  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setMessage('❌ كلمة المرور يجب ألا تقل عن 6 أحرف');
      return;
    }

    console.log('🔐 تغيير كلمة المرور:', phone, newPassword);

    localStorage.removeItem('registerData');
    setMessage('✅ تم تغيير كلمة المرور بنجاح');

    setTimeout(() => {
      router.push('/auth/login');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>تغيير كلمة المرور</h2>

        <form className={styles.form} onSubmit={handleReset}>
          <div className={styles.formGroup}>
            <label className={styles.label}>رقم الهاتف</label>
            <input
              type="tel"
              className={styles.input}
              value={phone}
              disabled
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>كلمة المرور الجديدة</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '2rem',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'var(--textColor)',
                }}
              >
                {showPassword ? '👁️' : '👁️'}
              </span>
            </div>
          </div>

          <button type="submit" className={styles.button}>
            تأكيد التغيير
          </button>
        </form>

        {message && <p className={styles.labelVerify}>{message}</p>}
      </div>
    </div>
  );
}
