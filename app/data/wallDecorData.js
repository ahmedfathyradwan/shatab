const wallDecorData = [
  {
    id: 1,
    title: "الدهانات التقليدية",
    description:
      "من أكثر أنواع ديكور الحوائط شيوعًا وسهولة في التنفيذ، وتمنح حرية في اختيار الألوان والتأثيرات بما يناسب كل ذوق.",
    examples: [
      "دهان سادة بلون واحد أو أكثر",
      "دهانات بخطوط أو أشكال هندسية",
      "دهانات ملمسية (رملي، إسمنتي، ميتاليك، سبوتية)",
    ],
    suitableFor: ["غرف المعيشة", "غرف النوم", "الممرات"],
    images: ["/images/logo.png", "/images/logo.png", "/images/logo.png"],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=interior%20wall%20paint%20designs",
  },
  {
    id: 2,
    title: "ورق الجدران (Wallpaper)",
    description:
      "ورق الحائط يعطي لمسة فخمة وسريعة التركيب، ويأتي بتصاميم وألوان متنوعة تناسب كل أسلوب ديكور.",
    examples: [
      "ورق حائط سادة بألوان هادئة",
      "ورق حائط بنقوش طبيعية أو هندسية",
      "ورق حائط ثلاثي الأبعاد لإحساس بالعمق",
    ],
    suitableFor: ["غرف المعيشة", "غرف النوم", "غرف الأطفال"],
    images: [
      "/images/wall/wallpaper1.jpg",
      "/images/wall/wallpaper2.jpg",
      "/images/wall/wallpaper3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=modern%20wallpaper%20designs",
  },
  {
    id: 3,
    title: "الخشب (Wood Panels)",
    description:
      "الخشب يمنح إحساسًا بالدفء والفخامة ويُستخدم عادة في الحوائط المميزة أو الغرف الرسمية.",
    examples: [
      "ألواح خشبية كاملة كـ Feature Wall",
      "خشب مضلع أو مقطع بأسلوب حديث",
      "دمج الخشب مع الإضاءة الجانبية أو الدهان",
    ],
    suitableFor: ["غرف المعيشة", "المكاتب المنزلية", "غرف النوم الرئيسية"],
    images: [
      "/images/wall/wood1.jpg",
      "/images/wall/wood2.jpg",
      "/images/wall/wood3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=wood%20wall%20interior%20design",
  },
  {
    id: 4,
    title: "الحجر الطبيعي أو الصناعي",
    description:
      "الحجر يعطي مظهرًا فاخرًا وأنيقًا، سواء طبيعي أو صناعي، وغالبًا يُستخدم كحائط مميز داخل الشقة.",
    examples: [
      "رخام طبيعي أو جرانيت",
      "حجر صناعي بأشكال متعددة",
      "دمج الحجر مع الدهان أو الإضاءة المخفية",
    ],
    suitableFor: ["المداخل", "غرف المعيشة", "حوائط التلفاز"],
    images: [
      "/images/wall/stone1.jpg",
      "/images/wall/stone2.jpg",
      "/images/wall/stone3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=stone%20wall%20interior",
  },
  {
    id: 5,
    title: "البانوهات والديكور الجاهز (Panels & Moldings)",
    description:
      "أسلوب ديكوري أنيق يمكن تنفيذه بأنماط كلاسيكية أو حديثة باستخدام بانوهات خشبية أو MDF.",
    examples: [
      "بانوهات كلاسيكية بزخارف فرنسية",
      "Paneling حديث بخطوط رأسية أو أفقية",
      "تقسيم الحائط لمربعات أو مستطيلات أنيقة",
    ],
    suitableFor: ["غرف الاستقبال", "المكاتب", "غرف النوم الرئيسية"],
    images: [
      "/images/wall/panel1.jpg",
      "/images/wall/panel2.jpg",
      "/images/wall/panel3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=wall%20panel%20molding%20design",
  },
  {
    id: 6,
    title: "الجبس بورد (Gypsum Board)",
    description:
      "يمنح الجبس بورد حرية كبيرة في تشكيل الحوائط والإضاءة، ويمكن تنفيذه بتصميمات حديثة أو كلاسيكية.",
    examples: [
      "حوائط 3D بلمسات هندسية",
      "نيشات ديكورية داخل الحائط",
      "جبس بورد مع شرائط LED لإضاءة ناعمة",
    ],
    suitableFor: ["غرف المعيشة", "الممرات", "المكاتب المنزلية"],
    images: [
      "/images/wall/gypsum1.jpg",
      "/images/wall/gypsum2.jpg",
      "/images/wall/gypsum3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=gypsum%20board%20wall%20design",
  },
  {
    id: 7,
    title: "المرايا والديكور الزجاجي (Mirrors & Glass Decor)",
    description:
      "المرايا والزجاج يضيفان عمقًا وإشراقًا للمكان، ويستخدمان لتوسيع الإحساس البصري بالمساحة.",
    examples: [
      "حائط مرايا كامل لتوسيع الفراغ",
      "مرايا هندسية مقطعة",
      "زجاج مزخرف أو ملون للحوائط",
    ],
    suitableFor: ["غرف المعيشة", "الممرات", "المداخل الضيقة"],
    images: [
      "/images/wall/mirror1.jpg",
      "/images/wall/mirror2.jpg",
      "/images/wall/mirror3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=mirror%20wall%20interior%20design",
  },
  {
    id: 8,
    title: "المواد المبتكرة والعصرية",
    description:
      "خيارات جديدة وعملية مثل PVC Panels أو الجدران الخضراء لإضافة لمسة عصرية وسهلة الصيانة.",
    examples: [
      "ألواح PVC مقاومة للماء وسهلة التركيب",
      "لوحات فنية كبيرة (Canvas Art)",
      "حائط نباتي طبيعي أو صناعي (Green Wall)",
    ],
    suitableFor: ["المطابخ", "الحمامات", "الشرفات", "المكاتب"],
    images: [
      "/images/wall/modern1.jpg",
      "/images/wall/modern2.jpg",
      "/images/wall/modern3.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=pvc%20wall%20panel%20design",
  },
];

export default wallDecorData;
