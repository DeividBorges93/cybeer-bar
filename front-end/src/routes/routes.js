import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ShoppingCartProvider from '../contexts/ShoppingCartProvider.context';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CostumerProducts from '../pages/CostumerProducts.pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Login /> } path="/" />
        <Route element={ <Register /> } path="/register" />
        <Route
          path="/customer/products"
          element={
            <ShoppingCartProvider>
              <CostumerProducts />
            </ShoppingCartProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
