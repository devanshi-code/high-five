import React from "react"
import Upcoming from './UpcomingEvents';
import Contact from './Contact';
import Organize from "./organize";
import Header from "./Header.component";
 function Homepage() {
    return ( 
         <> 
         <Header/>
     <Upcoming/>
     <Contact/>
    </>
    )
  }
  
  export default Homepage;