import { WISHLIST_PRODUCT_GET_ERROR, WISHLIST_PRODUCT_GET_LOADING, WISHLIST_PRODUCT_GET_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_GET_BY_ID_LOADING, WISHLIST_PRODUCT_GET_BY_ID_ERROR, WISHLIST_PRODUCT_GET_BY_ID_SUCCESS } from "./wishlist.types";
import axios from 'axios';
import { WISHLIST_PRODUCT_DELETE_LOADING, WISHLIST_PRODUCT_DELETE_ERROR, WISHLIST_PRODUCT_DELETE_SUCCESS } from "./wishlist.types";

//get wishlist product
export const getWishlistProduct = () => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_GET_LOADING});

	try{
		let res = await axios.get(`http://localhost:8080/products/all-products`)

		dispatch({type: WISHLIST_PRODUCT_GET_SUCCESS, payload: res.data});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_GET_ERROR});
	}
};

//get particular product
export const getWishlistProductById = (id) => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_LOADING});
	// console.log(id)
	try{
		let res = await axios.get(`http://localhost:8080/products/${id}`)
		console.log(res.data)
		dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_ERROR});
	}
};

export const getWishlistProductDelete = (id) => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await axios.delete(`http://localhost:8080/products/${id}`)
		console.log(res.data)
		dispatch({type: WISHLIST_PRODUCT_DELETE_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_DELETE_ERROR});
	}
};