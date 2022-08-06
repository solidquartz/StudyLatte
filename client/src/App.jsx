import './styles/app.scss';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
