import React ,{useState} from 'react';
import "./Navbar.css";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';





const Navbar = () => {
    return (
        <>
          <nav className="main-nav">
              <div className="logo">
                  <h2>
                      <span>H</span>igh
                      <span>F</span>ive
                  </h2>
              </div>
              <div className="menu-link">
                  <ul>
                      <li>
                          <a href="#" >Organize a Hackathon</a>
                      </li>
                      <li>
                          <a href="#" >Upcoming Events</a>
                      </li>
                      <li>
                          <a href="#" >Contact Us</a>
                      </li>
                      <li>
                          <a href="#" >Login</a>
                      </li>
                      <li>
                          <a href="#" >Sign up</a>
                      </li>
                  </ul>
              </div>
        </nav>
        <section className="hero-section">
          <h1>Meet your team members and enjoy premium video meetings</h1>
          <button type="button" class="btn btn-primary btn-lg abc">Create a meeting<VideocamIcon style={{fontSize:'40px', marginBottom:'5px'}}/></button><br/>
          <button type="button" class="btn btn-primary def"><KeyboardIcon style={{fontSize:'40px', marginBottom:'5px'}}/>Enter a code or link</button>
          <h3>Click <b>Create a meeting</b> to get a link you can send to people you want to meet with.</h3>

        </section>

        </>
    );
};

export default Navbar;
