// import { AddIcon } from '@chakra-ui/icons';
import { border, Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AddressModal from '../components/AddressModal'

const Address = () => {
    return (
        <Box w={"80%"} m="auto">
            <Flex justify={"space-between"} align="center">
                <Box>
                    <Heading>Choose Address</Heading>
                    <Text fontSize={"14px"} color="gray.500">Detailed address will help our delivery partner reach your doorstep quickly.</Text>
                </Box>
                <Box>
                    <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg" />
                </Box>
            </Flex>
          
            <Box mt={5}>
            <AddressModal />
            </Box>
           
        </Box>
    )
}

export default Address
