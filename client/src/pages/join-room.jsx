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
import TextField from '../components/TextField';
import '../styles/app.scss';

export const JoinRoom = () => {

  return (
    <main>
      <Formik
        initialValues={{
          id: "",
          password: "",
        }}
        validationSchema={Yup.object({
          id: Yup.number()
            .required("Room ID Required"),
          password: Yup.string()
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
            justify="center"
            h="60vh"
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
                <Heading>Join a Study Room</Heading>

                <TextField
                  name="id"
                  type="number"
                  placeholder="Room ID"
                />

                <TextField
                  name="password"
                  type="password"
                  placeholder="Room Password"
                />

                <Button type="submit" colorScheme="purple" width="full">
                  Start Studying!
                </Button>

              </VStack>
            </Box>
          </Flex>
        )}
      </Formik>

    </main>
  );
};