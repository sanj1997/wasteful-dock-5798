import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Skin from '../pages/Skin';

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/skin' element={<Skin />}/>
    </Routes>
    </>
  )
}

export default AllRoutes;
