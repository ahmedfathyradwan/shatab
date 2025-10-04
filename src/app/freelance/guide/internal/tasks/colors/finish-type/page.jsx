'use client'

import styles from './finishtype.module.css'
import finishOptions from '../../../../../../data/finishOptions'

export default function FinishTypePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>اختيار الألوان حسب نوع التشطيب</h2>
      <p className={styles.par}>
        كل نوع من التشطيبات يحتوي على عدة بالتات ألوان متناسقة، اختر منها ما يناسبك.
      </p>

      {/* عرض الأنواع وكل باليتاتها */}
      <div className={styles.finishGrid}>
        {finishOptions.map((f) => (
          <div key={f.id} className={styles.finishCard}>
            <h3 className={styles.finishName}>{f.name}</h3>

            <div className={styles.palettesList}>
              {f.palettes.map((palette, idx) => (
                <div key={idx} className={styles.paletteRow}>
                  {palette.map((c, i) => (
                    <div
                      key={i}
                      className={styles.colorBox}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
