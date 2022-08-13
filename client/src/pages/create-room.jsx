import React from 'react';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Link as RouterLink } from 'react-router-dom';
import TextAreaField from '../components/TextAreaField';
import '../styles/app.scss';


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
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Please give your room a title"),
          topic: Yup.string()
            .required("Please write a descriptive topic"),
          description: Yup.string()
            .required("Please write a description"),
        })}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 3));
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
                  name="title"
                  type="text"
                  placeholder="Room Title"
                />

                <TextField
                  name="topic"
                  type="text"
                  placeholder="Study Topic"
                />

                <TextAreaField
                  name="description"
                  type="text"
                  placeholder='Description' />



                <ButtonGroup gap="2">
                  <Button type="button" colorScheme="gray" width="50%">
                    <RouterLink to="/join-room">
                      Cancel
                    </RouterLink>
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