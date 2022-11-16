import { ADMIN_PRODUCT_GET_ERROR, ADMIN_PRODUCT_GET_LOADING, ADMIN_PRODUCT_GET_SUCCESS } from "./admin.types";
import { ADMIN_USER_GET_ERROR, ADMIN_USER_GET_LOADING, ADMIN_USER_GET_SUCCESS } from "./admin.types";
import { ADMIN_ORDER_GET_ERROR, ADMIN_ORDER_GET_LOADING, ADMIN_ORDER_GET_SUCCESS } from "./admin.types";

import { ADMIN_PRODUCT_DELETE_LOADING, ADMIN_PRODUCT_DELETE_ERROR, ADMIN_PRODUCT_DELETE_SUCCESS } from "./admin.types";
import { ADMIN_USER_DELETE_LOADING, ADMIN_USER_DELETE_ERROR, ADMIN_USER_DELETE_SUCCESS } from "./admin.types";
import { ADMIN_ORDER_DELETE_LOADING, ADMIN_ORDER_DELETE_ERROR, ADMIN_ORDER_DELETE_SUCCESS } from "./admin.types";

//get admin product
export const getAdminProduct = () => async(dispatch) =>{
	dispatch({type: ADMIN_PRODUCT_GET_LOADING});

	try{
		let res = await axios.get(`http://localhost:8080/products/all-products`)

		dispatch({type: ADMIN_PRODUCT_GET_SUCCESS, payload: res.data});
	}catch(e){
		dispatch({type: ADMIN_PRODUCT_GET_ERROR});
	}
};


//get admin user
export const getAdminUser = () => async(dispatch) =>{
	dispatch({type: ADMIN_USER_GET_LOADING});

	try{
		let res = await axios.get(`http://localhost:8080/products/all-products`)

		dispatch({type: ADMIN_USER_GET_SUCCESS, payload: res.data});
	}catch(e){
		dispatch({type: ADMIN_USER_GET_ERROR});
	}
};


//get admin user
export const getAdminOrder = () => async(dispatch) =>{
	dispatch({type: ADMIN_ORDER_GET_LOADING});

	try{
		let res = await axios.get(`http://localhost:8080/products/all-products`)

		dispatch({type: ADMIN_ORDER_GET_SUCCESS, payload: res.data});
	}catch(e){
		dispatch({type: ADMIN_ORDER_GET_ERROR});
	}
};





//delete admin product
export const getAdminProductDelete = (id) => async(dispatch) =>{
	dispatch({type: ADMIN_PRODUCT_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await axios.delete(`http://localhost:8080/products/${id}`)
		console.log(res.data)
		dispatch({type: ADMIN_PRODUCT_DELETE_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ADMIN_PRODUCT_DELETE_ERROR});
	}
};

//delete admin USER
export const getAdminUserDelete = (id) => async(dispatch) =>{
	dispatch({type: ADMIN_USER_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await axios.delete(`http://localhost:8080/products/${id}`)
		console.log(res.data)
		dispatch({type: ADMIN_USER_DELETE_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ADMIN_USER_DELETE_ERROR});
	}
};

//delete admin Order
export const getAdminOrderDelete = (id) => async(dispatch) =>{
	dispatch({type: ADMIN_ORDER_DELETE_LOADING});
	// console.log(id)
	try{
		let res = await axios.delete(`http://localhost:8080/products/${id}`)
		console.log(res.data)
		dispatch({type: ADMIN_ORDER_DELETE_SUCCESS, payload: res.data.data});
	}catch(e){
		dispatch({type: ADMIN_ORDER_DELETE_ERROR});
	}
};