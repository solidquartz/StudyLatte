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
          max_capacity: 1,
          pomodoro: true,
          study_time: 25,
          break_time: 5,
          long_break_time: 30,
          reps: 2,
          music: false,
          isPrivate: false,
          password: "",
          background_img: ""
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Please give your room a title"),
          topic: Yup.string()
            .required("Please write a descriptive topic"),
          description: Yup.string()
            .required("Please write a description"),
          max_capacity: Yup.number()
            .required("Please select an option"),
          pomodoro: Yup.boolean()
            .required("Please select an option"),
          study_time: Yup.number()
            .required("Please choose a duration"),
          break_time: Yup.number()
            .required("Please choose a duration"),
          long_break_time: Yup.number()
            .required("Please choose a duration"),
          reps: Yup.number()
            .required("Please choose a number of repetitions"),
          music: Yup.boolean()
            .required("Please select an option"),
          isPrivate: Yup.boolean()
            .required("Please select an option"),
          password: Yup.string()
            .required("Please choose a password"),
          background_image: Yup.string()
            .required("Please select an option"),
        })}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 13));
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