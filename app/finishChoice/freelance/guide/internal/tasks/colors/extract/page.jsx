"use client";

import { useState } from "react";
import styles from "./extract.module.css";
import mix from "../../../../../../../data/ikeaColors"; // ← عدّل المسار لو مختلف
import PreviewColor from "./PreviewColor";

// 🧠 تحويل HEX ↔ HSL
function hexToHsl(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) h = s = 0;
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r, g, b;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return (
    "#" +
    [r, g, b]
      .map((v) =>
        Math.round((v + m) * 255)
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
      .toUpperCase()
  );
}

// 🎨 توليد ألوان ذكية بناءً على نوع اللون
function generateScheme(hex) {
  const { h, s, l } = hexToHsl(hex);

  // 🩶 الحالة 1: الرمادي أو الألوان المحايدة جدًا
  if (s < 10) {
    const base = "#E9E0D4"; // بيج فانيلا لاتيه افتراضي
    const accent = "#C2A78B"; // لون بيج نحاسي ثابت للتمايز
    return { base, accent };
  }

  // 🔥 الحالة 2: الألوان الدافئة (أحمر، بيج، برتقالي)
  if ((h >= 0 && h <= 90) || (h >= 330 && h <= 360)) {
    const base = hslToHex(h, s * 0.7, Math.min(l + 18, 92));
    const accent = hslToHex((h + 30) % 360, s * 0.9, Math.max(l - 8, 25));
    return { base, accent };
  }

  // ❄️ الحالة 3: الألوان الباردة (أزرق، رمادي مزرق، أخضر مزرق)
  const base = hslToHex(h, s * 0.6, Math.min(l + 22, 94));
  const accent = hslToHex((h - 20 + 360) % 360, s * 0.8, Math.max(l - 5, 22));
  return { base, accent };
}

// 🎨 توليد تدرجات بسيطة (واحدة أفتح + الأساسي + واحدة أغمق)
function generateShades(hex) {
  const { h, s, l } = hexToHsl(hex);

  let light, dark;

  // لو اللون فاتح جدًا → درجتين أغمق
  if (l > 80) {
    light = hslToHex(h, s, Math.max(l - 10, 0));
    dark = hslToHex(h, s, Math.max(l - 25, 0));
    return [light, hex, dark];
  }

  // لو اللون غامق جدًا → درجتين أفتح
  if (l < 25) {
    light = hslToHex(h, s, Math.min(l + 25, 100));
    dark = hslToHex(h, s, Math.min(l + 10, 100));
    return [light, hex, dark];
  }

  // الألوان المتوسطة (الطبيعية)
  light = hslToHex(h, s, Math.min(l + 15, 100));
  dark = hslToHex(h, s, Math.max(l - 15, 0));

  return [light, hex, dark];
}

