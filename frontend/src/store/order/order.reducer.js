import { ORDER_PRODUCT_GET_BY_ID_LOADING, ORDER_PRODUCT_GET_BY_ID_ERROR, ORDER_PRODUCT_GET_BY_ID_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_DELETE_LOADING, ORDER_PRODUCT_DELETE_ERROR, ORDER_PRODUCT_DELETE_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_GET_ERROR, ORDER_PRODUCT_GET_LOADING, ORDER_PRODUCT_GET_SUCCESS } from "./order.types";


//product initial
const getOrderInitial = {
	loading: false,
	data: {
		product: [],
		status: false
	},
	error: false,
};

//product initial
const getOrderByIdInitial = {
	loading: false,
	data: {
		product: {},
		status: false
	},
	error: false,
};

//product initial
const deleteOrderInitial = {
	loading: false,
	data: "Not delete",
	error: false,
};

//get wishlist product
export const getOrderReducer = (state = getOrderInitial, {type, payload}) =>{
	switch (type){
		case ORDER_PRODUCT_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ORDER_PRODUCT_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ORDER_PRODUCT_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				data: {
					product: payload,
					status: true
				}
			};
		} 
		default: {
			return state;
		}
	}
} 

//getbyid wishlist product
export const getOrderByIdReducer = (state = getOrderByIdInitial, {type, payload}) =>{
	switch (type){
		case ORDER_PRODUCT_DELETE_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ORDER_PRODUCT_DELETE_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ORDER_PRODUCT_DELETE_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				data: {
					product: payload,
					status: true
				}
			};
		} 
		default: {
			return state;
		}
	}
} 


//delete wishlist product
export const deleteOrderReducer = (state = getOrderInitial, {type, payload}) =>{
	switch (type){
		case ORDER_PRODUCT_GET_BY_ID_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ORDER_PRODUCT_GET_BY_ID_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case ORDER_PRODUCT_GET_BY_ID_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				data: payload
			};
		} 
		default: {
			return state;
		}
	}
} 