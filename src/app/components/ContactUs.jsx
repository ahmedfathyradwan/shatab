import styles from '../styles/home/contactUs.module.css';
import WhatsappIcon from './icons/WhatsappIcon';
import TelegramIcon from './icons/TelegramIcon';


export default function ContactUs() {
  return (
    <>
      <section className={styles.contactUsSection}>
        <h2 className={styles.title}>تواصل معنا</h2>
        <p className={styles.description}>
          نسعد بالتواصل معك والإجابة على كل استفساراتك
        </p>
        <div className={styles.chatButtons}>
          <a
            href="https://wa.me/2001205040743"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            واتساب
            <WhatsappIcon className={styles.icon} />
          </a>

          <a
            href="https://t.me/ah_fathy_74"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramButton}
          >
            تيليجرام
            <TelegramIcon className={styles.icon} />
          </a>
        </div>
        

      </section>
      <footer className={styles.footer}>
        جميع الحقوق محفوظة &copy; شطب - SHATAB.eg
      </footer>
    </>
  );
}