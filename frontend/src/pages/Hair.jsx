import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Products from '../components/Skin/Products';
import SidebarFilter from '../components/Skin/SidebarFilter';
import SlidingWindow from '../components/Skin/SlidingWindow';
import {AiOutlineRight} from 'react-icons/ai';

const imgArr = ['https://images-static.nykaa.com/uploads/376128f6-7699-4320-afa2-abe0a8b1001c.jpg?tr=w-1200,cm-pad_resize', 'https://images-static.nykaa.com/uploads/de6d8f49-bc62-4ea9-ae23-d2f4ad479e1d.jpg?tr=w-1200,cm-pad_resize', 'https://images-static.nykaa.com/uploads/e875d76b-4649-41d8-af7f-19f2ede412ba.jpg?tr=w-1200,cm-pad_resize']

const Hair = () => {
	const [filterValue, setFilterValue] = useState(1);

	const sendFilterValue = (filterValue) =>{
		if(filterValue==="Price: Low To High"){
			setFilterValue(1);
		}if(filterValue==="Price: High To Low"){
			setFilterValue(-1);
		}
	}
	return (
		<>
		<Box bg={'rgb(242,243,242)'} >
			<Heading fontSize={'24px'} textAlign='center'>Hair Care Guide (4997)</Heading>
			<SlidingWindow imgArr={imgArr}/>
			<Flex width={'94%'} margin='auto'>
				<Flex bg={'rgb(203,202,203)'} width='62%' p={4} justifyContent='center' alignItems={'center'} direction='column'>
					<Text color={'gray.600'} fontSize={'24px'} fontWeight='medium'>Your Guide To Hair Care & Styling</Text>
					<Text mt={14} fontSize='18px' width={"74%"}>Found! A solution for all your mane troubles. From hair care routine for every concern to best-in-class styling tools, use this guide to restore your hair back to it's crowning glory.</Text>
					<Button variant={'unstyled'}>
						<Flex alignItems={'center'} color='rgb(250,38,120)'>
							<Text cursor={'pointer'} fontSize={'17px'}>Shop Now</Text>
							<AiOutlineRight />
						</Flex>
					</Button>
				</Flex>
				<Box width='38%'>
					<Img src='https://www.nykaa.com/media/categoryInfo/art_banner_image/haircqreandstylingguide_contentbanner.jpg' height={'340px'} width={'100%'} alt='' />
				</Box>
			</Flex>
			<Heading fontSize={'24px'} mt={7} textAlign='center'>All Products</Heading>
			<Flex width={'98%'} margin='auto'>
				<Box width={'25%'}>
				<SidebarFilter sendFilterValue={sendFilterValue}/>
				</Box>
				<Box width={'75%'}>
				<Products filterValue = {filterValue}/>
				</Box>
			</Flex>
			</Box>
		</>
	)
}

export default Hair;