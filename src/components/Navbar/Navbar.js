import React ,{useState} from 'react';
import "./Navbar.css";
import Header from '../Header.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import highfive from '../assets/images/high_five_logo.png';
import {link} from "react-router-dom";



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
        <link to className="nav-link" href="#">Organize a Hackathon <span class="sr-only">(current)</span></link>
      </li>
      <li className="nav-item">
        <link to className="nav-link" href="#">Upcoming Events</link>
      </li>
      <li className="nav-item">
        <link to className="nav-link" href="#">Contact Us</link>
      </li>
      <li className="nav-item">
        <link to className="nav-link" href="#">Login</link>
      </li>
      <li className="nav-item">
        <link to className="nav-link" href="#">Sign Up</link>
      </li>
    </ul>
  </div>
</nav>
</div>

        <div style={{display:"flex",flexDirection:"row",backgroundColor:" #414141"}}/>
        <Header/> 
        <section className="hero-section">
          <h1>Meet your team members and enjoy premium video meetings</h1>
          <button type="button" class=" abc">Create a meeting <VideocamIcon style={{fontSize:'40px',marginBottom:'5px',color:'black'}} /></button><br/>
          <button type="button" class=" def">Enter a code or link</button>
          <h3>Click <b>Create a meeting</b> to get a link you can send to people you want to meet with</h3>

        </section>
        
        
        </>
        
    );
};

export default Navbar;
