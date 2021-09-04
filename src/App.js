import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Upcoming from './components/UpcomingEvents';
import Header from './components/Header.component';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import Organize from './components/Organize';
// import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return( 
    <>
    <Navbar/> 
    <Organize/>
    <Upcoming/>
    <Contact />

    </>
  );
};

export default App;