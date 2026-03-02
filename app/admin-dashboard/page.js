import styles from "./page.module.css";

const stats = [
  { label: "إجمالي المستخدمين", value: "1,284", change: "+12%", color: "#AB874B" },
  { label: "المنتجات النشطة", value: "348", change: "+5%", color: "#AB874B" },
  { label: "الطلبات اليوم", value: "73", change: "+18%", color: "#AB874B" },
  { label: "الإيرادات", value: "24,500 ج", change: "+9%", color: "#AB874B" },
];

export default function AdminDashboard() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>مرحباً بك 👋</h2>
      <p className={styles.sub}>إليك نظرة عامة على لوحة التحكم</p>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard} style={{ "--accent": stat.color }}>
            <p className={styles.statLabel}>{stat.label}</p>
            <p className={styles.statValue}>{stat.value}</p>
            <span className={styles.statChange}>{stat.change} هذا الشهر</span>
          </div>
        ))}
      </div>
    </div>
  );
}
