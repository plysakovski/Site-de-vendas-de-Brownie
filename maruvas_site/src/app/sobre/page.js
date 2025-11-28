import Image from 'next/image';
import styles from './Sobre.module.css';

export default function SobrePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Sobre a Maruvas</h1>
            <p>Conheça nossa história e paixão por brownies artesanais</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>Nossa História</h2>
              <p>
                A Maruvas nasceu do amor por brownies e da vontade de compartilhar 
                momentos especiais através da gastronomia. Tudo começou em 2020, 
                quando nossa fundadora, Maria, decidiu transformar sua paixão por 
                chocolate em um negócio que pudesse levar alegria para as pessoas.
              </p>
              
              <p>
                Começamos com receitas caseiras, testando diferentes combinações 
                de chocolates premium até chegar na textura perfeita: crocante por 
                fora e irresistivelmente macio por dentro.
              </p>

              <h2>Nossa Missão</h2>
              <p>
                Criar brownies excepcionais que não apenas satisfaçam o paladar, 
                mas também criem memórias inesquecíveis. Acreditamos que um bom 
                brownie pode transformar um dia comum em algo especial.
              </p>

              <div className={styles.values}>
                <div className={styles.valueItem}>
                  <i className="fas fa-heart"></i>
                  <h3>Feito com Amor</h3>
                  <p>Cada brownie é preparado com cuidado e dedicação</p>
                </div>
                
                <div className={styles.valueItem}>
                  <i className="fas fa-leaf"></i>
                  <h3>Ingredientes Selecionados</h3>
                  <p>Utilizamos apenas os melhores chocolates e ingredientes</p>
                </div>
                
                <div className={styles.valueItem}>
                  <i className="fas fa-award"></i>
                  <h3>Qualidade Garantida</h3>
                  <p>Compromisso com a excelência em cada produção</p>
                </div>
              </div>
            </div>

            <div className={styles.imageContent}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/imagens/products/brownie-top.png"
                  alt="Loja da Maruvas"
                  width={400}
                  height={300}
                  className={styles.aboutImage}
                />
              </div>
              
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/imagens/products/brownie-cobertura.png"
                  alt="Produção dos brownies"
                  width={400}
                  height={300}
                  className={styles.aboutImage}
                />
              </div>
              
              <div className={styles.contactInfo}>
                <h3>Visite Nossa Loja</h3>
                <div className={styles.contactItem}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Rua dos Brownies, 123 - São Paulo/SP</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-clock"></i>
                  <span>Segunda a Sábado: 9h às 18h</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-phone"></i>
                  <span>(11) 9999-9999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}