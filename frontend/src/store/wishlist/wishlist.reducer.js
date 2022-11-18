import { WISHLIST_PRODUCT_GET_BY_ID_LOADING, WISHLIST_PRODUCT_GET_BY_ID_ERROR, WISHLIST_PRODUCT_GET_BY_ID_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_DELETE_LOADING, WISHLIST_PRODUCT_DELETE_ERROR, WISHLIST_PRODUCT_DELETE_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_GET_ERROR, WISHLIST_PRODUCT_GET_LOADING, WISHLIST_PRODUCT_GET_SUCCESS } from "./wishlist.types";


//product initial
const getWishlistInitial = {
	loading: false,
	product: [],
	status: false,
	singleProduct:{},
	error: false,
};

//get wishlist product
export const getWishlistReducer = (state = getWishlistInitial, {type, payload}) =>{
	switch (type){
		case WISHLIST_PRODUCT_GET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case WISHLIST_PRODUCT_GET_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case WISHLIST_PRODUCT_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
			    product: payload,
				status: true
			};
		} 
		default: {
			return state;
		}
	}
} 

