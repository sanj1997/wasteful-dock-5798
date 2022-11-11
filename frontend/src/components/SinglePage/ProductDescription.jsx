import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io'

const ProductDescription = ({description}) => {
	const [togglebar, setTogglebar] = useState("Description");
	
	return (
		<>
		<Box bg={'white'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}>
			<Flex gap={4} borderBlockEnd='1px solid rgb(220,225,229)' p={4} >
				<Text cursor={'pointer'} color={togglebar ==="Description" ? "rgb(253,38,121)" : ""} fontWeight={500} fontSize='18px' onClick={()=> setTogglebar("Description")}>Description</Text>
				<Text cursor={'pointer'} color={togglebar ==="Ingredients" ? "rgb(253,38,121)" : ""} fontWeight={500} fontSize='18px' onClick={()=> setTogglebar("Ingredients")}>Ingredients</Text>
				<Text cursor={'pointer'} color={togglebar ==="How To Use" ? "rgb(253,38,121)" : ""} fontWeight={500} fontSize='18px' onClick={()=> setTogglebar("How To Use")}>How To Use</Text>
			</Flex>
			<Box pt={4} pl={4} pr={4}>
				<Text pb={4}>{description}</Text>
				<Flex cursor={'pointer'} gap={2} alignItems={'center'} justifyContent='center' color='rgb(253,38,121)' p={3} borderBlockStart='1px solid rgb(220,225,229)'>
					<Heading cursor={'pointer'} size={'sm'}>Read More</Heading>
					<IoIosArrowDown />
				</Flex>
			</Box>
		</Box>
		</>
	)
}

export default ProductDescription