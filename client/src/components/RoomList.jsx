import {
  Box
} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {RoomListItem} from './RoomListItem';

//will need to import this into RoomList/join-room wherever we use it

export const RoomList = (props) => {
  const [roomList, setRoomList] = useState([]);
  
  useEffect(() => {
    axios.get("/study_rooms").then((response) => {
      setRoomList(response.data);
      
    });

},[])
return (

  <ul>
  {roomList.map(studyroom=> <RoomListItem key= {studyroom.id} {...studyroom}/>)}

</ul>

  );

};