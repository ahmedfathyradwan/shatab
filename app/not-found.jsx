import styles from "./styles/Not-found.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.cont}>
      <p className={styles.tit}>الصفحة غير موجودة</p>

      <a href="/home" className={styles.btn}>
        الرجوع إلى الصفحة الرئيسية
      </a>
    </div>
  );
}
