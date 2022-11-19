import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import {GrFavorite} from 'react-icons/gr';
import {TiDeleteOutline} from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const OrderProductDetails = ({product, favButton = true}) => {
	const navigate = useNavigate();
	const {_id, title, image1, offer, price, off_price,  offertag} = product;
    console.log("heyyy")
	const viewDetails = () =>{
		// navigate(_id);
	}

	return (
		<>
		<Flex direction={'column'} justifyContent={'space-between'} shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} cursor='pointer' p={2} onClick={viewDetails} width="100%">
			<Flex justifyContent={'end'}><TiDeleteOutline fontSize={'30px'} fontWeight='500'/></Flex>
			<Img src={image1} borderRadius={'10px'} width='100%' height={'250px'} p={5}/>
			<Text cursor='pointer' p={2} textAlign={'center'} fontWeight='500'>{title}</Text>
			<Flex justifyContent={'center'} gap={1}>
				<Text cursor='pointer' >MRP:</Text>
				<Text cursor='pointer' textDecoration={'line-through'}>{offer===0 ? "" : `₹${price}`}</Text>
				<Text cursor='pointer' fontWeight='500'>{`₹${off_price}`}</Text>
				<Text cursor='pointer' color={'green'}>{offer===0 ? "" : `${offer}% Off`}</Text>
			</Flex>
			<Text textAlign={'center'} color='red'>{offertag}</Text>
			<Flex width={'100%'} pt={5} alignItems='center'>
				{favButton ? (<Flex justifyContent={'center'}  width={'20%'}><GrFavorite fontSize={'20px'}/></Flex>) : ""}
				<Button color={'white'} _hover={{bg: 'rgb(253,39,120)'}} width={favButton ? "80%" : '100%'}>Preview Shades</Button>
			</Flex>
		</Flex>
		</>
	)
}

export default OrderProductDetails;