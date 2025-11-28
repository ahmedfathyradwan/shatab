'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../form.module.css';

const ClientRegister = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف أو أكثر');
      return;
    }

    if (!/^01[0125][0-9]{8}$/.test(phone)) {
      setError('رقم الهاتف غير صالح، يجب أن يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقمًا');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone,
          password,
          role: 'client', // نوع الحساب الآن متوافق مع الباك
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { error: 'حدث خطأ أثناء معالجة الاستجابة من السيرفر' };
      }

      if (res.ok) {
        localStorage.setItem('registerData', JSON.stringify({ phone, role: 'client' }));
        router.push('/auth/verify');
      } else {
        setError(data.error || 'حدث خطأ أثناء إنشاء الحساب');
      }
    } catch (err) {
      console.error('❌ Client-side error:', err);
      setError('حدث خطأ أثناء إنشاء الحساب');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

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
              placeholder="يفضل يكون به حساب واتساب"
              required
              pattern="^01[0125][0-9]{8}$"
              maxLength={11}
              title="رقم الهاتف يجب أن يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقمًا"
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>كلمة المرور</label>
            <input
              type="password"
placeholder="اختار باسورد سهل عشان متنساهوش 😘"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength={6}
            />
          </div>

          {error && <p className={styles.errorText}>{error}</p>}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientRegister;
