import React from 'react';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading,
  ButtonGroup
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from './textField';


export const CreateRoom = () => {


  return (
    <main>
      <div>
        <Heading>Create a Study Room</Heading>
      </div>

      <Formik
        initialValues={{
          title: "",
          topic: "",
          description: "",
          max_capacity: null,
          pomodoro: true,
          study_time: 25,
          break_time: 5,
          long_break_time: 30,
          reps: 2,
          sound: true,
          isPrivate: false,
          password: "",
          background_img: ""
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
            bg="white.100"
            align="center"
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

                <ButtonGroup gap="2">
                  <Button type="button" colorScheme="gray" width="50%">
                    Cancel
                  </Button>
                  <Button type="submit" colorScheme="teal" width="90%">
                    Create Room
                  </Button>
                </ButtonGroup>

              </VStack>
            </Box>
          </Flex>
        )}
      </Formik>

    </main>
  );
};