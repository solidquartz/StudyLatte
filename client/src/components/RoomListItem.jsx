import {
  Box,
  Button
} from '@chakra-ui/react';
import "../styles/app.scss";

export const RoomListItem = (props) => {

  const handleClick = () => {
    props.setRoom(props.id);
    props.joinRoom();
  };


  return (

    <div className='room-list-item'>
      <Box
        maxW='md'
        borderWidth='5px'
        borderRadius='lg'
        overflow='hidden'
        bg="white"
      >

        <Box p='6'>
          <Box
            display='flex'
            alignItems='baseline'
            fontWeight="bold"
          >
            {props.title}
          </Box>

          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            Topic: {props.topic}
          </Box>

          <Box
            mt='1'
            fontSize="md"
            as='h4'
            lineHeight='tight'
            noOfLines={3}
          >
            {props.description}
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            fontSize="xs"
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            Room ID:{props.id}
          </Box>

          <Box
            as='span'
            ml='2'
            color='gray.600'
            fontSize='sm'>
            {props.entered_users.length} users studying

            {/* <a href={`/join-room?roomId=${props.id}`}> */}
            <Button
              as="button"
              colorScheme='cyan'
              variant="outline"
              aria-label="join-room"
              my={5}
              w="100%"
              onClick={handleClick}
            >
              Join Room

            </Button>

            {/* </a> */}

          </Box>

        </Box>
      </Box>

    </div>



  );

};