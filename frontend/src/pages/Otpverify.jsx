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
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../store/auth/auth.action";

const Otpverify = () => {
  const toast = useToast();
  const dispatch=useDispatch()
  const {isVerified}=useSelector((store)=>store.auth)
  console.log(isVerified)
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState({email:""})
  const navigate=useNavigate()
  //dummy conditions
  // const [condition, setCondition] = useState(false);

  // function for otp verifucation
  const handleVerify = () => {
    console.log(email,otp)
    dispatch(verifyUser(otp,email))
    // if (condition) {
    //   return toast({ description: "Otp Verified", status: "success" });
    // } else {
    //   return toast({ description: "Invalid otp", status: "error" });
    // }
    // if otp was verified successfully then navigate to
    // add user page
  };

  // when the page redering for the first time
  // this message will appear , like opt sent successfully
  useEffect(() => {
    if(isVerified)
    {
      toast({
        description: "Verification successful",
        status:"success"
      });
      setTimeout(() => {
        navigate("/signIn")
     }, 3000);
    }
    
  }, [isVerified]);

  return (
    <Box
      border="1px solid grey"
      width="23%"
      margin="auto"
      marginTop="4rem"
      height="full"
      borderRadius="1rem"
      padding=".8rem"
    >
      <Flex marginTop=".3rem">
        
          <CloseIcon height="14px" width="14px" cursor="pointer" />
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
        {/* <Text
          backgroundColor="#f3f3f3"
          border="1px solid #ebebeb"
          borderRadius="2px"
          color="#3f414d"
          padding=".4rem"
          marginBottom="16px"
          fontSize="14px"
        >
          1234567890
        </Text> */}

        <Flex marginBottom="2.8rem">
        <Input
            variant="flushed"
            placeholder="Enter Email"
            borderBottomColor="red"
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
          <Text
            backgroundColor="#fff"
            border="0"
            color="#fc2779"
            fontSize="12px"
            fontWeight="600"
            padding="5px"
            width="75%"
            cursor="pointer"
          >
            RESEND OTP
          </Text>
        </Flex>

        <Button
          backgroundColor="#fc2779"
          borderRadius="none"
          color="white"
          letterSpacing="1.8px"
          textAlign="center"
          fontWeight="600"
          width="full"
          marginBottom="11.8rem"
          disabled={otp === ""}
          onClick={handleVerify}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default Otpverify;
