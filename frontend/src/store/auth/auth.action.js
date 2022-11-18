import { SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR, EMAIL_VERIFY_LOADING, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_ERROR, SIGN_OUT_SUCCESS, GET_USER_DETAILS_LOADING, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from "./auth.types"
import axios from "axios"
import instance from "../../middleware/auth.middleware"


export const signUpUser = (creds) => async (dispatch) => {
   dispatch({ type: SIGN_UP_LOADING })
   try {
      const res = await axios.post("http://localhost:8080/auth/signup", creds)
      console.log(res.data.message)
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.message })
      return res
   } catch (e) {
      dispatch({ type: SIGN_UP_ERROR })
      return Promise.reject(e)
   }
}

export const verifyUser = (otp, email) => async (dispatch) => {
   dispatch({ type: EMAIL_VERIFY_LOADING })
   try {
      const res = await axios.post("http://localhost:8080/auth/verify-email", { otp, email })
      dispatch({ type: EMAIL_VERIFY_SUCCESS })
      return res
   } catch (e) {
      dispatch({ type: EMAIL_VERIFY_ERROR })
      return Promise.reject(e)
   }
}
export const resendOtp = (email) => async (dispatch) => {
   dispatch({ type: EMAIL_VERIFY_LOADING })
   try {
      const res = await axios.post("http://localhost:8080/auth/verify-email/resend-otp", { email })
      dispatch({ type: EMAIL_VERIFY_SUCCESS })
      return res
   } catch (e) {
      dispatch({ type: EMAIL_VERIFY_ERROR })
      return Promise.reject(e)
   }
}

export const signInUser = (creds) => async (dispatch) => {
   dispatch({ type: SIGN_IN_LOADING })
   try {
      const res = await axios.post("http://localhost:8080/auth/login", creds)
      dispatch({ type: SIGN_IN_SUCCESS, payload: res.data })
      return res
   } catch (e) {
      dispatch({ type: SIGN_IN_ERROR })
      return Promise.reject(e)
   }
}

export const getUserdetails=(id)=>async(dispatch)=>{
     dispatch({type:GET_USER_DETAILS_LOADING})
     try{
      const res=await instance.get(`auth/${id}`)
      dispatch({type:GET_USER_DETAILS_SUCCESS,payload:res.data.data.address})
     }catch(e){
      dispatch({type:GET_USER_DETAILS_FAILURE})
      return Promise.reject(e)
     }
}
export const signOutUser = () => {
   return { type: SIGN_OUT_SUCCESS }
}
