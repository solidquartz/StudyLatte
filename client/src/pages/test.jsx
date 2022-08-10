import axios from 'axios';
import { useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import '../styles/app.scss';

export const Test = () => {


  const [users, setUsers] = useState([]);

  const handleClick = () => {
    axios.get('/users')
      .then(results => { setUsers(results.data); });
  };

  const usersList = users.map(user =>
    <li key={user.id}>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.display_name}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
    </li>
  );

  return (
    <div className="Home">
      <Heading>Database Test</Heading>
      <Button onClick={handleClick}>
        Get Users!
      </Button>
      {users && usersList}
    </div>
  );
};