import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../pages/Nlogin.css";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else toast.error(data.message);
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2 className="login-title">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="login-subtext">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="login-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="animated-input"
            />
          </div>
        )}

        <div className="login-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="animated-input"
          />
        </div>

        <div className="login-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="animated-input"
          />
        </div>

        <button type="submit" className="login-btn animated-btn">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        <p className="login-switch">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span onClick={() => setState("Sign Up")}>Click here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
