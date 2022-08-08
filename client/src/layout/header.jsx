import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Flex,
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <nav>

      <Flex
        pos="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        <Flex>
          
          <RouterLink to="/home">
            <Button
              as="button"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </RouterLink>

          <RouterLink to="/join-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="join-room"
              my={5}
              w="100%"
            >
              Join Room
            </Button>
          </RouterLink>

          <RouterLink to="/create-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="create-room"
              my={5}
              w="100%"
            >
              Create Room
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button
              as="button"
              variant="ghost"
              aria-label="login"
              my={5}
              w="100%"
            >
              Log In
            </Button>
          </RouterLink>

          <RouterLink to="/signup">
            <Button
              as="button"
              variant="ghost"
              aria-label="signup"
              my={5}
              w="100%"
            >
              Sign Up
            </Button>
          </RouterLink>

          <RouterLink to="/home">
            <Button
              as="button"
              variant="ghost"
              aria-label="logout"
              my={5}
              w="100%"
            >
              Log Out
            </Button>
          </RouterLink>


        </Flex>
      </Flex>

      {/* <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/signup">Sign Up</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/login">Log In</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/edit-account">Edit Account</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/join-room">Join Room</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/create-room">Create Room</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/test">DB Test</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}

    </nav>
  );
};