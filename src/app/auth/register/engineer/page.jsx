'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../form.module.css';
import engineerRoles from '../../../data/engineerRoles.json';
import governoratesData from '../../../data/governorates.json';
import MySelect from '../../../components/MySelect.jsx';

export default function EngineerRegisterPage() {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [role, setRole] = useState(null);
  const [governorate, setGovernorate] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const roleOptions = engineerRoles.map((item) => ({ label: item, value: item }));
  const governorateOptions = governoratesData.map((item) => ({ label: item, value: item }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role || !governorate) {
      setError('يرجى اختيار المسمى الوظيفي والمحافظة');
      return;
    }

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف أو أكثر');
      return;
    }

    const data = {
      name,
      phone,
      password,
      role: role.value,
      governorate: governorate.value,
      accountType: 'engineer',
    };

    localStorage.setItem('registerData', JSON.stringify(data));
    router.push('/auth/verify');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>إنشاء حساب إشراف أو تنفيذ</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>الاسم ثنائي بالعربية</label>
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
                <label className={styles.label}>المسمى الوظيفي</label>
                <MySelect
                  key="engineer-role-select"
                  value={role}
                  onChange={setRole}
                  options={roleOptions}
                  placeholder="قائمة اختيار"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>العنوان</label>
                <MySelect
                  key="engineer-gov-select"
                  value={governorate}
                  onChange={setGovernorate}
                  options={governorateOptions}
                  placeholder="اختيار من قائمة محافظات مصر"
                />
              </div>
            </>
          )}

          <div className={styles.formGroup}>
            <label className={styles.label}>متوسط سعري لليوم (اختياري)</label>
            <input
              type="number"
              className={styles.input}
              placeholder="مثال: 600"
            />
          </div>

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
