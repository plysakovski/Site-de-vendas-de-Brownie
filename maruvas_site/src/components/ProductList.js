'use client';
import styles from './ProductList.module.css';

export default function ProductList({ products, onEdit, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      classico: 'Clássico',
      premium: 'Premium',
      especial: 'Especial',
      kit: 'Kit'
    };
    return labels[category] || category;
  };

  return (
    <div className={styles.productList}>
      {products.length === 0 ? (
        <p className={styles.noProducts}>Nenhum produto cadastrado</p>
      ) : (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product._id} className={styles.productCard}>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.productDetails}>
                  <span className={styles.price}>{formatPrice(product.price)}</span>
                  <span className={`${styles.category} ${styles[product.category]}`}>
                    {getCategoryLabel(product.category)}
                  </span>
                  <span className={`${styles.stock} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? 'Em estoque' : 'Fora de estoque'}
                  </span>
                  {product.isFeatured && <span className={styles.featured}>Destaque</span>}
                </div>
              </div>
              
              <div className={styles.productActions}>
                <button 
                  onClick={() => onEdit(product)}
                  className={styles.btnEdit}
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(product._id)}
                  className={styles.btnDelete}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}