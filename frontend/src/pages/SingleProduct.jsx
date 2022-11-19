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

const SingleProduct = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const {singleProduct,loading} = useSelector((store) => store.product);
	console.log(loading)
	useEffect(()=>{
		dispatch(getProductById(params.id));
	}, []);
	if(loading){
		return 
	}

	return (
		<>
		<ProductInfo data={singleProduct}/>

		<Box bg={'rgb(242,243,242)'}>
			<Flex width='85%' margin='auto' gap={7}>
				<Box width={'78%'}>
					<Heading fontSize={'20px'} pt={10} pb={10}>Product Description</Heading >
					<ProductDescription description={singleProduct.description}/>
					<Heading fontSize={'20px'} pt={10} pb={10}>Customer also Viewed</Heading >
					<CustomerViewProducts width="100%"/>
					<Heading fontSize={'20px'} pt={10} pb={10}>Product Details</Heading >
					<ProductReview rating = {singleProduct.rating}/>
				</Box>
				<Box width={'20%'} mt={"102px"}> 
					<ProductDetails product = {singleProduct} />
				</Box>
			</Flex>
		</Box>
		<Footer/>
		</>
	)
}

export default SingleProduct;