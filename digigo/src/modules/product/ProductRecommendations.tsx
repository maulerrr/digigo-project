import React, { useEffect, useState } from 'react';
import apiClient from '../../api/axiosConfig';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductRecommendations: React.FC<{ userId: number }> = ({ userId }) => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await apiClient.get<Product[]>(`/recommendations/${userId}`);
        setRecommendedProducts(response.data);
      } catch (err) {
        setError('Failed to load product recommendations');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  if (loading) return <p>Loading recommendations...</p>;
  if (error) return <p>{error}</p>;
  if (recommendedProducts.length === 0) return <p>No recommendations available.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recommendedProducts.map(product => (
        <div key={product.id} className="border p-4 rounded-md shadow-md">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-2" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductRecommendations;
