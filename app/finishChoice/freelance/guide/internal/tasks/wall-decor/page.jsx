"use client";
import styles from "./wallDecor.module.css";
import wallDecorData from "../../../../../../data/wallDecorData";

export default function WallDecorPage() {
  return (
    <section className={styles.decorSection}>
      <h1 className={styles.title}>أنواع ديكور الحوائط</h1>
      <p className={styles.intro}>
        ديكور الحائط هو العنصر الأساسي اللي بيحدد طابع الشقة وشكلها العام.  
        هنا هتلاقي أشهر الأنواع، مميزاتها، وأين يُفضل استخدامها.
      </p>

      <div className={styles.decorList}>
        {wallDecorData.map((item) => (
          <div key={item.id} className={styles.decorItem}>
            <h2 className={styles.decorTitle}>{item.title}</h2>
            <p className={styles.decorDesc}>{item.description}</p>
            

{/* قائمة الأمثلة */}
{item.examples && (
  <div className={styles.examplesSection}>
    <strong>أمثلة:</strong>
    <ul className={styles.decorExamples}>
      {item.examples.map((ex, index) => (
        <li key={index}>{ex}</li>
      ))}
    </ul>
  </div>
)}


            {/* مكان الاستخدام */}
{item.suitableFor && item.suitableFor.length > 0 && (
  <div className={styles.suitableSection}>
    <strong>مناسب لـ:</strong>
    <ul className={styles.suitableList}>
      {item.suitableFor.map((place, index) => (
        <li key={index}>{place}</li>
      ))}
    </ul>
  </div>
)}

            {/* معرض الصور */}
            {item.images && item.images.length > 0 && (
              <div className={styles.imageGallery}>
                {item.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${item.title} example ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* زر عرض المزيد */}
            {item.moreLink && (
              <a
                href={item.moreLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.moreLink}
              >
                عرض المزيد من الصور
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
