# 📱 دليل النظام التصميمي المتجاوب - Shatab.eg

## 🎯 نظرة عامة

تم بناء نظام تصميمي متكامل يدعم جميع أحجام الشاشات من الموبايل الصغير جداً (320px) حتى الشاشات الكبيرة جداً (1920px+).

---

## 📐 نقاط التوقف (Breakpoints)

| الحجم | العرض | الوصف | الأجهزة |
|-------|-------|--------|---------|
| **Base** | 320px+ | الأساس | موبايل صغير جداً (iPhone SE) |
| **xs** | 375px+ | موبايل صغير | iPhone 12/13 Mini |
| **sm** | 430px+ | موبايل كبير | iPhone 14 Pro Max, Phablets |
| **md** | 768px+ | تابلت رأسي | iPad Portrait |
| **lg** | 1024px+ | تابلت أفقي | iPad Landscape, لابتوب صغير |
| **xl** | 1280px+ | ديسكتوب | شاشات عادية |
| **2xl** | 1536px+ | ديسكتوب كبير | شاشات كبيرة |
| **3xl** | 1920px+ | شاشات ضخمة | Full HD+ |

---

## 🎨 نظام الـ Container

### Container العادي
```html
<div class="container">
  <!-- المحتوى هنا -->
</div>
```

**الأحجام:**
- Base (320px): عرض كامل مع padding 1.5rem
- 375px+: padding 2rem
- 430px+: padding 2.5rem
- 768px+: max-width 720px
- 1024px+: max-width 960px
- 1280px+: max-width 1200px
- 1536px+: max-width 1440px
- 1920px+: max-width 1600px

### Container Fluid
```html
<div class="container-fluid">
  <!-- عرض كامل بدون max-width -->
</div>
```

---

## 📊 نظام الـ Grid

### Grid أساسي
```html
<div class="grid">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>
```

### Grid متعدد الأعمدة
```html
<!-- عمودين على الموبايل الكبير -->
<div class="grid grid-2-cols-sm">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>

<!-- 3 أعمدة على التابلت -->
<div class="grid grid-3-cols-md">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
</div>

<!-- 4 أعمدة على اللابتوب -->
<div class="grid grid-4-cols-lg">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
  <div>عنصر 3</div>
  <div>عنصر 4</div>
</div>

<!-- 6 أعمدة على الشاشات الكبيرة -->
<div class="grid grid-6-cols-2xl">
  <!-- 6 عناصر -->
</div>
```

---

## 🔄 نظام الـ Flexbox

### Flex أساسي
```html
<div class="flex">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>
```

### Flex صف على التابلت
```html
<div class="flex flex-row-md">
  <!-- عمودي على الموبايل، أفقي على التابلت+ -->
</div>
```

### Flex مع محاذاة
```html
<div class="flex justify-center align-center">
  <div>محاذاة في المنتصف</div>
</div>

<div class="flex justify-between align-center">
  <div>يسار</div>
  <div>يمين</div>
</div>
```

---

## 🎨 Utility Classes

### Display
```html
<!-- إخفاء على الموبايل، إظهار على التابلت -->
<div class="d-none d-md-block">
  محتوى للتابلت فقط
</div>

<!-- إظهار على الموبايل، إخفاء على اللابتوب -->
<div class="d-block d-lg-none">
  محتوى للموبايل والتابلت فقط
</div>
```

### Spacing
```html
<div class="mt-2 mb-3 p-2">
  <!-- margin-top: 2rem, margin-bottom: 3rem, padding: 2rem -->
</div>
```

### Text Alignment
```html
<div class="text-center text-start-md">
  <!-- وسط على الموبايل، بداية على التابلت -->
</div>
```

### Width
```html
<div class="w-full">عرض كامل</div>
<div class="w-50">نصف العرض</div>
<div class="max-w-md">عرض أقصى متوسط</div>
```

---

## 🎯 أمثلة عملية

### صفحة بطاقات منتجات
```html
<div class="container">
  <section class="section">
    <h1 class="text-center mb-4">العروض المميزة</h1>
    
    <div class="grid grid-2-cols-sm grid-3-cols-md grid-4-cols-lg gap-3">
      <div class="card hover-lift transition">
        <img src="product.jpg" class="img-cover aspect-square rounded mb-2" alt="منتج">
        <h3>اسم المنتج</h3>
        <p class="small">وصف قصير</p>
        <button class="btn btn-primary w-full">اشتري الآن</button>
      </div>
      <!-- المزيد من البطاقات -->
    </div>
  </section>
</div>
```

### صفحة مع Sidebar
```html
<div class="container">
  <div class="sidebar-layout">
    <!-- Sidebar (يظهر فقط على 1024px+) -->
    <aside class="d-none d-lg-block">
      <nav>
        <!-- قائمة التنقل -->
      </nav>
    </aside>
    
    <!-- المحتوى الرئيسي -->
    <main>
      <h1>المحتوى</h1>
      <!-- المحتوى هنا -->
    </main>
  </div>
</div>
```

