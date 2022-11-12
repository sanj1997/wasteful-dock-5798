import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import {BsCheck} from 'react-icons/bs';

const ListViewComponent = ({listArr, name, checkBoxStatus, getFilterData}) => {
	const [toggleList, setToggleList] = useState(false);

	const changeFun = ()=>{
		setToggleList(!toggleList);
	}

	return toggleList ? (
		<>
		<Box shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={5}> 
		<Flex  justifyContent='space-between' alignItems={'center'} cursor='pointer' onClick={changeFun}>
			<Heading cursor={'pointer'} fontWeight={500} fontSize={'19px'}>{name}</Heading>
			<IoIosArrowDown fontSize={'25px'} color='red'/>
		</Flex>
		<Flex direction={'column'} gap={1} mt={2} cursor={'pointer'}>
			{listArr.map((l, i)=>(
				<Flex key={i} p={2} justifyContent='space-between' alignItems={'center'} onClick={()=> getFilterData(name, l)}>
					<Text fontSize={'17px'} cursor={'pointer'}>{l}</Text>
					<Flex alignItems={'center'} justifyContent='center' width={'20px'} height='20px' border={checkBoxStatus[name] === l ? "" :'1px solid gray'} borderRadius={'50%'} bg={checkBoxStatus[name] === l ? 'rgb(253,39,120)': "gray.200"}>
						{checkBoxStatus[name] === l ? (<BsCheck fontSize={'20px'} color='white' />) : ""}
					</Flex>
				</Flex>
			))}
		</Flex>
		</Box>
		</>
	) : (
		<>
		<Flex shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={5} justifyContent='space-between' alignItems={'center'} cursor='pointer' onClick={changeFun}>
			<Heading cursor={'pointer'} fontWeight={500} fontSize={'19px'}>{name}</Heading>
			<IoIosArrowUp fontSize={'25px'} color='red'/>
		</Flex>
		</>
	)
}

export default ListViewComponent