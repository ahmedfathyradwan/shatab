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
    timing: "يتم تنفيذها بعد المحارة والمعجون وأعمال الأساس الخاصة بالنقاشة.",
    images: [
      "/images/WallDecor/paint1.jpg",
      "/images/WallDecor/paint2.jpg",
      "/images/WallDecor/paint3.jpg",
      "/images/WallDecor/paint4.jpg",
    ],
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
    timing: "يُركب بعد الانتهاء تمامًا من الدهانات الأساسية وجفافها.",
    images: [
      "/images/WallDecor/wallpaper1.jpg",
      "/images/WallDecor/wallpaper2.jpg",
      "/images/WallDecor/wallpaper3.jpg",
      "/images/WallDecor/wallpaper4.jpg",
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
    timing: "بعد التشطيبات الأساسية (محارة، دهان الأساس) وقبل تركيب الإضاءة النهائية.",
    images: [
      "/images/WallDecor/wood1.jpg",
      "/images/WallDecor/wood2.jpg",
      "/images/WallDecor/wood3.jpg",
      "/images/WallDecor/wood4.jpg",
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
    timing: "بعد المحارة وقبل الدهانات النهائية، ويفضّل قبل تركيب الأرضيات النهائية لتجنب الاتساخ.",
    images: [
      "/images/WallDecor/stone1.jpg",
      "/images/WallDecor/stone2.jpg",
      "/images/WallDecor/stone3.jpg",
      "/images/WallDecor/stone4.jpg",
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
    timing: "بعد المعجون والدهان التمهيدي وقبل الدهانات النهائية.",
    images: [
      "/images/WallDecor/panel1.jpg",
      "/images/WallDecor/panel2.jpg",
      "/images/WallDecor/panel3.jpg",
      "/images/WallDecor/panel4.jpg",
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
    timing: "قبل أعمال النقاشة النهائية والدهانات، وبعد الانتهاء من تأسيس الكهرباء.",
    images: [
      "/images/WallDecor/gypsum1.jpg",
      "/images/WallDecor/gypsum2.jpg",
      "/images/WallDecor/gypsum3.jpg",
      "/images/WallDecor/gypsum4.jpg",
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
    timing: "بعد الانتهاء من الدهانات والأرضيات لتفادي الخدوش أو الكسر.",
    images: [
      "/images/WallDecor/mirror1.jpg",
      "/images/WallDecor/mirror2.jpg",
      "/images/WallDecor/mirror3.jpg",
      "/images/WallDecor/mirror4.jpg",
    ],
    moreLink:
      "https://www.pinterest.com/search/pins/?q=mirror%20wall%20interior%20design",
  },
{
  id: 8,
  title: "ألواح PVC (PVC Panels)",
  description:
    "ألواح PVC تُعتبر من أحدث وأفضل حلول ديكور الحوائط الحديثة، لأنها تجمع بين المظهر العصري وسهولة التركيب والتنظيف. تتميز بخفة وزنها ومقاومتها العالية للرطوبة، مما يجعلها مثالية للمطابخ والحمامات.",
  examples: [
    "ألواح PVC بتصميم يشبه الخشب الطبيعي",
    "ألواح لامعة بلون موحد لإطلالة عصرية",
    "ألواح PVC ثلاثية الأبعاد (3D Panels) لإضافة عمق وجمال للحائط",
  ],
  suitableFor: ["المطابخ", "الحمامات", "الشرفات", "المكاتب الحديثة"],
  timing: "تُركب بعد الانتهاء من جميع التشطيبات النهائية والدهانات.",
  images: [
    "/images/WallDecor/pvc1.jpg",
    "/images/WallDecor/pvc2.jpg",
    "/images/WallDecor/pvc3.jpg",
    "/images/WallDecor/pvc4.jpg",
  ],
  moreLink:
    "https://www.pinterest.com/search/pins/?q=pvc%20wall%20panel%20design",
},
  {
  id: 9,
  title: "اللوحات الفنية والتابلوهات (Wall Art & Frames)",
  description:
    "تُعد اللوحات الفنية والتابلوهات من أهم عناصر التزيين النهائية، وتساعد على إبراز طابع المكان وإضافة لمسة فنية وشخصية على الديكور.",
  examples: [
    "تابلوهات مودرن بألوان جريئة أو تصميمات هندسية",
    "لوحات فنية كلاسيكية بزخارف وإطارات ذهبية",
    "مجموعة تابلوهات صغيرة (Gallery Wall) بشكل منسق",
    "تابلوهات مطبوعة بألوان متناسقة مع الأثاث",
  ],
  suitableFor: [
    "غرف المعيشة",
    "غرف النوم",
    "الممرات",
    "المداخل",
  ],
  timing: "بعد الانتهاء من الدهانات النهائية وفرش الشقة.",
  images: [
    "/images/WallDecor/art1.jpg",
    "/images/WallDecor/art2.jpg",
    "/images/WallDecor/art3.jpg",
    "/images/WallDecor/art4.jpg",
  ],
  moreLink:
    "https://www.pinterest.com/search/pins/?q=modern%20wall%20art%20frames",
},

];

export default wallDecorData;
