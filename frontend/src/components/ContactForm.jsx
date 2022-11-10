import React, { useState } from 'react'
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Text,
    Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
    return (
        <Flex align="center" justify="center" mb={5}>
            <Box rounded="md" w="90%" pb={5}>
                <Text mb={3} fontSize={"20px"} fontWeight={"bold"}>Address</Text>
                <Formik
                    initialValues={{
                        name: "",
                        phone: "",
                        email: ""
                    }}
                    onSubmit={(values) => {
                        //    ############## form submit logic here ########## 
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={5} align="flex-start">
                          

                                <Button h="48px" _hover={{ bg: "#E80071" }} type="submit" bg="#E80071" color={"white"} width="full">
                                    Ship to this address
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    )
}

export default ContactForm
