'use client';
import { useState, useEffect } from 'react';
import ProductForm from '../../../components/ProductForm';
import ProductList from '../../../components/ProductList';

export default function AdminProdutos() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const result = await response.json();
      if (result.success) {
        setProducts(result.data);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          fetchProducts();
          alert('Produto excluído com sucesso!');
        }
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    fetchProducts();
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>Gerenciar Produtos</h1>
          <button onClick={handleCreate} className="btn">
            Novo Produto
          </button>
        </div>

        {showForm && (
          <ProductForm 
            product={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}

        <ProductList 
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <style jsx>{`
        .admin-page {
          padding: 120px 0 80px;
          min-height: 100vh;
          background: var(--light);
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--primary);
        }
      `}</style>
    </div>
  );
}