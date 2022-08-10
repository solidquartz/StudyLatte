import {
  Heading,
  Avatar,
  Stack,
  Text
} from "@chakra-ui/react";
import { useState } from "react";

export const Users = (props) => {
  

  return (
    <>
      <Heading size="sm">Study Buddies</Heading>
      <Stack direction='row'>
        <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
        <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
        <Avatar src='https://bit.ly/broken-link' />
      </Stack>
      <Text>{props.username}</Text>
    </>
  );

};