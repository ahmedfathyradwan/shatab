const finishingTypes = [
  {
    id: 1,
    title: "المودرن (Modern)",
    image: "/images/finishing-type/modern.jpeg",
    features: [
      "خطوط بسيطة ومستقيمة.",
      "ألوان حيادية: أبيض، رمادي، أسود.",
      "مساحات مفتوحة، قليل في التفاصيل.",
      "الخامات: زجاج، معدن، خشب فاتح."
    ],
    suitableFor: "مناسب لو بتحب البساطة والعملية.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Modern%20interior%20design"
  },
  {
    id: 2,
    title: "الكلاسيك (Classic)",
    image: "/images/finishing-type/classic.jpeg",
    features: [
      "ديكورات غنية، زخارف، كرانيش سقف.",
      "ألوان تقليدية: دهبي، بني، بيج، نبيتي.",
      "أثاث فخم، ستائر تقيلة.",
      "الإضاءة فخمة (نجف، أباجورات)."
    ],
    suitableFor: "مناسب للذوق الفخم والتقليدي.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Classic%20interior%20design"
  },
  {
    id: 3,
    title: "النيو كلاسيك (New Classic)",
    image: "/images/finishing-type/new-classic.jpeg",
    features: [
      "مزيج بين المودرن والكلاسيك.",
      "تفاصيل راقية بس بسيطة.",
      "ألوان هادية وفخامة بدون مبالغة."
    ],
    suitableFor: "مناسب لو عايز أناقة بدون تكلف.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=New%20Classic%20interior%20design"
  },
  {
    id: 4,
    title: "البوهيمي (Bohemian)",
    image: "/images/finishing-type/bohemian.jpeg",
    features: [
      "ألوان كثيرة ومتداخلة.",
      "خامات طبيعية (خشب، قطن، خيش).",
      "ديكور عشوائي، وسائد وسجاد كتير.",
      "إضاءة خافتة وديكورات مميزة."
    ],
    suitableFor: "مناسب لو بتحب الستايل الحر والمريح.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Bohemian%20interior%20design"
  },
  {
    id: 5,
    title: "الإسكندنافي (Scandinavian)",
    image: "/images/finishing-type/scandinavian.jpeg",
    features: [
      "بسيط جدًا، فاتح، هادي.",
      "ألوان: أبيض، رمادي، أزرق باهت، أخضر نعناع.",
      "خامات: خشب طبيعي، أقمشة ناعمة.",
      "بيهتم بالراحة والدفء والإضاءة الطبيعية."
    ],
    suitableFor: "مناسب للمساحات الصغيرة ولمحبي البساطة.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Scandinavian%20interior%20design"
  },
  {
    id: 6,
    title: "اللوفت (Loft)",
    image: "/images/finishing-type/loft.jpeg",
    features: [
      "بيشبه المصانع القديمة.",
      "خامات خام: طوب ظاهر، حديد، خشب غامق.",
      "أسقف عالية ومساحات مفتوحة."
    ],
    suitableFor: "مناسب للستايلات الجريئة أو الشقق الواسعة.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Loft%20interior%20design"
  },
  {
    id: 7,
    title: "الصناعي (Industrial)",
    image: "/images/finishing-type/industrial.jpeg",
    features: [
      "بيشبه اللوفت، لكن أكتر خشونة.",
      "طوب وأسمنت ظاهر، مواسير مكشوفة.",
      "ألوان داكنة: رمادي، أسود، بني غامق.",
      "أثاث جلدي ومعدني."
    ],
    suitableFor: "مناسب للشباب أو مساحات الأستوديو.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Industrial%20interior%20design"
  },
  {
    id: 8,
    title: "الريفي (Rustic)",
    image: "/images/finishing-type/rustic.jpeg",
    features: [
      "خامات طبيعية: خشب غير مصنّع، حجر.",
      "إضاءة دافئة، ألوان ترابية.",
      "إحساس بالدفء والبساطة."
    ],
    suitableFor: "مناسب للفلل أو البيوت في المناطق الهادية.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Rustic%20interior%20design"
  },
  {
    id: 9,
    title: "الزين (Zen - ياباني)",
    image: "/images/finishing-type/zen.jpeg",
    features: [
      "راحة وبساطة، مساحات خالية.",
      "ألوان ترابية ناعمة.",
      "استخدام نباتات طبيعية، ومياه أحيانًا."
    ],
    suitableFor: "مناسب لمحبي الهدوء والطاقة الإيجابية.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Zen%20interior%20design"
  },
  {
    id: 10,
    title: "المينيمالي (Minimalist)",
    image: "/images/finishing-type/minimalist.jpeg",
    features: [
      "الحد الأدنى من الأثاث والزينة.",
      "ألوان حيادية جدًا.",
      "كل عنصر له وظيفة، مفيش كراكيب."
    ],
    suitableFor: "مناسب لمحبي البساطة والتوفير.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Minimalist%20interior%20design"
  },
  {
    id: 11,
    title: "الآرت ديكو (Art Deco)",
    image: "/images/finishing-type/art-deco.jpeg",
    features: [
      "زخارف هندسية، وخطوط حادة ومتناظرة.",
      "خامات فاخرة: رخام، ذهب، مرايات.",
      "ألوان جريئة: أسود، ذهبي، زمردي.",
      "أثاث منحني ومزخرف، مع إضاءة قوية."
    ],
    suitableFor: "عشاق الفخامة والرقي، أو الفنادق والشقق الفخمة.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Art%20Deco%20interior%20design"
  },
  {
    id: 12,
    title: "الميد-سنتشري (Mid-Century Modern)",
    image: "/images/finishing-type/mid-century.jpeg",
    features: [
      "أثاث بسيط بأرجل مائلة، تصميمات منخفضة.",
      "ألوان دافئة وزاهية: برتقالي، تركواز، أخضر زيتوني.",
      "استخدام خامات مختلطة: خشب، بلاستيك، جلد.",
      "ستايل يمزج بين الراحة والذوق الرفيع."
    ],
    suitableFor: "محبي الستايل الكلاسيكي البسيط أو عشاق الرترو.",
    moreImagesLink: "https://www.pinterest.com/search/pins/?q=Mid-Century%20Modern%20interior%20design"
  }
];

export default finishingTypes;
