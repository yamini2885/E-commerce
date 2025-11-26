import React, { useState } from "react";
import "./SignupPage.css";
import logo from "../assets/MainLogo1.png"; // <-- add your logo path here

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    alert("Signup Successful!");
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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="input-box"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="input-box"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="input-box"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="re-enter password"
            name="re-enter password"
            className="input-box"
            placeholder="Re-Enter Your Password"
            value={form.password}
            onChange={handleChange}
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
