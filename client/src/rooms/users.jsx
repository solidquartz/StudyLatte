import {
  Heading,
  Avatar,
  Stack,
  Text
} from "@chakra-ui/react";

export const Users = (props) => {

  return (
    <>
      <Stack direction='column'>
        <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
        <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
        <Avatar src='https://bit.ly/broken-link' />
      </Stack>
      <Text>{props.username}</Text>
    </>
  );

};