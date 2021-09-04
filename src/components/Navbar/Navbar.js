import React ,{useState} from 'react';
import "./Navbar.css";
import Header from '../Header.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import highfive from '../assets/images/high_five_logo.png';
import {Link} from "react-router-dom";



const Navbar = () => {
    return (
        
        <>
        <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{height:"90px",fontSize:"30px",color:"#FF2626" }}>
       <a href="/" className="logo"> <img src={highfive} alt="" height='70px'width='90px' padding/> High-Five</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   </button>

  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/Organize-a-hackathon" className="nav-link">Organize a Hackathon <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/Upcoming-Events" className="nav-link">Upcoming Events</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact-Us" className="nav-link">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/Login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/SignUp" className="nav-link">Sign Up</Link>
      </li>
    </ul>
  </div>
</nav>
</div>

     
        </>
        
    );
};

export default Navbar;
