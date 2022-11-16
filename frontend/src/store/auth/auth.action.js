import { SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR, EMAIL_VERIFY_LOADING, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_ERROR, SIGN_OUT_SUCCESS } from "./auth.types"
import axios from "axios"


export const signUpUser=(creds)=>async(dispatch)=>{
     dispatch({type:SIGN_UP_LOADING})
     try{
        const res=await axios.post("https://beautiva-backend-production.up.railway.app/auth/signup",creds)
        console.log(res.data.message)
        dispatch({type:SIGN_UP_SUCCESS,payload:res.data.message})
     }catch(e){
        dispatch({type:SIGN_UP_ERROR})
     }  
}

export const verifyUser=(otp,email)=>async(dispatch)=>{
    dispatch({type:EMAIL_VERIFY_LOADING})
    try{
       const res=await axios.post("https://beautiva-backend-production.up.railway.app/auth/verify-email",{otp,email})
       console.log(res.data.message)
       dispatch({type:EMAIL_VERIFY_SUCCESS})
    }catch(e){
       dispatch({type:EMAIL_VERIFY_ERROR})
    }  
}

export const signInUser=(creds)=>async(dispatch)=>{
    console.log(creds)
    dispatch({type:SIGN_IN_LOADING})
    try{
      const res=await axios.post("https://beautiva-backend-production.up.railway.app/auth/login",creds)
      dispatch({type:SIGN_IN_SUCCESS,payload:res.data})
    }catch(e){
      dispatch({type:SIGN_IN_ERROR})
    }
}

export const signOutUser=()=>{
   return {type:SIGN_OUT_SUCCESS}
}
