import React, { useEffect, useState } from "react";
import logo from "../../public/letter-head_CLR.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const DeskNavbar = () => {

  const [logged, setLogged] = useState(localStorage.getItem('user'));
  return (
    <>
      <div className="hidden lg:flex justify-between md:px-8 sm:px-4 text-center items-center">
        <div>
          <img className="h-[200px] -mt-10 w-[200px] " src={logo} alt="" />
        </div>
        <div className="flex sm:gap-x-4 -mt-12 md:gap-x-12 items-center">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/Courses">
            <span>Programs</span>
          </Link>
          <Link to="/about-us">
            <span>About Us</span>
          </Link>
          <Link to="/">
            <span>Channels</span>
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
