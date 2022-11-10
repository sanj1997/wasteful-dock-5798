import { AddIcon } from '@chakra-ui/icons'
import { border, Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AddressModal from '../components/AddressModal'
import CartDetails from '../components/CartDetails'

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

            <Flex justify={"space-between"} mt={5}>
                <AddressModal />
                <Box>
                    <CartDetails />
                    <Flex w="22vw" bg={"gray.100"} p={2} mt={2} borderRadius="10px">
                        <Text fontSize={"12px"}>Buy authentic products. Pay securely. Easy returns and exchange</Text>
                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png" />
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}

export default Address
