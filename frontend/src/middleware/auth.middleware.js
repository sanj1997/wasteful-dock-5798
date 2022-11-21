import axios from "axios";
// require("dotenv").config()
const APP_URL=process.env.REACT_APP_URL
const instance=axios.create({
    // headers: { "Content-Type": "application/json" },
    baseURL:"https://beautiva-backend-production.up.railway.app/"
    
})

instance.interceptors.request.use(
    (config)=>{
        const token=JSON.parse(localStorage.getItem("asv"))
        config.headers={}
        if(token)
        {
            config.headers["Authorization"]=JSON.parse(localStorage.getItem("asv"))
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log("inside middleware")
      const previousRequest=error?.config
      if(error?.response?.data?.message==="jwt expired" && !previousRequest?.sent)
      {
         previousRequest.sent=true
         let rToken = JSON.parse(localStorage.getItem("csv"))
         const res=await axios("https://beautiva-backend-production.up.railway.app/auth/refresh",{
            headers:{
                "Authorization":rToken
            },
         })
         console.log(res.data.asv)
         localStorage.setItem("asv",JSON.stringify(res.data.asv))
         return instance(previousRequest)
      }
      return Promise.reject(error)
    }
  );

  export default instance