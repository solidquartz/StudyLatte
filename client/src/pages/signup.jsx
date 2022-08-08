import React from 'react';
import { Formik, useFormik } from "formik";
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
//formik docs: https://formik.org/docs/tutorial
//yup validation: https://github.com/jquense/yup

//component:  
export const Signup = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      displayName: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email required")
        .email("Please use a valid email address"),
      username: Yup.string()
        .required("Username required")
        .max(10, "Username is too long (max. 15)")
        .min(4, "Username is too short (min. 4"),
      displayName: Yup.string()
        .required("Display Name required")
        .max(10, "Display Name is too long (max 15)"),
      password: Yup.string()
        .required("Password required")
        .min(10, "Password is too short (min. 10)"),
      confirmPassword: Yup.string()
        .required("Please type your password again")
        .min(10, "Password is too short (min. 10)")
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 5));
      actions.resetForm();
    },
  });

  return (
    <main>

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
            spacing={4}
            justifyContent="center"
            onSubmit={formik.handleSubmit}
          >
            <Heading>Sign Up</Heading>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="you@email.com"
              />
              <FormErrorMessage>(formik.errors.email)</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                type="text"
              />
              <FormErrorMessage>(formik.errors.username)</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="username">Display Name</FormLabel>
              <Input
                name="displayName"
                onChange={formik.handleChange}
                value={formik.values.displayName}
                type="text"
              />
              <FormErrorMessage>(formik.errors.displayName)</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="username">Password</FormLabel>
              <Input
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="text"
              />
              <FormErrorMessage>(formik.errors.password)</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="username">Confirm Password</FormLabel>
              <Input
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                type="text"
              />
              <FormErrorMessage>(formik.errors.confirmPassword)</FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Sign Up
            </Button>

          </VStack>

        </Box>
      </Flex>

    </main>
  );
};
