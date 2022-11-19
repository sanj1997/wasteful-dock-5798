import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../hoc/PrivateRoutes";
import Address from "../pages/Address";
import AddUser from "../pages/AddUser";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import OrderConfirm from "../pages/OrderConfirm";
import Otpverify from "../pages/Otpverify";
import PageNotFound from "../pages/PageNotFound";
import Payment from "../pages/Payment";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SingleProduct from "../pages/SingleProduct";
import SingalProduct from "../pages/SingleProduct";
import Skin from "../pages/Skin";

// import Skin from '../pages/Skin';

import Whishlist from '../pages/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} />
      <Route path='/address' element={<PrivateRoutes><Address /></PrivateRoutes>} />
      <Route path='/orderconfirm' element={<PrivateRoutes><OrderConfirm /></PrivateRoutes>} />
      <Route path='/payment' element={<PrivateRoutes><Payment /></PrivateRoutes>} />

      <Route path='/skin' element={<Skin />} />
      <Route path='/profile' element={<PrivateRoutes><Whishlist /></PrivateRoutes>} />
      <Route path='/skin/:id' element={<PrivateRoutes><SingleProduct /></PrivateRoutes>} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/details' element={<AddUser />} />
      <Route path='/otp-verify' element={<Otpverify />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
