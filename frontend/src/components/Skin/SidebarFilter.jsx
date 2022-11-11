import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
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
	return (
		<>
		<Flex direction={'column'} gap={5} p={8}>
			<ListViewComponent listArr={sortByName} name='Sort By : Popularity'/>
			<ListViewComponent listArr={category} name='Category'/>
			<ListViewComponent listArr={Brand} name='Brand'/>
			<ListViewComponent listArr={price} name='Price'/>
		</Flex>
		</>
	)
}

export default SidebarFilter