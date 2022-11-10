import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CartDetails from '../components/CartDetails'


const Payment = () => {
    return (
        <Box w={"80%"} m="auto">
            <Flex justify={"space-between"} align="center">
                <Box>
                    <Heading>Choose payment method</Heading>
                    <Text fontSize={"14px"} color="gray.500">Choose the payment method you prefer.</Text>
                </Box>
                <Box>
                    <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg" />
                </Box>
            </Flex>
            <Flex justify={"space-between"}>
                <Box  w="65%">
                    <Tabs variant='unstyled' bg='white' borderRadius={"10px"} display={"flex"}>
                        <TabList display={"flex"} flexDir="column" w="80%" bg={"#F3F4F5"}>
                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Credit_Debit_Card.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>Credit/Debit Card</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Visa, Mastercard, Rupay & more</Text>
                                    </Box>
                                    <Box >
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>


                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPI.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>UPI</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Google Pay, PhonePe, Paytm & more</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>
                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Netbanking.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>NetBanking</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Pay through your favourite bank</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>

                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Snpl.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>Shop now & Pay later</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Zest money, Simpl & more</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>

                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/COD.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>Cash on delivery</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Pay at your doorstep</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>
                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/PaytmPaymentOption.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>Paytm Wallet</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Link your Paytm wallet and pay</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>
                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/GiftCard.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w={"80%"}>
                                        <Text fontWeight={"500"}>Gift card</Text>
                                        <Text fontSize={"14px"} fontWeight="400">One card for all Beautiva apps</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>
                            <Tab _selected={{ bg: 'white', borderLeft: "3px solid #e80071", paddingTop: "20px", paddingBottom: "15px" }}>
                                <Flex justify={"space-between"} align="center" w="full">
                                    <Box w={"10%"}>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/EMI.svg" />
                                    </Box>
                                    <Box textAlign={"left"} w="80%">
                                        <Text fontWeight={"500"}>EMI</Text>
                                        <Text fontSize={"14px"} fontWeight="400">Easy installments</Text>
                                    </Box>
                                    <Box>
                                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" />
                                    </Box>
                                </Flex>
                            </Tab>
                        </TabList>


                        <TabPanels>
                            <TabPanel>
                                <Text>Sorry, this payment option is not avilable currently. </Text>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda commodi eum, et labore, vel eius sunt, placeat explicabo similique voluptatibus architecto. Id, inventore ut! Quaerat nisi officia nulla magnam inventore.</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Box w="30%">
                    <CartDetails />
                    <Flex w="22vw" bg={"gray.100"} p={2} mt={2} borderRadius="10px">
                        <Text fontSize={"12px"}>Buy authentic products. Pay securely. Easy returns and exchange</Text>
                        <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png" />
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}

export default Payment
