# 🎨 كيفية استخدام النظام التصميمي المتجاوب

## 🚀 البدء السريع

### 1. استيراد المكونات

```javascript
import {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveCard,
  ResponsiveImage,
  ResponsiveSection
} from '@/app/components/responsive';
```

### 2. بناء صفحة بسيطة

```jsx
export default function MyPage() {
  return (
    <ResponsiveSection spacing="md">
      <ResponsiveContainer>
        <h1 className="text-center mb-4">مرحباً بك</h1>
        
        <ResponsiveGrid cols={1} md={2} lg={3} gap="3">
          <ResponsiveCard hover>
            <h3>بطاقة 1</h3>
            <p>محتوى البطاقة</p>
          </ResponsiveCard>
          
          <ResponsiveCard hover>
            <h3>بطاقة 2</h3>
            <p>محتوى البطاقة</p>
          </ResponsiveCard>
          
          <ResponsiveCard hover>
            <h3>بطاقة 3</h3>
            <p>محتوى البطاقة</p>
          </ResponsiveCard>
        </ResponsiveGrid>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
```

---

## 📦 المكونات المتاحة

### 1. ResponsiveContainer

**الاستخدام:**
```jsx
<ResponsiveContainer variant="default">
  {/* المحتوى */}
</ResponsiveContainer>
```

**الخصائص:**
- `variant`: `'default'` | `'fluid'` | `'narrow'` | `'wide'`
- `className`: classes إضافية

**الأمثلة:**
```jsx
// Container عادي (max-width حسب الشاشة)
<ResponsiveContainer variant="default">
  محتوى عادي
</ResponsiveContainer>

// Container بعرض كامل
<ResponsiveContainer variant="fluid">
  محتوى بعرض كامل
</ResponsiveContainer>

// Container ضيق (للنصوص)
<ResponsiveContainer variant="narrow">
  نص طويل يحتاج عرض محدود
</ResponsiveContainer>
```

---

### 2. ResponsiveGrid

**الاستخدام:**
```jsx
<ResponsiveGrid cols={1} sm={2} md={3} lg={4} gap="3">
  {/* العناصر */}
</ResponsiveGrid>
```

**الخصائص:**
- `cols`: عدد الأعمدة الافتراضي (موبايل)
- `sm`: عدد الأعمدة على 430px+
- `md`: عدد الأعمدة على 768px+
- `lg`: عدد الأعمدة على 1024px+
- `xl`: عدد الأعمدة على 1280px+
- `gap`: حجم الفجوة (`'1'` | `'2'` | `'3'` | `'4'`)

**الأمثلة:**
```jsx
// عمود واحد على الموبايل، عمودين على التابلت، 4 على اللابتوب
<ResponsiveGrid cols={1} md={2} lg={4} gap="3">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
  <div>عنصر 4</div>
</ResponsiveGrid>

// Grid للمنتجات
<ResponsiveGrid cols={2} sm={2} md={3} lg={4} xl={5} gap="2">
  {products.map(product => (
    <ProductCard key={product.id} {...product} />
  ))}
</ResponsiveGrid>
```

---

### 3. ResponsiveCard

**الاستخدام:**
```jsx
<ResponsiveCard hover variant="default">
  {/* محتوى البطاقة */}
</ResponsiveCard>
```

**الخصائص:**
- `hover`: تفعيل تأثير hover (default: `true`)
- `variant`: `'default'` | `'outlined'` | `'elevated'`
- `className`: classes إضافية

**الأمثلة:**
```jsx
// بطاقة عادية مع hover
<ResponsiveCard hover>
  <h3>عنوان</h3>
  <p>محتوى</p>
</ResponsiveCard>

// بطاقة بدون ظل
<ResponsiveCard variant="outlined" hover={false}>
  <p>بطاقة بسيطة</p>
</ResponsiveCard>

// بطاقة مرتفعة
<ResponsiveCard variant="elevated">
  <p>بطاقة بارزة</p>
</ResponsiveCard>
```

---

### 4. ResponsiveImage

