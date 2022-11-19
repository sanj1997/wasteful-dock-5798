import { Box, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import { BiWalletAlt } from 'react-icons/bi'
import { CgShoppingBag } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../store/auth/auth.action'

const UserHoverBox = () => {
const dispatch=useDispatch()
const handleLogout=()=>{
    dispatch(signOutUser())
}

    return (
        <Box background={"white"} p="10px" minW={"200px"}>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <CgShoppingBag size={"20px"} />
                <Text _hover={{color:"#d53f8c"}}>Order</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineUser size={"20px"} />
                <Link to={"/profile"}><Text _hover={{color:"#d53f8c"}}>Profile</Text></Link>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <BiWalletAlt size={"20px"} />
                <Text _hover={{color:"#d53f8c"}}>Wallet</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineHeart size={"20px"} />
                <Text _hover={{color:"#d53f8c"}}>Wishlist</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineLogout size={"20px"} />
                <Text onClick={handleLogout} _hover={{color:"#d53f8c"}}> Logout</Text>
            </HStack>
        </Box>
    )
}

export default UserHoverBox
