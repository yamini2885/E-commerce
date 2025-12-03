import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/MainLogo1.png"; // same logo
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9000/users/login1", form)
      .then((res) => {
        if (res.data === true) {
          alert("Login Successful!");
          navigate("/");  // redirect to home
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Try again.");
      });
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

          <br/>
          <p className="register-text">
           Don’t have an account? <Link to="/signup"><a href="/register">Create one</a></Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default LoginPage;
