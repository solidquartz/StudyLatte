import {
  Heading,
  Button
} from "@chakra-ui/react";
import useCountdown from './useCountdown';
import { useState, useEffect } from 'react';


function Countdown(props) {
  const socket = props.socket
  const [endTime, setEndTime] = useState(0);
  const [timeLeft, setTimeLeft] = useCountdown(endTime);
  
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  const initEndTime = () => setEndTime(new Date().getTime() + 60000 * 25);// 25 minutes 

  const startTimer = () => {
    initEndTime();
    setTimeLeft(endTime);
    sendEndTime();

  }
 //wait until message update
 const sendEndTime = async () => {

  const messageData = {
      room: props.room,
      author: props.username,
      message: `$$$_###:${endTime}`,
      time: new Date(Date.now()).getHours() +
        ":" + new Date(Date.now()).getMinutes(),
    };
    //handing state
    await socket.emit("send_message", messageData);
     
};

//receive data (message) from the server
useEffect(() => {
  socket.on("receive_message", (data) => {
    if (data.message.startsWith(`$$$_###:`)) {
    const time = data.message.split(":")[1]
    setEndTime(Number(time))
    }

  });

}, [socket]);


  return (
    <>
    <Heading size="lg">Study!</Heading>
    <div className="countdown">
      <p>{`${minutes}:${seconds}`}</p>
      <button onClick={() => startTimer()}>Start Timer</button>
    </div>
    </>
  );
}

export default Countdown;