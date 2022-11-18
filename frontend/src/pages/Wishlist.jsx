import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { BiWalletAlt } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { BsBag, BsCart3 } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { AiFillCreditCard, AiOutlinePoweroff } from 'react-icons/ai';
import WishlistProducts from '../components/wishlist/WishlistProduct';
import { useDispatch, useSelector } from 'react-redux';
import OrderProducts from '../components/wishlist/OrderProduct';
import { useEffect } from 'react';
import { getWishlistProduct } from '../store/wishlist/wishlist.action';
import { getOrderProduct } from '../store/order/order.action';

const userInfo= {
	name: "Dinesh Karde",
	email: "dineshkarde103@gmail.com",
	mobile: 7743891068,
	dob: "dd-mm-yyyy"
}


const Whishlist = () => {
	const [cartItem, setCartItem] = useState([{name: "Dk", product: "ok"}]);
	const {orders} = useSelector((store) => store.order);
	const {wishlist,loading} = useSelector((store) => store.wishlist);
	const {userId}=useSelector((store)=>store.auth)
	const dispatch=useDispatch()
	console.log(orders)
	useEffect(()=>{
        dispatch(getWishlistProduct(userId))
	}, [])
	useEffect(()=>{
		dispatch(getOrderProduct());
	}, []);
    return (
			<Box bg={'rgb(242,243,242)'}>
		<Box w={"90%"} m="auto">
			<Flex justify={"space-between"}>
				<Box  w="100%" mt={10}>
						<Tabs variant='unstyled' display={"flex"} gap={5}>
								<TabList display={"flex"} flexDir="column" w="35%" bg='white' height='410px'>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <CgProfile fontSize='22px'/>
														<Text>My Profile</Text>
												</Flex>
										</Tab>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <BiWalletAlt fontSize='22px'/>
														<Text>My Wallet</Text>
												</Flex>
										</Tab>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <BsBag fontSize='22px'/>
														<Text>My Orders</Text>
												</Flex>
										</Tab>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <GrFavorite fontSize='22px'/>
														<Text>My Wishlist</Text>
												</Flex>
										</Tab>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <AiFillCreditCard fontSize='22px'/>
														<Text>My Saved Payment</Text>
												</Flex>
										</Tab>
										<Tab _selected={{ bg: 'white', color: '#e80071', borderRight: "4px solid #e80071" }} borderBlockEnd="1px solid rgb(214,217,220)">
												<Flex alignItems={'center'} width="100%" gap={3} fontSize='18px' p={3}>
												    <AiOutlinePoweroff fontSize='22px'/>
														<Text>Log Out</Text>
												</Flex>
										</Tab>
								</TabList>
								{/* <Box bg={'rgb(242,243,242)'} width='2%'></Box> */}
								<TabPanels minHeight={'90vh'}>
								<TabPanel>
												<Box  width='100%'>
												<Flex backgroundImage={'https://cdnr.nykaa.com/assets/desktop/images/my_account/myaccountbg.png'} justifyContent='center' alignItems='center' p={3}>
														<Box bg={'white'} width="60%" mt={5} mb={9} p ={4}>
															<Flex gap={6}>
																<Img src="https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg" alt=""/>
																<Flex direction={'column'} justifyContent='center' gap={2} >
																	<Text fontWeight={'800'} fontSize='20px'>{userInfo.name}</Text>
																	<Text color='gray'>Email: {userInfo.email}</Text>
																	<Text color='gray'>Mobile: {userInfo.mobile}</Text>
																	<Text color='gray'>Date of Birth: {userInfo.dob}</Text>
																</Flex>
															</Flex>
														</Box>
													</Flex>

												</Box>
										</TabPanel>
										<TabPanel>
												<Text>Sorry, this payment option is not avilable currently. 2</Text>
										</TabPanel>

										{/* My orders */}

										<TabPanel>
											{orders?.length === 0 ? (
												<Box  width='100%'>
													<Flex bg='white' gap={2} alignItems='center' p={3}>
														<FiArrowLeft fontSize={'27px'} cursor='pointer'/>
														<Heading fontSize={'20px'}>My Orders</Heading>
													</Flex>
													<Flex direction={'column'} mt={4} justifyContent={'center'} alignItems='center' bg='white' p={10}>
														<BsCart3 fontSize={'60px'} color="gray" />
														<Text fontSize={'20px'} mt={6} fontWeight={500}>No recent orders</Text>
														<Button variant={"unstyled"} color="rgb(253,38,121)">Start Shopping</Button>
													</Flex>
												</Box>
											) : (
												<Box  width='100%'>
													<Flex bg='white' gap={2} alignItems='center' p={3}>
														<FiArrowLeft fontSize={'27px'} cursor='pointer'/>
														<Heading fontSize={'20px'}>My Orders</Heading>
													</Flex>
													<OrderProducts />
													<Text bg='white' gap={2} alignItems='center' p={3} mt={10} textAlign={'center'}>No More Product to show</Text>
												</Box>
													
												)}
										</TabPanel>

										{/* my Whishlist */}

										<TabPanel bg='white'>
											{!wishlist?.length>0? (
												<Flex direction={'column'} justifyContent='center' alignItems='center' minHeight={'75vh'}>
													<Heading fontWeight={'500'} fontSize='25px'>NO ITEMS IN THE WISHLIST</Heading>
													<Text mt={10}>Add now, Buy Later.</Text>
													<Text mb={10}>Save your favourite beauty items here!</Text>
													<Button variant={'outline'} color="rgb(253,38,121)">Start Shopping</Button>
												</Flex>
											) : (
												<Box>
													<Box pb={5} borderBlockEnd="1px solid rgb(214,217,220)">
														<Heading p={2} fontWeight={500}>My Wishlist <span style={{color: "rgb(253,38,121)"}}>({wishlist?.length})</span></Heading>
													</Box>
													<WishlistProducts />
													<Text mt={10} textAlign={'center'}>No More Product to show</Text>
												</Box>
												)}
										</TabPanel>
								</TabPanels>
						</Tabs>
				</Box>
			</Flex>

		</Box>
		</Box>
    )
}

export default Whishlist;

