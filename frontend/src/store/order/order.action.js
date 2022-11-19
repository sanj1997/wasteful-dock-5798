import axios from "axios";
import instance from "../../middleware/auth.middleware";
import { ORDER_ADD_LOADING, ORDER_ADD_ERROR, ORDER_ADD_SUCCESS } from "./order.types";
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
export const addToOrders = (id) => async(dispatch) =>{
	dispatch({type: ORDER_ADD_LOADING});
	try{
		let res = await instance.post(`orders/${id}`)
		console.log(res.data)
		dispatch({type: ORDER_ADD_SUCCESS, payload: res.data.data});
	}catch(e){
		console.log(e.message)
		dispatch({type: ORDER_ADD_ERROR});
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