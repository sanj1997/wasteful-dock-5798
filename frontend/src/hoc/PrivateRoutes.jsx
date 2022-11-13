import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {Mtoken}=useSelector((store)=>store.auth)
    if(Mtoken)
    {
      return children
    }
    return <Navigate to={"/signIn"} replace={true}/>
}

export default PrivateRoutes
