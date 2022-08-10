import {
  Heading,
  Avatar,
  Stack
} from "@chakra-ui/react";

export const Users = () => {

  return (
  <>
    <Heading size="sm">Study Buddies</Heading>
    <Stack direction='row'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
  <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
  <Avatar src='https://bit.ly/broken-link' />
</Stack>
    </>
  );

};