'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Maruvas</h3>
              <p>Brownies Artesanais</p>
            </div>
            <p className={styles.footerDescription}>
              Fabricamos os melhores brownies artesanais com ingredientes 
              selecionados e muito amor. Cada mordida é uma experiência única!
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/produtos">Nossos Produtos</Link></li>
              <li><Link href="/sobre">Sobre Nós</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Categorias</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/produtos?category=classico">Brownies Clássicos</Link></li>
              <li><Link href="/produtos?category=premium">Brownies Premium</Link></li>
              <li><Link href="/produtos?category=especial">Especiais</Link></li>
              <li><Link href="/produtos?category=kit">Kits</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Rua dos Brownies, 123<br />São Paulo - SP</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <span>(11) 9999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>contato@maruvas.com.br</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-clock"></i>
                <span>Seg à Sex: 9h-18h<br />Sáb: 9h-14h</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.paymentMethods}>
            <span>Formas de pagamento:</span>
            <div className={styles.paymentIcons}>
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fas fa-barcode"></i>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2024 Maruvas Brownies. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ e muito chocolate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}