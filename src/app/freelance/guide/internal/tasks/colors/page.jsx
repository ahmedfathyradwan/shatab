'use client'

import styles from './colors.module.css'
import Link from 'next/link'

export default function ColorsPage() {
  const methods = [
        { 
      id: 0,
      title: "حسب نوع التشطيب (finish-type)", 
      path: "/freelance/guide/internal/tasks/colors/finish-type", 
      desc: "توليد بالتات ألوان متناسقة حسب الطراز: مودرن، كلاسيك، بوهو، أو سكندنافي." 
    },
    { 
      id: 1,
      title: "بالتات شقق جاهزة",
      path: "/freelance/guide/internal/tasks/colors/ready-palettes",
      desc: "شاهد بالتات ألوان جاهزة لشقق مكتملة، كل اللي عليك تختار البالتة اللي تعجبك بدون أي مجهود."
    },
    { 
      id: 2,
      title: "Mood / إحساس", 
      path: "/freelance/guide/internal/tasks/colors/mood", 
      desc: "اختيار الألوان حسب الإحساس اللي عايز تحس بيه في الغرفة (مبهج، دافئ، هادئ...)." 
    },
    { 
      id: 3, 
      title: "التغذية البصرية",
      path: "/freelance/guide/internal/tasks/colors/visual", 
      desc: "تصفح صور غرف حقيقية واختر بالتة الألوان اللي عجبتك لتطبيقها في شقتك." 
    },
    { 
      id: 4, 
      title: "استوحاء ألوان من قطعة أثاث موجودة",
      path: "/freelance/guide/internal/tasks/colors/extract", 
      desc: "التقاط ألوان من قطعة أثاث، لوحة، أو ستارة عندك في البيت لتبني عليها باقي البالتة." 
    },
    { 
      id: 5, 
      title: "قريبا.... AI تلوين الغرفة", 
      path: "/freelance/guide/internal/tasks/colors/ai", 
      desc: "ارفع صورة غرفتك ودع الذكاء الاصطناعي يقترح ألوان حوائط وأثاث متناسقة." 
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>اختر طريقة تحديد الألوان</h2>
      <p className={styles.par}>يمكنك تجربة أكثر من طريقة للوصول لبالتة ألوان تناسب ذوقك ومساحتك.</p>

      <div className={styles.methodsGrid}>
        {methods.map((m) => (
          <Link key={m.id} href={m.path} className={styles.methodCard}>
            <div>
              <h3 className={styles.methodTitle}>{m.title}</h3>
              <p className={styles.methodDesc}>{m.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
