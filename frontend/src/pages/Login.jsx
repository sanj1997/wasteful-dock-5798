import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
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
      <Flex marginTop=".3rem">
        <Link to="/signin" >
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
          placeholder="Enter Email ID or Phone Number"
          border="1px solid red"
          borderColor="red"
          borderRadius="2px"
          backgroundColor=" #f3f3f3"
          fontSize="14px"
          marginTop="-1rem"
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
        >
          PROCEED
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
