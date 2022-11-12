const nodemailer=require("nodemailer")
require("dotenv").config()
// console.log(process.env.BEAUTIVA_EMAIL_USER,process.env.BEAUTIVA_EMAIL_PASSWORD)
const transport=nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${process.env.BEAUTIVA_EMAIL_USER}`,
        pass: `${process.env.BEAUTIVA_EMAIL_PASSWORD}`
    }
})
const sendEmail=async(email,otp)=>{
    // console.log(email,otp)
    const details = { 
        from:`${process.env.BEAUTIVA_EMAIL_USER}`,
        to:email,
        subject:"OTP",
        text:`Hello ${email}, your OTP is ${otp} NOTE: Otp expires in 5 minutes`
    }
    transport.sendMail(details,(err)=>{
        console.log(details)
        if(err) console.log("It has an error");
        else console.log("Email has been sent")
    })
}
module.exports=sendEmail