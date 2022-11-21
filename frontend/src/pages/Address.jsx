import { AddIcon } from '@chakra-ui/icons'
import { border, Box, Center, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddressCard from '../components/AddressCard'
import Addresscard from '../components/AddressCard'
import AddressModal from '../components/AddressModal'
import CartDetails from '../components/CartDetails'
import { getUserdetails } from '../store/auth/auth.action'
import { getCartData } from '../store/Cart/cart.action'

const Address = () => {
    const {total,data}=useSelector((store)=>store.cart)
    const {userId}=useSelector((store)=>store.auth)
    const {address}=useSelector((store)=>store.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(getCartData(userId))
    },[])
    useEffect(()=>{
        dispatch(getUserdetails(userId))
    },[])
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
                <AddressModal  />
                <Box>
                    <CartDetails/>
                    <Flex w="22vw" bg={"gray.100"} p={2} mt={2} borderRadius="10px">
                        <Text fontSize={"12px"}>Buy authentic products. Pay securely. Easy returns and exchange</Text>
                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png" />
                    </Flex>
                </Box>
            </Flex>
            <Grid gridTemplateColumns="repeat(3,1fr)" gap={5} mb="2rem" mt={"50px"} >
                {address?.map((el)=>{
                    return <AddressCard el={el}/>
                })}
            </Grid>
        </Box>
    )
}

export default Address
