'use client'

import styles from './visualization.module.css'

export default function VisualizationPage() {
  const drawings = [
    {
      id: 1,
      title: "مخطط 2D لغرفة المعيشة",
      type: "2D",
      image: "/images/living-room-2d.jpg",
      desc: "توزيع الأثاث والجدران بشكل واضح لتسهيل التخطيط."
    },
    {
      id: 2,
      title: "مخطط 3D لغرفة المعيشة",
      type: "3D",
      image: "/images/living-room-3d.jpg",
      desc: "تصور واقعي للغرفة مع الألوان والخامات."
    },
    {
      id: 3,
      title: "فيديو تخيلي",
      type: "2D",
      image: "/images/kitchen-2d.jpg",
      desc: "رسم تفصيلي لتوزيع الأدوات والمخارج."
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>إنشاء الرسومات - 2D & 3D</h2>
      <p className={styles.par}>استعرض المخططات والتصورات ثلاثية الأبعاد لتسهيل تصور الشقة قبل التنفيذ.</p>

      <div className={styles.grid}>
        {drawings.map(d => (
          <div key={d.id} className={styles.card}>
            <img src={d.image} alt={d.title} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.titleCard}>{d.title}</h3>
              <span className={styles.type}>{d.type}</span>
              <p className={styles.desc}>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
