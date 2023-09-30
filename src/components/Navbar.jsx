import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

export default function Navbar() {
  const selectUser = (state) => state.user;
  const [navbar, setNavbar] = useState(false);
  const [Logged, setLogged] = useState(false);
  const [id, setId] = useState(false);

  const getUserData = useSelector(selectUser);

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
  console.log("id ", id);
  console.log("logged value", Logged);

  return (
    <div>
      <nav className=" w-full bg-transparent top-0 z-50 ">
        <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex  ">
          <div>
            <div className="flex items-center justify-between">
              <Link to="/" className=" ">
                <img className=" w-32 " src="https://cdn.discordapp.com/attachments/1078905801017659432/1125656998692798494/image_4_1.png" alt="logo" />
                {/* <h1>Ksmsl</h1> */}
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700  rounded-md outline-none focus:border-gray-900 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        className=" text-black hover:text-yellow-400"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        className=" text-black hover:text-yellow-400"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1  justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-12 md:space-y-0 py-10 md:py-0">
                <li className="text-black hover:text-yellow-400">
                  <a href={"/"} className=" font-medium">
                    Home
                  </a>
                </li>
                {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a >Blog</a>
                                </li> */}
                <li className="text-black hover:text-yellow-400">
                  <Link to="/about-us" className=" font-medium">
                    About Us
                  </Link>
                </li>
                <li className="text-black hover:text-yellow-400">
                  <Link to="/contact-us" className=" font-medium">
                    Contact
                  </Link>
                </li>
{/* {
Logged == true &&


                <li className="text-black hover:text-yellow-400">
                  <Link to="/category/our-programs" className=" font-medium">
                    Our Courses
                  </Link>
                </li>
} */}

                {Logged == false ? (
                  <li className="text-black ml-14  hover:text-yellow-400">
                    <Link to="/Login" className=" font-medium ">
                      Login/Sign Up
                    </Link>
                  </li>
                ) : (
                  //   <img
                  //     src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  //     className="rounded-full w-8"
                  //     alt=""
                  //     loading="lazy"
                  //   ></img>
                  <>
                    <div className="  items-center hover:text-yellow-400 cursor-pointer ">
                      <div className="pr-2">
                        <Dropdown></Dropdown>
                      </div>

                      {/* {getUserData?.user?.name} */}
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
