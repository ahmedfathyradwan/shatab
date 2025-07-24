"use client";
import React, { useState } from "react";
import MySelect from "../../components/MySelect.jsx";
import styles from "../../styles/freelance/cost.module.css";

const Cost = () => {
  const [projectType, setProjectType] = useState(null);
  const [area, setArea] = useState("");
  const [finishingType, setFinishingType] = useState(null);
  const [cost, setCost] = useState(null);

  const finishingPrices = {
    economic: 2250,
    medium: 3500,
    luxury: 5000,
    ultra: 6500,
  };

  const propertyMultipliers = {
    "شقة": 1,
    "فيلا": 1.4,
    "دوبلكس": 1.3,
    "بنتهاوس": 1.35,
    "ستوديو": 0.9,
    "تجاري": 1.2,
  };

  const propertyOptions = [
    { value: "شقة", label: "شقة" },
    { value: "فيلا", label: "فيلا" },
    { value: "دوبلكس", label: "دوبلكس" },
    { value: "بنتهاوس", label: "بنتهاوس" },
    { value: "ستوديو", label: "ستوديو" },
    { value: "تجاري", label: "تجاري (مكتب - عيادة - محل)" },
  ];

  const finishingOptions = [
    { value: "economic", label: "تشطيب اقتصادي (2250 - 2750 ج/م)" },
    { value: "medium", label: "تشطيب متوسط (3000 - 4000 ج/م)" },
    { value: "luxury", label: "تشطيب لوكس (4500 - 5500 ج/م)" },
    { value: "ultra", label: "تشطيب فاخر (6000 - 7000+ ج/م)" },
  ];

  const handleCalculate = () => {
    const pricePerMeter = finishingPrices[finishingType?.value] || 0;
    const multiplier = propertyMultipliers[projectType?.value] || 1;
    const areaValue = parseFloat(area.replace(/[^0-9.]/g, ""));

    if (!areaValue || !finishingType || !projectType) {
      setCost(null);
      return;
    }

    const totalCost = areaValue * pricePerMeter * multiplier;
    setCost(totalCost);
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>حساب التكلفة المبدئية للمشروع</h1>
        <p className={styles.description}>
          يرجى العلم بأن التكلفة هذه تقريبية وقد تختلف
          <br />
          وفقاً للتصميم والخامات
        </p>

        <div className={styles.inputGroup}>
          <label className={styles.label}>نوع العقار</label>
          <div className={styles.selectWrapper}>
            <MySelect
              value={projectType}
              onChange={setProjectType}
              options={propertyOptions}
              placeholder="اختر نوع العقار"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>المساحة بالمتر المربع</label>
          <input
            type="number"
            className={styles.input}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="أدخل المساحة"
            min="0"
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.typeCont}>
            <label className={styles.label}>نوع التشطيب</label>
            <p className={styles.note}>
              ( يوجد بالأسفل شرح مبسط لأشهر أنواع التشطيب )
            </p>
          </div>
          <div className={styles.selectWrapper}>
            <MySelect
              value={finishingType}
              onChange={setFinishingType}
              options={finishingOptions}
              placeholder="اختر نوع التشطيب"
            />
          </div>
        </div>

        <button className={styles.calculateButton} onClick={handleCalculate}>
          حساب التكلفة
        </button>

        {cost && (
          <div className={styles.result}>
            <div className={styles.cash}>
              <p>التكلفة المبدئية:</p>
              <p className={styles.cashNum}>{cost.toLocaleString()}</p>
              <p>جنيه مصري</p>
            </div>
            <p className={styles.timestamp}>
              هذا السعر وفقا لمتوسط أسعار السوق المصري لشهر يوليو 2025
            </p>
          </div>
        )}

        <div className={styles.finishingDetails}>
          <h2 className={styles.sectionTitle}>شرح لأشهر أنواع التشطيب</h2>

          <div className={styles.finishingType}>
            <h3 className={styles.finishingTitle}>1 - تشطيب اقتصادي</h3>
            <p className={styles.finishingSubtitle}>
              متوسط السعر: 2250 - 2750 جنيه/متر
            </p>
            <ul className={styles.finishingList}>
              <li>تشطيب أساسي بجودة مقبولة.</li>
              <li>مناسب للشقق الصغيرة أو الاستثماري.</li>
              <li>مواد محلية، بدون تفاصيل تصميمية معقدة.</li>
              <li>أعمال سباكة وكهرباء تقليدية.</li>
            </ul>
          </div>

          <div className={styles.finishingType}>
            <h3 className={styles.finishingTitle}>2 - تشطيب متوسط</h3>
            <p className={styles.finishingSubtitle}>
              متوسط السعر: 3000 - 4000 جنيه/متر
            </p>
            <ul className={styles.finishingList}>
              <li>تشطيب متكامل بجودة جيدة.</li>
              <li>تشطيبات قياسية مع لمسات تصميمية.</li>
              <li>مواد محلية أو مستوردة متوسطة.</li>
              <li>جبسون بورد بسيط - إضاءة سبوتات - أبواب HDF.</li>
            </ul>
          </div>

          <div className={styles.finishingType}>
            <h3 className={styles.finishingTitle}>3 - تشطيب لوكس</h3>
            <p className={styles.finishingSubtitle}>
              متوسط السعر: 4500 - 5500 جنيه/متر
            </p>
            <ul className={styles.finishingList}>
              <li>تشطيب عالي الجودة بخامات ممتازة.</li>
              <li>تفاصيل تصميم مميزة (خشب طبيعي، رخام، بورسلين إيطالي).</li>
              <li>أجهزة ذكية - سباكة عالية الجودة.</li>
              <li>تشطيب يناسب الطبقة المتوسطة العليا.</li>
            </ul>
          </div>

          <div className={styles.finishingType}>
            <h3 className={styles.finishingTitle}>4 - تشطيب فاخر (فندقي)</h3>
            <p className={styles.finishingSubtitle}>
              متوسط السعر: 6000 - 7000+ جنيه/متر
            </p>
            <ul className={styles.finishingList}>
              <li>أعلى مستوى من الخامات (رخام مستورد، أخشاب مخصصة).</li>
              <li>ديكورات معمارية، سقف متعدد المستويات.</li>
              <li>نظام ذكي متكامل في الكهرباء والإضاءة.</li>
              <li>تشطيب يناسب الفيلات والقصور والشقق الفاخرة جدًا.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
