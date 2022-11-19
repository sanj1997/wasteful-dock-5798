import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../hoc/PrivateRoutes";
import Address from "../pages/Address";
import AddUser from "../pages/AddUser";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import OrderConfirm from "../pages/OrderConfirm";
import Otpverify from "../pages/Otpverify";
import Payment from "../pages/Payment";
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";
import SingalProduct from "../pages/SingalProduct";
import Skin from "../pages/Skin";
// import Skin from '../pages/Skin';

import Whishlist from '../pages/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/address' element={<Address />} />
      <Route path='/orderconfirm' element={<OrderConfirm />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/skin' element={<Skin/>}/>
      <Route path='/whishlist' element={<Whishlist />}/>
      <Route path='/skin/:id' element={<PrivateRoutes><SingalProduct /></PrivateRoutes>}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/details' element={<AddUser />}/>
      <Route path='/otp-verify' element={<Otpverify />}/>
    </Routes>
  );
};

export default AllRoutes;
