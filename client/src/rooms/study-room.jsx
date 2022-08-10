import {
  Heading
} from '@chakra-ui/react';
import io from 'socket.io-client';
import { useState } from 'react';
import{Chats} from "../rooms/chats"
import axios from 'axios';


//creates connection between server <-> client 
const socket = io.connect("/");

export const StudyRoom = () => {

  //setting the username,
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const [joinStatus, setJoinStatus] = useState("");
  
  

  // for now we are using study_room.id but later we should change this to study_room.url 
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      // join room if data=room_id exists and if room_id is not exists then creates new one 

      // first check with database if give room url exists or not if the room_id
      axios.get(`/study_rooms/room_info/${room}`)
      .then(res => {
        if (res.data.error) {
          setJoinStatus("")
          console.log(res.data)
          setError(res.data.error);
        } 
      else {
        setError("")
        socket.emit("join_room", room); 
        setJoinStatus(`connected to ${room}`)
      }

      })
      
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
      {error && <h1>{error}</h1>}
      {joinStatus && <h1>{joinStatus}</h1>}

      <Chats socket = {socket} username = {username} room = {room}/>




    </main>

  );
};