import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import page_not_found from "../assets/pngs/pageNotFound.png"

const PageNotFound = () => {
    return (
        <Flex gap={10} w="90%" m={"auto"}>
            <Box >
                <Image h="100vh" src={page_not_found} />
            </Box >
            <Flex mt="15%" ml={"-20%"}>
                <Box>
                    <Heading fontWeight={"600"} >Sorry! Page Not Found</Heading>
                    <Link to="/">
                        <Button mt={5} colorScheme="red">GO BACK TO HOME PAGE</Button>
                    </Link>
                </Box>

            </Flex>
        </Flex>

    )
}

export default PageNotFound