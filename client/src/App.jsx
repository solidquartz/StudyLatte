
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [users, setUsers] = useState([]);

  const handleClick = () => {
    axios.get('/users')
      .then(results => { setUsers(results.data); });
  };

  const usersList = users.map(user =>
    <li>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
    </li>
  );

  return (
    <div className="App">
      <button onClick={handleClick}>
        Get Users!
      </button>
      {users && usersList}
    </div>
  );
}

export default App;
