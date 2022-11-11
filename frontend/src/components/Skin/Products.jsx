import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product/product.action';
import ProductDetails from './ProductDetails';
import ProductPagination from './ProductPagination';

const Products = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.getProductReducer.data);

	useEffect(()=>{
		dispatch(getProduct());
	}, []);

	// console.log(data.product);
	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{data.product.data?.map((p, i)=>(
				<ProductDetails product={p} key={i}/>
			))}
		</Grid>
		<Box mt={10} mb={10}>
			<ProductPagination currentPage={5} totalPage={10} />
		</Box>
		</>
	)
}

export default Products;