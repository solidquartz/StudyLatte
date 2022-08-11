import {
  Box
} from '@chakra-ui/react';
import React from 'react';

//will need to import this into RoomList/join-room wherever we use it

export const RoomListItem = () => {


  return (



    <Box maxW='md' borderWidth='2px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        
        <Box display='flex' alignItems='baseline'>Aky's Coding Mines 💎
        </Box>

        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          Ruby
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={3}
        >
          Here's a description about my study room which you should totally join, it won't hurt a bit.
        </Box>

        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          6 People Studying
        </Box>

      </Box>
    </Box>


  );

};