import {
  Heading,
  Button
} from "@chakra-ui/react";
import useCountdown from './useCountdown';
import { useState, useEffect } from 'react';


function Countdown(props) {
  const socket = props.socket
//   const [endTime, setEndTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useCountdown(endTime);
  
//   const minutes = Math.floor(timeLeft / 60000) % 60;
//   const seconds = Math.floor(timeLeft / 1000) % 60;
//   const initEndTime = () => setEndTime(new Date().getTime() + 60000 * 25);// 25 minutes 

//   const startTimer = () => {
//     initEndTime();
//     setTimeLeft(endTime);
//     sendEndTime();

//   }
//  //wait until message update
//  const sendEndTime = async () => {

//   const messageData = {
//       room: props.room,
//       author: props.username,
//       message: `$$$_###:${endTime}`,
//       time: new Date(Date.now()).getHours() +
//         ":" + new Date(Date.now()).getMinutes(),
//     };
//     //handing state
//     await socket.emit("send_message", messageData);
     
// };

//receive data (message) from the server
// useEffect(() => {
//   socket.on("receive_message", (data) => {
//     if (data.message.startsWith(`$$$_###:`)) {
//     const time = data.message.split(":")[1]
//     setEndTime(Number(time))
//     }

//   });

// }, [socket]);




  return (
    <>
    <Heading size="lg">Study!</Heading>
    <div className="countdown">
      {/* <Heading>{`${minutes}:${seconds}`}</Heading> */}
      <Heading>{props.time}</Heading>
      <Button onClick={ props.onClick}>Start Timer</Button>
    </div>
    </>
  );
}

export default Countdown;



// class Timer extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           time: 25
//       };
//   }

//   componentDidMount() {
//       const socket = io("http://localhost:3000");
//       socket.on("start-timer", () => {
//           var timer = setInterval(() => {
//               this.setState({ time: this.state.time - 1 });
//               if (this.state.time <= 0) {
//                   clearInterval(timer);
//                   return;
//               }
//               socket.emit("timer", this.state.time);
//           }, 1000);
//       });
//   }

//   render() {
//       return (
//           <div>
//               <h1>{this.state.time}</h1>
//           </div>
//       );
//   }
// }