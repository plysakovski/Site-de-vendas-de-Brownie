import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Brownies Artesanais que Derretem na Boca</h1>
            <p>Feitos com chocolate premium e muito carinho. Experimente o sabor que vai conquistar seu paladar!</p>
            <div className={styles.heroButtons}>
              <Link href="/produtos" className="btn">Ver Produtos</Link>
              <Link href="/sobre" className="btn btn-secondary">Conheça a Maruvas</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/imagens/products/brownie-tela-inicial.png"
              alt="Brownie artesanal Maruvas"
              width={600}
              height={400}
              priority
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}