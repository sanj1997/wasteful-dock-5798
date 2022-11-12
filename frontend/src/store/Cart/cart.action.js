import axios from "axios";
import instance from "../../middleware/auth.middleware";
import { CART_ADD_ERROR, CART_ADD_LOADING, CART_ADD_SUCCESS, CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_LOADING, CART_UPDATE_SUCCESS } from "./cart.types"

export const createcart=()=>async(dispatc)=>{
    try{
        const res=await instance.post("/cart/create-cart")
        console.log(res,"created cart")
    }catch(e){
       console.log(e.message)
    }
}
export const getCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_GET_LOADING });

    try {
        const res = await instance.get(`/cart/${id}`);
        dispatch({ type: CART_GET_SUCCESS, payload: res.data.data.products })
    } catch (er) {
        dispatch({ type: CART_GET_ERROR })
    }
}

export const addCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_ADD_LOADING })
    console.log(id)
    try {
        const res = await instance.post(`/cart/${id}`);
        console.log(res.data.message,"success")
        dispatch({ type: CART_ADD_SUCCESS})
    } catch (er) {
        console.log(er.message,"failure")
        dispatch({ type: CART_ADD_ERROR })
    }
}
export const updateCartData = (id, data) => async (dispatch) => {
    dispatch({ type: CART_UPDATE_LOADING })

    try {
        const res = await axios.put(`http://localhost:8080/${id}`, data);
        dispatch({ type: CART_UPDATE_SUCCESS, payload: res.data })
        return res.data
    } catch (er) {
        dispatch({ type: CART_UPDATE_ERROR })
    }
}
export const deleteCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_DELETE_LOADING })

    try {
        const res = await axios.delete(`http://localhost:8080/${id}`);
        dispatch({ type: CART_DELETE_SUCCESS, payload: res.data })
        return res.data
    } catch (er) {
        dispatch({ type: CART_DELETE_ERROR })
    }
}