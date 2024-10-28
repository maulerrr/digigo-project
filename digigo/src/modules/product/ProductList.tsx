import React, { useEffect, useState } from 'react';
import apiClient from '../../api/axiosConfig';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get<Product[]>('/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <span>{product.name} - ${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
