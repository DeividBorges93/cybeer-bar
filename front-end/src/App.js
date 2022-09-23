import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShoppingCartProvider from './contexts/ShoppingCartProvider.context';
import CostumerProducts from './pages/CostumerProducts.pages';

function App() {
  return (
    <Routes>
      <Route
        path="/customer/products"
        element={
          <ShoppingCartProvider>
            <CostumerProducts />
          </ShoppingCartProvider>
        }
      />
    </Routes>
  );
}

export default App;
