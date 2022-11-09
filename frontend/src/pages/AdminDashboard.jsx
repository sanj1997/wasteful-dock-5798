import React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminMain from '../components/Admin/AdminMain';

const AdminDashboard = () => {
  return (
    <Flex>
        {/* Left Sidebar */}
        <Box>
            <AdminSidebar/>
        </Box>
        {/* Right Side container */}
        <Box>
            <AdminMain/>
        </Box>
    </Flex>
  )
}

export default AdminDashboard
