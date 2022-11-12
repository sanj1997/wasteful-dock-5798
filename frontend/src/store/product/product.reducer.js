import { PRODUCT_GET_ERROR, PRODUCT_GET_LOADING, PRODUCT_GET_SUCCESS } from "./product.types";
import { PRODUCT_GET_BY_ID_LOADING, PRODUCT_GET_BY_ID_ERROR, PRODUCT_GET_BY_ID_SUCCESS } from "./product.types";

//product initial
const getProductInitial = {
	loading: false,
	data: {
		product: [],
		status: false
	},
	error: false,
};

//product initial
const getProductByIdInitial = {
	loading: false,
	data: {
		product: {},
		status: false
	},
	error: false,
};

//get product
export const getProductReducer = (state = getProductInitial, {type, payload}) =>{
	switch (type){
		case PRODUCT_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case PRODUCT_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case PRODUCT_GET_SUCCESS: {
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

export const getProductByIdReducer = (state = getProductByIdInitial, {type, payload}) =>{
	switch (type){
		case PRODUCT_GET_BY_ID_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case PRODUCT_GET_BY_ID_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case PRODUCT_GET_BY_ID_SUCCESS: {
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