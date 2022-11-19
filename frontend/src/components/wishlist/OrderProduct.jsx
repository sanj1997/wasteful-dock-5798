import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderProduct } from '../../store/order/order.action';
import OrderProductDetails from '../wishlist/OrderProductDetails';

const OrderProducts = () => {
	const dispatch = useDispatch();
	const {orders} = useSelector((store) => store.order);
 


	return (
		<>
		<Grid p={'20px 20px 20px 0px'} templateColumns='repeat(3, 1fr)' gap={6}>
			{orders?.products?.map((el)=>(
				<OrderProductDetails product={el.product} key={el._id}/>
			))}
		</Grid>
		</>
	)
}

export default OrderProducts;