import { ChevronRightIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderConfirm = () => {
    return (
        <Box w={"95%"} m="auto">
            <Alert status='info' textAlign={"center"} borderRadius="10px" mt={10}>
                <AlertIcon />
                Beautiva will never contact you to offer products, cash or free prizes, etc. Please do not respond, make payments or share your personal information like CVV, PIN or passwords via a call, WhatsApp or other links
            </Alert>
            <Flex justify={"center"} mt={10}>
                <Box textAlign={"center"}>
                    <Center my={4}>
                        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0c4.6537 0 8.7168 2.6461 10.7679 6.506a12.228 12.228 0 0 1 3.1041-.4018c3.0873 0 6.1728 1.1668 8.5149 3.5089 3.1345 3.1345 4.1616 7.6008 3.1071 11.619C61.354 23.2847 64 27.3463 64 32c0 4.6537-2.6447 8.7153-6.503 10.7679 1.0545 4.0198.0244 8.4845-3.1101 11.619-2.342 2.3421-5.4247 3.509-8.5119 3.509a12.2508 12.2508 0 0 1-3.1071-.4019C40.7153 61.354 36.6537 64 32 64c-4.6537 0-8.7168-2.6461-10.7679-6.506a12.2279 12.2279 0 0 1-3.1041.4018c-3.0873 0-6.1728-1.1668-8.5149-3.5089-3.1345-3.1345-4.1616-7.6008-3.1071-11.619C2.646 40.7153 0 36.6537 0 32c0-4.6537 2.6447-8.7153 6.503-10.7679-1.0545-4.0198-.0244-8.4845 3.1101-11.619 2.342-2.3421 5.4247-3.509 8.5119-3.509 1.0453 0 2.0908.1352 3.1071.4019C23.2847 2.646 27.3463 0 32 0zm12.6369 21.7798L27.4286 38.988l-8.0655-8.0655-2.1548 2.1548 10.2203 10.2202 19.363-19.363-2.1547-2.1548z" fill="#5CD285" fill-rule="nonzero"></path>
                        </svg>
                    </Center>

                    <Heading my={3} fontWeight={"600"}>Order Confirmed!</Heading>
                    <Text color={"gray"}>We are pleased to confirm your order no.#NYK-127609671-7238228</Text>
                    {/* <Box borderRadius={"5px"} p={2} m={"auto"} my={3} w={"50%"} bg={"gray.200"}>
                        Amount Due : ₹<span>{"500"}</span>
                    </Box> */}
                    <Link to="/">
                        <Text fontWeight={"bold"} color='#fc2779'>Continue Shopping <ChevronRightIcon w={6} h={6} /></Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default OrderConfirm
