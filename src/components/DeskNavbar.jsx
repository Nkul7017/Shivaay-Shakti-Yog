import React, { useEffect, useState } from "react";
import logo from "../../public/letter-head_CLR.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const DeskNavbar = () => {
  const [Logged, setLogged] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    const local_ID = localStorage.getItem("ID");

    setId(local_ID);
  }, []);

  useEffect(() => {
    if (id !== undefined && id !== "" && id !== null) {
      setLogged(true);
    } else {
      setLogged(false);
      console.log("else runnn");
    }
  });
  return (
    <>
      <div className="hidden sm:flex justify-between md:px-20 sm:px-4 text-center items-center">
        <div>
          {" "}
          <img className="h-[180px] -mt-10 w-[170px] " src={logo} alt="" />
        </div>
        <div className="flex sm:gap-x-4 -mt-12 md:gap-x-14 items-center">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about-us">
            <span>About Us</span>
          </Link>
          <Link to="/contact-us">
            <span>Contact Us</span>
          </Link>
          {/* {
Logged == true &&


                <span className="text-black hover:text-yellow-400">
                  <Link to="/category/our-programs" className=" font-medium">
                    Our Courses
                  </Link>
                </span>
} */}
          {Logged == false ? (
            <span className="text-black   hover:text-yellow-400">
              <Link to="/Login" className=" font-medium ">
                Login/Sign Up
              </Link>
            </span>
          ) : (
            <>
              <div className="  items-center hover:text-yellow-400 cursor-pointer ">
                <div className="pr-2">
                  <Dropdown></Dropdown>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DeskNavbar;
