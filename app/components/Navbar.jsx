"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";
import UserIcon from "./icons/UserIcon";
import MenuIcon from "./icons/MenuIcon";
import SideMenu from "./SideMenu";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => pathname === path;

  if (!mounted) return null;

  return (
    <>
      <nav className={styles.navbar}>
        {/* 🔹 زر القائمة */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className={`${styles.button} ${isMenuOpen ? styles.activeTab : ""}`}
          suppressHydrationWarning
        >
          <MenuIcon
            className={`${styles.icon} ${isMenuOpen ? styles.activeIcon : ""}`}
          />
        </button>

        {/* 🔹 زر الصفحة الرئيسية */}
        <Link
          href="/"
          className={`${styles.button} ${isActive("/") ? styles.activeTab : ""}`}
        >
          <HomeIcon
            className={`${styles.icon} ${isActive("/") ? styles.activeIcon : ""}`}
          />
        </Link>

        {/* 🔹 زر صفحة مقدم الخدمة */}
        <Link
          href="/profile/provider"
          className={`${styles.button} ${
            isActive("/profile/provider") ? styles.activeTab : ""
          }`}
        >
          <UserIcon
            className={`${styles.icon} ${
              isActive("/profile/provider") ? styles.activeIcon : ""
            }`}
          />
        </Link>
      </nav>

      {/* 🔹 القائمة الجانبية */}
      {isMenuOpen && <SideMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
