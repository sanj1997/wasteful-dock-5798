import { Box, Center, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const UpperLowerFooter = () => {
    return (
        <Box>

            <SimpleGrid columns={{ md: 3, lg: 5 }}  height="25vh" w={["90%", "80%"]} m="auto">
                <Flex gap={3} align="center">
                    <Box>
                        <Image src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" />
                    </Box>
                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>FREE SHIPPING</Text>
                        <Text fontColor="gray" fontSize="12px">On Orders Above ₹499</Text>
                    </Box>
                </Flex>
                <Flex gap={3} align="center">
                    <Box>
                        <Image src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" />
                    </Box>
                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>EASY RETURNS</Text>
                        <Text fontColor="gray" fontSize="12px">15-Day Return Policy
                        </Text>
                    </Box>
                </Flex>
                <Flex gap={3} align="center">
                    <Box>
                        <Image src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" />
                    </Box>
                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>100% AUTHENTIC</Text>
                        <Text fontColor="gray" fontSize="12px">Products Sourced Directly</Text>
                    </Box>
                </Flex>
                <Flex gap={3} align="center">
                    <Box>
                        <Image src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" />
                    </Box>
                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>1900+ BRANDS</Text>
                        <Text fontColor="gray" fontSize="12px">1.2 Lakh+ Products</Text>
                    </Box>
                </Flex>
                <Flex align={"center"}>
                    <Box>
                        <Text fontSize={"12px"} color="black" textAlign={"center"} fontWeight="500">Show us some love ❤ on social media</Text>
                        <Center>
                            <HStack>
                                <Image src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt='logo' />
                                <Image src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt='logo' />
                                <Image src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt='logo' />
                                <Image src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt='logo' />
                                <Image src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt='logo' />
                            </HStack>
                        </Center>
                    </Box>
                </Flex>
            </SimpleGrid>
        </Box>
    )
}

export default UpperLowerFooter
