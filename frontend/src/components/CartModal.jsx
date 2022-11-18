import React, { useEffect, useRef, useState } from 'react'
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
    Center,
} from '@chakra-ui/react'
import CartProductCard from './CartProductCard'
import { ArrowBackIcon, ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { AiFillShopping } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../store/Cart/cart.action'
import { json, Link } from 'react-router-dom'
import empty_cart from "../assets/pngs/empty_cart.png"


const CartModal = () => {
    const { total, data } = useSelector((store) => store.cart)
    const { userId } = useSelector((store) => store.auth)

    // const [total,setTotal]=useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ref = useRef(null)
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    console.log(data, "cart data")
    useEffect(() => {
        dispatch(getCartData(userId))
    }, [])



    return (
        <>
            <Box _hover={{ cursor: "pointer" }}>
                <AiFillShopping size={"25px"} ref={btnRef} onClick={onOpen} />
            </Box>


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
                        <Flex align="center" gap={2} onClick={onClose}>
                            <ArrowBackIcon w={6} h={6} />
                            <Text fontSize="25px" fontWeight="600" size="lg">Bag</Text>
                            <Text mt={2}>(total)</Text>
                        </Flex>
                        <Box>
                            <Text color='#E80071' fontWeight="600" fontSize="14px">View Wishlist</Text>
                        </Box>
                    </Flex>


                    <DrawerBody>
                        {data.length === 0 ? <Center my={5}>
                            <Image maxH={"400px"} w="80%" src={empty_cart} />
                        </Center> : <Box>
                            {data?.map((el) => {
                                return <CartProductCard key={el._id} el={el.product} qty={el.quantity} />
                            })}
                        </Box>
                        }
                        <Box border="1px solid #D3D3D3" p={3} borderRadius="10px" mt={5}>
                            <Text fontWeight="bold">Price Details</Text>
                            <SimpleGrid columns={2} spacing={2} p={3}>
                                <Box>
                                    <Text fontSize="12px">{`Bag MRP (${data?.length} Items)`}</Text>
                                </Box>
                                <Box textAlign="right">
                                    <Text fontSize="12px">₹ <span>{total}</span></Text>
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
                                    <Text fontWeight="bold">₹ <span>{total}</span></Text>
                                </Box>
                            </SimpleGrid>
                        </Box>

                    </DrawerBody>

                    <Flex borderTop="1px solid #D3D3D3" py={5} px={8} justify="space-between" align={"center"}>
                        <Box>
                            <Text fontSize="20px" fontWeight="bold">{total}</Text>
                            <Text fontSize="12px">Grand Total <InfoOutlineIcon w="20px" /></Text>
                        </Box>
                        <Link to={"/address"}><Button rightIcon={<ArrowForwardIcon w={6} h={6} />} color="white" bg='#E80071' >
                            Proceed
                        </Button></Link>
                    </Flex>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartModal
