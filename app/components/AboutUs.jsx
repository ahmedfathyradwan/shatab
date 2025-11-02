import Image from 'next/image';
import styles from '../styles/home/aboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.title}>معلومات عنا</h2>
      <img
        src="/images/logo.png"
        alt="شطب - SHATAB.eg"
        className={styles.logo}
      />
      <h3 className={styles.shatab}>SHATABHA<span className={styles.shatabSpan}>.com</span></h3>
      <h3 className={styles.description}>
        موقعنا هو دليلك الذكي لتشطيب شقتك<br />
        بأفضل جودة وتكاليف تنافسية<br />
        بنوصلك بشركات تشطيب موثوقة وفنيين محترفين،<br />
        وبتوفر خدمات بأسعار مناسبة<br />
        وكل ده من مكان واحد<br />
        سواء بتدور على شركة أو فني أو حتى تورق وتشتغل على مراحل<br />
        هدفنا نوفر لك الخيارات والمعلومات<br />
        اللي تسهل عليك مشوار التشطيب.. من غير تعب ولا تعقيد.
      </h3>
    </section>
  );
}