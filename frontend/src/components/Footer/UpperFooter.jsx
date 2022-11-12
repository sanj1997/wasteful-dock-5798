import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Image, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ImMobile } from "react-icons/im"


const UpperFooter = () => {
    return (
        <Box height="25vh" bg="#3f414d">
            <SimpleGrid columns={2} w={"80%"} m="auto">
                <Flex h={"25vh"} align="center" color={"white"} fontSize="14px" justify={"space-between"} gap={7} >
                    <Box >
                        <Text fontSize={"14px"}><EmailIcon w={6} h={6} /> Get special discount on your inbox</Text>
                        <HStack mt={2}>
                            <Input border={"none"} borderRadius="none" borderBottom={"1px solid white"} />
                            <Button borderRadius="none" _hover={{ bg: "#3f414d" }} variant='outline'>SEND</Button>
                        </HStack>

                    </Box>
                    <Box w="60%">
                        <HStack>
                            <ImMobile size={"25px"} />
                            <Text fontSize={"12px"}>EXPERIENCE THE NYKAA MOBILE APP</Text>
                        </HStack>
                        <HStack mt={3}>
                            <Image w={"120px"} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
                            <Image w={"120px"} src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" />

                        </HStack>
                    </Box>
                </Flex>
                <Flex color={"white"} gap={3} align="center" justify="right">
                    <Flex h="full" mt={"15%"}>
                        <PhoneIcon w={6} h={6} />
                    </Flex>
                    <Box>
                        <Text>FOR ANY HELP, YOU MAY CALL US AT</Text>
                        <Text>1800-267-4444</Text>
                        <Text mt={3} fontSize="14px">(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text>
                    </Box>
                </Flex>

            </SimpleGrid>
        </Box>
    )
}

export default UpperFooter
