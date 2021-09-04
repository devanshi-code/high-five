import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Upcoming from './components/UpcomingEvents';
import Header from './components/Header.component';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Organize from './components/Organize';
import Homepage from './components/Homepage';
// import 'bootstrap/dist/js/bootstrap.js';


const App = () => {
  return( 
    <>
    
    <Navbar/> 
    <Header/>
    <Organize/>
     <Upcoming/>
     <Contact/>

    
    
    
    
   </>
  );
};

export default App;