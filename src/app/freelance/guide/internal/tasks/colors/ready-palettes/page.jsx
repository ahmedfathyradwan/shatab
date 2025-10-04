'use client'

import styles from './readyPalettes.module.css'

export default function ReadyPalettesPage() {
  const flats = [
    {
      id: 1,
      name: "شقة مودرن 70م²",
      colors: ["#F5F5F5", "#C5A880", "#6B4F4F"],
      image: "/images/flat1.jpg",
    },
    {
      id: 2,
      name: "شقة كلاسيك 85م²",
      colors: ["#EDE0D4", "#A58A6F", "#3E3A39"],
      image: "/images/flat2.jpg",
    },
    {
      id: 3,
      name: "شقة بوهو 60م²",
      colors: ["#FFF4E1", "#FFB085", "#6B4226"],
      image: "/images/flat3.jpg",
    },
    {
      id: 4,
      name: "شقة سكندنافي 75م²",
      colors: ["#FFFFFF", "#DDE2E4", "#7D8A7C"],
      image: "/images/flat4.jpg",
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>بالتات شقق جاهزة</h2>
      <p className={styles.par}>اختر شقة وشوف البالتة المتناسقة بدون أي مجهود.</p>

      <div className={styles.grid}>
        {flats.map(flat => (
          <div key={flat.id} className={styles.card}>
            <img src={flat.image} alt={flat.name} className={styles.image} />
            <h3 className={styles.flatName}>{flat.name}</h3>
            <div className={styles.colors}>
              {flat.colors.map((color, index) => (
                <span
                  key={index}
                  className={styles.colorCircle}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
