import React from 'react';
import './style/organize.css';


const Organize = () => {
    return (
        <div className="organize">
        <h2>To organize your hackathon,fill all your details</h2>
        <form >
        <p>Enter your hackathon name</p>
        <input
          type="text"/>
        <p>Starting Date of Hackathon</p>  
        <input type="text"/>
        <p>Ending Date Of Your Hackathon</p>
        <input type="text" />
        <p>No of members in team</p>
        <input type="text" />
        <p>In which field you are organizing you hackathon</p>
        <input type="text" />
        <p>Submit your participation link</p>
        <input type="text" />
        <br/>
       <button type="submit">SUBMIT</button>

         </form>   
        </div>
    )
}

export default Organize;

