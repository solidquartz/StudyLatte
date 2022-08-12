import {
  Box
} from '@chakra-ui/react';
import React from 'react';

//will need to import this into RoomList/join-room wherever we use it

export const RoomList = (props) => {
return (
  <ul>
  {props.rooms.map(room => <Box maxW='md' borderWidth='2px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        
        <Box display='flex' alignItems='baseline'> {room.title}
        </Box>

        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {room.name}
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={3}
        >
          {room.description}
        </Box>

        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {room.users}
        </Box>

      </Box>
    </Box>)}

</ul>

  );

};