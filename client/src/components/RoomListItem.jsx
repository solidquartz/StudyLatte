import {
  Box,
  Button
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';




export const RoomListItem = (props) => {
 

    return (
      <Box maxW='md' borderWidth='2px' borderRadius='lg' overflow='hidden'>
        <Box p='6'>

          <Box display='flex' alignItems='baseline'> {props.title}
          </Box>

          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {props.topic}
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={3}
          >
            {props.description}
          </Box>

          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.entered_users.length}

          
            <Button
              as="button"
              variant="ghost"
              aria-label="join-room"
              my={5}
              w="100%"
            >
              Join Room
            </Button>

          </Box>

        </Box>
      </Box>





    )
  
}