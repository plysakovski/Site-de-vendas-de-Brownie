'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <h1>
                Maruvas
                <span className={styles.logoSubtitle}>Brownies Artesanais</span>
              </h1>
            </Link>
          </div>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link href="/produtos" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
            <Link href="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            <Link href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            <Link href="/admin/produtos" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          </nav>

          <div className={styles.headerActions}>
            <button className={styles.cartBtn}>
              <i className="fas fa-shopping-cart"></i>
              <span className={styles.cartCount}>0</span>
            </button>
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}