'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  const [filter, setFilter] = useState('todos');

  const categories = [
    { value: 'todos', label: 'Todos' },
    { value: 'classico', label: 'Clássicos' },
    { value: 'premium', label: 'Premium' },
    { value: 'especial', label: 'Especiais' },
    { value: 'kit', label: 'Kits' }
  ];

  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className={styles.productGrid}>
      <div className={styles.filters}>
        <h2>Nossas Delícias</h2>
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`${styles.filterBtn} ${filter === category.value ? styles.active : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className={styles.noProducts}>
          <h3>Nenhum produto encontrado</h3>
          <p>Em breve teremos novidades!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}