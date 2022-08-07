import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import {
  Home,
  Signup,
  Test,
  Login,
  EditAccount,
  JoinRoom,
  CreateRoom
} from './pages';


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-account" element={<EditAccount />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
};
