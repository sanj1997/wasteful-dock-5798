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
    dispatch(signInUser(creds)).then((s)=>{
      toast({
        description:"Login successful",
        status:"success"
       })
       setTimeout(()=>{
         navigate("/")
       },3000)
    }).catch((e)=>{
      if(e.message==="Network Error")
      {
        toast({
          description: "Oops! Something went wrong",
          status: "error",
        });
      }
      else if(e.response.data.message==="Invalid credentials")
        {
          toast({
            description: "Invalid credentials",
            status: "error",
          });
        }
    })
  };
  
  return (
    <Box
      border="1px solid grey"
      width="23%"
      margin="auto"
      marginTop="2rem"
      height="full"
      borderRadius="1rem"
      padding=".8rem"
      mb="2rem"
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
      <form onSubmit={handleSubmit}>
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
        <Button
          backgroundColor="#fc2779"
          borderRadius="2px"
          color="white"
          letterSpacing="1.8px"
          textAlign="center"
          fontWeight="600"
          width="full"
          type="submit"
          marginBottom="11.8rem"
          _hover={{ backgroundColor: "#fc2779" }}
        >
          SIGN IN
        </Button>
      </FormControl>
      </form>
    </Box>
  );
};

export default SignIn ;
