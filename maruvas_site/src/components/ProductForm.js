'use client';
import { useState, useEffect } from 'react';
import styles from './ProductForm.module.css';

export default function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'classico',
    ingredients: [''],
    images: [''],
    inStock: true,
    isFeatured: false,
    nutritionalInfo: {
      calories: '',
      carbohydrates: '',
      proteins: '',
      fats: ''
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        category: product.category || 'classico',
        ingredients: product.ingredients?.length ? product.ingredients : [''],
        images: product.images?.length ? product.images : [''],
        inStock: product.inStock ?? true,
        isFeatured: product.isFeatured ?? false,
        nutritionalInfo: {
          calories: product.nutritionalInfo?.calories || '',
          carbohydrates: product.nutritionalInfo?.carbohydrates || '',
          proteins: product.nutritionalInfo?.proteins || '',
          fats: product.nutritionalInfo?.fats || ''
        }
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = product ? `/api/products/${product._id}` : '/api/products';
      const method = product ? 'PUT' : 'POST';

      const dataToSend = {
        ...formData,
        price: parseFloat(formData.price),
        ingredients: formData.ingredients.filter(ing => ing.trim() !== ''),
        images: formData.images.filter(img => img.trim() !== ''),
        nutritionalInfo: {
          calories: formData.nutritionalInfo.calories ? parseInt(formData.nutritionalInfo.calories) : undefined,
          carbohydrates: formData.nutritionalInfo.carbohydrates ? parseFloat(formData.nutritionalInfo.carbohydrates) : undefined,
          proteins: formData.nutritionalInfo.proteins ? parseFloat(formData.nutritionalInfo.proteins) : undefined,
          fats: formData.nutritionalInfo.fats ? parseFloat(formData.nutritionalInfo.fats) : undefined,
        }
      };

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        alert(product ? 'Produto atualizado com sucesso!' : 'Produto criado com sucesso!');
        onSubmit();
      } else {
        alert(`Erro: ${result.error}`);
      }
    } catch (error) {
      alert('Erro ao salvar produto');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.productFormOverlay}>
      <div className={styles.productFormContainer}>
        <h2>{product ? 'Editar Produto' : 'Novo Produto'}</h2>
        
        <form onSubmit={handleSubmit} className={styles.productForm}>
          <div className={styles.formGroup}>
            <label>Nome do Produto *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Descrição *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Preço (R$) *</label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Categoria *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="classico">Clássico</option>
                <option value="premium">Premium</option>
                <option value="especial">Especial</option>
                <option value="kit">Kit</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Ingredientes</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className={styles.arrayField}>
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                  placeholder="Ingrediente"
                />
                {formData.ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayField('ingredients', index)}
                    className={styles.removeBtn}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('ingredients')}
              className={styles.addBtn}
            >
              + Adicionar Ingrediente
            </button>
          </div>

          <div className={styles.formRow}>
            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
              <label>
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                />
                Em Estoque
              </label>
            </div>

            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
              <label>
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                />
                Produto em Destaque
              </label>
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              Cancelar
            </button>
            <button type="submit" disabled={loading} className="btn">
              {loading ? 'Salvando...' : (product ? 'Atualizar' : 'Criar')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}