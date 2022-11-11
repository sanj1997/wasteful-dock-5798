
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from '../pages/Address'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import OrderConfirm from '../pages/OrderConfirm'
import Payment from '../pages/Payment'
import SingalProduct from '../pages/SingalProduct'
import Skin from '../pages/Skin';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/address' element={<Address />} />
      <Route path='/orderconfirm' element={<OrderConfirm />} />
      <Route path='/payment' element={<Payment />} />
       <Route path='/skin' element={<Skin />}/>
       <Route path='/skin/:id' element={<SingalProduct />}/>
    </Routes>

  )
}

export default AllRoutes;
