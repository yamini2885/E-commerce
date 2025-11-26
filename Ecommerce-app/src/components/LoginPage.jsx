import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/MainLogo1.png"; // same logo

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Login Successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* ---- Logo at top ---- */}
        <img 
          src={logo} 
          alt="Flora Harbor Logo"
          className="login-logo"
        />

        <form onSubmit={handleSubmit}>
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

          <button className="btn" type="submit">
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
