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
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  const toast = useToast();

  const [creds, setCreds] = useState({
    name: "",
    email: "",
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
    if (!handleValidation(creds)) {
      console.log(creds);
      // after successfully add user name and email take him
      // at home page
    } else {
      console.log("validation failed");
    }
  };

  // frontend validation
  const handleValidation = (creds) => {
    if (creds.name.length < 3) {
      return toast({
        description: "name should be more than three charecters",
        status: "error",
      });
    } else if (creds.email.length < 1) {
      return toast({
        description: "PLease enter your email",
        status: "error",
      });
    } else {
      return true;
    }
  };

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
          placeholder="Enter first name"
          border-bottom="1px solid #e1e1e1"
          paddingRight="25px"
          fontSize="14px"
          focusBorderColor="#fc2779"
          mt=".2rem"
          value={creds.name}
          name="name"
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
          value={creds.name}
          name="name"
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
          value={creds.name}
          name="name"
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
          value={creds.email}
          name="email"
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
