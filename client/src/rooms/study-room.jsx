import { useState } from 'react';
import {
  Chat,
  Users,
  Sound
} from "./index";
import '../styles/app.scss';
import {
  Heading,
  Button
} from "@chakra-ui/react";
import Countdown from './timer';

// const socket = io.connect("/");


export const StudyRoom = (props) => {



  const username = props.username
  const socket = props.socket
  const usersList = props.usersList
  const room = props.room

  const [time, setTime] = useState(0)
  const [study_status, setStudyStaus] = useState("Not started yet....")
  const [timeSetted, setTimeSetted] = useState(false)
  const [study_time, setStudy_time] = useState(0)
  const [break_time, setBreak_time] = useState(0)
  


  const startTimer = function () {
    const data = { room: room, study_time: study_time*60, break_time: break_time*60 }
    socket.emit("start-timer", data)

  }

  socket.on("update-time", (data) => {
    if (data.room === room) {
      setTime(data.time)
    }

  })

  socket.on("update-study_stauts", (data) => {
    if (data.room === room) {
      if (data.study_status === true) {
        setStudyStaus("📚Study Time📚")
      }
      else if (data.study_status === false) {
        setStudyStaus("☕️Break Time☕️")
      }
    }
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
            {timeSetted &&
              <div>
                <Countdown
                  study_status={study_status}
                  room={room}
                  username={username}
                  socket={socket}
                  time={time}
                  onClick={startTimer}
                />
              </div>}
            {!timeSetted &&
              <div>
               <h1>Study Time</h1>
                <input
                  placeholder="minutes"
                  onChange = {(event) => {setStudy_time(event.target.value)}}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    } 
                  }} />
                  <h1>Break Time</h1>
                <input
                  placeholder="minutes"
                  onChange = {(event) => {setBreak_time(event.target.value)}}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                   
                  }} />
                  <button onClick = {()=> {setTimeSetted(true)
                  console.log(study_time,break_time)}}>SET TIME</button>
                    

              </div>


            }
          </div>

          <div className="right-study-bar">
              <Chat socket={socket} username={username} room={room} />


          </div>

        </div>

      </div>



    </main>

  );
};