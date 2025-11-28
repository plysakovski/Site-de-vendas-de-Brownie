import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

// GET - Buscar produto específico
export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    const product = await Product.findOne({ _id: params.id });
    
    if (!product) {
      return NextResponse.json({ success: false, error: 'Produto não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// PUT - Atualizar produto
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const product = await Product.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    
    if (!product) {
      return NextResponse.json({ success: false, error: 'Produto não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE - Remover produto
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    
    const deletedProduct = await Product.deleteOne({ _id: params.id });
    
    if (!deletedProduct) {
      return NextResponse.json({ success: false, error: 'Produto não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}