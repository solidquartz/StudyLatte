import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {RoomListItem} from '../components/RoomListItem';


export const RoomList = (props) => {
  const [roomList, setRoomList] = useState([]);
  
  useEffect(() => {
    axios.get("/study_rooms").then((response) => {
      setRoomList(response.data);
      
    });

  }, [])
  
return (

  <ul>
  {roomList.map(studyroom=> <RoomListItem key= {studyroom.id} {...studyroom}/>)}

</ul>


  );

};