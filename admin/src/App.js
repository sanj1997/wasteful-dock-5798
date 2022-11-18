import React from 'react';
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import SingleUser from "./pages/SingleUser/SingleUser";
import NewUsers from "./pages/NewUsers/NewUsers";
import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./darkmode.scss";
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";
import NewProducts from './pages/NewProducts/NewProducts';
import UserList from './pages/UserList/UserList';
import ProductList from './pages/ProductList/ProductList';
import SingleProduct from './pages/SingleProduct/SingleProduct';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<SingleUser />} />
              <Route
                path="newuser"
                element={<NewUsers inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<SingleProduct />} />
              <Route
                path="newproduct"
                element={<NewProducts inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App
