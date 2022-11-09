import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Image,
    Box,
    SimpleGrid,
    Text,
    Flex,
    Heading,
} from '@chakra-ui/react'
import CartProductCard from './CartProductCard'
import { ArrowBackIcon, ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons'

const CartModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="md"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Flex borderBottom="1px solid #D3D3D3" p={5} justify="space-between" align={"center"}>
                        <Flex align="center" gap={2} >
                            <ArrowBackIcon w={6} h={6} />
                            <Text fontSize="25px" fontWeight="600" size="lg">Bag</Text>
                            <Text mt={2}>(total)</Text>
                        </Flex>
                        <Box>
                            <Text color='#E80071' fontWeight="600" fontSize="14px">View Wishlist</Text>
                        </Box>
                    </Flex>


                    <DrawerBody>
                        <Box>
                            {Array(10).fill(0).map((el) => {
                                return <CartProductCard />
                            })}
                        </Box>
                        <Box border="1px solid #D3D3D3" p={3} borderRadius="10px">
                            <Text fontWeight="bold">Price Details</Text>
                            <SimpleGrid columns={2} spacing={2} p={3}>
                                <Box>
                                    <Text fontSize="12px">Bag MRP (2 items)</Text>
                                </Box>
                                <Box textAlign="right">
                                    <Text fontSize="12px">₹ <span>Price</span></Text>
                                </Box>
                                <Box>
                                    <Text fontSize="12px"> Shipping <InfoOutlineIcon w="10px" /></Text>
                                </Box>
                                <Box textAlign="right">
                                    <Text fontSize="12px"><span style={{ "textDecoration": "line-through" }}>₹70</span> Free</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">You Pay</Text>
                                </Box>
                                <Box textAlign="right">
                                    <Text fontWeight="bold">₹ <span>5145</span></Text>
                                </Box>
                            </SimpleGrid>
                        </Box>

                    </DrawerBody>

                    <Flex borderTop="1px solid #D3D3D3" py={5} px={8} justify="space-between" align={"center"}>
                        <Box>
                            <Text fontSize="20px" fontWeight="bold">₹5145</Text>
                            <Text fontSize="12px">Grand Total <InfoOutlineIcon w="20px" /></Text>
                        </Box>
                        <Button rightIcon={<ArrowForwardIcon w={6} h={6} />} color="white" bg='#E80071' >
                            Proceed
                        </Button>
                    </Flex>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartModal
