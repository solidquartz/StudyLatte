import io from 'socket.io-client';
import { useState, useEffect } from 'react';
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
  Heading,
  Button
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
import axios from 'axios';
import Countdown from './timer';

// const socket = io.connect("/");


export const StudyRoom = (props) => {
  
  




  const username = props.username
  const socket = props.socket
  const usersList = props.usersList
  const room = props.room


 
  const [time , setTime] = useState(0)

  const startTimer = function () {
    const data = {room: room, time : 60}
    socket.emit("start-timer", data)
  
  }

  socket.on("update-time", (time) => {
    setTime(time)
  })

  const users = usersList.map(user => {
    return (<Users username={user} />)
  })



  return (

    <main className='study-main'>

      <div className="study-dashboard">

        <div className="study-header">
          <div>
            <Heading>Welcome to Aky's Study Room</Heading>
          </div>
          <div>
            <Button type="button" onClick={props.removeUser}>
              Leave Room
            </Button>
          </div>
        </div>

        <div className="study-components">
          <div className="left-study-bar">
            <div className="users-component">
              <Heading size="sm">Study Buddies</Heading>
              {users}
            </div>
          </div>

          <div className="centre-study-box">
            <div>
              <Countdown
                room={room}
                username={username}
                socket={socket}
                time = {time}
                onClick = {startTimer}
              />
            </div>
          </div>

          <div className="right-study-bar">
            <div className="chat-component">
              <Chat socket={socket} username={username} room={room} />
            </div>


            <div className="sound-component">
              <Sound />
            </div>
          </div>

        </div>

      </div>



    </main>

  );
};