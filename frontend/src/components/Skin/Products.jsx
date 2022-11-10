import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product/product.action';
import ProductDetails from './ProductDetails';

const Products = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.getProductReducer.data);

	useEffect(()=>{
		dispatch(getProduct());
	}, [])

	console.log(data);
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