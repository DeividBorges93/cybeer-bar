import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Login /> } path="/" />
        <Route element={ <Register /> } path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
