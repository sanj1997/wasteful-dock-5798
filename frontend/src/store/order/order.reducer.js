import { ORDER_PRODUCT_GET_BY_ID_LOADING, ORDER_PRODUCT_GET_BY_ID_ERROR, ORDER_PRODUCT_GET_BY_ID_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_DELETE_LOADING, ORDER_PRODUCT_DELETE_ERROR, ORDER_PRODUCT_DELETE_SUCCESS } from "./order.types";
import { ORDER_PRODUCT_GET_ERROR, ORDER_PRODUCT_GET_LOADING, ORDER_PRODUCT_GET_SUCCESS } from "./order.types";


//product initial
const orderInitial = {
	loading: false,
    orders: [],
    status: false,
	error: false,
};



//get wishlist product
export const orderReducer = (state = orderInitial, {type, payload}) =>{
	switch (type){
		case ORDER_PRODUCT_GET_LOADING: return {
				...state,
				loading: true,
			};
	
		case ORDER_PRODUCT_GET_ERROR: return {
				...state,
				loading: false,
				error: true
			};
		
		case ORDER_PRODUCT_GET_SUCCESS: return {
				...state,
				loading: false,
				error: false,
				orders: payload,
				status: true
			};
		case ORDER_PRODUCT_DELETE_LOADING: return {
					...state,
					loading: true,
				};
			
		case ORDER_PRODUCT_DELETE_ERROR:return {
					...state,
					loading: false,
					error: true
				};
		case ORDER_PRODUCT_DELETE_SUCCESS: return {
					...state,
					loading: false,
					error: false,
					orders: payload,
					status: true
					}
		default:return state;

	}
} 

//getbyid wishlist product


