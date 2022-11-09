// import UserModel from "../models/user.model"

// const createUser=async(firstName,lastName,userName,password,email,phone)=>{
//        //user existence 
//        let response;
//        try{
//            const user=await UserModel.find({email:email}) || await UserModel.find({phone:phone})
//            if(user)
//            {
//                response={message:"Account already exists"} 
//            }
//            else
//            {
//                const newUser=await UserModel.create({firstName,lastName,userName,password,email,phone})
//                response= {message:"Sign up successful"}
//            }
//        }
//        catch(e)
//        {
//            response={message:e.message}
//        }
//    return response
// }

// export {createUser}