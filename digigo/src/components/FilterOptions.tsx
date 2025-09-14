import React, { ChangeEvent } from 'react';

interface FilterOptionsProps {
  filters: { category: string; priceMin: string; priceMax: string };
  onFilterChange: (name: string, value: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Category"
        name="category"
        className="p-2 border rounded text-white"
        value={filters.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Min Price"
        name="priceMin"
        className="p-2 border rounded text-white"
        value={filters.priceMin}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Max Price"
        name="priceMax"
        className="p-2 border rounded text-white"
        value={filters.priceMax}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterOptions;
