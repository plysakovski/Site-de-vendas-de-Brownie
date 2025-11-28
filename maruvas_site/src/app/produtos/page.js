import ProductGrid from '@/components/ProductGrid';
import styles from './Produtos.module.css';

async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Falha ao carregar produtos');
    }
    
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <>
      <section className={styles.productsHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Nossos Brownies</h1>
            <p>Descubra nossa seleção de brownies artesanais feitos com os melhores ingredientes</p>
          </div>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className="container">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}