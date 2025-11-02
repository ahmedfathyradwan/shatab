'use client'

import styles from './ai.module.css'
import { useState } from 'react'

export default function AiPage() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!image) return alert("من فضلك ارفع صورة الغرفة أولاً")
    // 🚀 هنا لاحقًا يتم توصيل الصورة بـ API للذكاء الاصطناعي
    alert("🚀 قريبًا: سيتم إرسال الصورة للذكاء الاصطناعي لتلوين الغرفة.")
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>AI تلوين الغرفة</h2>
      <p className={styles.par}>
        ارفع صورة غرفتك ودع الذكاء الاصطناعي يقترح ألوان حوائط وأثاث متناسقة.
      </p>

      <form onSubmit={handleSubmit} className={styles.uploadForm}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        {preview && (
          <div className={styles.previewWrapper}>
            <img src={preview} alt="معاينة الغرفة" className={styles.previewImage} />
          </div>
        )}
        <button type="submit" className={styles.submitBtn}>
          تحليل الصورة وتوليد ألوان
        </button>
      </form>
    </div>
  )
}
