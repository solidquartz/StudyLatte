import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Home,
  Signup,
  Test
} from './pages'


export default function App() {

  return (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    </Router>
  )
};
