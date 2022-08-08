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
import TextField from './textField';

//using chakra with formik: https://chakra-ui.com/getting-started/with-formik
//formik docs: https://formik.org/docs/tutorial
//yup validation: https://github.com/jquense/yup

//component:  
export const Login = () => {

  return (

    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email required")
          .email("Please use a valid email address"),
        password: Yup.string()
          .required("Password required")
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >

      {formik => (
        <Flex
          bg="gray.100"
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
              <Heading>Log In</Heading>

              <TextField
                name="email"
                type="email"
                placeholder="Email Address"
              />

              <TextField
                name="password"
                type="password"
                placeholder="Password"
              />

              <Button type="submit" colorScheme="purple" width="full">
                Log In
              </Button>

            </VStack>

          </Box>
        </Flex>
      )}
    </Formik>

  );
};