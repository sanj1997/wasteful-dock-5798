import React from 'react';
import Beautiva from '../../assets/pngs/Beautiva_logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Box, Flex, Input, Image, Text, Spacer,Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import {MdSearch,MdNotifications,MdLightMode,MdNightlight,MdSettings} from 'react-icons/md';
import AdminSidebar from './AdminSidebar';

const NavbarAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex height='60px' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' backgroundColor='#fff'>
      <Flex className='navbar-left' alignItems='center' padding='1rem' gap='1rem'>
        <Box>
          <Box onClick={onOpen} _hover={{cursor:'pointer'}}>
            <GiHamburgerMenu size={24}/>
          </Box>
          <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <br />
              <DrawerHeader borderBottomWidth='1px'>
                <Flex alignItems='center'>
                  <Text>Welcome Shirso Bhattacharyya</Text>
                  <Image src='https://media-exp1.licdn.com/dms/image/D5603AQGij1OMmM4ZXA/profile-displayphoto-shrink_200_200/0/1665811799424?e=1673481600&v=beta&t=FUXa3XLsmJbcucNGVz-Sjfm7M3DY_F9Sm6iQ4wzcP00' height='100px' width='100px' borderRadius='50%'/>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <AdminSidebar/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Image src={Beautiva} height='50px' width='140px'/>
      </Flex>
      <Spacer/>
      <Flex alignItems='center' padding='0.5rem' margin='0.5rem 0' border='1px solid gray' borderRadius='6px' gap='1rem'>
        <MdSearch size='22'/>
        <Input variant='unstyled' type='text' placeholder='Search for products'/>
      </Flex>
      <Spacer/>
      <Flex className='navbar-right' alignItems='center' gap='2rem' margin='0 2rem' color='#7d7c89'>
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