**الاستخدام:**
```jsx
<ResponsiveImage
  src="/image.jpg"
  alt="وصف الصورة"
  aspectRatio="square"
  fit="cover"
/>
```

**الخصائص:**
- `src`: مصدر الصورة
- `alt`: نص بديل (مطلوب)
- `fit`: `'cover'` | `'contain'` | `'responsive'`
- `aspectRatio`: `'square'` | `'video'` | `'4-3'`
- `width`: عرض الصورة (default: 800)
- `height`: ارتفاع الصورة (default: 600)
- `priority`: تحميل أولوية (default: false)

**الأمثلة:**
```jsx
// صورة مربعة
<ResponsiveImage
  src="/product.jpg"
  alt="منتج"
  aspectRatio="square"
  fit="cover"
/>

// صورة بنسبة 16:9
<ResponsiveImage
  src="/banner.jpg"
  alt="بانر"
  aspectRatio="video"
  fit="cover"
  priority
/>

// صورة متجاوبة عادية
<ResponsiveImage
  src="/photo.jpg"
  alt="صورة"
  fit="responsive"
/>
```

---

### 5. ResponsiveSection

**الاستخدام:**
```jsx
<ResponsiveSection spacing="md" bg="white">
  {/* محتوى القسم */}
</ResponsiveSection>
```

**الخصائص:**
- `spacing`: `'sm'` | `'md'` | `'lg'`
- `bg`: `'transparent'` | `'white'` | `'primary'` | `'secondary'` | أي لون CSS
- `className`: classes إضافية

**الأمثلة:**
```jsx
// قسم عادي
<ResponsiveSection spacing="md">
  <ResponsiveContainer>
    <h2>عنوان القسم</h2>
  </ResponsiveContainer>
</ResponsiveSection>

// قسم بخلفية ملونة
<ResponsiveSection spacing="lg" bg="secondary">
  <ResponsiveContainer>
    <h1 className="text-center">Hero Section</h1>
  </ResponsiveContainer>
</ResponsiveSection>

// قسم صغير
<ResponsiveSection spacing="sm" bg="white">
  <ResponsiveContainer variant="narrow">
    <p>نص قصير</p>
  </ResponsiveContainer>
</ResponsiveSection>
```

---

## 🎯 أمثلة كاملة

### صفحة عروض

```jsx
'use client';
import {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveCard,
  ResponsiveImage,
  ResponsiveSection
} from '@/app/components/responsive';

export default function OffersPage() {
  const offers = [
    { id: 1, title: 'عرض 1', image: '/offer1.jpg', price: '500 جنيه' },
    { id: 2, title: 'عرض 2', image: '/offer2.jpg', price: '750 جنيه' },
    // ...
  ];

  return (
    <>
      {/* Hero */}
      <ResponsiveSection bg="secondary" spacing="lg">
        <ResponsiveContainer>
          <h1 className="text-center mb-2">عروض الشهر</h1>
          <p className="text-center body">أفضل العروض على منصة شطبها</p>
        </ResponsiveContainer>
      </ResponsiveSection>

      {/* Offers Grid */}
      <ResponsiveSection spacing="md">
        <ResponsiveContainer>
          <ResponsiveGrid cols={1} sm={2} md={3} lg={4} gap="3">
            {offers.map(offer => (
              <ResponsiveCard key={offer.id} hover>
                <ResponsiveImage
                  src={offer.image}
                  alt={offer.title}
                  aspectRatio="square"
                  fit="cover"
                  className="rounded mb-2"
                />
                <h3 className="h4 mb-1">{offer.title}</h3>
                <p className="small text-primaryColor">{offer.price}</p>
                <button className="btn btn-primary w-full mt-2">
                  عرض التفاصيل
                </button>
              </ResponsiveCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </ResponsiveSection>
    </>
  );
}
```

### صفحة Profile

