import React, { useState } from "react"
import "./SignupPage.css"
import logo from "../assets/MainLogo1.png" // <-- add your logo path here

import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
  let [name ,setName] = useState('')
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [rePassword,setRePassword] = useState('')


 let payload = {
  userName: name,
  email: email,
  password: password,
  reEnterPassword: rePassword
};

  let navigate = useNavigate()




  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
  if (password !== rePassword) {
    alert("Passwords do not match!");
    return;
  }

    axios.post("http://localhost:9000/users/signup1",payload)
    .then(() => {
      console.log("data created sucessfully");
      alert("Signup Successful!");
      navigate("/")
    })
     .catch((error) => {
      console.error("Error creating user:", error);
      alert("Signup Failed. Please try again.");
    });
    
 
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* ---- Logo at the top ---- */}
        <img 
          src={logo} 
          alt="Flora Harbor Logo" 
          className="signup-logo"
        />

        {/* ---- Removed <h2>Signup</h2> ---- */}

        <form onSubmit={handleSubmit} >
          <input
            type="text"
            name="name"
            className="input-box"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            className="input-box"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            className="input-box"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="re-enter password"
            className="input-box"
            placeholder="Re-Enter Your Password"
            onChange={(e) => setRePassword(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
