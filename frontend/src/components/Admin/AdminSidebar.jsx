import React from 'react';
import {Box, Flex, Image, List, Text} from '@chakra-ui/react';
import Beautiva from '../../assets/pngs/Beautiva_logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdDashboard,MdShoppingCart,MdPeople,MdReviews,MdPayments,MdSell} from 'react-icons/md';
import {RiShoppingBag3Fill} from 'react-icons/ri';
import {IoIosStats} from 'react-icons/io';
import {FaGlobe} from 'react-icons/fa';
import './Admin.css';
import {Link} from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <Box className='sidebar'>
      <List padding='1rem' color='#7d7c89' >
        <Link to ='/admin/home'>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdDashboard size={24}/>
            <Text>Dashboard</Text>
          </Flex>
        </Link>
        <Link to='/admin/products'> 
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <RiShoppingBag3Fill size={24}/>
            <Text>Products</Text>   
          </Flex>
        </Link>   
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdShoppingCart size={24}/>
            <Text>Orders</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdPeople size={24}/>
            <Text>Customers</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <IoIosStats size={24}/>
            <Text>Statistics</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdReviews size={24}/>
            <Text>Reviews</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdPayments size={24}/>
            <Text>Transactions</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <FaGlobe size={24}/>
            <Text>Sellers</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdSell size={24}/>
            <Text>Hot Offers</Text>
          </Flex>
      </List>
    </Box>
  )
}

export default AdminSidebar
