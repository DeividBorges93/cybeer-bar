import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CostumerProducts from './pages/CostumerProducts.pages';

function App() {
  return (
    <Routes>
      <Route path="/customer/products" element={ <CostumerProducts /> } />
    </Routes>
  );
}

export default App;
