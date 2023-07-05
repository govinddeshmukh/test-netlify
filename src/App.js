import React from 'react';
import NAVBAR from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Summary from './Components/Summary';
import Login from './Components/Login';
import Register from './Components/Register';
export default function App() {
  return (
    <div>
      <NAVBAR />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/summary' element={<Summary />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}
