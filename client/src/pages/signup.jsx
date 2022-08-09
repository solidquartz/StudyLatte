import React from 'react';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../helpers/textField';

//using chakra with formik: https://chakra-ui.com/getting-started/with-formik
//formik docs: https://formik.org/docs/tutorial
//yup validation: https://github.com/jquense/yup

//component:  
export const Signup = () => {

  return (

    <main>

    <Formik
      initialValues={{
        email: "",
        name: "",
        display_name: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email required")
          .email("Please use a valid email address"),
        name: Yup.string()
          .required("Username required")
          .max(15, "Username is too long (max. 15)")
          .min(4, "Username is too short (min. 4"),
        display_name: Yup.string()
          .required("Display Name required")
          .max(15, "Display Name is too long (max 15)"),
        password: Yup.string()
          .required("Password required")
          .min(10, "Password is too short (min. 10)"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Passwords must match")
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 5));
        actions.resetForm();
      }}
    >

      {formik => (
        <Flex
          bg="white.100"
          align="center"
          justify="center"
          h="100vh"
        >
          <Box
            bg="white"
            p={6}
            rounded="md"
            w={80}
          >
            <VStack
              as="form"
              mx="auto"
              spacing={5}
              justifyContent="center"
              onSubmit={formik.handleSubmit}
            >
              <Heading>Sign Up</Heading>

              <TextField
                name="email"
                type="email"
                placeholder="Email Address"
              />

              <TextField
                name="name"
                type="text"
                placeholder="Username"
              />

              <TextField
                name="display_name"
                type="text"
                placeholder="Display Name"
              />

              <TextField
                name="password"
                type="password"
                placeholder="Password"
              />

              <TextField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <Button type="submit" colorScheme="purple" width="full">
                Sign Up
              </Button>

            </VStack>

          </Box>
        </Flex>
      )}
      </Formik>
      </main>

  );
};
