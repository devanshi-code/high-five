import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Upcoming from './UpcomingEvents';
import Header from './Header.component';
import Contact from './Contact';
import Organize from "./Organize";
 function Homepage() {
    return ( 
         <> 
     <Navbar/> 
     <Organize/>
     <Upcoming/>
     <Contact/>
        
        
    </>
    )
  }
  
  export default Homepage;