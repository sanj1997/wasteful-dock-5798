import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistProduct } from '../../store/wishlist/wishlist.action';
import WishlistProductsDetails from './OrderProductDetails';

const WishlistProducts = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.getWishlistReducer.data);

	useEffect(()=>{
		dispatch(getWishlistProduct());
	}, []);

	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{data.product.data?.map((p, i)=>(
				<WishlistProductsDetails product={p} key={i}/>
			))}
		</Grid>
		</>
	)
}

export default WishlistProducts;