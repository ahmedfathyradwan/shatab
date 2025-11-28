import styles from "./styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.cont}>
      <svg viewBox="25 25 50 50" className={styles.loaderContainer}>
        <circle cx="50" cy="50" r="20" className={styles.loaderCircle}></circle>
      </svg>
    </div>
  );
}
