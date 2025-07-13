import styles from '../app/styles/page.module.css';
import Gallery from './components/Gallery';



export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <img src="/images/homeMob.jpg" className={styles.homeImg} />
        <div className={styles.homeBG}>
          <div className={styles.textCont}>
            <h3  className={styles.h3a}>.eg</h3>
            <h1 className={styles.h1a}>SHATAB</h1>
          </div>
          <h3 className={styles.h3b}>موقع</h3>
          <h1 className={styles.h1b}>شطب</h1>
          <h3 className={styles.h3c}>سهلها على نفسك</h3>
          <h4 className={styles.h4}>شوف شركات تشطيب، وفنيين محترفين،</h4>
          <h4 className={styles.h4}>ومقاولين، وموردين</h4>
          <h4 className={styles.h4}>يسهّلوا عليك تشطيب شقتك</h4>
          <h4 className={styles.h4}>ويوفّروا لك في التكلفة.</h4>
        </div>
        <Gallery />
      </div>
    </div>
  );
}