export default function Page() {
  // ✅ اللون الافتراضي
  const defaultColor = {
    id: "toast-1033",
    name: "Toast 1033 - توست",
    hex: "#C2A78B",
    description: "لون محايد دافئ بدرجة بيج محمص.",
    usage: "يستخدم كلون ثانوي في الكنب أو الأثاث لتحقيق دفء بصري.",
  };

  // ✅ تعيين اللون الافتراضي كالمحدد عند البداية
  const [selected, setSelected] = useState(defaultColor);
  const [scheme, setScheme] = useState(generateScheme(defaultColor.hex));

  const handleSelect = (color) => {
    setSelected(color);
    setScheme(generateScheme(color.hex));
  };

  // 🧩 توليد الدرجات اللونية الثلاثية
  const baseShades = generateShades(scheme.base);
  const secondaryShades = generateShades(selected.hex);
  const accentShades = generateShades(scheme.accent);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎨 اختر اللون الثانوي (لون الكنب)</h1>
      <p className={styles.par}>
        بمجرد اختيار اللون الثانوي، سنقوم بتوليد لون الحائط الأساسي (أفتح منه)
        ولون التمييز المتناسق من نفس دائرة اللون.
      </p>

      {/* شبكة الألوان */}
      <div className={styles.colorsGrid}>
        {mix.map((c) => (
          <div
            key={c.id}
            className={`${styles.colorItem} ${
              selected?.id === c.id ? styles.active : ""
            }`}
            onClick={() => handleSelect(c)}
          >
            <div
              className={styles.colorSquare}
              style={{ backgroundColor: c.hex }}
            ></div>
            <div className={styles.colorName}>{c.name}</div>
            <div className={styles.colorCode}>{c.hex}</div>
          </div>
        ))}
      </div>

      {/* النتيجة */}
      {scheme && (
        <div className={styles.finalPaletteWrapper}>
          <h2 className={styles.subTitle}>نتيجة التناسق اللوني</h2>

          {/* البار العلوي */}
          <div className={styles.finalPaletteBarTop}>
            <div
              className={styles.neutralPart}
              style={{ backgroundColor: scheme.base }}
              title="اللون الأساسي (الحائط)"
            ></div>
            <div
              className={styles.secondaryPart}
              style={{ backgroundColor: selected.hex }}
              title="اللون الثانوي (الكنب)"
            ></div>
            <div
              className={styles.highlightPart}
              style={{ backgroundColor: scheme.accent }}
              title="لون التمييز (التفاصيل)"
            ></div>
          </div>

          {/* البار السفلي (درجات بسيطة مع الأكواد) */}
          <div className={styles.finalPaletteBarBottom}>
            <div className={styles.neutralGroup}>
              {baseShades.map((c, i) => (
                <div key={`b${i}`} className={styles.shadeBoxWrapper}>
                  <div
                    className={styles.shadeBoxFinal}
                    style={{ backgroundColor: c }}
                  ></div>
                  <div className={styles.colorCodeLabel}>{c}</div>
                </div>
              ))}
            </div>

            <div className={styles.secondaryGroup}>
              {secondaryShades.map((c, i) => (
                <div key={`s${i}`} className={styles.shadeBoxWrapper}>
                  <div
                    className={styles.shadeBoxFinal}
                    style={{ backgroundColor: c }}
                  ></div>
                  <div className={styles.colorCodeLabel}>{c}</div>
                </div>
              ))}
            </div>

            <div className={styles.highlightGroup}>
              {accentShades.map((c, i) => (
                <div key={`h${i}`} className={styles.shadeBoxWrapper}>
                  <div
                    className={styles.shadeBoxFinal}
                    style={{ backgroundColor: c }}
                  ></div>
                  <div className={styles.colorCodeLabel}>{c}</div>
                </div>
              ))}
            </div>
          </div>

          {/* تفاصيل اللون */}
          <div className={styles.groupBar}>
            <h3 className={styles.subTitle}>{selected.name}</h3>
            {selected.description && (
              <p className={styles.par}>{selected.description}</p>
            )}
            {selected.usage && (
              <p className={styles.par}>
                <strong>الاستخدام:</strong> {selected.usage}
              </p>
            )}
          </div>

          {/* اللابلز */}
          <div className={styles.paletteLabels}>
            <div className={styles.labelItem}>
              <span
                className={styles.labelColor}
                style={{ backgroundColor: scheme.base }}
              ></span>
              أساسي (لون الحائط)
            </div>
            <div className={styles.labelItem}>
              <span
                className={styles.labelColor}
                style={{ backgroundColor: selected.hex }}
              ></span>
              ثانوي (لون الكنب)
            </div>
            <div className={styles.labelItem}>
              <span
                className={styles.labelColor}
                style={{ backgroundColor: scheme.accent }}
              ></span>
              تمييز (لون التفاصيل)
            </div>
          </div>
        </div>
      )}

      {/* 👇 المعاينة */}
      <div className={styles.pre}>
        <PreviewColor
          neutralShades={baseShades}
          secondaryShades={secondaryShades}
          highlightShades={accentShades}
        />
      </div>
    </div>
  );
}
