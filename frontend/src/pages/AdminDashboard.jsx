import React, { useState } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import NavbarAdmin from '../components/Admin/NavbarAdmin';
import AdminMain from '../components/Admin/AdminMain';

const AdminDashboard = () => {
  return (
    <Flex>
        {/* Left Sidebar */}
         <Box position='fixed' width='100%'>
          <NavbarAdmin/>
        </Box> 
        {/* Right Side container */}
        <Box width='100%'>
          <AdminMain/>
        </Box>
    </Flex>
  )
}

export default AdminDashboard
