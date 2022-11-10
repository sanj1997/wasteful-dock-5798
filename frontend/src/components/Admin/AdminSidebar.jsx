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

const AdminSidebar = ({compressed,compress}) => {
  return (
    <Box width={compressed===false?'230px':'80px'} height='100%' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' zIndex='999'>
      <Flex alignItems='center' justifyContent='space-evenly' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' pb='0.65rem'>
        <Box _hover={{cursor:'pointer'}} onClick={()=>compress()}>
          {
            compressed===true?<Box height='25px'></Box>:''
          }
          <GiHamburgerMenu size={24}/>
        </Box>
        {
          compressed===true?'':<Image src={Beautiva} height='50px' width='140px'/>
        }
      </Flex>
      <List padding='1rem' color='#7d7c89' className='sidebar' >
        <Link to ='/admin/home'>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdDashboard size={24}/>
            {
              compressed===true?'':<Text>Dashboard</Text>
            }
          </Flex>
        </Link>
        <Link to='/admin/products'> 
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <RiShoppingBag3Fill size={24}/>
            {
              compressed===true?'':<Text>Products</Text>
            }
          </Flex>
        </Link>   
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdShoppingCart size={24}/>
            {
              compressed===true?'':<Text>Orders</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdPeople size={24}/>
            {
              compressed===true?'':<Text>Customers</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <IoIosStats size={24}/>
            {
              compressed===true?'':<Text>Statistics</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdReviews size={24}/>
            {
              compressed===true?'':<Text>Reviews</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdPayments size={24}/>
            {
              compressed===true?'':<Text>Transactions</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <FaGlobe size={24}/>
            {
              compressed===true?'':<Text>Sellers</Text>
            }
          </Flex>
          <Flex alignItems='center' gap='1.5rem' padding='0.8rem 0.4rem' margin='0.5rem 0.2rem' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' borderRadius='6px' _hover={{color:'#fff',backgroundColor:'#f9a3c0',cursor:'pointer'}}>
            <MdSell size={24}/>
            {
              compressed===true?'':<Text>Hot Offers</Text>
            }
          </Flex>
      </List>
    </Box>
  )
}

export default AdminSidebar
