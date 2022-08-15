import { useEffect, useState } from 'react';
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
import axios from 'axios';

// const socket = io.connect("/");


export const StudyRoom = (props) => {



  const username = props.username
  const socket = props.socket
  const usersList = props.usersList
  const room = props.room
  const setUsersLists = props.setUsersLists

  const [time, setTime] = useState(0)
  const [study_status, setStudyStaus] = useState("Not started yet....")
  const [timeSetted, setTimeSetted] = useState(false)
  const [study_time, setStudy_time] = useState(0)
  const [break_time, setBreak_time] = useState(0)
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (usersList[0] === username) {
      setisAdmin(true)
    }


  }, [setUsersLists])




  const startTimer = function () {
    const data = { room: room, study_time: study_time * 60, break_time: break_time * 60 }
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
            <h1>Welcome to Aky's Study Room</h1>
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
              <h2 size="sm">Study Buddies</h2>
              {users}
            </div>
          </div>

          <div className="centre-study-box">

            {!timeSetted && isAdmin &&
              <div>
                <h2>Study Time</h2>
                <input
                  placeholder="minutes"
                  onChange={(event) => { setStudy_time(event.target.value) }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} />
                <h2>Break Time</h2>
                <input
                  placeholder="minutes"
                  onChange={(event) => { setBreak_time(event.target.value) }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }

                  }} />

                <Button
                  colorScheme='whiteAlpha'
                  onClick={() => {
                    setTimeSetted(true)
                    console.log(study_time, break_time)
                  }}>SET TIME</Button>

              </div>


            }

            {timeSetted && isAdmin && <div>
              <Countdown
                study_status={study_status}
                room={room}
                username={username}
                socket={socket}
                time={time}
                onClick={startTimer}
                isAdmin = {isAdmin}
              />
            </div>
            }

            {!isAdmin && <div>
              <Countdown
                study_status={study_status}
                room={room}
                username={username}
                socket={socket}
                time={time}
                onClick={startTimer}
                isAdmin = {isAdmin}
              />
            </div>}





          </div>

          <div className="right-study-bar">
            <Chat socket={socket} username={username} room={room} />


          </div>

        </div>

      </div>



    </main>

  );
};