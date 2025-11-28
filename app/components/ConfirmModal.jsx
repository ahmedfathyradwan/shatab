// components/ConfirmModal.jsx
'use client';

import styles from '../styles/ConfirmModal.module.css';

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.confirmOverlay}>
      <div className={styles.confirmModal}>
        <p>{message}</p>
        <div className={styles.confirmActions}>
          <button className={styles.confirmDelete} onClick={onConfirm}>
            تأكيد
          </button>
          <button className={styles.cancelDelete} onClick={onCancel}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
