'use client'

import styles from './colors.module.css'
import { useState } from 'react';
import colors from '../../../../../data/ikeaColors';
import neutralColors from '../../../../../data/neutralColors';
import PreviewColor from './PreviewColor';

export default function ColorsPage() {

  function getComplementaryColor(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = 255 - r; g = 255 - g; b = 255 - b;
    return "#" + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join("").toUpperCase();
  }

  function adjustColor(hex, amt) {
    let col = parseInt(hex.slice(1), 16);
    let r = (col >> 16) + amt;
    let g = ((col >> 8) & 0x00FF) + amt;
    let b = (col & 0x0000FF) + amt;
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    return "#" + (1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
  }

  function generateShades(hex) {
    return [adjustColor(hex, 40), hex, adjustColor(hex, -40)];
  }

  function getLuminance(hex) {
    let r = parseInt(hex.slice(1,3),16)/255;
    let g = parseInt(hex.slice(3,5),16)/255;
    let b = parseInt(hex.slice(5,7),16)/255;
    [r,g,b] = [r,g,b].map(c => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4));
    return 0.2126*r + 0.7152*g + 0.0722*b;
  }

  function contrastRatio(hex1, hex2) {
    const L1 = getLuminance(hex1);
    const L2 = getLuminance(hex2);
    return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
  }

  function isNeutralCompatible(sec, neu) {
    const ratio = contrastRatio(sec, neu);
    return ratio > 2 && ratio < 12;
  }

  const [secondary, setSecondary] = useState("#B68A5A");
  const [neutral, setNeutral] = useState("#EFE5DA");
  const highlight = getComplementaryColor(secondary);

  const secondaryShades = generateShades(secondary);
  const highlightShades = generateShades(highlight);
  const neutralShades = generateShades(neutral);

  function GroupBar({ label, shades }) {
    return (
      <div className={styles.groupBar}>
        <h4 className={styles.subtitle}>{label}</h4>
        <div className={styles.barColors}>
          {shades.map((c,i) => (
            <div key={i} className={styles.barColor} style={{ backgroundColor: c }}></div>
          ))}
        </div>
        <div className={styles.barCodes}>
          {shades.map((c,i) => (
            <p key={i} className={styles.colorCode}>{c}</p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>اختيار ألوان متناسقة وتوزيعها</h2>
      <p className={styles.par}>ألوان الشقة تؤثر على المزاج والراحة النفسية والشعور بالإتساع أو الضيق.</p>
      <p className={styles.par}>نستخدم قاعدة "الألوان المتقابلة" لتوليد اللون المكمل وقاعدة "60%-30%-10%" لتوزيع الألوان.</p>

      {/* 🎨 اللون الثانوي */}
      <h2 className={styles.title}>أولا : تحديد اللون الثانوي 30%</h2>
      <p className={styles.par}>لون الكراسي والكنب والستائر والسجاد. فيما يلي أكثر درجات الألوان شيوعًا لدى IKEA:</p>

      <div className={styles.colorsGrid}>
        {colors.map(color => {
          const isActive = secondary === color.hex;
          return (
            <div
              key={color.id}
              onClick={() => setSecondary(color.hex)}
              className={`${styles.colorItem} ${isActive ? styles.active : ""}`}
            >
              <div className={styles.colorSquare} style={{ backgroundColor: color.hex }}></div>
              <p className={styles.colorName}>{color.name}</p>
              <p className={styles.colorCode}>{color.hex}</p>
            </div>
          )
        })}
      </div>

      <h3 className={styles.subtitle}>أو اختر اللون يدويًا:</h3>
      <input
        type="color"
        value={secondary}
        onChange={(e)=>setSecondary(e.target.value)}
        className={styles.colorPicker}
      />

      <GroupBar label="اللون الثانوي" shades={secondaryShades} />
      <GroupBar label="لون التمييز" shades={highlightShades} />

      {/* 🎨 اللون المحايد */}
      <h2 className={styles.title}>ثانيا : تحديد اللون المحايد 60%</h2>
      <p className={styles.par}>اللون المحايد يغلب على الحوائط والأرضيات والأسقف.</p>

      <div className={styles.colorsGrid}>
        {neutralColors.map(color => {
          const isActive = neutral === color.hex;
          const compatible = isNeutralCompatible(secondary, color.hex);
          return (
            <div
              key={color.id}
              onClick={() => setNeutral(color.hex)}
              className={`
                ${styles.colorItem}
                ${isActive ? styles.active : ""}
                ${!compatible ? styles.notRecommended : ""}
              `}
            >
              <div className={styles.colorSquare} style={{ backgroundColor: color.hex }}></div>
              {!compatible && <div className={styles.notRecommendedMark}>×</div>}
              <p className={styles.colorName}>{color.name}</p>
              <p className={styles.colorCode}>{color.hex}</p>
            </div>
          )
        })}
      </div>

      <h3 className={styles.subtitle}>أو اختر اللون المحايد يدويًا:</h3>
      <input
        type="color"
        value={neutral}
        onChange={(e)=>setNeutral(e.target.value)}
        className={styles.colorPicker}
      />

      <GroupBar label="اللون المحايد" shades={neutralShades} />

      <h2 className={styles.title}>بالتة الألوان النهائية</h2>

      <div className={styles.finalPaletteWrapper}>
        {/* 🔹 الصف الأول — 3 ألوان رئيسية (60/30/10) */}
        <div className={styles.finalPaletteBarTop}>
          <div className={styles.neutralPart} style={{ backgroundColor: neutral }}></div>
          <div className={styles.secondaryPart} style={{ backgroundColor: secondary }}></div>
          <div className={styles.highlightPart} style={{ backgroundColor: highlight }}></div>
        </div>

        {/* 🔹 الصف الثاني — درجات كل لون */}
        <div className={styles.finalPaletteBarBottom}>
          <div className={styles.neutralGroup}>
            {neutralShades.map((c,i)=>
              <div key={`n-${i}`} className={styles.shadeBoxFinal} style={{ backgroundColor: c }}></div>
            )}
          </div>
          <div className={styles.secondaryGroup}>
            {secondaryShades.map((c,i)=>
              <div key={`s-${i}`} className={styles.shadeBoxFinal} style={{ backgroundColor: c }}></div>
            )}
          </div>
          <div className={styles.highlightGroup}>
            {highlightShades.map((c,i)=>
              <div key={`h-${i}`} className={styles.shadeBoxFinal} style={{ backgroundColor: c }}></div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.paletteLabels}>
        <div className={styles.labelItem}><span className={styles.labelColor} style={{ backgroundColor: neutral }}></span><p>اللون المحايد (60%)</p></div>
        <div className={styles.labelItem}><span className={styles.labelColor} style={{ backgroundColor: secondary }}></span><p>اللون الثانوي (30%)</p></div>
        <div className={styles.labelItem}><span className={styles.labelColor} style={{ backgroundColor: highlight }}></span><p>لون التمييز (10%)</p></div>
      </div>

      <div className={styles.room}>
        <PreviewColor 
          neutralShades={neutralShades} 
          secondaryShades={secondaryShades} 
          highlightShades={highlightShades} 
        />
      </div>
    </div>
  )
}
