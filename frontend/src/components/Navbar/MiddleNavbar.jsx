import { Search2Icon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Center, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import logo from "../../assets/pngs/Beautiva_logo.png"
import { AiFillShopping } from "react-icons/ai"
import Styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartModal from '../CartModal'
import { signOutUser } from '../../store/auth/auth.action'
import { getCartData } from '../../store/Cart/cart.action'
import UserHoverBox from './UserHoverBox'


const MiddleNavbar = () => {
    const { loading, Mtoken, userName, role, userId } = useSelector((store) => store.auth)
    const { data } = useSelector((store) => store.cart)
    useEffect(() => {
        dispatch(getCartData(userId))
    }, [])

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(signOutUser())
        window.location.reload()
    }
    return (
        <Box height={"70px"} borderBottom="1px solid #D3D3D3" >
            <Flex w={"85%"} m="auto" justify={"space-between"} align="center" h="full">
                <Link to={"/"}><Image w={"100px"} src={logo} alt="logo" /></Link>
                <Flex gap={6} fontWeight="600" fontSize={"14px"}>
                    <Text className={Styles.category}>Categories</Text>
                    <Text className={Styles.category}>Brands</Text>
                    <Text className={Styles.category}>Luxe</Text>
                    <Text className={Styles.category}>Beautiva Fashion</Text>
                </Flex>
                <InputGroup w={"30%"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search for Products,Brands etc..' />
                </InputGroup>
                <HStack >

                    {Mtoken ? <Box>
                        <HStack gap={4} className={Styles.stack}>
                            <Box className={Styles.boxshow} position={"relative"}>
                                <Box  >
                                        <Flex alignItems={"center"} gap={2}>
                                            <Avatar size='sm' src='https://bit.ly/broken-link' />
                                            <Text fontWeight={"bold"}>{userName}</Text>
                                        </Flex>
                                </Box>
                                <Box position={"absolute"} className={Styles.userBox}  >
                                    <UserHoverBox />
                                </Box>
                            </Box>
                            <Button onClick={handleLogout} colorScheme={"pink"}>Logout</Button>
                        </HStack>

                    </Box> : <Box><Link to={"/signUp"}><Button mr={"10px"} colorScheme={"pink"}>Signup</Button></Link>
                        <Link to={"/signIn"}><Button colorScheme={"pink"} variant="outline">SignIn</Button></Link></Box>}
                    <Box position="relative" >
                        <CartModal />
                        <Box position={"absolute"} bottom="3" left="3" bg={"#fc2779"} w="22px" h="22px" borderRadius={"50%"}>
                            <Center fontSize={"15px"} color={"white"}>{data ? data.length : 0}</Center>
                        </Box>
                    </Box>

                </HStack>
            </Flex>
        </Box>
    )
}

export default MiddleNavbar
