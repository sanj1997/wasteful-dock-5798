import axios from "axios";
import instance from "../../middleware/auth.middleware";
import { ORDER_PRODUCT_GET_BY_ID_LOADING, ORDER_PRODUCT_GET_BY_ID_ERROR, ORDER_PRODUCT_GET_BY_ID_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_DELETE_LOADING, ORDER_PRODUCT_DELETE_ERROR, ORDER_PRODUCT_DELETE_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_GET_ERROR, ORDER_PRODUCT_GET_LOADING, ORDER_PRODUCT_GET_SUCCESS } from "./order.types";

//get wishlist product
export const getOrderProduct = (id) => async(dispatch) =>{
	dispatch({type: ORDER_PRODUCT_GET_LOADING});

	try{
		let res = await instance.get(`/orders/${id}`)

		dispatch({type: ORDER_PRODUCT_GET_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ORDER_PRODUCT_GET_ERROR});
	}
}

//get particular product
export const getOrderProductById = (id) => async(dispatch) =>{
	dispatch({type: ORDER_PRODUCT_GET_BY_ID_LOADING});
	// console.log(id)
	try{
		let res = await instance.get(`orders/${id}`)
		console.log(res.data)
		dispatch({type: ORDER_PRODUCT_GET_BY_ID_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ORDER_PRODUCT_GET_BY_ID_ERROR});
	}
};

export const orderProductDelete = (id) => async(dispatch) =>{
	dispatch({type: ORDER_PRODUCT_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await instance.delete(`orders/${id}`)
		console.log(res.data)
		dispatch({type: ORDER_PRODUCT_DELETE_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ORDER_PRODUCT_DELETE_ERROR});
	}
};