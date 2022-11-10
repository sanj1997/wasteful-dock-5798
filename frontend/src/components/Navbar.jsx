import { Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Flex gap={10} p={2} bg='gray.200' cursor={'pointer'}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/skin'}>Skin</NavLink>
    </Flex>
    </>
  )
}

export default Navbar
