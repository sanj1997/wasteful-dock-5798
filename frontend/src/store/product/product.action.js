import { PRODUCT_GET_ERROR, PRODUCT_GET_LOADING, PRODUCT_GET_SUCCESS } from "./product.types";
import { PRODUCT_GET_BY_ID_LOADING, PRODUCT_GET_BY_ID_ERROR, PRODUCT_GET_BY_ID_SUCCESS } from "./product.types";
import axios from 'axios';
import instance from "../../middleware/auth.middleware";

//get product
export const getProduct = () => async(dispatch) =>{
	dispatch({type: PRODUCT_GET_LOADING});

	try{
		let res = await instance.get("/products/all-products")

		dispatch({type: PRODUCT_GET_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: PRODUCT_GET_ERROR});
	}
};

//get particular product
export const getProductById = (id) => async(dispatch) =>{
	dispatch({type: PRODUCT_GET_BY_ID_LOADING});
	// console.log(id)
	try{
		let res = await instance.get(`/products/${id}`)
		console.log(res.data)
		dispatch({type: PRODUCT_GET_BY_ID_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: PRODUCT_GET_BY_ID_ERROR});
	}
};