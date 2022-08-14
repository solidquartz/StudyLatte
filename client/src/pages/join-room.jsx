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

const socket = io.connect("/");


export const JoinRoom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState("Ricardo");
  const roomId = searchParams.get("roomId")
  const [room, setRoom] = useState(roomId);
  const [error, setError] = useState("");
  const [usersList, setUsersLists] = useState([]);
  const [joinStatus, setJoinStatus] = useState(false);
  
  const [roomList, setRoomList] = useState([]);
  
  useEffect(() => {
    axios.get("/study_rooms").then((response) => {
      setRoomList(response.data);
      
    });

},[])

  useEffect(() => {
  
  console.log(roomId)
  
    if (roomId) {
      setUsername("Ricardo")
      setRoom(roomId)
      joinRoom()
    }

  },[])


  const joinRoom = () => {
    console.log("joinRoom is working");
    if (username !== "" && room !== "") {
      
      let data = { user: username, room_id: room };
      socket.emit("join_room", data);
      // setShowChat(true);
      axios.get(`/study_rooms/${data.room_id}/enter/${data.user}`).then((res) => {
       console.log("resultado", res)

        setUsersLists([...res.data])
        setJoinStatus(true)

      })
      // .then(()=>{axios.get('/sockets/add').then(())})
     
      

    }

  };

  socket.on("update_usersList", (data) => {
   
    const room_id = data.room_id;
    update_usersList(room_id)
    
  });

  const removeUser = ()=> {
    let data = { user: username, room_id: room };
    
    axios.get(`/study_rooms/${room}/leave/${username}`).then(res => {
      setUsersLists([...res.data]);
      socket.emit("leave-user",data);
      setJoinStatus(false)
          
    });
    
  };


  const update_usersList = function(room_id) {
    console.log("axios update working")
    axios.get(`study_rooms/entered_users/${room_id}`)
      .then(res => setUsersLists(res.data));
  }



  // useEffect(() => {
  //   window.addEventListener('beforeunload', alertUser);
  //   window.addEventListener('unload', handleTabClosing);
  //   return () => {
  //     window.removeEventListener('beforeunload', alertUser);
  //     window.removeEventListener('unload', handleTabClosing);
  //   };
  // });

  // const handleTabClosing = () => {
  //   removeUser();
  // };

  // const alertUser = (event) => {
  //   event.preventDefault();
  //   event.returnValue = 'Are you sure?';
  // };

  return (

    <main >
      {!joinStatus &&
        <main>

          <div className="joinChatContainer">
            <div className="joinChatWrapper">
              <form className="form">
                
                <div className="input-group">
                  
                  <h3>Join a Study Room</h3>
                  <input
                    type="text"
                    
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />

                  <input
                    type="text"
                    placeholder="Room ID"
                    // onChange={(event) => {
                    //   setRoom(event.target.value);
                    // }}
                  />
                </div>

                  <Button onClick={joinRoom} colorScheme='blackAlpha' size='md'>Join Room</Button>
                
              </form>
            </div>

          </div>
          <ul>
           {roomList.map(studyroom=> <RoomListItem key= {studyroom.id} {...studyroom}/>)}

           </ul>


        </main>
      }

      {joinStatus && <StudyRoom socket={socket} username={username} usersList={usersList} room={room} removeUser={removeUser} />}




    </main>
  );
};