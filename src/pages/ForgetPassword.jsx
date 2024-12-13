import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [data, setData] = useState({
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setData({ ...data, message: "* loading" });
    e.preventDefault();
    try {
      // const response=await axios.post('http://localhost:3000/api/auth/forgot-password', {email:data?.email})
      const response = await axios.post(
        "https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/forgot-password",
        { email: data?.email }
      );
      if (response.status === 200) {
        setData({ ...data, message: "" });
        navigate("/Login");
      }
    } catch (e) {
      setData({ ...data, message: e?.response?.data?.message });
      console.log(e);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#FFF1C1] grid place-content-center ">
      <div className=" p-4 rounded-lg w-[300px] sm:w-[500px] h-[300px]">
        <h4 className=" text-2xl sm:text-5xl heading">Forgot Password</h4>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-2 ">
            <label className=" text-2xl bluish ml-1 " htmlFor="">
              Email
            </label>
            <p className="my-2 text-[14px]">
              Reset Password details will be redirected to your registered email
            </p>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className=" font-semibold  border border-gray-300 px-3 outline-none rounded-lg h-10 "
            />
          </div>

          <p className="mt-5 text-red-500">{data?.message}</p>
          <div className="flex justify-between items-center">
            <button type="submit" className="button3  mt-5 text-2xl px-3 ">
              <span>Send</span>
            </button>
            <button type="button" className="button2  mt-5 text-lg px-3 " onClick={() => navigate('/')}>
              <span>Home</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
