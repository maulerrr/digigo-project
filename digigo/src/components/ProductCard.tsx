import React, { useEffect, useState } from 'react';
import axiosInstance, { fetchUserId } from '../api/axiosInstance';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

interface ProductCardProps {
  product: ProductDetail;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [productId, setProductId] = useState<string | null>('')
  

  useEffect(() => {
    setProductId(product.id)
    const loadUserId = async () => {
      if (!userId) {
        const id = await fetchUserId();
        if (id) {
          localStorage.setItem('userId', id);
          setUserId(id);
        }
      }
    };
    loadUserId();
  }, [userId, product]);

  const handleLike = async () => {
    if (!userId || !productId) {
      alert('User ID and Product ID are required');
      return;
    }
    try {
      // Log data before sending
      console.log('Sending like interaction:', { userId, productId, type: 'view' });
  
      await axiosInstance.post('/recommendations/interact', {
        userId,
        productId,
        type: 'like',
      });
      alert('Product liked!');
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  const handlePurchase = async () => {
    if (!userId) return alert('User ID is required');
    try {
      await axiosInstance.post('/products/purchase', {
        userId,
        productId: product.id,
      });
      alert('Product purchased!');
    } catch (error) {
      console.error('Error purchasing product:', error);
    }
  };

  const handleView = async () => {
    if (!userId) return alert('User ID is required');
    try {
      await axiosInstance.post('/recommendations/interact', {
        userId,
        productId: product.id,
        type: "view",
      });
      alert('Product viewed!');
    } catch (error) {
      console.error('Error view product:', error);
    }
  };


  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <img src={product.image_url} alt={product.name} className="w-full h-auto" />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <h2 className="text-l font-semibold">{product.category}</h2>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded">
          Like
        </button>
        <button onClick={handlePurchase} className="bg-green-500 text-white px-4 py-2 rounded">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
