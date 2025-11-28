'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getProductImage = (category) => {
    const images = {
      classico: '/imagens/products/brownie-top.png',
      premium: '/imagens/products/brownie-stikadinho2.png',
      especial: '/imagens/products/brownie-cobertura.png',
      kit: '/imagens/products/brownie-tela-inicial.png'
    };
    return images[category] || '/images/products/brownie-classico.jpg';
  };

  const handleAddToCart = () => {
    alert(`${quantity} ${product.name} adicionado(s) ao carrinho!`);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={product.images && product.images[0] ? product.images[0] : getProductImage(product.category)}
          alt={product.name}
          width={300}
          height={200}
          className={styles.productImage}
        />
        {product.isFeatured && <div className={styles.featuredBadge}>Destaque</div>}
        {!product.inStock && <div className={styles.outOfStockBadge}>Fora de Estoque</div>}
      </div>

      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.details}>
          <span className={styles.category}>{product.category}</span>
          <span className={styles.price}>{formatPrice(product.price)}</span>
        </div>

        {product.inStock && (
          <div className={styles.actions}>
            <div className={styles.quantitySelector}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={styles.quantityBtn}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className={styles.quantityBtn}
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className={styles.addToCartBtn}
              disabled={!product.inStock}
            >
              <i className="fas fa-shopping-cart"></i>
              Adicionar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}