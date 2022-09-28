import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import ShoppingCartProvider from '../contexts/ShoppingCartProvider.context';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CostumerProducts from '../pages/CostumerProducts.pages';
import CustomerCheckout from '../pages/Checkout';
import Admin from '../pages/Admin';
import SellerOrders from '../pages/SellerOrders.page';
import CustomerOrders from '../pages/CustomerOrders.page';
import OrderDetail from '../pages/OrderDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navigate to="/login" /> } exact path="/" />
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Register /> } path="/register" />
        <Route
          path="/customer/products"
          element={
            <ShoppingCartProvider>
              <CostumerProducts />
            </ShoppingCartProvider>
          }
        />
        <Route
          path="/customer/checkout"
          element={
            <ShoppingCartProvider>
              <CustomerCheckout />
            </ShoppingCartProvider>
          }
        />
        <Route element={ <CustomerOrders /> } path="/customer/orders" />
        <Route element={ <OrderDetail /> } path="/customer/orders/:id" />
        <Route element={ <Admin /> } path="/admin/manage" />
        <Route element={ <SellerOrders /> } path="/seller/orders" />
        <Route element={ <OrderDetail /> } path="/seller/orders/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
