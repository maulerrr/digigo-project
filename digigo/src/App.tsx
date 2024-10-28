import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import UserProfile from './modules/user/UserProfile';
import ProductList from './modules/product/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/profile" component={UserProfile} />
          <Route path="/products" component={ProductList} />
          <Route path="/" component={() => <h2>Welcome to Digigo</h2>} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
