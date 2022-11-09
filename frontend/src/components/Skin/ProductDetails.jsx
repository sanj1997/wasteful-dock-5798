import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import {GrFavorite} from 'react-icons/gr';

const ProductDetails = () => {
	return (
		<>
		<Box shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'}>
			<Img src='https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/1/31a34708904245709693_1.jpg' borderRadius={'10px'} width='100%' maxHeight={'250px'} p={5}/>
			<Text p={2} textAlign={'center'} fontWeight='500'>Nykaa Skin Potion Facial Oil</Text>
			<Flex justifyContent={'center'} gap={1}>
				<Text>MRP:</Text>
				<Text textDecoration={'line-through'}>₹699</Text>
				<Text fontWeight='500'>₹559</Text>
				<Text color={'green'}>20% Off</Text>
			</Flex>
			<Text textAlign={'center'} color='red'>Comments</Text>
			<Flex width={'100%'} pt={5} alignItems='center'>
				<Flex justifyContent={'center'}  width={'20%'}><GrFavorite fontSize={'20px'}/></Flex>
				<Button color={'white'} _hover={{bg: 'rgb(253,39,120)'}} width={'80%'}>Preview Shades</Button>
			</Flex>
		</Box>
		</>
	)
}

export default ProductDetails