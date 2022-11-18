import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import {BsCheck} from 'react-icons/bs';

const sortByName = ["Popularity", "Discount", "Name", "Customer Top Rated", "New Arrivals", "Price: High To Low", "Price: Low To High"];

const ListViewComponent2 = ({sendFilterValue}) => {
	const [toggleList, setToggleList] = useState(false);
	const [getFilterValue, setGetFilterValue] = useState("Popularity")

	const changeFun = ()=>{
		setToggleList(!toggleList);
	}

	const addFilter = (l) =>{
		setGetFilterValue(l)
		setToggleList(false);

	}
	
	sendFilterValue(getFilterValue);

	return toggleList ?(
		<>
		<Box shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={5}> 
		<Flex  justifyContent='space-between' alignItems={'center'} cursor='pointer' onClick={changeFun}>
			<Heading cursor={'pointer'} fontWeight={500} fontSize={'19px'}>Sort By : {getFilterValue}</Heading>
			<IoIosArrowDown fontSize={'25px'} color='red'/>
		</Flex>
		<Flex direction={'column'} gap={1} mt={2} cursor={'pointer'}>
			{sortByName.map((l, i)=>(
				<Flex key={i} p={2} justifyContent='space-between' alignItems={'center'} onClick={()=> addFilter(l)}>
					<Text fontSize={'17px'} cursor={'pointer'}>{l}</Text>
					<Flex alignItems={'center'} justifyContent='center' width={'20px'} height='20px' border={getFilterValue === l ? "" :'1px solid gray'} borderRadius={'50%'} bg={getFilterValue === l ? 'rgb(253,39,120)': "gray.200"}>
						{getFilterValue === l ? (<BsCheck fontSize={'20px'} color='white' />) : ""}
					</Flex>
				</Flex>
			))}
		</Flex>
		</Box>
		</>
	) : (
		<>
		<Flex shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={5} justifyContent='space-between' alignItems={'center'} cursor='pointer' onClick={changeFun}>
			<Heading cursor={'pointer'} fontWeight={500} fontSize={'19px'}>Sort By : {getFilterValue}</Heading>
			<IoIosArrowUp fontSize={'25px'} color='red'/>
		</Flex>
		</>
	)
}

export default ListViewComponent2;