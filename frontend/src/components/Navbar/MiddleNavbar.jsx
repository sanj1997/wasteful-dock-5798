import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/pngs/Beautiva_logo.png"
import { AiFillShopping } from "react-icons/ai"
import Styles from "./Navbar.module.css"

const MiddleNavbar = () => {
    return (
        <Box height={"70px"} borderBottom="1px solid #D3D3D3">
            <Flex w={"85%"} m="auto" gap={8} align="center" h="full">
                <Image w={"100px"} src={logo} alt="logo" />
                <Flex gap={6} fontWeight="600" fontSize={"14px"}>
                    <Text className={Styles.category}>Categories</Text>
                    <Text className={Styles.category}>Brands</Text>
                    <Text className={Styles.category}>Luxe</Text>
                    <Text className={Styles.category}>Beautiva Fashion</Text>
                    <Text className={Styles.category}>Beauty Advice</Text>
                </Flex>
                <InputGroup w={"25%"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search for Products,Brands etc..' />
                </InputGroup>
                <HStack >
                <Button colorScheme={"pink"}>Signup</Button>
                <Button  colorScheme={"pink"} variant="outline">Signin</Button>
                    <Box position="relative" >
                        <AiFillShopping size={"25px"} />
                        <Box position={"absolute"} bottom="3" left="3" bg={"#fc2779"} w="22px" h="22px" borderRadius={"50%"}>
                            <Center fontSize={"15px"} color={"white"}>4</Center>
                        </Box>
                    </Box>

                </HStack>
            </Flex>
        </Box>
    )
}

export default MiddleNavbar
