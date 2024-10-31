import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import UserProfile from './modules/user/UserProfile';
import ProductList from './modules/product/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/" element={<h2>Welcome to Digigo</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
