"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import FinishingDetails from "./FinishingDetails";
import styles from "../../../styles/freelance/cost.module.css";
import finishingPrices from "../../../data/finishingPackagePrices";

const MySelect = dynamic(() => import("../../../components/MySelect.jsx"), {
  ssr: false,
});

const Cost = () => {
  const [mounted, setMounted] = useState(false); // لتجنب Hydration Error
  const [projectType, setProjectType] = useState(null);
  const [area, setArea] = useState("");
  const [finishingType, setFinishingType] = useState(null);
  const [cost, setCost] = useState(null);

  useEffect(() => {
    setMounted(true); // تم mount الكومبوننت على الكلاينت
  }, []);

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
    const pricePerMeter = finishingType ? finishingPrices[finishingType.value] : 0;
    const multiplier = projectType ? propertyMultipliers[projectType.value] : 1;
    const areaValue = parseFloat(area);

    if (!areaValue || !finishingType || !projectType) {
      setCost(null);
      return;
    }

    const totalCost = areaValue * pricePerMeter * multiplier;
    setCost(totalCost);
  };

  if (!mounted) return null; // تجنب Hydration Error

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
              instanceId="property-type"
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
  type="text"
  className={styles.input}
  value={area ?? ""}
  onChange={(e) => {
    let value = e.target.value;

    // تحويل الأرقام العربية إلى إنجليزية
    value = value.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

    // منع إدخال أي شيء غير أرقام
    value = value.replace(/[^0-9]/g, "");

    // تحديد 6 أرقام فقط
    value = value.slice(0, 6);

    setArea(value);
  }}
  placeholder="أدخل المساحة"
/>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.typeCont}>
            <label className={styles.label}>باقة التشطيب</label>
            <p className={styles.note}>
              ( يوجد بالأسفل شرح مبسط لأشهر أنواع التشطيب )
            </p>
          </div>
          <div className={styles.selectWrapper}>
            <MySelect
              instanceId="finishing-type"
              value={finishingType}
              onChange={setFinishingType}
              options={finishingOptions}
              placeholder="اختر باقة التشطيب"
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

        <FinishingDetails />
      </div>
    </div>
  );
};

export default Cost;
