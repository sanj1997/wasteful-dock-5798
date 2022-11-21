import axios from "axios";
import instance from "../../middleware/auth.middleware";
import { CART_ADD_ERROR, CART_ADD_LOADING, CART_ADD_SUCCESS, CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_LOADING, CART_UPDATE_SUCCESS, CART_USER_DELETE_ERROR, CART_USER_DELETE_LOADING, CART_USER_DELETE_SUCCESS } from "./cart.types"


// export const createcart=()=>async(dispatch)=>{
//     try{
//         const res=await instance.post("/cart/create-cart")
//         console.log(res,"created cart")
//     }catch(e){
//        console.log(e.message)
//     }
// }
export const getCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_GET_LOADING });
    // console.log(id, "id")
    try {
        const res = await instance.get(`/cart/${id}`);
        console.log(res.data.data, "get")
        dispatch({ type: CART_GET_SUCCESS, payload: res.data.data })
    } catch (er) {
        dispatch({ type: CART_GET_ERROR })
    }
}

export const addCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_ADD_LOADING })
    // console.log(id)
    try {
        const res = await instance.post(`/cart/${id}`);
        console.log(res.data.message, "success")
        dispatch({ type: CART_ADD_SUCCESS, payload: res.data.message })

    } catch (er) {
        console.log(er.message, "failure")
        dispatch({ type: CART_ADD_ERROR, payload: er.message })
    }
}
export const updateCartData = (id, quantity) => async (dispatch) => {
    dispatch({ type: CART_UPDATE_LOADING })

    try {
        const res = await instance.patch(`/cart`, { id: id, quantity: quantity });
        dispatch({ type: CART_UPDATE_SUCCESS, payload: res.data.message })
        return res.data
    } catch (er) {
        dispatch({ type: CART_UPDATE_ERROR, payload: er.message })
    }
}
export const deleteCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_DELETE_LOADING })

    try {
        const res = await instance.delete(`cart/${id}`);
        dispatch({ type: CART_DELETE_SUCCESS, payload: res.data.message })
        // console.log(res.message)
    } catch (er) {
        // console.log(er.message)
        dispatch({ type: CART_DELETE_ERROR, payload: er.message })
    }
}

export const deleteUserCartData = (id) => async (dispatch) => {
    dispatch({ type: CART_USER_DELETE_LOADING })

    try {
        const res = await instance.delete(`cart/user-cart/${id}`);
        dispatch({ type: CART_USER_DELETE_SUCCESS, payload: res.data.message })
        // console.log(res.message)
    } catch (er) {
        // console.log(er.message)
        dispatch({ type: CART_USER_DELETE_ERROR, payload: er.message })
    }
}