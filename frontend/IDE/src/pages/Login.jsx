import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/sideImg.jpg";
import { api_base_url } from "../helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json()).then(data => {
      if(data.success === true){
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", data.userId);
        setTimeout(() => {
          window.location.href = "/"
        }, 200);
      } else {
        setError(data.message);
      }
    })
  }
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-between gap-10">
        <div className=" w-[40%] p-14">
          <img className="w-[300px]" src={logo} alt="Logo" />
          <form onSubmit={submitForm} className="w-full mt-[60px]" action="">

            <div className="inputBox">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="text-[gray]">
              Don't have an account{" "}
              <Link to="/signup" className="text-[#00AEEF]">
                signup
              </Link>
            </p>
            <p className='text-red-500 text-[14px] my-2'>{error}</p>
            <button className="btnBlue w-full mt-[20px]">Login</button>
          </form>
        </div>
        <div className=" w-[60%]">
          <img className="h-[100vh] w-[100%] object-cover" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
