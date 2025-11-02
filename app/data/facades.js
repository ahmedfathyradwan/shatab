const facades = [
  {
    id: 1,
    title: "مختلطة (Mixed Materials Facade)",
    features: [
      "مزج خامات لإبراز عناصر الواجهة (حجر + زجاج + خشب مثلاً)",
      "مرونة تصميمية عالية لإظهار تفاصيل معمارية مميزة",
      "مناسبة لإنشاء هوية بصرية للمبنى وتجزئة الألوان والملمس"
    ],
    slug: "mixed",
    image: "/images/facades/mixed.jpg",
    responsible: [
      "المهندس المعماري",
      "مقاول الواجهات",
      "فني تركيب الحجر أو الخشب أو المعدن"
    ],
    links: [
      { name: "المزيد من الأمثلة", url: "https://www.pinterest.com/ideas/cladding-and-render-facade/919351717672/" }
    ],
    cta: "https://www.pinterest.com/ideas/cladding-and-render-facade/919351717672/"
  },

  {
    id: 2,
    title: "محارة (Render / Stucco Finish)",
    features: [
      "محارة أسمنتية أو رندر ملون جاهز مع طبقة نهائية",
      "تكلفة معتدلة وسهولة الإصلاح وإعادة الطلاء",
      "خيار شائع للستايل الكلاسيكي والحديث البسيط"
    ],
    slug: "render",
    image: "/images/facades/render.jpg",
    responsible: [
      "عامل المحارة (البنا)",
      "دهّان",
      "المهندس المعماري"
    ],
    links: [
      { name: "أفكار واجهات المحارة", url: "https://www.pinterest.com/ideas/external-render/953622724271/" }
    ],
    cta: "https://www.pinterest.com/ideas/external-render/953622724271/"
  },

  {
    id: 3,
    title: "حجر طبيعي / فرعوني / هاشمي (Natural Stone Facade)",
    features: [
      "مظهر طبيعي وراقي، متوفر بأنواع وألوان متعددة",
      "متين ومناسب للواجهات الخارجية لكن يحتاج تركيب محترف",
      "يشمل الفرعوني والهاشمي كأنماط محلية مميزة"
    ],
    slug: "stone",
    image: "/images/facades/stone.jpg",
    responsible: [
      "فني تركيب الحجر",
      "مقاول الواجهات",
      "مهندس إنشائي"
    ],
    links: [
      { name: "الحجر الطبيعي", url: "https://www.pinterest.com/ideas/facade-stone-cladding/946609294885/" },
      { name: "الحجر الفرعوني", url: "https://www.pinterest.com/dlyc007/natural-stone-facade-cladding/" },
      { name: "الحجر الهاشمي", url: "https://www.pinterest.com/mist012/exterior-finishes/" }
    ],
    cta: "https://www.pinterest.com/ideas/facade-stone-cladding/946609294885/"
  },

  {
    id: 4,
    title: "زجاجية (Glass Facade)",
    features: [
      "مظهر حديث وشكل مفتوح مع إطلالات كبيرة",
      "يجب استخدام زجاج عازل (Double glazing / Low-E) للتحكم في الحرارة",
      "يتطلب صيانة دورية (تنظيف) واعتبارات خصوصية وأمان"
    ],
    slug: "glass",
    image: "/images/facades/glass.jpg",
    responsible: [
      "فني تركيب الزجاج",
      "مهندس واجهات",
      "المهندس المعماري"
    ],
    links: [
      { name: "تصاميم واجهات زجاجية", url: "https://www.pinterest.com/tloranger3529/glass-facades/" }
    ],
    cta: "https://www.pinterest.com/tloranger3529/glass-facades/"
  },

  {
    id: 5,
    title: "خشب / WPC (Wood Facade)",
    features: [
      "مظهر دافئ وطبيعي، مع خيارات خشب طبيعي أو خشب-بلاستيك مركب (WPC)",
      "مقاوم للتعفن والحشرات في حالة WPC وسهل التركيب كألواح",
      "مناسب للأجزاء الزخرفية أو تغطية أجزاء من الواجهة ضمن تصميم مختلط"
    ],
    slug: "wood",
    image: "/images/facades/wood.jpg",
    responsible: [
      "نجّار / فني WPC",
      "مقاول الواجهات",
      "المهندس المعماري"
    ],
    links: [
      { name: "أمثلة واجهات خشب وWPC", url: "https://www.pinterest.com/fugelan/wpc-wood-plastic-composite/" }
    ],
    cta: "https://www.pinterest.com/fugelan/wpc-wood-plastic-composite/"
  },

  {
    id: 6,
    title: "سيراميك (Ceramic Cladding)",
    features: [
      "ألواح سيراميكية مقاومة للبقع وسهلة التنظيف",
      "خيارات ألوان ونقوش متعددة وتكلفة تنافسية",
      "تحتاج تركيب دقيق وتسريب مفاصل جيد لمنع تسرب المياه"
    ],
    slug: "ceramic",
    image: "/images/facades/ceramic.jpg",
    responsible: [
      "فني تركيب السيراميك",
      "المهندس المعماري",
      "مقاول الواجهات"
    ],
    links: [
      { name: "أمثلة واجهات سيراميكية", url: "https://www.pinterest.com/ghaxhimustafa/ceramic-facade/" }
    ],
    cta: "https://www.pinterest.com/ghaxhimustafa/ceramic-facade/"
  },

  {
    id: 7,
    title: "سمنت بورد (Cement Board Cladding)",
    features: [
      "ألواح ألياف-أسمنت متينة ومقاومة للرطوبة",
      "خفيفة نسبياً وسهلة التركيب وتقبل الدهانات المختلفة",
      "مناسبة للمناطق الرطبة والواجهات الحديثة"
    ],
    slug: "cementboard",
    image: "/images/facades/cementboard.jpg",
    responsible: [
      "فني تركيب سمنت بورد",
      "مورد الألواح الأسمنتية",
      "المهندس المعماري"
    ],
    links: [
      { name: "أفكار واجهات سمنت بورد", url: "https://www.pinterest.com/russellcrosby69/fiber-cement-panel-facade/" }
    ],
    cta: "https://www.pinterest.com/russellcrosby69/fiber-cement-panel-facade/"
  },

  {
    id: 8,
    title: "رخام (Marble Facade)",
    features: [
      "مظهر فاخر ولامع شائع في الواجهات الراقية",
      "يحتاج تثبيت دقيق وقد يتطلب صيانة (جلي وتلميع)",
      "سعره أعلى ومناسب للمباني الفاخرة أو المداخل الرئيسية"
    ],
    slug: "marble",
    image: "/images/facades/marble.jpg",
    responsible: [
      "فني تركيب الرخام",
      "مقاول الواجهات",
      "المهندس المعماري"
    ],
    links: [
      { name: "أفكار واجهات رخام", url: "https://www.pinterest.com/cathyli4054/marble-facade/" }
    ],
    cta: "https://www.pinterest.com/cathyli4054/marble-facade/"
  }
];

export function getFacadeBySlug(slug) {
  return facades.find(f => f.slug === slug) || null;
}

export function openFacadeLink(slug) {
  const f = getFacadeBySlug(slug);
  if (!f) return null;
  return f.cta;
}

export default facades;
