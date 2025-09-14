import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductDetail[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', priceMin: '', priceMax: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products with:', { searchTerm, filters });
        const response = await axiosInstance.get('/products', {
          params: {
            ...filters,
            name: searchTerm,
          },
        });
        
        // Log response data to verify structure
        console.log('Products fetched:', response.data);
  
        // Map `_id` to `id` if needed
        const mappedProducts = response.data.map((product: any) => ({
          ...product,
          id: product._id,
        }));
  
        setProducts(mappedProducts);
        setFilteredProducts(mappedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filters]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <div className="mb-6">
        <FilterOptions filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
