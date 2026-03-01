"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  FileText,
  Settings,
  BarChart2,
  LogOut,
} from "lucide-react";
import styles from "./layout.module.css";

const navItems = [
  { label: "الرئيسية", href: "/admin-dashboard", icon: LayoutDashboard },
  { label: "المستخدمون", href: "/admin-dashboard/users", icon: Users },
  { label: "المنتجات", href: "/admin-dashboard/products", icon: ShoppingBag },
  { label: "الطلبات", href: "/admin-dashboard/orders", icon: FileText },
  { label: "التقارير", href: "/admin-dashboard/reports", icon: BarChart2 },
  { label: "الإعدادات", href: "/admin-dashboard/settings", icon: Settings },
  { label: "تسجيل الخروج", href: "/admin-dashboard/logout", icon: LogOut, danger: true },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper} dir="rtl">
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>لوحة التحكم</span>
        </div>

        <nav className={styles.nav}>
          {navItems.map(({ label, href, icon: Icon, danger }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.navItem} ${isActive ? styles.active : ""} ${danger ? styles.danger : ""}`}
              >
                <Icon className={styles.navIcon} size={20} />
                <span>{label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.adminAvatar}>أ</div>
          <div>
            <p className={styles.adminName}>المدير العام</p>
            <p className={styles.adminRole}>Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.topBarRight}>
            <span className={styles.pageTitle}>
              {navItems.find((item) => item.href === pathname)?.label ?? "لوحة التحكم"}
            </span>
          </div>
          <div className={styles.topBarLeft}>
            <span className={styles.badge}>3 إشعارات</span>
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
