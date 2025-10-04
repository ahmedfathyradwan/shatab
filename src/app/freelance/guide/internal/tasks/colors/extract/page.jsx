'use client'

import styles from './extract.module.css'
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import colors from '../../../../../../data/ikeaColors';
import neutralColors from '../../../../../../data/neutralColors';

export default function ColorsPage() {

  const paletteRef = useRef(null);

  function handleDownload() {
    if (paletteRef.current === null) return;

    htmlToImage.toPng(paletteRef.current, { pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'color-palette.jpg';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error generating image', err);
      });
  }

  function hexToHsl(hex) {
    let r = parseInt(hex.slice(1,3),16) / 255;
    let g = parseInt(hex.slice(3,5),16) / 255;
    let b = parseInt(hex.slice(5,7),16) / 255;

    let max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h, s, l = (max + min) / 2;

    if(max === min){
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  }

  function hslToHex(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;

    if(s === 0){
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return "#" + [r,g,b].map(x =>
      Math.round(x * 255).toString(16).padStart(2,'0')
    ).join("").toUpperCase();
  }

  // 🎨 النسخة الجديدة: نلعب في Lightness + Saturation
  function generateShades(hex) {
    const [h, s, l] = hexToHsl(hex);

    const shades = [
      hslToHex(h, Math.min(100, s + 8), Math.min(100, l + 20)), // فاتح وناعم
      hslToHex(h, s, l),                                        // الأساسي
      hslToHex(h, Math.max(0, s - 8), Math.max(0, l - 20))      // غامق فخم
    ];
    return shades;
  }

  // ✅ توليد 5 ألوان Accent
  function generateAccentColors(hex) {
    const [h, s, l] = hexToHsl(hex);
    return [
      hslToHex((h + 180) % 360, s, l),   // Complementary
      hslToHex((h + 150) % 360, s, l),   // Split Complementary 1
      hslToHex((h + 210) % 360, s, l),   // Split Complementary 2
      hslToHex((h + 20) % 360, s, l),    // Analogous
      hslToHex((h + 120) % 360, s, l)    // Triadic
    ];
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

  const accentColors = generateAccentColors(secondary);

  const secondaryShades = generateShades(secondary);
  const accentShades = accentColors.map(c => generateShades(c));
  const neutralShades = generateShades(neutral);

  function GroupBar({ label, shades }) {
    return (
      <div className={styles.groupBar}>
        <h4 className={styles.par}>{label}</h4>
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
      <p className={styles.par}>نستخدم قواعد الألوان المتقابلة + المتناسقة لتوليد لون التمييز واقتراح درجات إضافية.</p>

      {/* 🎨 اللون الثانوي */}
      <h2 className={styles.subTitle}>أولا : تحديد اللون الثانوي 30%</h2>
      <p className={styles.par}>اللون الثانوي هو لون الكراسي والكنب والستائر والسجاد.</p>
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

      <h3 className={styles.par}>أو اختر اللون يدويًا :</h3>
      <input
        type="color"
        value={secondary}
        onChange={(e)=>setSecondary(e.target.value)}
        className={styles.colorPicker}
      />

      <GroupBar label="اللون الثانوي بدرجاته" shades={secondaryShades} />

      <h2 className={styles.subTitle}>ثانيا : ألوان التمييز (Accent)</h2>
      <p className={styles.par}>ألوان العناصر الصغيرة مثل اللوحات والإكسسوارات، يتم اقتراحها تلقائيا وفقا للون الثانوي.</p>
      
      {accentShades.map((shades, idx) => (
        <GroupBar key={idx} label={`Accent ${idx+1}`} shades={shades} />
      ))}

      {/* 🎨 اللون المحايد */}
      <h2 className={styles.subTitle}>ثالثا : تحديد اللون المحايد 60%</h2>
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

      <h2 className={styles.subTitle}>بالتة الألوان النهائية</h2>
      <div id="captureWrapper" style={{ padding: "20px", background: "#fff" }}>
        <div className={styles.finalPaletteWrapper} ref={paletteRef}>
          {/* 🔹 الصف الأول — 3 ألوان رئيسية (60/30/10) */}
          <div className={styles.finalPaletteBarTop}>
            <div className={styles.neutralPart} style={{ backgroundColor: neutral }}></div>
            <div className={styles.secondaryPart} style={{ backgroundColor: secondary }}></div>
            <div className={styles.highlightPart} style={{ backgroundColor: accentColors[0] }}></div>
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
              {accentShades[0].map((c,i)=>
                <div key={`h-${i}`} className={styles.shadeBoxFinal} style={{ backgroundColor: c }}></div>
              )}
            </div>
          </div>

          <div className={styles.paletteLabels}>
            <div className={styles.labelItem}>
              <span className={styles.labelColor} style={{ backgroundColor: neutral }}></span>
              <p>اللون المحايد (60%)</p>
            </div>
            <div className={styles.labelItem}>
              <span className={styles.labelColor} style={{ backgroundColor: secondary }}></span>
              <p>اللون الثانوي (30%)</p>
            </div>
            <div className={styles.labelItem}>
              <span className={styles.labelColor} style={{ backgroundColor: accentColors[0] }}></span>
              <p>لون التمييز (10%)</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className={styles.downloadBtn}>
        تحميل البالتة كصورة
      </button>
    </div>
  )
}
