import React, { useEffect, useState } from 'react';
import axiosInstance, { fetchUserId } from '../api/axiosInstance';
import ProductCard from '../components/ProductCard';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

const Recommendations: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadUserIdAndFetchRecommendations = async () => {
      const fetchedUserId = await fetchUserId();
      if (fetchedUserId) {
        setUserId(fetchedUserId);
        
        try {
          const response = await axiosInstance.get('/recommendations', {
            params: { userId: fetchedUserId },
          });
          
          const mappedProducts = response.data.map((product: any) => ({
            ...product,
            id: product._id,
          }));
          
          setProducts(mappedProducts);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      }
    };

    loadUserIdAndFetchRecommendations();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Recommendations;
