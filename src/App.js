import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import MyModal from './MyModal';
import Login from './Login';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
    

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
