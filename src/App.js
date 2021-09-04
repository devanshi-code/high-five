import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Upcoming from './components/UpcomingEvents';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
// import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return( 
    <>
    <Navbar/>
    <Upcoming/>
    <Contact />
    <Login />
    </>
  );
};

export default App;