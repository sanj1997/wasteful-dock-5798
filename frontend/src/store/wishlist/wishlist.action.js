import { WISHLIST_PRODUCT_ADD_ERROR, WISHLIST_PRODUCT_ADD_LOADING, WISHLIST_PRODUCT_ADD_SUCCESS, WISHLIST_PRODUCT_GET_ERROR, WISHLIST_PRODUCT_GET_LOADING, WISHLIST_PRODUCT_GET_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_GET_BY_ID_LOADING, WISHLIST_PRODUCT_GET_BY_ID_ERROR, WISHLIST_PRODUCT_GET_BY_ID_SUCCESS } from "./wishlist.types";
import axios from 'axios';
import { WISHLIST_PRODUCT_DELETE_LOADING, WISHLIST_PRODUCT_DELETE_ERROR, WISHLIST_PRODUCT_DELETE_SUCCESS } from "./wishlist.types";
import instance from "../../middleware/auth.middleware";

//get wishlist product
export const getWishlistProduct = (id) => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_GET_LOADING});
	try{
		let res = await instance.get(`/wishlist/${id}`)
        console.log(res.data.data,"get")
		dispatch({type: WISHLIST_PRODUCT_GET_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_GET_ERROR});
	}
};

//get particular product
export const getWishlistProductById = (id) => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_LOADING});
	// console.log(id)
	try{
		let res = await instance.get(`/wishlist/${id}`)
		console.log(res.data)
		dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_GET_BY_ID_ERROR});
	}
};

export const removeWishlistProduct = (id) => async(dispatch) =>{
	dispatch({type: WISHLIST_PRODUCT_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await instance.delete(`/wishlist/${id}`)
		console.log(res.data)
		dispatch({type: WISHLIST_PRODUCT_DELETE_SUCCESS, payload: id});
	}catch(e){
		dispatch({type: WISHLIST_PRODUCT_DELETE_ERROR});
	}
};

export const addToWishlist=(id)=>async(dispatch)=>{
	dispatch({type:WISHLIST_PRODUCT_ADD_LOADING})
   try{
     const res=await instance.post(`/wishlist`,{id:id})
	 dispatch({type:WISHLIST_PRODUCT_ADD_SUCCESS,payload:res.data.data})
	 return res
   }catch(e){
      dispatch({type:WISHLIST_PRODUCT_ADD_ERROR})
	  return Promise.reject(e)
   }
}