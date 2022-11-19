import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistProduct } from '../../store/wishlist/wishlist.action';
import ProductDetails from './WishlistProductDetails';


const WishlistProducts = () => {
	const dispatch = useDispatch();
	const {userId}=useSelector((store)=>store.auth)
	const {wishlist} = useSelector((store) => store.wishlist);
	// useEffect(()=>{
	// 	dispatch(getWishlistProduct(userId));
	// }, []);

	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{wishlist?.map((el)=>(
				<ProductDetails product={el.product} key={el._id}/>
			))}
		</Grid>
		</>
	)
}

export default WishlistProducts;