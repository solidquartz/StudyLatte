import io from 'socket.io-client';
import { useState } from 'react';
import {
  Chat,
  Users,
  Timer,
  Notes,
  Sound
} from "./index";
import '../styles/app.scss';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading,
  Grid,
  GridItem
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
const socket = io.connect("/");

export const StudyRoom = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room); 
      setShowChat(true);
    }
  };


  return (

    <main>
      
      {/* <div className="join-room-form">
      <Formik
        initialValues={{
          id: "",
          username: "",
        }}
        validationSchema={Yup.object({
          id: Yup.number()
            .required("Room ID Required"),
          username: Yup.string()
          .required("Username Required")
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
                  name="username"
                  type="username"
                  placeholder="Username"
                />

                <Button type="submit" colorScheme="purple" width="full">
                  Start Studying!
                </Button>

              </VStack>
            </Box>
          </Flex>
        )}
        </Formik>
    </div> */}

      <Grid
        templateAreas={`"header header header"
                  "users timer chat"
                  "users timer sound"
                  "users timer notes"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>

        <GridItem pl="2" bg="orange.100" className="study-header" area={"header"}>
          <Heading>Welcome to Aky's Study Room</Heading>
        </GridItem>

        <GridItem pl='2' bg="red.100" className="users-component" area={"users"}>
        <Users username={username} />
      </GridItem>

        <GridItem pl='2' bg="blue.100" className="timer-component" area={"timer"}>
        <Timer />
      </GridItem>

        <GridItem pl='2' bg="green.100" className="notes-component" area={"notes"}>
        <Notes />
      </GridItem>

        <GridItem pl='2' bg="purple.100" className="sound-component" area={"sound"}>
        <Sound />
      </GridItem>

        <GridItem pl='2' bg="yellow.100" className="chat-component" area={"chat"}>
        <Chat socket={socket} username={username} room={room} />
      </GridItem>

      </Grid>
      {/* move this logic to the Formik Join Room form */}
      {/* <div className="StudyChat">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join Chat</h3>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join a Room</button>
          </div>
        ) : (

            //Keep this part 
            <Chat socket={socket} username={username} room={room} /> 
            
        )}
      </div> */}

    </main>

  );
};