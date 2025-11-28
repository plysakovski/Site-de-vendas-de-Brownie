import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, informe o nome do produto'],
    trim: true,
    maxlength: [100, 'Nome não pode ter mais que 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'Por favor, informe a descrição'],
    maxlength: [500, 'Descrição não pode ter mais que 500 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'Por favor, informe o preço'],
    min: [0, 'Preço não pode ser negativo']
  },
  category: {
    type: String,
    required: [true, 'Por favor, informe a categoria'],
    enum: {
      values: ['classico', 'premium', 'especial', 'kit'],
      message: 'Categoria inválida'
    }
  },
  ingredients: [{
    type: String
  }],
  images: [{
    type: String
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  nutritionalInfo: {
    calories: Number,
    carbohydrates: Number,
    proteins: Number,
    fats: Number
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  }
}, {
  timestamps: true
});


ProductSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  next();
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);