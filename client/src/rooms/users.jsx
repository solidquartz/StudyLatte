import {
  Heading,
  Avatar,
  Stack,
  Text
} from "@chakra-ui/react";

export const Users = (props) => {
  // const users = usersList.map(user => {
  //   return (<Users username = {user}/>)
  // })



  return (
    <>
       
      <div className="user-bar">
        {/* <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
        
        <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' /> */}
        <Avatar src='https://bit.ly/broken-link' />
      </div>
      <h3>{props.username}</h3>
    </>
  );

};