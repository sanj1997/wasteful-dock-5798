import { Heading, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Products from '../components/Skin/Products';
import SidebarFilter from '../components/Skin/SidebarFilter';
import SlidingWindow from '../components/Skin/SlidingWindow';

const Skin = () => {
	return (
		<>
		<Box pt={10} bg={'rgb(242,243,242)'}>
			<Heading fontSize={'24px'} textAlign='center'>Moisturizers Products Collection (4539)</Heading>
			<SlidingWindow />
			<Heading fontSize={'24px'} textAlign='center'>All Products</Heading>
			<Flex>
				<Box width={'28%'}>
					<SidebarFilter />
				</Box>
				<Box width={'72%'}>
					<Products />
				</Box>
			</Flex>
			</Box>
		</>
	)
}

export default Skin;