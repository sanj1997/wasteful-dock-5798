import { Box, Button, Center, Flex, Heading, Image, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CartDetails from '../components/CartDetails'
import useRazorpay from "react-razorpay";
import r_logo from "../assets/pngs/razorpay_logo.png"
import instance from '../middleware/auth.middleware';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../store/Cart/cart.action';

const Payment = () => {
    const navigate=useNavigate()
    const Razorpay = useRazorpay();
    const {total,data}=useSelector((store)=>store.cart)
    const {userId}=useSelector((store)=>store.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(getCartData(userId))
    },[])
    const toast=useToast()
    const handlePayment = async (params) => {
        const order = await instance.post("/payments",{amount:params}); //  Create order on your backend
        console.log(order.message)
        const options = {
            key: "rzp_test_AXYx1ocjhVC5q5", // Enter the Key ID generated from the Dashboard
            amount: params * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            order_id: order.data.order, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                toast({
                    description:response.razorpay_payment_id,
                    status:"success"
                })
                toast({
                    description:response.razorpay_order_id,
                    status:"success"
                })
                toast({
                    description:response.razorpay_signature,
                    status:"success"
                })
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                setTimeout(() => {
                    navigate("/")
                }, 3000);
            },
        };

        const rzp1 = new Razorpay(options)

        rzp1.open();
        dispatch()
    };


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
            <Flex justify={"space-between"} >
                <Box w="65%" border="1px solid #D3D3D3">
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
                                        <Text fontWeight={"500"}>Razor Pay</Text>
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
                                <Flex justify={"center"} >
                                    <Box>
                                        <Image w="150px" src={r_logo} />
                                        <Center>
                                            <Button onClick={()=>handlePayment(total)} mt={5} colorScheme="pink">Pay Now</Button>
                                        </Center>

                                    </Box>
                                </Flex>

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
