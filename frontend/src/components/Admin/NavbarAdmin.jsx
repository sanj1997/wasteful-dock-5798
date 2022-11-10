import React from 'react';
import {Box, Flex, Input, Image, Text} from '@chakra-ui/react';
import {MdSearch,MdNotifications,MdLightMode,MdNightlight,MdSettings} from 'react-icons/md';

const NavbarAdmin = () => {
  return (
    <Flex height='60px' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' justifyContent='space-between'>
       <Flex alignItems='center' padding='0.5rem' border='1px solid gray' borderRadius='6px' margin='0.6rem' gap='1rem'>
        <MdSearch size='22'/>
        <Input variant='unstyled' type='text' placeholder='Search for products'/>
       </Flex>
       <Flex alignItems='center' gap='2rem' margin='0 2rem' color='#7d7c89'>
        <MdLightMode size='26'/>
        <Box position='relative' >
          <MdNotifications size='26'/>
          <Box position='absolute' height='20px' width='20px' borderRadius='50%' top='-3' right='-2' bgColor='#f9a3c0' color='#fff' zIndex='999'>
            <Text textAlign='center' fontSize='14px'>2</Text>
          </Box>
        </Box>
        <MdSettings size={24}/>
        <Image src='https://media-exp1.licdn.com/dms/image/D5603AQGij1OMmM4ZXA/profile-displayphoto-shrink_200_200/0/1665811799424?e=1673481600&v=beta&t=FUXa3XLsmJbcucNGVz-Sjfm7M3DY_F9Sm6iQ4wzcP00' height='30px' width='30px' borderRadius='50%'/>
       </Flex>
    </Flex>
  )
}

export default NavbarAdmin
