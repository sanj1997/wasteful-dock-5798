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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signUpUser } from "../store/auth/auth.action";

const AddUser = () => {
  const toast = useToast();
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const {message}=useSelector((store)=>store.auth)
  console.log(message)
  const [creds, setCreds] = useState({
    email: "",
    firstName:"",
    lastName:"",
    password:"",
    userName:""
  });

  // onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  // add a new user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(creds)) {
      dispatch(signUpUser(creds))
      // after successfully add user name and email take him
      // at home page
    } else {
      console.log("validation failed");
    }
  };

  // frontend validation
  const handleValidation = (creds) => {
    if (creds.firstName.length < 3) {
      return toast({
        description: "name should be more than three charecters",
        status: "error",
      });
    } else if (creds.password.length < 1) {
      return toast({
        description: "Password should be more than 7 characters",
        status: "error",
      });
    } else {
      return true;
    }
  };
  useEffect(()=>{
    if(message)
    {
      toast({
        description: message,
        status :"info"
       })
       setTimeout(()=>{
        navigate("/otp-verify")
      },3000)
    }
  },[message])
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
          Let's Know More About You!
        </Text>
        <Spacer />
      </Flex>
      <Divider />
      <FormControl mt="2rem" >
        <Input
          variant="flushed"
          placeholder="Enter first name"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          mt=".2rem"
          // value={creds.name}
          name="firstName"
          onChange={handleChange}
        />
        <Input
          variant="flushed"
          placeholder="Enter last name"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          mt=".2rem"
          // value={creds.name}
          name="lastName"
          onChange={handleChange}
        />
        <Input
          variant="flushed"
          placeholder="Enter your user name"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          mt=".2rem"
          // value={creds.name}
          name="userName"
          onChange={handleChange}
        />
        <Input
          variant="flushed"
          placeholder="Enter Email Address"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          mt=".2rem"
          // value={creds.name}
          name="email"
          onChange={handleChange}
        />
        <Input
          variant="flushed"
          placeholder="Email Password"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          mb="4rem"
          focusBorderColor="#fc2779"
          // value={creds.email}
          name="password"
          onChange={handleChange}
        />
        <Button
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
          SAVE
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddUser;
