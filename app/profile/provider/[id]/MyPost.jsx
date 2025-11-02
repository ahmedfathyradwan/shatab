"use client";
import styles from "./MyPost.module.css";
import { useState } from "react";

export default function MyPost({ data }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [featured, setFeatured] = useState(false); // حالة الإعلان المميز

  const maxImages = data.isPaidUser ? 3 : 1;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!image && maxImages >= 1) {
      setImage(URL.createObjectURL(file));
    } else if (image && data.isPaidUser && maxImages > 1) {
      alert(`يمكنك رفع أكثر من صورة لمستخدمي البريميوم فقط.`);
    } else {
      alert(`يمكنك رفع صورة واحدة فقط. للزيادة، قم بالاشتراك المدفوع.`);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    if (!image) {
      alert("يرجى رفع صورة للإعلان.");
      return;
    }
    if (!description || !contact) {
      alert("يرجى تعبئة الوصف ورقم التواصل.");
      return;
    }

    if (featured && !data.isPaidUser) {
      alert("ميزة الإعلان المميز متاحة فقط للمستخدمين المدفوعين.");
      return;
    }

    // هنا ترسل البيانات للباك اند
    console.log({
      image,
      description,
      contact,
      userId: data.id,
      featured, // حالة الإعلان المميز
    });

    alert("تم رفع الإعلان بنجاح!");
  };

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>إعلان جديد</h2>

      <label className={styles.singleButton}>
        رفع صورة
        <input type="file" accept="image/*" onChange={handleImageChange} hidden />
      </label>

      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt="ad" className={styles.imagePreview} />
          <button className={styles.removeImageButton} onClick={handleRemoveImage}>
            ✖
          </button>
        </div>
      )}

      <textarea
        className={styles.descriptionInput}
        placeholder="أدخل وصف الإعلان"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        className={styles.contactInput}
        placeholder="رقم التواصل (واتساب)"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <button className={styles.submitButton} onClick={handleSubmit}>
        رفع الإعلان
      </button>
    </div>
  );
}
