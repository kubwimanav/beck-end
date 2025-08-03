import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashHome from './components/DashHome'
import Layout from './components/Layout'
import User from './components/User';
import Products from './components/Products';
import Login from './components/Login';
import Categories from './components/Categories';

function AppRoute() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashHome />} />
            <Route path="home" element={<DashHome />} />
            <Route path="users" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoute
