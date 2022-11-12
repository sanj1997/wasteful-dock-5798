import axios from "axios";
import { CART_ADD_ERROR, CART_ADD_LOADING, CART_ADD_SUCCESS, CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_LOADING, CART_UPDATE_SUCCESS } from "./cart.types"


export const getCartData = () => async (dispatch) => {
    dispatch({ type: CART_GET_LOADING });

    try {
        const res = await axios.get(`http://localhost:8080/`);
        dispatch({ type: CART_GET_SUCCESS, payload: res.data })
        return res.data
    } catch (er) {
        dispatch({ type: CART_GET_ERROR })
    }
}

export const addCartData = (data) => async (dispatch) => {
    dispatch({ type: CART_ADD_LOADING })

    try {
        const res = await axios.post(`http://localhost:8080/`, data);
        dispatch({ type: CART_ADD_SUCCESS, payload: res.data })
        return res.data
    } catch (er) {
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