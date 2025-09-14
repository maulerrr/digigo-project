import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AllProducts from './pages/AllProducts';
import AuthPage from './pages/AuthPage';
import AuthRoute from './components/AuthRoute';
import Recommendations from './pages/Recommendations';
import ProfilePage from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/login" element={<AuthPage />} />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />
          <Route
            path="/products"
            element={
              <AuthRoute>
                <AllProducts />
              </AuthRoute>
            }
          />
          <Route
            path="/recommendations"
            element={
              <AuthRoute>
                <Recommendations />
              </AuthRoute>
            }
          />
          <Route path="/" element={<h2>Welcome to Digigo</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
