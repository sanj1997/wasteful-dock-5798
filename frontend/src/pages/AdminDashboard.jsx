import React, { useState } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminMain from '../components/Admin/AdminMain';

const AdminDashboard = () => {
  const [sidebar,compressSidebar]=useState(false);
  const compress=()=>{
    compressSidebar(!sidebar);
  }
  return (
    <Flex>
        {/* Left Sidebar */}
        <Box position='fixed'>
          <AdminSidebar compressed={sidebar} compress={compress}/>
        </Box>
        {/* Right Side container */}
        <Box marginLeft={sidebar===true?'81px':'231px'} width='100%'>
          <AdminMain/>
        </Box>
    </Flex>
  )
}

export default AdminDashboard
