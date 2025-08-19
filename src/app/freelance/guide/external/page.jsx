import ExternalGuidePage from './external-guide-page';

export default function Page() {
  // بيانات الدليل بشكل ثابت (يمكنك تعديلها حسب الحاجة)
  const guide = {
    title: "عنوان الدليل الخارجي",
    content: "محتوى الدليل الخارجي هنا...",
  };

  return <ExternalGuidePage guide={guide} />;
}