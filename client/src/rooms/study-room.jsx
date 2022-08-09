import {
  Heading
} from '@chakra-ui/react';
import io from 'socket.io-client';
import { useState } from 'react';
import { Chat } from "./chat"
import '../styles/app.scss';

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
      <Heading>Study Room</Heading>

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
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>

    </main>

  );
};