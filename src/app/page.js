import styles from '../app/styles/home/page.module.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FinishChoiceCard from './components/FinishChoiceCard';
import Gallery from './components/Gallery';



export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.imgContainer}>
          <img src="/shatab/images/homeMob.jpg" className={styles.homeImg} />
        </div>
        <div className={styles.borderCont}>
          <div className={styles.textContainer}>
            <h1 className={styles.h1a}>SHATAB<span className={styles.h1Span}>.eg</span></h1>
            <h3 className={styles.h3b}>موقع</h3>
            <h1 className={styles.h1b}>شطب</h1>
            <h3 className={styles.h3c}>سهلها على نفسك</h3>
            <h4 className={styles.h4}>شوف شركات تشطيب، وفنيين محترفين،</h4>
            <h4 className={styles.h4}>ومقاولين، وموردين</h4>
            <h4 className={styles.h4}>يسهّلوا عليك تشطيب شقتك</h4>
            <h4 className={styles.h4}>ويوفّروا لك في التكلفة.</h4>
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
          <Gallery />
      </div>
      <div className={styles.finishChoiceCard}>
          <FinishChoiceCard />
      </div>
      <div className={styles.aboutUs}>
          <AboutUs />
      </div>
      <div className={styles.contactUs}>
          <ContactUs />
      </div>
    </div>
  );
}