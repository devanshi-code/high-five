import { useState, useEffect } from "react";
import Sawo from "sawo";
import './style/login.css';
import {auth , provider}  from './config/fire';
import google from './assets/images/google.png';

const SignUp = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: "8493a0c7-291e-46f5-97e8-ff965ae2b2ca",
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
}

  return (
    <div className="loginPage">
      <section>
        <h2>Welcome to High Five </h2>
        <p>Create a new account or log in to existing account</p>
        {!isUserLoggedIn ? (
          <div className="formContainer" id="sawo-container"></div>
        ) : (
          <div className="loggedin">
            <h2>User Successful Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div>
          </div>
        )}
         <span className="d-flex"><hr/>OR<hr/></span>
        <button onClick={signin} className="d-flex" style={{justifyContent:"center"}}> <img src={google} style={{height:"24px",margin:"3px 9px"}}/>Sign In with Google</button>
        <br/>
        <p>By signing up, I agree to the <span>Privacy Policy</span> and the <span>Terms of Use</span></p>
      </section>
      
    </div>
  );
};

export default SignUp;