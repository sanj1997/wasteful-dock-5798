import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ListViewComponent from './ListViewComponent';

const sortByName = ["Popularity", "Discount", "Name", "Customer Top Rated", "New Arrivals", "Price: High To Low", "Price: Low To High"];

const category = [
	'Face Moisturizer & Day Cream',
	'Serums & Essence',
	'Night Cream',
	'Face Oils',
	'All Purpose Gels/Creams',
	'BB & CC Cream'
];

const Brand = [
	'Mamaearth',
	'TAC - The Ayurveda Co.',
	'Soulflower',
	'Olay',
	'St.Botanica',
	"L'Occitane",
	'Nykaa Naturals',
	'Biotique'
];

const price = [
	'Rs. 0 - Rs. 499',
	'Rs. 500 - Rs. 999',
	'Rs. 1000 - Rs. 1999',
	'Rs. 2000 - Rs. 3999',
	'Rs. 4000 & Above',
]


const SidebarFilter = () => {
	const [checkBoxStatus, setCheckBoxStatus] = useState({});

	const getFilterData = (filterName, filterValue)=>{
		if(filterValue===checkBoxStatus[filterName]){
			setCheckBoxStatus({... checkBoxStatus, [filterName]: ""});
		}else{
			setCheckBoxStatus({... checkBoxStatus, [filterName]: filterValue});
		}
	}

	console.log(Object.keys(checkBoxStatus).length);

	// 
	
	return (
		<>
		{checkBoxStatus !== '{}' ? "" : (
			<Box shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={5}> 
				<Flex justifyContent={'space-between'}>
					<Heading fontWeight={'700'}>Filters Appiled</Heading>
					<Heading fontWeight={'700'} color='red'>Clear All</Heading>
				</Flex>
			</Box>
		)}
		<Flex direction={'column'} gap={5} p={"22px 30px 30px 30px"}>
			<ListViewComponent listArr={sortByName} name='Sort By : Popularity' getFilterData={getFilterData} checkBoxStatus={checkBoxStatus}/>
			<ListViewComponent listArr={category} name='Category' getFilterData={getFilterData} checkBoxStatus={checkBoxStatus}/>
			<ListViewComponent listArr={Brand} name='Brand' getFilterData={getFilterData} checkBoxStatus={checkBoxStatus}/>
			<ListViewComponent listArr={price} name='Price' getFilterData={getFilterData} checkBoxStatus={checkBoxStatus}/>
		</Flex>
		</>
	)
}

export default SidebarFilter