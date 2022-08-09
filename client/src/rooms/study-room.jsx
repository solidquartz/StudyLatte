import {
  Heading
} from '@chakra-ui/react';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io.connect("/");

export const StudyRoom = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {

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
      <button>Join a Room</button>


    </main>

  );
};