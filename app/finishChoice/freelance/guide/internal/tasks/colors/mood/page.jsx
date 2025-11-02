'use client'

import styles from './mood.module.css'
import moods from '../../../../../../../data/moods'

export default function MoodPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>اختر Mood / إحساس</h2>
      <p className={styles.par}>
        تصفح الأنواع المختلفة وشوف البالتات الجاهزة لكل Mood عشان تختار اللي يناسب ذوقك.
      </p>

      <div className={styles.moodsGrid}>
        {moods.map((m) => (
          <div key={m.id} className={styles.moodCard}>
            <h3 className={styles.moodName}>{m.name}</h3>
            <p className={styles.moodDesc}>{m.desc}</p>

            {/* عرض كل البالتات */}
            {m.palettes.map((palette, idx) => (
              <div key={idx} className={styles.resultColors}>
                {palette.map((c, i) => (
                  <div 
                    key={i} 
                    className={styles.resultColor} 
                    style={{ backgroundColor: c }}
                  >
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
