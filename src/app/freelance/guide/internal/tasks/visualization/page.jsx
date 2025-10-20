'use client'

import { useRef, useState } from 'react'
import styles from './visualization.module.css'

export default function VisualizationPage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const drawings = [
    {
      id: 1,
      title: "رسمة ثنائية الأبعاد 2D",
      type: "Image",
      image: "/images/2d.jpg",
      desc: [
        "تمثل الأساس الذي يعتمد عليه التنفيذ في الموقع.",
        "توضح توزيع العناصر والمسافات بدقة لتجنب الأخطاء.",
        "تساعد في تنسيق أعمال الكهرباء والسباكة والتشطيب."
      ],
      responsible: [
        "المهندس المعماري",
        "رسام 2D"
      ]
    },
    {
      id: 2,
      title: "رسمة ثلاثية الأبعاد 3D",
      type: "Image",
      image: "/images/3d.jpg",
      desc: [
        "تُظهر الشكل النهائي للشقة بشكل واقعي قبل التنفيذ.",
        "تساعد في اتخاذ قرارات دقيقة بخصوص الألوان والخامات والإضاءة.",
        "تقلل من احتمالية التعديلات المكلفة أثناء التنفيذ."
      ],
      responsible: [
        "المهندس المعماري",
        "رسام 3D"
      ]
    },
    {
      id: 3,
      title: "فيديو تخيلي للشقة",
      type: "Video",
      image: "/images/3D VID.mp4",
      desc: [
        "يوفر تجربة بصرية واقعية للحركة داخل التصميم.",
        "يساعد العميل على فهم توزيع المساحات والتناسق بين الغرف.",
        "يُستخدم كمرجع بصري للفريق أثناء التنفيذ."
      ],
      responsible: [
        "مصمم داخلي",
        "مصمم فيديوهات تخيلية (3D Motion Designer)"
      ]
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>إنشاء الرسومات - 2D & 3D "اختياري"</h2>
      <p className={styles.par}>
        توضح هذه المرحلة التصور البصري الكامل لمساحات المشروع من خلال الرسومات الثنائية والثلاثية الأبعاد والفيديوهات التخيّلية، مما يساعد على فهم التصميم النهائي قبل بدء التنفيذ واتخاذ القرارات بدقة.
      </p>

      <div className={styles.grid}>
        {drawings.map(d => (
          <div key={d.id} className={styles.card}>
            {d.type === "Video" ? (
              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  src={d.image}
                  className={styles.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <button className={styles.playBtn} onClick={togglePlay}>
                  {isPlaying ? "⏸ إيقاف مؤقت" : "▶️ تشغيل"}
                </button>
              </div>
            ) : (
              <img src={d.image} alt={d.title} className={styles.image} />
            )}

            <div className={styles.info}>
              <h3 className={styles.titleCard}>{d.title}</h3>

              <ul className={styles.descList}>
                {d.desc.map((item, index) => (
                  <li key={index} className={styles.descItem}>
                    • {item}
                  </li>
                ))}
              </ul>

              <div className={styles.responsible}>
                <strong>المسئول عن تنفيذ هذه المرحلة:</strong>
                <ul className={styles.respList}>
                  {d.responsible.map((person, index) => (
                    <li key={index} className={styles.respItem}>• {person}</li>
                  ))}
                </ul>
              </div>

              <button
                className={styles.serviceBtn}
                onClick={() => window.location.href = "/freelance/technicians"}
              >
                اختيار المنفذ المناسب
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
