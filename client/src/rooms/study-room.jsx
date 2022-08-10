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
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
import axios from 'axios';



const socket = io.connect("/");

export const StudyRoom = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [error, setError] = useState("");
  const [joinStatus, setJoinStatus] = useState("");


  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room); 
      setShowChat(true);
    }
  };

  //need to get the join room formik form to replace the join chat room form
  return (
    <main>
      <Heading>Study Room</Heading>

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

      <div className="users-component">
        <Users username={username} />
      </div>

      <div className="timer-component">
        <Timer />
      </div>

      <div className="notes-component">
        <Notes />
      </div>

      <div className="sound-component">
        <Sound />
      </div>

      <div>
        <Chat socket={socket} username={username} room={room} />
      </div>


      {/* move this logic to the Formik Join Room form */}
      <div className="StudyChat">
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
      </div>

    </main>

  );
};