// import { Link as RouterLink } from 'react-router-dom';
import '../styles/app.scss';
import { useEffect, useState } from 'react';
import '../styles/app.scss';
import ScrollToBottom from 'react-scroll-to-bottom';
import Countdown from './timer';

export const Chat = ({ socket, username, room }) => {

  //state of input
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  //wait until message update
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() +
          ":" + new Date(Date.now()).getMinutes(),
      };
      //handing state
      await socket.emit("send_message", messageData);
      setMessageList((chatHistory) => [...chatHistory, messageData]);
      setCurrentMessage("");
    }
  };

  //receive data (message) from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      //adds messages to a stack to create a message history
      setMessageList((chatHistory) => [...chatHistory, data]);
    });

  }, [socket]);


  return (

    <div className="chat-window">
      <div className='chat-header'>
        <p> Study chat</p>
      </div>
      <div>
        <Countdown 
        room = {room}
        username = {username}
        socket = {socket} 
        />
      </div>

      <div className='chat-body'>
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}>
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>

      <div className='chat-footer'>
        <input
          type="text"
          placeholder='Type a message'
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>

      </div>
    </div>




  );
};;