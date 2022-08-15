import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Chat,
  Users,
  Timer,
  Notes,
  Sound,
} from "../pages/index";
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
import { StudyRoom } from '../rooms';
import { RoomListItem } from '../components/RoomListItem';
import { useLocation } from 'react-router-dom';
import { Home } from '../pages/home';
import { CreateRoom } from './create-room';

const socket = io.connect("/");


export const JoinRoom = () => {



  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState("");
  const roomId = searchParams.get("roomId")
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const [usersList, setUsersLists] = useState([]);
  const [joinStatus, setJoinStatus] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [entername_status, setEntername_status] = useState(false);
  const [createRoomMode, setCreatRoomMode] = useState(false)
  const [inputRoom, setInputRoom] = useState("")
  console.log("from join -room current room", room);



  // useEffect(()=> {
  //   if(!entername_status) {
  //     setEntername_status(true)
  //   }

  // },[entername_status])





  useEffect(() => {
    axios.get("/study_rooms").then((response) => {
      setRoomList(response.data);

    });

  }, [])

  // useEffect(() => {



  //   if (roomId) {
  //     // setUsername("Ricardo")
  //     setRoom(roomId)
  //     joinRoom()
  //   }

  // },[])

  useEffect(() => {
    joinRoom()


  }, [room])



  const joinRoom = async () => {
    console.log("joinRoom is working");
    console.log("roomid ", room)
    if (username !== "" && room !== "") {

      let data = { user: username, room_id: room };
      socket.emit("join_room", data);
      // setShowChat(true);
      await axios.get(`/study_rooms/${data.room_id}/enter/${data.user}`).then((res) => {
        setUsersLists([...res.data])


      }).then(() => {
        setJoinStatus(true)
        setCreatRoomMode(false)
      })

    }

  };



  socket.on("update_usersList", (data) => {

    const room_id = data.room_id;
    update_usersList(room_id)

  });

  const removeUser = () => {
    let data = { user: username, room_id: room };

    axios.get(`/study_rooms/${room}/leave/${username}`).then(res => {
      setUsersLists([...res.data]);
      socket.emit("leave-user", data);
      setJoinStatus(false)

    });

  };


  const update_usersList = function (room_id) {
    console.log("axios update working")
    axios.get(`study_rooms/entered_users/${room_id}`)
      .then(res => setUsersLists(res.data));
  }





  return (

    <main >

      {/* our home page */}
      {!entername_status && <Home setUsername={setUsername} setEntername_status={setEntername_status} />}
      {createRoomMode &&
        <CreateRoom setRoom={setRoom}
          joinRoom={joinRoom}
          username={username}
          setCreatRoomMode={setCreatRoomMode}
        />

      }

      {/* our join-room page */}
      {!joinStatus && entername_status && !createRoomMode &&
        <main>

          <div className="joinChatContainer">

            <div className="joinChatWrapper">
              <form className="form">

                <div className="input-group">
                  <h1>welcome {username}</h1>

                  <h3>Join a Study Room</h3>



                  <input
                    type="text"
                    placeholder="Room ID"
                    onChange={(event) => {
                      setInputRoom(event.target.value);
                    }}
                  />
                </div>
                <div><Button onClick={()=>setRoom(inputRoom)} colorScheme='cyan' size='md'>Join Room</Button>
                  <br />
                  <br />
                  <p>or do you want to create new room?&nbsp; </p>



                  <Button colorScheme='cyan' size='md' onClick={() => setCreatRoomMode(true)}>Create Room</Button></div>

              </form>
            </div>

          </div>
          <ul>
            {roomList.map(studyroom => <RoomListItem key={studyroom.id} {...studyroom}
              setRoom={setRoom}
              joinRoom={joinRoom}
              username={username}

            />)}

          </ul>


        </main>
      }

      {joinStatus && entername_status && !createRoomMode && <StudyRoom socket={socket} username={username} usersList={usersList} room={room} removeUser={removeUser} />}




    </main>
  );
};