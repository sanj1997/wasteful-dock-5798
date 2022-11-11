import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const LowerFooter = () => {
    return (
        <Flex bg={"#fc2779"} height="100px" color={"white"} fontSize="14px" justify={"center"} align="center">
            <Box>
                <Flex justify={"center"} gap={10}>
                    <Text>Terms & Conditions</Text>
                    <Text>Shopping Policy</Text>
                    <Text>Cancellation Policy</Text>
                    <Text>Privacy Policy</Text>
                </Flex>
                <Center mt={4}>
                    <Text fontSize={"12px"}>© 2022 Beautiva E-Retail Pvt. Ltd. All Rights Reserved.</Text>
                </Center>
            </Box>
        </Flex>

    )
}

export default LowerFooter
