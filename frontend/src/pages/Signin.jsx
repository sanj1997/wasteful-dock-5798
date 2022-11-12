import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../store/auth/auth.action";

const SignIn = () => {
  const {Mtoken, error}=useSelector((store)=>store.auth)
  const navigate=useNavigate()
  const toast = useToast();
  const dispatch=useDispatch()
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(creds))
  };
  
 useEffect(()=>{
   if(Mtoken)
   {
     toast({
      description:"Login successful",
      status:"success"
     })
     setTimeout(()=>{
       navigate("/")
     },3000)
   }
 },[Mtoken])

  return (
    <Box
      border="1px solid grey"
      width="23%"
      margin="auto"
      marginTop="4rem"
      height="full"
      borderTopRadius="1rem"
      padding=".8rem"
    >
      <Flex mt=".7rem" mb="1rem" ml=".4rem" mr=".4rem">
        <Link to="#">
          {" "}
          <CloseIcon height="14px" width="14px" cursor="pointer" />{" "}
        </Link>
        <Spacer />
        <Text color="#3f414d" fontSize="14px" fontWeight="semibold">
          Welcome Back!
        </Text>
        <Spacer />
      </Flex>
      <Divider />
      {/* <Text
        backgroundColor="#f3f3f3"
        border="1px solid #ebebeb"
        borderRadius="2px"
        color="#3f414d"
        padding=".4rem"
        mt=".4rem"
        marginBottom="16px"
        fontSize="14px"
        textAlign="center"
      >
        1234567890
      </Text> */}
      <FormControl mt="2rem" >
        <Input
          variant="flushed"
          placeholder="Enter Email"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          type={"email"}
          mt=".2rem"
          // value={creds.name}
          name="email"
          onChange={handleChange}
        />
        <Input
          variant="flushed"
          placeholder="Enter Password"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          mb="4rem"
          focusBorderColor="#fc2779"
          type={"password"}
          // value={creds.email}
          name="password"
          onChange={handleChange}
        />
        <Link><Button
          backgroundColor="#fc2779"
          borderRadius="2px"
          color="white"
          letterSpacing="1.8px"
          textAlign="center"
          fontWeight="600"
          width="full"
          marginBottom="11.8rem"
          _hover={{ backgroundColor: "#fc2779" }}
          onClick={handleSubmit}
        >
          SIGN IN
        </Button></Link>
      </FormControl>
    </Box>
  );
};

export default SignIn ;
