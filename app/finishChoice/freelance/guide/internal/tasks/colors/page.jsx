'use client'

import styles from './colors.module.css'
import Link from 'next/link'

export default function ColorsPage() {
  const methods = [
    { 
      id: 1, 
      title: "التغذية البصرية",
      path: "/finishChoice/freelance/guide/internal/tasks/colors/visual", 
      desc: "تصفح صور غرف حقيقية واختر بالتة الألوان اللي عجبتك لتطبيقها في شقتك.",
      image: "/images/visual.jpg"
    },
    { 
      id: 2, 
      title: "استوحاء ألوان من قطعة أثاث موجودة",
      path: "/finishChoice/freelance/guide/internal/tasks/colors/extract", 
      desc: "التقاط ألوان من قطعة أثاث، لوحة، أو ستارة عندك في البيت لتبني عليها باقي البالتة.",
      image: "/images/extract.jpg"
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>اختر طريقة تحديد الألوان</h2>
      <p className={styles.par}>يمكنك تجربة أكثر من طريقة للوصول لبالتة ألوان تناسب ذوقك ومساحتك.</p>

      <div className={styles.methodsGrid}>
        {methods.map((m) => (
          <Link key={m.id} href={m.path} className={styles.methodCard}>
            <div className={styles.imageWrapper}>
              <img src={m.image} alt={m.title} className={styles.methodImage} />
            </div>
            <div className={styles.methodContent}>
              <h3 className={styles.methodTitle}>{m.title}</h3>
              <p className={styles.methodDesc}>{m.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
