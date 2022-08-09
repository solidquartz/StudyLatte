import {
  Heading
} from '@chakra-ui/react';
import io from 'socket.io-client';
import { useState } from 'react';
import{Chats} from "../rooms/chats"

const socket = io.connect("/");

export const StudyRoom = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room); 

    }
  };

  return (
    <main>
      <Heading>Study Room</Heading>

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
      <button onClick = {joinRoom}>Join a Room</button>

      <Chats socket = {socket} username = {username} room = {room}/>




    </main>

  );
};