```jsx
export default function ProfilePage() {
  return (
    <ResponsiveSection spacing="md">
      <ResponsiveContainer>
        <div className="flex flex-row-lg gap-4">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <ResponsiveCard>
              <div className="flex flex-col align-center gap-3">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <ResponsiveImage
                    src="/avatar.jpg"
                    alt="صورة المستخدم"
                    aspectRatio="square"
                    fit="cover"
                  />
                </div>
                <h2 className="h3 m-0">أحمد محمد</h2>
                <p className="small text-center">مقدم خدمة - شركة</p>
                <div className="flex gap-1">
                  <span>⭐</span>
                  <span>4.8</span>
                  <span className="small">(125 تقييم)</span>
                </div>
              </div>
            </ResponsiveCard>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <ResponsiveCard>
              <h3 className="mb-3">نبذة عني</h3>
              <p>نص طويل عن المستخدم...</p>
              
              <h3 className="mt-4 mb-3">الأعمال السابقة</h3>
              <ResponsiveGrid cols={2} md={3} gap="2">
                <ResponsiveImage
                  src="/work1.jpg"
                  alt="عمل 1"
                  aspectRatio="square"
                  fit="cover"
                  className="rounded hover-scale transition"
                />
                {/* المزيد من الأعمال */}
              </ResponsiveGrid>
            </ResponsiveCard>
          </div>
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
```

---

## 🎨 Utility Classes المفيدة

### Display
```html
<div class="d-none d-md-block">
  <!-- يظهر فقط على التابلت+ -->
</div>

<div class="d-block d-lg-none">
  <!-- يظهر فقط على الموبايل والتابلت -->
</div>
```

### Flex
```html
<div class="flex justify-center align-center gap-2">
  <!-- محاذاة في المنتصف مع فجوة -->
</div>

<div class="flex flex-row-md justify-between">
  <!-- عمودي على الموبايل، أفقي على التابلت -->
</div>
```

### Text
```html
<h1 class="text-center text-start-md">
  <!-- وسط على الموبايل، بداية على التابلت -->
</h1>
```

### Spacing
```html
<div class="mt-3 mb-4 p-2">
  <!-- margin-top: 3rem, margin-bottom: 4rem, padding: 2rem -->
</div>
```

---

## ✅ Checklist للصفحات الجديدة

عند بناء صفحة جديدة، تأكد من:

- [ ] استخدام `ResponsiveContainer` للمحتوى
- [ ] استخدام `ResponsiveGrid` للعناصر المتكررة
- [ ] استخدام `ResponsiveCard` للبطاقات
- [ ] استخدام `ResponsiveImage` للصور
- [ ] استخدام `ResponsiveSection` للأقسام
- [ ] اختبار على جميع الأحجام (320px - 1920px+)
- [ ] التأكد من قراءة النصوص
- [ ] التأكد من سهولة الضغط على الأزرار
- [ ] اختبار على موبايل حقيقي

---

## 🚀 نصائح للأداء

1. **استخدم `priority` للصور المهمة:**
```jsx
<ResponsiveImage
  src="/hero.jpg"
  alt="Hero"
  priority // للصور في أعلى الصفحة
/>
```

2. **استخدم lazy loading للصور:**
```jsx
<ResponsiveImage
  src="/image.jpg"
  alt="صورة"
  // بدون priority = lazy loading تلقائي
/>
```

3. **استخدم `variant="narrow"` للنصوص الطويلة:**
```jsx
<ResponsiveContainer variant="narrow">
  <article>
    {/* نص طويل */}
  </article>
</ResponsiveContainer>
```

---

## 📱 اختبار الـ Responsive

### في Chrome DevTools:
1. اضغط `F12`
2. اضغط `Ctrl + Shift + M` (Toggle Device Toolbar)
3. جرب الأحجام:
   - iPhone SE (375x667)
   - iPhone 14 Pro Max (430x932)
   - iPad (768x1024)
   - iPad Pro (1024x1366)
   - Desktop (1280x720)
   - Large Desktop (1920x1080)

### على أجهزة حقيقية:
- اختبر على موبايل Android
- اختبر على iPhone
- اختبر على تابلت
- اختبر على لابتوب
- اختبر على شاشة كبيرة

---

**النظام جاهز للاستخدام! 🎉**
