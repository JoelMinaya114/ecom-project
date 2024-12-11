import { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 149.99,
    description: "Elegant minimalist design with premium materials",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 89.99,
    description: "Track your fitness goals with this smart device",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    category: "Electronics"
  }
];

export function ProductGrid() {
  const [products] = useState<Product[]>(SAMPLE_PRODUCTS);

  const handleAddToCart = (product: Product) => {
    // This will be integrated with your backend
    console.log('Adding to cart:', product);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}