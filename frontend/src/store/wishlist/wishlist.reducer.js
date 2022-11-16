import { WISHLIST_PRODUCT_GET_BY_ID_LOADING, WISHLIST_PRODUCT_GET_BY_ID_ERROR, WISHLIST_PRODUCT_GET_BY_ID_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_DELETE_LOADING, WISHLIST_PRODUCT_DELETE_ERROR, WISHLIST_PRODUCT_DELETE_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_GET_ERROR, WISHLIST_PRODUCT_GET_LOADING, WISHLIST_PRODUCT_GET_SUCCESS } from "./wishlist.types";


//product initial
const getWishlistInitial = {
	loading: false,
	data: {
		product: [],
		status: false
	},
	error: false,
};

//product initial
const getWishlistByIdInitial = {
	loading: false,
	data: {
		product: {},
		status: false
	},
	error: false,
};

//product initial
const deleteWishlistInitial = {
	loading: false,
	data: "Not delete",
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
export const getWishlistByIdReducer = (state = deleteWishlistInitial, {type, payload}) =>{
	switch (type){
		case WISHLIST_PRODUCT_DELETE_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case WISHLIST_PRODUCT_DELETE_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case WISHLIST_PRODUCT_DELETE_SUCCESS: {
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
export const deleteWishlistReducer = (state = getWishlistByIdInitial, {type, payload}) =>{
	switch (type){
		case WISHLIST_PRODUCT_GET_BY_ID_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case WISHLIST_PRODUCT_GET_BY_ID_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case WISHLIST_PRODUCT_GET_BY_ID_SUCCESS: {
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