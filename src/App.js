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
import Login from './components/Login';
import Organize from './components/Organize';
import Homepage from './components/Homepage';
// import 'bootstrap/dist/js/bootstrap.js';


const App = () => {
  return( 
   <>
    <Router>
   
     <Switch>
  
          <Route exact path="/">
           <Homepage/>
           </Route> 
          <Route exact path="/Organize-a-hackathon">
            <Organize/>
          </Route>
          <Route path="/Upcoming-Events">
            <Upcoming/>
          </Route>
          <Route path="/Contact-Us">
            <Contact/>
          </Route>
        </Switch>
        <Navbar/>

    </Router>
    
    
    
   </>
  );
};

export default App;