import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import photo from "./assets/package.png";

const Signin = () => {
  return (
    <>
      <Box
        border="1px solid grey"
        width="23%"
        margin="auto"
        marginTop="6rem"
        height="full"
        borderTopRadius="1rem"
        padding="1rem"
      >
        <Box width="6">
          <CloseIcon color="black" opacity=".64" width="14px" height="14px" />
        </Box>
        <Grid paddingTop=".1rem" paddingBottom="2.4rem">
          <Text fontSize="36" fontWeight="semibold" textAlign="start">
            Sign in
          </Text>
          <Text color="#18293a" textAlign="start" fontSize="16">
            To quickly find your favourites items, saved addresses and payments.
          </Text>
          <Divider padding="2" width="100" color="black" />
          <Text
            color="#18293a"
            textAlign="start"
            fontSize="16"
            marginTop="1rem"
          >
            Register and earn 2000 reward points
          </Text>
          <Image
            src={photo}
            height="179px"
            width="293px"
            margin="auto"
            marginTop="2rem"
            marginBottom="2rem"
          />

          <Text
            borderRadius="4px"
            background="#fc2779"
            fontSize="18px"
            lineHeight="24px"
            letterSpacing=".28px"
            padding="8px 16px"
            cursor="pointer"
            color="white"
            marginBottom="16px"
          >
            Enter Mobile Number or Email
          </Text>
          <Flex
            border="1px solid grey"
            borderRadius="4"
            marginBottom="3"
            padding="8px 16px"
            lineHeight="24px"
            justifyContent="center"
            gap="4"
            cursor="pointer"
          >
            <Img src="https://id.tmetric.com/images/google_logo.svg" />
            <Text fontSize="18px" color="#5d6874 " fontWeight="600">
              Google
            </Text>
          </Flex>
          <Text
            margin-top="23px"
            letter-spacing=".58px"
            color="#001325"
            opacity=".64"
            textAlign="start"
          >
            By continuing, you agree that you have read and accept <br /> our
            our T&C and Privacy Policy
          </Text>
        </Grid>
      </Box>
    </>
  );
};

export default Signin;
