import React, { useState } from "react";
import logovideo from "../../public/loutput.gif";
import axios from "axios";
import { isPassword } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // To control the visibility of password

  const handlePasswordChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  async function handlesubmit(e) {
    e.preventDefault();
    if (isPassword(data.password.trim())) {
      setMessage("Loading...");
      try {
        const res = await axios.post(
          "https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/login",
          data
        );
        if (res.status === 200) {
          console.log(res.data.user);
          setMessage("Login Successful");
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("jwt", JSON.stringify(res.data.token));
          navigate("/", { replace: true });
        }
      } catch (e) {
        setMessage(e.response.data.message);
      }
    } else {
      setMessage("*Invlaid Credentials");
    }
  }
  return (
    <div className=" w-screen h-screen bg-[#FFF1C1] grid place-content-center ">
      <div className=" absolute top-5 right-5  ">
        <Link to="/">
          <HiXMark className="  text-3xl lg:text-4xl " />
        </Link>
      </div>
      <div className=" flex flex-col lg:flex-row w-[80vw]  justify-center items-center  ">
        <div className=" md:w-1/2 ">
          <img src={logovideo} alt="" />
        </div>
        <div className=" w-[80vw] sm:w-[80vw] md:w-[70vw] h-[500px]  text-black mx-auto  lg:w-1/2 rounded-2xl sm:p-8 md:p-12 lg:p-16 ">
          <h1 className="text-5xl heading ">Login</h1>
          <form className=" flex flex-col mt-10 gap-5 " onSubmit={handlesubmit}>
            <div className=" flex flex-col gap-2 ">
              <label className=" text-2xl bluish  " htmlFor="">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className=" font-semibold  px-3 h-10  rounded-md "
              />
            </div>
            <div className="flex flex-col bluish gap-2">
              <label className="text-2xl" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between password and text
                  name="password"
                  value={data.password}
                  onChange={handlePasswordChange}
                  className="rounded-md px-3 h-10 w-full outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm bluish"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <p className=" text-[16px] text-red-400 ">{message}</p>
            <div className=" flex  items-center gap-5  ">
              <button
                type="submit"
                className=" text-2xl   button3  "
                style={{ padding: "0px 14px" }}
              >
                <span>Login</span>
              </button>
              <Link
                to="/Signup"
                className=" button3 text-2xl px-3 py-1  "
                style={{ padding: "0px 14px" }}
              >
                <span>Signup</span>
              </Link>
              
            </div>
            <div>
              <Link to="/forgot-password" className="  ">
                <span>Forget Password?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
