'use client';
import Link from 'next/link';
import styles from './slug.module.css';

const getEmbedUrl = (url) => {
  if (!url) return '';

  try {
    const u = new URL(url);

    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') {
        const id = u.searchParams.get('v');
        const list = u.searchParams.get('list');
        return `https://www.youtube.com/embed/${id}${list ? `?list=${list}` : ''}`;
      }
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/')[2];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.pathname.startsWith('/embed/')) return url;
    }

    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }

    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0];
      return `https://player.vimeo.com/video/${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

const normalizeNotes = (notes) => {
  if (Array.isArray(notes)) return notes;
  if (typeof notes === 'string') {
    return notes
      .split(/[.\n•\-،]+/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
};

export default function ClientPage({ step }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{step.title}</h1>

      <div className={styles.imageCont}>
        <img
          src={step.image}
          alt={step.title}
          className={styles.image}
        />
      </div>

      <div className={styles.textCont}>
        {/* المطلوب تنفيذه */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>المطلوب تنفيذه في هذه المرحلة:</h3>

          {Array.isArray(step.tasks) ? (
            <ul className={styles.tasksList}>
              {step.tasks.map((task, index) => {
                const text = typeof task === 'string' ? task : task.text;
                const link = typeof task === 'string' ? undefined : task.link;

                return (
                  <li key={index} className={styles.text}>
                    {text}{' '}
                    {link?.href && (
                      <Link href={link.href} className={styles.link}>
                        {link.label || link.href}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : typeof step.tasks === 'string' ? (
            <p className={styles.text}>{step.tasks}</p>
          ) : step.tasks?.text ? (
            <p className={styles.text}>
              {step.tasks.text}{' '}
              {step.tasks.link?.href && (
                <Link href={step.tasks.link.href} className={styles.link}>
                  {step.tasks.link.label || step.tasks.link.href}
                </Link>
              )}
            </p>
          ) : (
            <p className={styles.text}>لا توجد بيانات</p>
          )}
        </div>

        {/* متوسط وقت التنفيذ */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>متوسط وقت التنفيذ (لشقة 100م):</h3>
          <p className={styles.text}>{step.averageTime}</p>
        </div>

        {/* متوسط السعر */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>متوسط السعر الحالي:</h3>
          <p className={styles.text}>{step.averageCost}</p>
        </div>

        {/* الملاحظات */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>ملاحظات وتنبيهات هامة:</h3>

          <ul className={styles.tasksList} dir="rtl">
            {normalizeNotes(step.notes).map((item, index) => {
              const text = typeof item === 'string' ? item : item.text;
              const link = typeof item === 'string' ? undefined : item.link;

              return (
                <li key={index} className={styles.text}>
                  {text}{' '}
                  {link?.href && (
                    <Link href={link.href} className={styles.link}>
                      {link.label || link.href}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* الجودة */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>طريقة التأكد من جودة التنفيذ:</h3>
          {Array.isArray(step.qualityCheck) ? (
            <ul className={styles.tasksList}>
              {step.qualityCheck.map((qc, index) => {
                const text = typeof qc === 'string' ? qc : qc.text;
                const link = typeof qc === 'string' ? undefined : qc.link;

                return (
                  <li key={index} className={styles.text}>
                    {text}{' '}
                    {link?.href && (
                      <Link href={link.href} className={styles.link}>
                        {link.label || link.href}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : typeof step.qualityCheck === 'string' ? (
            <p className={styles.text}>{step.qualityCheck}</p>
          ) : step.qualityCheck?.text ? (
            <p className={styles.text}>
              {step.qualityCheck.text}{' '}
              {step.qualityCheck.link?.href && (
                <Link href={step.qualityCheck.link.href} className={styles.link}>
                  {step.qualityCheck.link.label || step.qualityCheck.link.href}
                </Link>
              )}
            </p>
          ) : (
            <p className={styles.text}>لا توجد بيانات</p>
          )}
        </div>

        {/* الفيديوهات */}
        {step.videoUrls && step.videoUrls.length > 0 && (
          <div>
            <h3 className={styles.subTitle2}>فيديوهات متعلقة بالمرحلة:</h3>
            {step.videoUrls.map((url, index) => (
              <div key={index} className={styles.videoWrapper}>
                <iframe
                  src={getEmbedUrl(url)}
                  title={`${step.title} - فيديو ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
