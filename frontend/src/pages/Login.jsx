import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Input,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({email:"",password:""});
  const navigate = useNavigate();
  const toast = useToast();

  const handleValues=(e)=>{
    const {name,value}=e.terget
    setCreds({...creds,[name]:value})
  }
  // phone number submitted or email
  const handleSubmit = () => {
    
  };

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
        <Link to="/signin">
          <CloseIcon height="14px" width="14px" cursor="pointer" />
        </Link>
        <Spacer />
        <Text color="#3f414d" fontSize="14px" fontWeight="semibold">
          LOGIN / REGISTER
        </Text>
        <Spacer />
      </Flex>
      <Divider padding="2" width="100" color="black" />
      <Box padding="1rem">
        <Input
          placeholder="Enter Email ID"
          border="1px solid red"
          borderColor="red"
          borderRadius="2px"
          backgroundColor=" #f3f3f3"
          fontSize="14px"
          marginTop="-1rem"
          // this name can be change as per database schema
          name="email"
          onChange={handleValues}
        />
        <Text
          borderRadius="2px"
          background="#fc2779"
          fontSize="14px"
          padding="8px 16px"
          cursor="pointer"
          lineHeight="24px"
          color="white"
          marginTop="7.6rem"
          marginBottom="16rem"
          textAlign="center"
          fontWeight="semibold"
          letterSpacing=".16rem"
          onClick={handleSubmit}
        >
          PROCEED
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
