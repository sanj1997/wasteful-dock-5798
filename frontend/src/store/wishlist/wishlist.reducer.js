import { WISHLIST_PRODUCT_GET_BY_ID_LOADING, WISHLIST_PRODUCT_GET_BY_ID_ERROR, WISHLIST_PRODUCT_GET_BY_ID_SUCCESS, WISHLIST_PRODUCT_ADD_LOADING, WISHLIST_PRODUCT_ADD_SUCCESS, WISHLIST_PRODUCT_ADD_ERROR } from "./wishlist.types";
import { WISHLIST_PRODUCT_DELETE_LOADING, WISHLIST_PRODUCT_DELETE_ERROR, WISHLIST_PRODUCT_DELETE_SUCCESS } from "./wishlist.types";
import { WISHLIST_PRODUCT_GET_ERROR, WISHLIST_PRODUCT_GET_LOADING, WISHLIST_PRODUCT_GET_SUCCESS } from "./wishlist.types";


//product initial
const wishlistInitial = {
	loading: false,
	wishlist: [],
	status: false,
	error: false,
};

//get wishlist product
export const wishlistReducer = (state = wishlistInitial, {type, payload}) =>{
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
			    wishlist: payload,
				status: true
			};
		} 

		case WISHLIST_PRODUCT_ADD_LOADING:return {
			...state,loding:true
		}

		case WISHLIST_PRODUCT_ADD_SUCCESS:
		console.log(payload,"reducer")	
		return {
			...state,loding:false,wishlist:[...payload]
		}

		case WISHLIST_PRODUCT_ADD_ERROR:return {
			...state,loading:false,error:true
		}

		case WISHLIST_PRODUCT_DELETE_LOADING:return {
			...state,loading:true
		}

		case WISHLIST_PRODUCT_DELETE_SUCCESS:
		let newData=state.wishlist.filter((el)=>{
			return el.product._id!=payload
		})	
		return {
			...state,loading:false,wishlist:[...newData]
		}

		case WISHLIST_PRODUCT_DELETE_ERROR:return {
			...state,loading:false,error:true
		}
		default: {
			return state;
		}
	}
} 

