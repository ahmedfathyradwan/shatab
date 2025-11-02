'use client';

import CloseArrowIcon from './icons/CloseArrowIcon';
import Link from 'next/link';
import styles from '../styles/sideMenu.module.css';

export default function SideMenu({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.menu}>
        <button onClick={onClose} className={styles.closeButton}>
          <CloseArrowIcon className={styles.closeIcon} />
        </button>
        <nav className={styles.links}>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>الرئيسية</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>المعرض</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>تشطيب مع شركة</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>دليل التشطيب</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>نشر طلب تشطيب</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>شركات تشطيب</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>تشطيب حر</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>حساب التكلفه المبدئية</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>دليل التشطيب</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>نشر طلب تشطيب</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>شركات تركيب وصيانة</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>الفنيين "الصنايعية"</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>المقاوليين</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.secLink}`}>المعارض</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>معلومات عنا</Link>
          <Link href="/" onClick={onClose} className={`${styles.link} ${styles.firstLink}`}>تواصل معنا</Link>
        </nav>
      </div>
    </div>
  );
}
