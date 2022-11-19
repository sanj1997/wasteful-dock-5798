import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resendOtp, verifyUser } from "../store/auth/auth.action";
const formateZero = (time) => {
  return time < 10 ? `0` + time : time;
};
const TimeString = (time) => {
  const seconds = time % 60;
  const minute = Math.floor(time / 60)  % 60;
  return `${formateZero(minute)}:${formateZero(seconds)}`;
};
const Otpverify = () => {
  const toast = useToast();
  const [count,setCount]=useState(30)
  const ref=useRef(null)
  const dispatch=useDispatch()
  const {isVerified}=useSelector((store)=>store.auth)
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState({email:""})
  const navigate=useNavigate()
  const handleOtp=()=>{
    let mail=JSON.parse(localStorage.getItem("email"))
    setCount(5)
     ref.current=setInterval(()=>{
        setCount((prev)=>{
          if(prev<=0)
          {
            clearInterval(ref.current)
            ref.current=null
            return 0
          }
          else
          {
            return prev-1
          }
        })
     },1000)
     dispatch(resendOtp(mail)).then((s)=>{
      let message;
      if(s.data.message==="Email is already verified")
      {
        message="Email is already verified"
      }
      else
      {
        message="Otp is sent to your registered email"
      }
      toast({
        description: message,
        status: "info",
      });
     }).catch((e)=>{
      if(e.message==="Network Error")
      {
        toast({
          description: "Oops! Something went wrong",
          status: "error",
        });
      }
     })
  }
  useEffect(()=>{
    ref.current=setInterval(()=>{
       setCount((prev)=>{
        if(prev<=0)
        {
          clearInterval(ref.current)
          ref.current=null
          return 0
        }
        else
        {
          return prev-1
        }
       })
    },1000)
  },[])
  const handleVerify = (e) => {
    e.preventDefault()
    console.log(email,otp)
    dispatch(verifyUser(otp,email)).then((s)=>{
      toast({
        description: "Verification successful",
        status:"success"
      });
      setTimeout(()=>{
        navigate("/signIn")
      },2500)
    }).catch((e)=>{
      let message;
      let error=e.response.data.message
      if(e.message==="Network Error")
      {
        message="Network Error"
      }
      else if(error==="Email is not registered")
      {
         message="Email is not registered"
      }
      else if(error==="Otp is expired")
      {
        message="Otp is expired"
      }
      else if(error==="Invalid Otp")
      {
        message= "Invalid Otp"
      }
      toast({
        description: message,
        status:"error"
      });
    })
  };

  return (
    <Box
      border="1px solid grey"
      width="25%"
      margin="auto"
      marginTop="2rem"
      height="full"
      borderRadius="1rem"
      padding=".8rem"
      mb={"2rem"}
    >
      <Flex marginTop=".3rem">
        <Link to={"/signIn"}><CloseIcon height="14px" width="14px" cursor="pointer" /></Link>
        <Spacer />
        <Text color="#3f414d" fontSize="14px" fontWeight="semibold">
          REGISTER
        </Text>
        <Spacer />
      </Flex>
      <Divider padding="2" width="100" color="black" />
      <Box textAlign="center" padding="5px">
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          letterSpacing="0"
          color="#001325"
          opacity=".92"
          padding=".3rem"
        >
          {" "}
          Welcome to Beautiva!{" "}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          letterSpacing="0"
          color="#3f414d"
          marginTop="20px"
          paddingBottom="30px"
        >
          {" "}
          Register now and get{" "}
          <span style={{ color: "#fc2779" }}>2000 Reward Points!</span>{" "}
        </Text>
        <form onSubmit={handleVerify}>
        <Box mb={3}>
        <Input
            variant="flushed"
            placeholder="Enter Email"
            borderBottomColor="red"
            type={"email"}
            paddingRight="25px"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <Input
            variant="flushed"
            placeholder="OTP"
            borderBottomColor="red"
            paddingRight="25px"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Box>
        <Button
          backgroundColor="#fc2779"
          borderRadius="none"
          color="white"
          letterSpacing="1.8px"
          textAlign="center"
          fontWeight="600"
          width="full"
          marginBottom="4rem"
          disabled={otp === ""}
          type={"submit"}
        >
          Verify
        </Button>
        </form>
        {count>0? <Text fontWeight={"bold"} color="#d53f8c" fontSize={"xl"}>{TimeString(count)}</Text>:null}
        <Button
        onClick={handleOtp}
            disabled={count>0}
            bg="none"
            _active={{bg:"none"}}
            _hover={{bg:"none"}}
            backgroundColor="#fff"
            border="0"
            color="#fc2779"
            fontSize="12px"
            fontWeight="600"
            padding="5px"
            // width="75%"
            cursor="pointer"
            m={"auto"}
          >
            RESEND OTP
          </Button>
      </Box>
    </Box>
  );
};

export default Otpverify;
