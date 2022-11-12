import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Box, Flex} from '@chakra-ui/react';
import NavbarAdmin from './NavbarAdmin';
import AdminHome from './AdminHome';
import AdminProducts from './AdminProducts';

const AdminMain = ({compressed}) => {
  return (
    <>
      <Box>
      {/* routes here */}
      <Routes>
        <Route path='/admin/home' element={<AdminHome/>} />
        <Route path='/admin/products' element={<AdminProducts/>} />
      </Routes>
      </Box>  
    </>
  )
}

export default AdminMain
