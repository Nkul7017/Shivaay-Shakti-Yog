import React, { useEffect, useState } from "react";
import logo from "../../public/shi_logo.png";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
const DeskNavbar = () => {
const {pathname}=useLocation();
console.log(pathname)
  const [logged, setLogged] = useState(localStorage.getItem('user'));
  return (
    <>
      <div className={`hidden ${pathname.includes("/ParticularProgram")?"bg-transparent":"bg-[#faf7e6]"}  ${pathname=="/UserDashboard"?"normal":"fixed"} w-[100vw] h-[70px]  z-50 lg:flex  ${pathname=="/"?"bg-transparent":"bg-[#faf7e6]"}  justify-between md:px-8 sm:px-4 text-center items-center`}>
        <div>
          <img className="  w-[200px] " src={logo} alt="" />
        </div>
        <div className="flex sm:gap-x-4  md:gap-x-12 items-center">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/Courses">
            <span>Programs</span>
          </Link>
          <Link to="/about-us">
            <span>About Us</span>
          </Link>          
            
            {!logged?<div className="flex gap-4">
              <Link to='/login'  className=" button3 ">
            <span className="">
                Login
            </span>
              </Link>
              <Link to="/Signup" className=" button2 ">
            <span className="">
                Sign Up
            </span>
              </Link>
            </div>
            :
             <div className="  items-center hover:text-yellow-400 cursor-pointer ">
                <div className="pr-2">
                  <Dropdown logged={logged} setLogged={setLogged}  ></Dropdown>
                </div>
              </div> }
            
          
        </div>
      </div>
    </>
  );
};

export default DeskNavbar;
