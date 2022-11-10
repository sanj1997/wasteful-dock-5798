import { PRODUCT_GET_ERROR, PRODUCT_GET_LOADING, PRODUCT_GET_SUCCESS } from "./product.types";
import axios from 'axios';

//get product
export const getProduct = () => async(dispatch) =>{
	dispatch({type: PRODUCT_GET_LOADING});

	try{
		let res = await axios.get("https://nykaa-web-app-backend.herokuapp.com/products")

		dispatch({type: PRODUCT_GET_SUCCESS, payload: res.data});
	}catch(e){
		dispatch({type: PRODUCT_GET_ERROR});
	}
};