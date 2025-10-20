'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../form.module.css';
import companyType from '../../../data/companyTypes';
import governoratesData from '../../../data/governorates.js';
import MySelect from '../../../components/MySelect.jsx';

export default function MaintenanceCompanyRegisterPage() {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [jobTitle, setJobTitle] = useState(null);
  const [governorate, setGovernorate] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const jobTitleOptions = companyType.map((item) => ({ label: item, value: item })); // جديد
  const governorateOptions = governoratesData.map((item) => ({ label: item, value: item }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !governorate) {
      setError('يرجى اختيار المسمى الوظيفي والمحافظة');
      return;
    }

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف أو أكثر');
      return;
    }

    const data = {
      name,
      jobTitle: jobTitle.value,
      governorate: governorate.value,
      phone,
      password,
      accountType: 'maintenance-company',
    };

    localStorage.setItem('registerData', JSON.stringify(data));
    router.push('/auth/verify');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>إنشاء حساب شركة أو مكتب</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>الاسم ثنائي</label>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {isClient && (
            <>
              <div className={styles.formGroup}>
                <label className={styles.label}>التخصص</label>
                <MySelect
                  key="job-select"
                  value={jobTitle}
                  onChange={setJobTitle}
                  options={jobTitleOptions}
                  placeholder="شركة تشطيب - شركة صيانة ..."
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>العنوان</label>
                <MySelect
                  key="gov-select"
                  value={governorate}
                  onChange={setGovernorate}
                  options={governorateOptions}
                  placeholder="اختيار من قائمة محافظات مصر"
                />
              </div>
            </>
          )}

          <div className={styles.formGroup}>
            <label className={styles.label}>رقم الهاتف</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="يفضل يكون به حساب واتساب"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="^01[0125][0-9]{8}$"
              maxLength={11}
              title="رقم الهاتف يجب أن يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقمًا"
            />
          </div>

          <div className={styles.formGroup}>
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
}
