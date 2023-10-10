
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Createstudent from './components/Createstudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createstudent" element={<Createstudent />} />
        <Route path="/" element={<Navigate to="home"/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
