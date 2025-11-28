'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../form.module.css';
import freelancer from '../../../data/freelancerTypes.js';
import governoratesData from '../../../data/governorates.js';
import MySelect from '../../../components/MySelect.jsx';

export default function FreelancerRegisterPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [jobTitle, setJobTitle] = useState(null);
  const [governorate, setGovernorate] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const jobTitleOptions = freelancer.map((item) => ({ label: item, value: item }));
  const governorateOptions = governoratesData.map((item) => ({ label: item, value: item }));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!jobTitle || !governorate) {
      setError('يرجى اختيار المسمى الوظيفي والمحافظة');
      return;
    }

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
          role: 'serviceProvider', // النوع العام لمقدمي الخدمات
          providerType: 'freelancer',
          jobTitle: jobTitle.value,
          avgPrice: parseFloat(price) || null,
          address: governorate.value,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { error: 'حدث خطأ أثناء معالجة الاستجابة من السيرفر' };
      }

      if (res.ok) {
        localStorage.setItem(
          'registerData',
          JSON.stringify({ phone, role: 'serviceProvider' })
        );
        router.push('/auth/verify');
      } else {
        setError(data.error || 'حدث خطأ أثناء التسجيل');
      }
    } catch (err) {
      console.error('❌ Client-side error:', err);
      setError('حدث خطأ أثناء الاتصال بالسيرفر');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>إنشاء حساب فردي</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label className={styles.label}>الاسم ثنائي بالعربية</label>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>المسمى الوظيفي</label>
            <MySelect
              key="job-select"
              value={jobTitle}
              onChange={setJobTitle}
              options={jobTitleOptions}
              placeholder="مهندس - مقاول - مصمم - فني ..."
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>العنوان</label>
            <MySelect
              key="gov-select"
              value={governorate}
              onChange={setGovernorate}
              options={governorateOptions}
              placeholder="اختيار من قائمة محافظات مصر"
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>متوسط السعر</label>
            <input
              type="number"
              className={styles.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="اختياري"
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label}>رقم الهاتف</label>
<input
  type="tel"
  className={styles.input}
  placeholder="يفضل يكون به حساب واتساب"
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
  required
  pattern="^01[0125][0-9]{8}$"
  maxLength={11}
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
            {loading ? 'جارٍ التسجيل...' : 'إنشاء حساب'}
          </button>
        </form>
      </div>
    </div>
  );
}
