import React from 'react';
import { Formik, Form, useField } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';

//using chakra with formik: https://chakra-ui.com/getting-started/with-formik
//formik kitchen sink: https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt?file=/src/index.js:263-759
//yup validation: https://github.com/jquense/yup

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

//component:  
export const Signup = ({ label, ...props }) => {
  return (

    <main>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={80}>
          <Formik
            initialValues={{
              email: "",
              username: "",
              displayName: "",
              password: "",
              confirmPassword: ""
            }}

            //this will need updating
            //add things such as lowercase & trim
            //check yup docs
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              displayName: Yup.string()
                .required("Required"),
              password: Yup.string()
                .required("Required"),
              //add matches
              confirmPassword: Yup.string()
                .required("Required"),
            })}



            onSubmit={async (values, { setSubmitting }) => {
              await new Promise(r => setTimeout(r, 500));
              setSubmitting(false);
            }}
          >

            <VStack spacing={4} align="flex-start">
              <Heading>Create an Account</Heading>

              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <MyTextInput
                  name="email"
                  type="text"
                  placeholder="you@email.com"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <MyTextInput
                  name="username"
                  type="text"
                  placeholder="username"
                />
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                Sign Up
              </Button>

            </VStack>
          </Formik>
        </Box>
      </Flex>
    </main>
  );
};
