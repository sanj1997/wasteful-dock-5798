import { Heading, Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Products from '../components/Skin/Products';
import SidebarFilter from '../components/Skin/SidebarFilter';
import SlidingWindow from '../components/Skin/SlidingWindow';

const imgArr = ["https://images-static.nykaa.com/uploads/9943eccd-8912-4ebe-95ca-53530baf4985.jpg?tr=w-1200,cm-pad_resize", "https://images-static.nykaa.com/uploads/ee176f62-41d4-48db-9105-e688ff99a22f.jpg?tr=w-1200,cm-pad_resize", "https://images-static.nykaa.com/uploads/568d03f7-1831-4216-8bc1-d3971237b68f.jpg?tr=w-1200,cm-pad_resize"];

const Skin = () => {
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
		<Box pt={10} bg={'rgb(242,243,242)'}>
			<Heading fontSize={'24px'} textAlign='center'>Moisturizers Products Collection (4539)</Heading>
			<SlidingWindow imgArr={imgArr}/>
			<Heading fontSize={'24px'} textAlign='center'>All Products</Heading>
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

export default Skin;