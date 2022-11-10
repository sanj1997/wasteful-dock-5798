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

const AddressForm = ({ onClose }) => {



    return (
        <Flex align="center" justify="center" mb={5}>
            <Box rounded="md" w="90%" pb={5}>
                <Text mb={3} fontSize={"20px"} fontWeight={"bold"}>Address</Text>
                <Formik
                    initialValues={{
                        pin: "",
                        house: "",
                        road: "",
                        name: "",
                        phone: "",
                        email: ""
                    }}
                    onSubmit={(values) => {
                        //    ############## form submit logic here ########## 
                        console.log(values)
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
                                                error = 'This field is required';
                                            } else if (value.length < 6) {
                                                error = 'Pin code is too short it must contain 6 numbers.';
                                            } else if (value.length > 6) {
                                                error = 'Pin code length is too long it must contain 6 numbers only.'
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
                                                error = 'This field is required';
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
                                        minH="150px"
                                        size='lg'
                                        bg="gray.100"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This field is required';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.pin}</FormErrorMessage>
                                </FormControl>
                                <Box>
                                    <Text fontSize={"20px"} fontWeight={"bold"}>Contact</Text>
                                    <Text fontSize={"12px"}>Information provided here will be used to contact you for delivery updates.</Text>
                                </Box>

                                <FormControl isInvalid={!!errors.name && touched.name}>
                                    <Field
                                        as={Input}
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="tel"
                                        variant='outline'
                                        size='lg'
                                        bg="gray.100"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This field is required';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.phone && touched.phone}>
                                    <Field
                                        as={Input}
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        variant='outline'
                                        size='lg'
                                        bg="gray.100"
                                        color="black"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This field is required';
                                            } else if (value.length < 10) {
                                                error = 'Phone number is too short it must contain 10 letters.';
                                            } else if (value.length > 10) {
                                                error = 'Phone number length is too long it must contain 10 letters only.'
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.email && touched.email}>

                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        placeholder="Email ID"
                                        variant='outline'
                                        size='lg'
                                        bg="gray.100"
                                        border="1px solid black"
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'This field is required';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
                                <Button onClick={onClose} position={"fixed"} bottom="20px" h="48px" _hover={{ bg: "#E80071" }} type="submit" bg="#E80071" color={"white"} width="80%">
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
