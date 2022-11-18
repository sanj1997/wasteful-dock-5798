import { Box, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import { BiWalletAlt } from 'react-icons/bi'
import { CgShoppingBag } from 'react-icons/cg'

const UserHoverBox = () => {
    return (
        <Box background={"white"} p="10px" minW={"200px"}>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <CgShoppingBag size={"20px"} />
                <Text>Order</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineUser size={"20px"} />
                <Text>Profile</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <BiWalletAlt size={"20px"} />
                <Text>Wallet</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineHeart size={"20px"} />
                <Text>Wishlist</Text>
            </HStack>
            <HStack mb={3} _hover={{ cursor: "pointer" }} >
                <AiOutlineLogout size={"20px"} />
                <Text> Logout</Text>
            </HStack>


        </Box>
    )
}

export default UserHoverBox
