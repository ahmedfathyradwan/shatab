'use client';

import { useEffect } from 'react';
import styles from './styles/Error.module.css';

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.cont}>
      <p className={styles.tit}>حدث خطأ أثناء تحميل الصفحة.</p>

      <button onClick={reset} className={styles.btn}>
        إعادة المحاولة
      </button>
    </div>
  );
}
