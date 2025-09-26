'use client';

import { useState } from 'react';
import styles from '../styles/home/gallery.module.css';
import DownloadIcon from './icons/DownloadIcon';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('salon');
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  const buttons = [
    { label: 'غرفة الضيوف', key: 'salon' },
    { label: 'غرفة المعيشة', key: 'rknia' },
    { label: 'السفرة', key: 'dining' },
    { label: 'حائط الشاشة', key: 'tvwall' },
    { label: 'أوضة النوم', key: 'bedroom' },
    { label: 'الدريسينج', key: 'dressing' },
    { label: 'أوضة الأطفال', key: 'kids' },
    { label: 'الحمام', key: 'bathroom' },
    { label: 'المطبخ', key: 'kitchen' },
    { label: 'أوضة المكتب', key: 'office' },
    { label: 'سيتب', key: 'setup' },
    { label: 'البلكونة', key: 'balcony' },
    { label: 'السقف', key: 'ceiling' },
    { label: 'الأرضيات', key: 'flooring' },
    { label: 'التشطيب الخارجي', key: 'exterior' }
  ];

  const boards = {
    salon: {
      pinterest: 'https://www.pinterest.com/ideas/luxury-formal-living-room/921462225636/',
      behance: 'https://www.behance.net/search/projects?search=luxury%20formal%20living%20room'
    },
    rknia: {
      pinterest: 'https://www.pinterest.com/ideas/luxury-living-room-mood-board/914376645923/',
      behance: 'https://www.behance.net/search/projects?search=luxury%20living%20room'
    },
    tvwall: {
      pinterest: 'https://www.pinterest.com/ideas/modern-luxury-living-room/903861560292/',
      behance: 'https://www.behance.net/search/projects?search=modern%20luxury%20tv%20wall'
    },
    dining: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20dining%20room&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20dining%20room'
    },
    ceiling: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20ceiling%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20ceiling%20design'
    },
    bedroom: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20bedroom%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20bedroom'
    },
    kids: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20kids%20bedroom&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20kids%20bedroom'
    },
    bathroom: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20bathroom%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20bathroom'
    },
    kitchen: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20arabic%20kitchen%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20kitchen%20design'
    },
    office: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20home%20office%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20home%20office'
    },
    setup: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=setup%20room&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=setup%20room'
    },
    dressing: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20dressing%20room&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20dressing%20room'
    },
    balcony: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20balcony%20decor&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20balcony'
    },
    exterior: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20arabic%20exterior%20design&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20exterior%20design'
    },
    flooring: {
      pinterest: 'https://www.pinterest.com/search/pins/?q=luxury%20flooring%20ideas&rs=typed',
      behance: 'https://www.behance.net/search/projects?search=luxury%20flooring'
    }
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setActiveImageIndex(1);
  };

  const imagePath = `/images/gallery/${activeTab}/${activeImageIndex}.jpg`;

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.title}>معرض الصور</h2>
      <h3 className={styles.description}>تغذية بصرية لأحدث التشطيبات الفاخرة</h3>

      <div className={styles.buttonsWrapper}>
        {buttons.map((btn) => (
          <button
            key={btn.key}
            className={`${styles.tabButton} ${activeTab === btn.key ? styles.active : ''}`}
            onClick={() => handleTabChange(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={imagePath}
          alt={`صورة ${activeImageIndex}`}
          className={styles.image}
        />
      </div>

      <div className={styles.downloadWrapper}>
        <a href={imagePath} download className={styles.downloadButton}>
          تحميل الصورة
          <DownloadIcon className={styles.icon} />
        </a>
      </div>

      <div className={styles.dots}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`${styles.dot} ${activeImageIndex === i ? styles.activeDot : ''}`}
            onClick={() => setActiveImageIndex(i)}
          />
        ))}
      </div>

      <div className={styles.boardWrapper}>
        <p className={styles.notice}>
          للمزيد من الصور الخاصة بـ {buttons.find((b) => b.key === activeTab)?.label}، اختر أحد الروابط التالية:
        </p>
        <div className={styles.linkButtons}>
          <a
            href={boards[activeTab].pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            1. موقع بنتريست
          </a>
          <a
            href={boards[activeTab].behance}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            2. موقع بيهانس
          </a>
        </div>
      </div>
    </div>
  );
}
