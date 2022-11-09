import { Grid } from '@chakra-ui/react'
import React from 'react'
import ProductDetails from './ProductDetails'

const Products = () => {
	return (
		<>
		<Grid p={5} templateColumns='repeat(3, 1fr)' gap={6}>
			<ProductDetails />
			<ProductDetails />
			<ProductDetails />
		</Grid>
		</>
	)
}

export default Products