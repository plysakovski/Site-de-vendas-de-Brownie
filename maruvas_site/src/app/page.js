import Hero from '@/components/Hero';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.features}>
        <div className="container">
          <h2 className="text-center">Por que Escolher a Maruvas?</h2>
          <p className="text-center">
            Descubra o que torna nossos brownies especiais
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image
                  src="/imagens/icons/quality.svg"
                  alt="Qualidade Premium"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Qualidade Premium</h3>
              <p>Ingredientes selecionados e receitas exclusivas para um sabor inigualável</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image
                  src="/imagens/icons/fast-delivery.svg"
                  alt="Entrega Rápida"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Entrega Rápida</h3>
              <p>Entregamos em toda São Paulo mantendo a qualidade e frescor</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image
                  src="/imagens/icons/love.svg"
                  alt="Feito com Amor"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Feito com Amor</h3>
              <p>Cada brownie é preparado artesanalmente com muito carinho</p>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <h2>Pronto para Experimentar?</h2>
            <p>Navegue por nossa seleção e encontre o brownie perfeito para você</p>
            <div className={styles.ctaButtons}>
              <a href="/produtos" className="btn">Ver Todos os Produtos</a>
              <a href="/sobre" className="btn btn-secondary">Conheça Nossa História</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}