import React from 'react';
import {Box, Flex, Image, List, Text} from '@chakra-ui/react';
import Beautiva from '../../assets/pngs/Beautiva_logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdDashboard,MdShoppingCart,MdPeople,MdReviews,MdPayments,MdSell,MdSettings} from 'react-icons/md';
import {RiShoppingBag3Fill} from 'react-icons/ri';
import {IoIosStats} from 'react-icons/io';
import {FaGlobe,FaPaintBrush} from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <Box width='250px' height='100%' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' >
      <Flex alignItems='center' justifyContent='space-evenly'>
        <Image src={Beautiva} height='50px' width='140px'/>
        <GiHamburgerMenu size={24}/>
      </Flex>
      <List padding='1rem'>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdDashboard size={24}/>
            <Text>Dashboard</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <RiShoppingBag3Fill size={24}/>
            <Text>Products</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdShoppingCart size={24}/>
            <Text>Orders</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdPeople size={24}/>
            <Text>Customers</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <IoIosStats size={24}/>
            <Text>Statistics</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdReviews size={24}/>
            <Text>Reviews</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdPayments size={24}/>
            <Text>Transactions</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <FaGlobe size={24}/>
            <Text>Sellers</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdSell size={24}/>
            <Text>Hot Offers</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <FaPaintBrush size={24}/>
            <Text>Appearance</Text>
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px'>
            <MdSettings size={24}/>
            <Text>Settings</Text>
          </Flex>
      </List>
    </Box>
  )
}

export default AdminSidebar
