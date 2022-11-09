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

const AddressForm = () => {



    return (
        <Flex align="center" justify="center" mb={5}>    
            <Box rounded="md" w="90%" pb={5}>
            <Text mb={3} fontSize={"20px"} fontWeight={"bold"}>Address</Text>
                <Formik
                    initialValues={{
                        pin: "",
                        house: "",
                        road: ""
                    }}
                    onSubmit={(values) => {
                        //    ############## form submit logic here ########## 
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={5} align="flex-start">
                                <FormControl isInvalid={!!errors.pin && touched.pin}>
                                    <Field
                                        as={Input}
                                        id="pin"
                                        name="pin"
                                        placeholder="Pincode"
                                        type="tel"
                                        variant='outline'
                                        size='lg'
                                        bg="gray.100"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This filed is required';
                                            } else if (value.length < 6) {
                                                error = 'Pin code is too short it must contain 6 letters.';
                                            } else if (value.length > 6) {
                                                error = 'Pin code length is too long it must contain 6 letters only.'
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.pin}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.house && touched.house}>
                                    <Field
                                        as={Input}
                                        id="house"
                                        name="house"
                                        placeholder="House/Flat/Office No."
                                        variant='outline'
                                        size='lg'
                                        bg="gray.100"
                                        color="black"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This filed is required';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.road}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.road && touched.road}>

                                    <Field
                                        as={Textarea}
                                        id="road"
                                        name="road"
                                        placeholder="Road Name/ Area /Colony."
                                        variant='outline'
                                        minH="200px"
                                        size='lg'
                                        bg="gray.100"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This filed is required';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.pin}</FormErrorMessage>
                                </FormControl>

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

export default AddressForm
