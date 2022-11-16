import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderProduct } from '../../store/order/order.action';
import OrderProductDetails from '../wishlist/OrderProductDetails';

const OrderProducts = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.getOrderReducer.data);

	useEffect(()=>{
		dispatch(getOrderProduct());
	}, []);

	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{data.product.data?.map((p, i)=>(
				<OrderProductDetails product={p} key={i}/>
			))}
		</Grid>
		</>
	)
}

export default OrderProducts;