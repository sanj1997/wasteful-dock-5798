import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product/product.action';
import ProductDetails from './ProductDetails';
import ProductPagination from './ProductPagination';

const Products = ({filterValue}) => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const {product} = useSelector((store) => store.product);
	console.log(filterValue,"filterval")
	useEffect(()=>{
		dispatch(getProduct(page));
	}, [page]);

	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{product?.map((el)=>(
				<ProductDetails product={el} key={el._id}/>
			))}
		</Grid>
		<Box mt={10} mb={10}>
			<ProductPagination currentPage={page} totalPage={5} setPage = {setPage}/>
		</Box>
		</>
	)
}

export default Products;