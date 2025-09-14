import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products"
      className="p-2 border rounded w-full text-white"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
