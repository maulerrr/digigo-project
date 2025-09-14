import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-[#242827] text-[#fcfcfc] p-4 shadow-md">
      <div className="container mx-auto w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Digigo</h1>
        <nav>
          <Link to="/profile" className="mr-6 text-lg hover:text-[#b5233c]">Profile</Link>
          <Link to="/products" className="mr-6 text-lg hover:text-[#b5233c]">Products</Link>
          <Link to="/recommendations" className="text-lg hover:text-[#b5233c]">Special for you</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
