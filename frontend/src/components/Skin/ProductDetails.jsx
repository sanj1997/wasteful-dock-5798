import { Box, Button, Flex, Img, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {GrFavorite} from 'react-icons/gr';
import {AiFillHeart} from "react-icons/ai"
import {BsFillHeartFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlist, getWishlistProduct } from '../../store/wishlist/wishlist.action';

const ProductDetails = ({product}) => {
	const dispatch=useDispatch()
	const {userId}=useSelector((store)=>store.auth)
	const {wishlist}=useSelector((store)=>store.wishlist)
	const [fill,setFill]=useState(false)
	const {_id, title, image1, offer, price, off_price,  offertag} = product;
    const toast=useToast()
    const handleWishlist=(_id)=>{
       dispatch(addToWishlist(_id)).then(()=>{
		   toast({
			description:"Item added to wishlist successfully",
			status:"success"
		   })
	   }).catch((e)=>{
		if(e.messag==="Network Error")
        {
          toast({
            description: "Oops! Something went wrong",
            status: "error",
          });
        }
		else if(e.response.data.message==="Product already exists in wishlist")
		{
			toast({
				description: "Product already exists in wishlist",
				status: "error",
			  });
		}
	   })
	}
	
	return (
		<>
		<Flex direction={'column'} justifyContent={'space-between'} shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} bg='white' borderRadius={'10px'} p={2}  width="100%">
			<Img src={image1} borderRadius={'10px'} width='100%' height={'250px'} p={5}/>
			<Text cursor='pointer' p={2} textAlign={'center'} fontWeight='500'>{title}</Text>
			<Flex justifyContent={'center'} gap={1}>
				<Text cursor='pointer' >MRP:</Text>
				<Text cursor='pointer' textDecoration={'line-through'}>{offer===0 ? "" : `₹${price}`}</Text>
				<Text cursor='pointer' fontWeight='500'>{`₹${off_price}`}</Text>
				<Text cursor='pointer' color={'green'}>{offer===0 ? "" : `${offer}% Off`}</Text>
			</Flex>
			<Text textAlign={'center'} color='red'>{offertag}</Text>
			<Flex width={'100%'} pt={5} alignItems='center'>
				<Flex justifyContent={'center'}  width={'20%'}>{<GrFavorite cursor={"pointer"} onClick={()=>handleWishlist(_id)} fontSize={'20px'}/>}</Flex>
				<Link to={`/skin/${_id}`} ><Button width={"130%"} color={'white'} _hover={{bg: 'rgb(253,39,120)'}}>Preview Shades</Button></Link>
			</Flex>
		</Flex>
		</>
	)
}

export default ProductDetails