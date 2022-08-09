import {
  Heading
} from '@chakra-ui/react';
import io from 'socket.io-client';

const socket = io.connect("/");

export const StudyRoom = () => {
  return (
    <main>
      <Heading>Study Room</Heading>

    </main>

  );
};