import React, { useState } from 'react';
import call from './assets/images/call.jpg';
import mic from './assets/images/on mic.png';
import cam from './assets/images/on cam.png';
import share from './assets/images/share screen.png';
import more from './assets/images/more options.png';
import end from './assets/images/end call.png';
import Webcam from "react-webcam";

import './style/meet.css';


const Meet=()=>{
    const [vid,setVid]=useState(false);
    const videoConstraints = {
        facingMode: "user"
      };
    return(
        <div className="Meet d-flex">
            <div className="chat">
                <div className="messageBox">
                    <h6>Hello</h6>
                    <h6>Good Morning</h6>
                </div>
                <form>
                <input type="text" placeholder="Type something..."/>
                <button>Send</button>
                </form>
            </div>
            <div className="right-section">
                
                {vid? <Webcam videoConstraints={videoConstraints} /> : <img src={call} alt="user"/>}
                <div className="d-flex">
                    <img src={mic} />
                    <img src={cam} onClick={e=>{e.preventDefault(); setVid(!vid)}}/>
                    <img src={share} />
                    <img src={more} />
                    <img src={end} />
                    <select placeholder="Tables ">
  <option value="Table 1">Table 1</option>
  <option value="Table 2">Table 2</option>
  <option value="Table 3">Table 3</option>
</select>
                </div>

            </div>
        </div>
    );
}
export default Meet;