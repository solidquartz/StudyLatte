import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link as={RouterLink} to="/">Home</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/login">Log In</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/edit-account">Edit Account</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/join-room">Join Room</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/create-room">Create Room</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/test">DB Test</Link>
        </li>

      </ul>
    </nav>
  );
};