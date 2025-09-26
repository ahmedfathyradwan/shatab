'use client'

import styles from './checklist.module.css'

export default function ChecklistPage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Finishing_Items_Checklist.pdf'
    link.download = 'Finishing_Items_Checklist.pdf'
    link.click()
  }

  const handlePreview = () => {
    // يفتح الملف في تبويب جديد للعرض
    window.open('/Finishing_Items_Checklist.pdf', '_blank')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>تحديد متطلبات التشطيب</h2>

      <div className={styles.parContainer}>
        <p className={styles.par}>
          تكمن أهمية تحديد متطلبات التشطيب في توفير تصور مناسب وعدم الوقوع في
          الأخطاء الشائعة والحفاظ على الوقت والجهد والمال،
        </p>
        <p className={styles.par}>
          وفرنا لك قائمة تحديد متطلبات التشطيب في شكل ملف جاهز للطباعة حتى تتمكن
          من تحديد تصورك النهائي بشكل مبسط،
        </p>
        <p className={styles.par2}>
          قم بتحميل الملف وطباعته وملئه بما يناسب تصورك.
        </p>
      </div>

      <div className={styles.btnGroup}>
        <button onClick={handlePreview} className={styles.previewBtn}>
          عرض الملف
        </button>

        <button onClick={handleDownload} className={styles.downloadBtn}>
          تحميل الملف
        </button>
      </div>
    </div>
  )
}
