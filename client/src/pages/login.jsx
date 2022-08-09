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
import { useState } from 'react';
import axios from 'axios';

//using chakra with formik: https://chakra-ui.com/getting-started/with-formik
//formik docs: https://formik.org/docs/tutorial
//yup validation: https://github.com/jquense/yup

//component:  
export const Login = () => {
  const [login,setlogin] = useState("")
  const [error,setError] = useState("")

  return (
    <main>
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
          axios.post("/users/login", {
            password: values.password,
            email: values.email,

          }).then((response) => {
            if (response.data.emailError) {
              setlogin("")
              setError(response.data.emailError)
              
            }

            else if(response.data.passwordError){
              setError("")
              setlogin("")
              setError(response.data.passwordError)

            }
            else{
              console.log("response from server", response.data)
              setError("")
              setlogin(response.data)

            }
           
          });
  
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

                <h3>{error}</h3>
                {login && <h3>Now you are login as {login.display_name}</h3>} 

              </VStack>
            </Box>
          </Flex>
        )}
      </Formik>

    </main>
  );
};