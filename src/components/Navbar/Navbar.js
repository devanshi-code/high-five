import React from 'react';
import "./Navbar.css";
import Header from '../Header.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import highfive from '../assets/images/high_five_logo.png';




const Navbar = () => {
    return (
        
        <>
        <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{height:"90px",fontSize:"30px",color:"#FF2626" }}>
       <a> <img src={highfive} alt="" height='70px'width='90px' padding/> High-Five</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   </button>

  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Organize a Hackathon <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Upcoming Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a  className="nav-link" href="#">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
</div>

        <div style={{display:"flex",flexDirection:"row",backgroundColor:" #414141"}}/>
       
        
        
        
        </>
        
    );
};

export default Navbar;
