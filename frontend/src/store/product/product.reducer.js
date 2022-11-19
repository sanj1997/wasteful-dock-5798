import { PRODUCT_GET_ERROR, PRODUCT_GET_LOADING, PRODUCT_GET_SUCCESS } from "./product.types";
import { PRODUCT_GET_BY_ID_LOADING, PRODUCT_GET_BY_ID_ERROR, PRODUCT_GET_BY_ID_SUCCESS } from "./product.types";

//product initial
const productInitial = {
	loading: false,
	product: [],
	singleProduct:{},
	status: false,
	error: false,
};


export const productReducer = (state = productInitial, {type, payload}) =>{
	switch (type){
		case PRODUCT_GET_LOADING: return {
				...state,
				loading: true,
			};
	
		case PRODUCT_GET_ERROR: return {
				...state,
				loading: false,
				error: true
			};

		case PRODUCT_GET_SUCCESS:
		return {
				...state,
				loading: false,
				error: false,
				product: payload,
				status: true
			};
	    case PRODUCT_GET_BY_ID_LOADING:return{
			...state,loading:true
		}
		case PRODUCT_GET_BY_ID_SUCCESS:return {
			...state,loading:false,singleProduct:payload
		}
		case PRODUCT_GET_BY_ID_ERROR:return {
			...state,loading:false,error:true
		}
		default:return state;
	}
} 

