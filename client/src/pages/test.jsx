import axios from 'axios';
import { useState } from 'react';

export const Test = () => {


  const [users, setUsers] = useState([]);

  const handleClick = () => {
    axios.get('/users')
      .then(results => { setUsers(results.data); });
  };

  const usersList = users.map(user =>
    <li key={user.id}>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
    </li>
  );

  return (

    <div className="Home">
      <h1>Database Test</h1>
      <button onClick={handleClick}>
        Get Users!
      </button>
      {users && usersList}
    </div>
  );
};