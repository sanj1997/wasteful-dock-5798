import { Button, Flex, Heading, Img, Input, InputGroup, InputRightAddon, Text, Box, useToast } from '@chakra-ui/react'
import React from 'react'
import { FaAppStore } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, getCartData } from '../../store/Cart/cart.action'

const ProductInfo = ({ data }) => {

	const toast = useToast()
	const dispatch = useDispatch()
	const { message } = useSelector((store) => store.cart)
	const { title, price, off_price, offer, image1, image2, image3, description, _id } = data;
	const { userId } = useSelector((store) => store.auth)
	const handleAddToCart = () => {
		dispatch(addCartData(_id)).then(() => {
			toast({
				description:  "Item added to cart successfully" ,
				status: 'success',
				duration: 5000,
				isClosable: true,
				position: "top"
			})
			dispatch(getCartData(userId))
		})

	}
	return (
		<>
			<Flex pt={10} bg={'rgb(242,243,242)'}>
				<Flex bg={'white'} width="85%" margin={'auto'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}>
					<Flex width={"39%"} justifyContent='space-between' p={5}>
						<Flex direction={'column'} gap={4}>
							<Img cursor={'pointer'} src={image1} alt='' width={'50px'} height={'50px'} border={'1px solid rgb(193,200,206)'} p={"2px"} />
							<Img cursor={'pointer'} src={image2} alt='' width={'50px'} height={'50px'} border={'1px solid rgb(193,200,206)'} p={"2px"} />
							<Img cursor={'pointer'} src={image3} alt='' width={'50px'} height={'50px'} border={'1px solid rgb(193,200,206)'} p={"2px"} />
						</Flex>
						<Flex justifyContent={'center'} alignItems='center'>
							<Img src={image1} alt='' width={'320px'} height={'252px'} />
						</Flex>
					</Flex>
					<Flex direction={'column'} width={"61%"} p={"20px 0px 0px 20px"} gap={2}>
						<Heading fontWeight={500} fontSize={'20px'}>{title}</Heading>
						<Flex gap={1}>
							<Text
								cursor='pointer' >MRP:</Text>
							<Text cursor='pointer' textDecoration={'line-through'}>{offer === 0 ? "" : `₹${price}`}</Text>
							<Text cursor='pointer' fontWeight='500'>{`₹${off_price}`}</Text>
							<Text cursor='pointer' color={'green'}>{offer === 0 ? "" : `${offer}% Off`}</Text>
						</Flex>
						<Text>inclusive of all taxes</Text>
						<Flex alignItems={'center'} mt={12} mb={12}>
							<Box width={'47%'} p={8} borderRight="1px solid rgb(220,225,229)">
								<Button onClick={handleAddToCart} color={'white'} bg={'rgb(253,38,121)'} width={'100%'}>Add to Bag</Button>
							</Box>
							<Box width={'50%'} pr={6} pl={6}>
								<Flex gap={2} alignItems='center'>
									<GoLocation />
									<Text>Delivery Option</Text>
								</Flex>
								<InputGroup mt={4}>
									<Input type="number" placeholder="Enter pincode" width={'100%'} />
									<InputRightAddon children='check' cursor="pointer" color={'red'} />
								</InputGroup>
							</Box>
						</Flex>
						<Flex p={2} bg={'rgb(242,243,242)'} justifyContent="space-between">
							<Text>100% Genuine Products</Text>
							<Text>Easy Return Policy</Text>
							<Text>Sold by :NYKAA E RETA..</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}

export default ProductInfo