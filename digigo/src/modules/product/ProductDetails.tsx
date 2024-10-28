import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/axiosConfig';

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await apiClient.get<ProductDetail>(`/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-xl mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-lg mb-2">Category: {product.category}</p>
      <p className="text-md">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
