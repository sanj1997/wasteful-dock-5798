import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import React, { useEffect } from "react";
import { useState } from "react";
// import { InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signUpUser } from "../store/auth/auth.action";

const AddUser = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
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
      localStorage.setItem("email",JSON.stringify(creds.email))
      dispatch(signUpUser(creds)).then(()=>{
        toast({
          description: "Otp is sent to your registered email",
          status: "info",
        });
        setTimeout(() => {
          navigate("/otp-verify");
        }, 3000);
      }).catch((e)=>{
        // console.log(e.message,"backend")
        if(e.message==="Network Error")
        {
          toast({
            description: "Oops! Something went wrong",
            status: "error",
          });
        }
        else if(e.response.data.message==="Account already exists")
        {
          toast({
            description: "Account already exists, try logging in",
            status: "error",
          });
        }
        // console.log("heyy")
        // else 
        // {
        //   // 
        // }
      
      })
      // console.log(x)
    } else {
      console.log("validation failed");
    }
  };

  // frontend validation
  const handleValidation = (creds) => {
    let mail=creds.email.split("")
    let password=creds.password.split("")
    if (creds.firstName.length < 3) {
      toast({
        description: "name should be more than three charecters",
        status: "error",
      });
      return false
    } 
    else if (creds.password.length < 8) {
      toast({
        description: "Password lenght should be more than 7",
        status: "error",
      });
      return false
    }
    if(!mail.includes("@","com")) 
    {
      toast({
        description: "Enter valid email address",
        status: "error",
      });
      return false
    }
    if(!checkPassword(password))
    {
      toast({
        description: "Password must include numbers and special characters",
        status: "error",
      });
      return false
    }
    else {
      return true;
    }
  };
  function checkPassword(password){
    let flag1=false
    let flag2=false
    let char=["!","@","#","$","%","^","&","*"]
    let num=["1","2","3","4","5","6","7","8","9","0"]
    for(let i=0;i<char.length;i++)
    {
      if(password.includes(char[i]))
      {
        flag1=true
      }
    }
    for(let i=0;i<num.length;i++)
    {
      if(password.includes(num[i]))
      {
        flag2=true
      }
    }
    if(flag1&&flag2)
    {
      return true
    }
    return false
  }
  return (
    <Box
      border="1px solid grey"
      width="23%"
      margin="auto"
      marginTop="4rem"
      maxH={"500px"}
      borderRadius="1rem"
      padding=".8rem"
    >
      <Flex mt=".7rem" mb="1rem" ml=".4rem" mr=".4rem">
        <Link to="/">
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
      <form onSubmit={handleSubmit}>
        <FormControl mt="2rem">
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
            type={"email"}
            name="email"
            onChange={handleChange}
          />
          {/* <Input
            variant="flushed"
            placeholder="Enter Password"
            type={"password"}
            border-bottom="1px solid #e1e1e1"
            paddingRight="25px"
            fontSize="14px"
            mb="4rem"
            focusBorderColor="#fc2779"
            // value={creds.email}
            name="password"
            onChange={handleChange}
          /> */}
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              variant="flushed"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              border-bottom="1px solid #e1e1e1"
              paddingRight="25px"
              fontSize="14px"
              mb="4rem"
              focusBorderColor="#fc2779"
            />
            <InputRightElement width="4.5rem">
              <Button _active={{bg:"white"}} _hover={{bg:"white"}} bg={"white"} h="1.75rem" size="sm" onClick={handleClick}>
                {!show ? <AiFillEyeInvisible size={24}/> : <AiFillEye size={24}/>}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            backgroundColor="#fc2779"
            borderRadius="2px"
            color="white"
            letterSpacing="1.8px"
            textAlign="center"
            fontWeight="600"
            width="full"
            marginBottom="11.8rem"
            type="submit"
            _hover={{ backgroundColor: "#fc2779" }}
          >
            SAVE
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default AddUser;
