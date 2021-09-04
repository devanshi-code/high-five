import React ,{useState} from 'react';
import "./Navbar.css";

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
        <section className="hero-section" >
            
        </section>

        </>
    );
};

export default Navbar;