### نموذج متجاوب
```html
<form class="container max-w-md">
  <div class="form-group">
    <label>الاسم</label>
    <input type="text" class="form-control" placeholder="أدخل اسمك">
  </div>
  
  <div class="form-group">
    <label>البريد الإلكتروني</label>
    <input type="email" class="form-control" placeholder="email@example.com">
  </div>
  
  <button class="btn btn-primary w-full">إرسال</button>
</form>
```

### Hero Section متجاوب
```html
<section class="section">
  <div class="container">
    <div class="flex flex-row-lg align-center gap-4">
      <div class="w-full">
        <h1 class="text-center text-start-lg">عنوان رئيسي</h1>
        <p class="text-center text-start-lg">وصف طويل...</p>
        <div class="flex flex-row-md justify-center justify-start-lg gap-2">
          <button class="btn btn-primary">ابدأ الآن</button>
          <button class="btn">تعرف أكثر</button>
        </div>
      </div>
      
      <div class="w-full d-none d-lg-block">
        <img src="hero.jpg" class="img-responsive rounded" alt="Hero">
      </div>
    </div>
  </div>
</section>
```

---

## 🎭 Animations & Effects

### Fade In
```html
<div class="fade-in">
  محتوى يظهر بتأثير fade
</div>
```

### Hover Effects
```html
<div class="card hover-lift transition">
  بطاقة ترتفع عند التمرير
</div>

<img src="image.jpg" class="hover-scale transition" alt="صورة">
```

---

## 📱 Mobile Navigation

```html
<!-- Navigation للموبايل (يظهر فقط على أقل من 768px) -->
<nav class="mobNav">
  <div class="flex flex-row justify-around align-center">
    <a href="/">الرئيسية</a>
    <a href="/offers">العروض</a>
    <a href="/profile">الملف الشخصي</a>
  </div>
</nav>
```

---

## ♿ Accessibility

### Screen Reader Only
```html
<span class="sr-only">نص للقارئات الشاشة فقط</span>
```

### Focus Visible
جميع العناصر التفاعلية تحتوي على focus outline واضح للتنقل بالكيبورد.

---

## 🎨 Best Practices

### 1. استخدم Mobile First
```css
/* ✅ صحيح */
.element {
  font-size: 1.4rem; /* للموبايل */
}

@media (min-width: 768px) {
  .element {
    font-size: 1.6rem; /* للتابلت+ */
  }
}

/* ❌ خطأ */
@media (max-width: 767px) {
  .element {
    font-size: 1.4rem;
  }
}
```

### 2. استخدم Utility Classes
```html
<!-- ✅ صحيح -->
<div class="flex justify-center align-center gap-2">

<!-- ❌ تجنب -->
<div style="display: flex; justify-content: center;">
```

### 3. استخدم Container
```html
<!-- ✅ صحيح -->
<section>
  <div class="container">
    <!-- المحتوى -->
  </div>
</section>

<!-- ❌ خطأ -->
<section style="padding: 0 20px;">
  <!-- المحتوى -->
</section>
```

---

## 🔧 تخصيص

### إضافة Breakpoint مخصص
```css
@media (min-width: 1400px) {
  .custom-class {
    /* أنماط مخصصة */
  }
}
```

### تعديل الـ Container
```css
@media (min-width: 1920px) {
  .container {
    max-width: 1800px; /* حسب احتياجك */
  }
}
```

---

## 📊 جدول مرجعي سريع

| Class | الوصف |
|-------|--------|
| `.container` | Container متجاوب مع max-width |
| `.container-fluid` | Container بعرض كامل |
| `.grid` | Grid layout |
| `.flex` | Flexbox layout |
| `.d-none` | إخفاء |
| `.d-md-block` | إظهار على التابلت+ |
| `.text-center` | محاذاة وسط |
| `.w-full` | عرض كامل |
| `.btn` | زر |
| `.card` | بطاقة |
| `.section` | قسم مع padding |
| `.hover-lift` | تأثير رفع عند التمرير |
| `.transition` | انتقال سلس |

---

## ✅ Checklist للتأكد من Responsive

- [ ] جرب على Chrome DevTools بجميع الأحجام
- [ ] اختبر على موبايل حقيقي (iPhone & Android)
- [ ] اختبر على تابلت (رأسي وأفقي)
- [ ] اختبر على شاشات كبيرة (1920px+)
- [ ] تأكد من قراءة النصوص على جميع الأحجام
- [ ] تأكد من سهولة الضغط على الأزرار (44px minimum)
- [ ] اختبر التنقل بالكيبورد
- [ ] اختبر مع screen readers

---

## 🚀 الخطوات التالية

1. استخدم هذا النظام في جميع الصفحات
2. راجع كل صفحة موجودة وطبق الـ classes
3. اختبر على أجهزة حقيقية
4. اجمع feedback من المستخدمين

**النظام جاهز للاستخدام! 🎉**
