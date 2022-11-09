const nodemailer=require("nodemailer")
require("dotenv").config()

const transport=nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${process.env.BEAUTIVA_EMAIL_USER}`,
        pass: `${process.env.BEAUTIVA_EMAIL_PASSWORD}`
    }
})
const sendEmail=async(email,otp)=>{
    const details = { 
        from:`${process.env.BEAUTIVA_EMAIL_USER}`,
        to:email,
        subject:"OTP",
        text:`Hello ${email}, your OTP is ${otp}`
    }
    transport.sendMail(details,(err)=>{
        if(err) console.log("It has an error");
        else console.log("Email has been sent")
    })
}
module.exports=sendEmail