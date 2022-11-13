import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "../pages/Address";
import Cart from "../pages/Cart";
import Hair from "../pages/Hair";
import Home from "../pages/Home";
import OrderConfirm from "../pages/OrderConfirm";
import Payment from "../pages/Payment";
import SingalProduct from "../pages/SingalProduct";
import Skin from "../pages/Skin"
import Whishlist from '../pages/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/address' element={<Address />} />
      <Route path='/orderconfirm' element={<OrderConfirm />} />
      <Route path='/payment' element={<Payment />} />
       <Route path='/skin' element={<Skin />}/>
       <Route path='/hair' element={<Hair />}/>
       <Route path='/wishlist' element={<Whishlist />}/>
       <Route path='/skin/:id' element={<SingalProduct />}/>
       <Route path='/wishlist/:id' element={<SingalProduct />}/>
    </Routes>
  );
};

export default AllRoutes;
