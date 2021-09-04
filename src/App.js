import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Upcoming from './components/UpcomingEvents';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Organize from './components/organize';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Meet from './components/Meet';
// import 'bootstrap/dist/js/bootstrap.js';


const App = () => {
  return( 
   <>
    <Router>
      <>
    <Navbar/>
     <Switch>
  
          <Route exact path="/">
           <Homepage/>
          </Route> 
          <Route exact path="/Login">
           <Login/>
          </Route> 
          <Route exact path="/SignUp">
           <SignUp/>
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
          <Route path="/meet">
            <Meet/>
          </Route>
        </Switch>
</>
    </Router>
 
   </>
  );
};

export default App;