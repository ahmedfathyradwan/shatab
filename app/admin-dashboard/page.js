import styles from "./page.module.css";

const stats = [
  { label: "إجمالي المستخدمين", value: "1,284", change: "+12%", color: "#3b82f6" },
  { label: "المنتجات النشطة", value: "348", change: "+5%", color: "#10b981" },
  { label: "الطلبات اليوم", value: "73", change: "+18%", color: "#f59e0b" },
  { label: "الإيرادات", value: "24,500 ج", change: "+9%", color: "#8b5cf6" },
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
