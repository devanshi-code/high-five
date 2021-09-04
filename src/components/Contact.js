import React from 'react';
import './style/Contact.css';

const Contact=()=>{
    return(
        <div className="contact d-flex">
            <div className="contact-form">

            <h1>Get in Touch</h1>
            <form className="d-flex flex-column">
                <input name="Name" placeholder="Your name" type="text"/>
                <input name="email" placeholder="Email Address" type="email"/>
                <input name="Message" placeholder="Message" type="text"/>
                <button>Submit</button>
            </form>
            </div>
            <div className="right-section">
                <h1>Contact Us</h1>
                <p>
                    For any inquiries, entrepreneurs, developers, designers and visionaries, get in touch with us any time. We would love to hear your ideas and/or proposals, that's what we live for!
                </p>
            </div>
        </div>
    );
}
export default Contact;