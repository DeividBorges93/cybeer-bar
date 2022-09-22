import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Register from '../pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Register /> } path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
