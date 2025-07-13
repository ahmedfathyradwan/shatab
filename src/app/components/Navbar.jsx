'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './icons/HomeIcon';
import UserIcon from './icons/UserIcon';
import MenuIcon from './icons/MenuIcon';
import SideMenu from './SideMenu';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className={styles.navbar}>
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`${styles.button} ${isMenuOpen ? styles.activeTab : ''}`}
        >
          <MenuIcon
            className={`${styles.icon} ${isMenuOpen ? styles.activeIcon : ''}`}
          />
        </button>

        <Link
          href="/"
          className={`${styles.button} ${isActive('/') ? styles.activeTab : ''}`}
        >
          <HomeIcon
            className={`${styles.icon} ${isActive('/') ? styles.activeIcon : ''}`}
          />
        </Link>

        <Link
          href="/client"
          className={`${styles.button} ${isActive('/client') ? styles.activeTab : ''}`}
        >
          <UserIcon
            className={`${styles.icon} ${isActive('/client') ? styles.activeIcon : ''}`}
          />
        </Link>
      </nav>

      {isMenuOpen && <SideMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
