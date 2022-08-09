// import { Link as RouterLink } from 'react-router-dom';
import '../styles/app.scss';
import { useEffect, useState } from 'react';
import '../styles/app.scss';


export const Chat = ({ socket, username, room }) => {

  //state of input
  const [currentMessage, setCurrentMessage] = useState("")
 
  //wait until message update
  const sendMessage = async() => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() +
         ":" +new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  }

  //receive data (message) from the server
  useEffect(() => {
    socket.on("receive_message", (data)=> {
      console.log(data)
    })

  },[socket])


  return (

    <div className="chat-window">
      <div className='chat-header'>
        <p> Live chat</p>
      </div>

      <div className='chat-body'></div>

      <div className='chat-footer'>
        <input type="text" placeholder='Type your message'
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>

      </div>
    </div>




  );
};