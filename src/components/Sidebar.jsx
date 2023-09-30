import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../.././public/img/Shivay shakti.png";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className=" flex flex-row  bg-[#E9EADD]">
          <div className="flex flex-col w-60  rounded-r-3xl overflow-hidden bg-gradient-to-t from-[#FAA200] to-[#F6E0BE] text-white ">
            <div className="flex items-center justify-center h-20 ">
              {/* <h1 className="text-3xl uppercase text-indigo-500">Logo</h1> */}
              <Link to="/">
                <img className="w-36 mt-20" src={logo} alt="" />
              </Link>
            </div>
            <div>
              <ul className="flex flex-col  mt-32 ml-10">
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/profile"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-home"></i>
                      </span>
                      <span className="text-xl font-medium">Home</span>
                    </button>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/account"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-user"></i>
                      </span>
                      <span className="text-xl font-medium">Account</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/Transactions"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        {/* <i className="bx bx-bell"></i> */}
                        <i className="bx bx-transfer"></i>

                        {/* <box-icon name='transfer'></box-icon> */}
                      </span>
                      <span className="text-xl font-medium">Transactions</span>
                      {/* <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span> */}
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/Contact"
                  >
                    {/* <button className="transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-phone-call"></i>
                      </span>
                      <span className="text-xl font-medium">Contact</span>
                    </button> */}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-60  ml-10">
              <Link to="/login">
                <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                    <i className="bx bx-log-out"></i>
                  </span>
                  <span className="text-xl font-medium">Logout</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
