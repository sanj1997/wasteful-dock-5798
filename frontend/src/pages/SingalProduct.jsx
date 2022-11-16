import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../store/product/product.action';
import ProductDescription from '../components/SinglePage/ProductDescription';
import ProductInfo from '../components/SinglePage/ProductInfo';
import CustomerViewProducts from '../components/SinglePage/CustomerViewProducts';
import ProductDetails from '../components/Skin/ProductDetails';
import ProductReview from '../components/SinglePage/ProductReview';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const SingalProduct = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const data = useSelector((store) => store.getProductByIdReducer.data);
	const loading = useSelector((store) => store.getProductByIdReducer.loading);
	const {description, rating} = data?.product;

	useEffect(()=>{
		dispatch(getProductById(params.id));
	}, []);

	// console.log(data, loading);

	if(loading){
		return 
	}

	return (
		<>
		<ProductInfo data={data}/>
		<Box bg={'rgb(242,243,242)'}>
			<Flex width='85%' margin='auto' gap={7}>
				<Box width={'78%'}>
					<Heading fontSize={'20px'} pt={10} pb={10}>Product Description</Heading >
					<ProductDescription description={description}/>
					<Heading fontSize={'20px'} pt={10} pb={10}>Customer also Viewed</Heading >
					<CustomerViewProducts width="100%"/>
					<Heading fontSize={'20px'} pt={10} pb={10}>Product Details</Heading >
					<ProductReview rating = {rating}/>
				</Box>
				<Box width={'20%'} mt={"102px"}> 
					<ProductDetails product = {data.product} favButton = {false}/>
				</Box>
			</Flex>
		</Box>
		<Footer/>
		</>
	)
}

export default SingalProduct;