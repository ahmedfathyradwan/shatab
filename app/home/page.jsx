import styles from '../styles/home/page.module.css';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Image from "next/image";
import MonthlyOffers from '../components/OffersPost';
import DonationSection from '../components/DonationSection';
import FinishOrMaintenanceCard from '../components/FinishOrMaintenanceCard';
import OnlineSection from '../components/OnlineSection';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export default async function HomePage() {
  const token = (await cookies()).get("token")?.value ?? null;

  if (!token) {
    redirect("/login");
  }

  try {
    jwt.verify(token, SECRET);
  } catch {
    redirect("/login");
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/homeMob.jpg"
            alt="Home"
            width={390}
            height={390}
            className={styles.homeImg}
          />
        </div>
        <div className={styles.borderCont}>
          <div className={styles.textContainer}>
            <h1 className={styles.h1a}>SHATABHA<span className={styles.h1Span}>.com</span></h1>
            <h3 className={styles.h3b}>موقع</h3>
            <h1 className={styles.h1b}>شطبها</h1>
            <h3 className={styles.h3c}>سهلها على نفسك</h3>
            <h4 className={styles.h4}>
              هنا جمعنا خبرة المهندسين ومجهود سنين من البحث والتصميم في مجال التشطيب والديكور،
              <br />
              عشان نسهّلك طريقك — وتبدأ مشروعك وانت مطمّن، بخطوات واضحة،
              <br />
              وأشخاص موثوقين من مهندسين، ومقاولين، وفنيين من كل التخصصات،
              <br />
              في مكان واحد… اتبنى بحب واحترام لوقتك وفلوسك.
            </h4>
          </div>
        </div>
      </div>

      <section id="services" className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>خدماتنا</h2>
        <div className={styles.aboutUs}>
            <MonthlyOffers />
        </div>
        <div className={styles.FinishOrMaintenanceCard}>
            <FinishOrMaintenanceCard />
        </div>
        <div className={styles.aboutUs}>
            <OnlineSection />
        </div>
        <div className={styles.aboutUs}>
            <DonationSection />
        </div>
      </section>

      <div className={styles.aboutUs}>
          <AboutUs />
      </div>
      <div className={styles.contactUs}>
          <ContactUs />
      </div>
    </div>
  );
}