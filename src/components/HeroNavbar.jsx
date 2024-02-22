import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineArrowDownTray, HiBars3CenterLeft } from "react-icons/hi2";
import DeskNavbar from "./DeskNavbar";
import Dropdown from "./Dropdown";
import logo from "../../public/letter-head_CLR.png"
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroNavbar({ login }) {
  const navigate=useNavigate();

 const [logged,setLogged]=useState(localStorage.getItem('user'));
  return (
    <>
      <Disclosure as="nav" className="lg:hidden -mt-2 pt-[20px]">
        {({ open }) => (
          <>
            <div  className="mx-auto   max-w-7xl px-8 sm:px-6 lg:px-8 ">
              <div className="relative flex flex-row-reverse h-16 items-center justify-between">
                <div className="flex flex-1 items-start lg:items-stretch lg:justify-start">
                  <div className="flex -ml-4 items-center">
                   <Link to="/"> <img
                      className="block lg:hidden"
                      src={logo}
                      width={180}
                      alt="logo"
                    /></Link>
                    
                  </div>
                  {/* <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 text-black">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-black"
                              : "text-black ",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div> */}
                </div>
                <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                  <Menu as="div" className=" ml-3">
                    <Disclosure.Button className="inline-flex items-center  justify-center rounded-md  ">
                      {open ? (
                        <XMarkIcon
                          className="block h-8 w-8 -mr-6 "
                          aria-hidden="true"
                        />
                      ) : (
                        <HiBars3CenterLeft
                          className="block h-8 w-8  rotate-180 text-xl! font-bold! -mr-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </Menu>
                </div>
              </div>
            </div>
<div className=" ">
            <Disclosure.Panel className="lg:hidden flex  z-30 absolute top-6 right-14    ">
              <div className="space-y-3  flex flex-col bg-white rounded-md  px-4    py-2">
                
                    <Link
                      as="a"
                      to={"/"}
                      className= " text-black"
                    >
                      Home
                    </Link>
                    <Link
                      as="a"
                      to={"/Courses"}
                      className=" text-black"
                    >
                      Courses
                    </Link>
                    <Link
                      as="a"
                      to={"/about-us"}
                      className=" text-black"
                    >
                      About Us
                    </Link>
                    {/* <Link
                      as="a"
                      to={"/"}
                      className=" text-black"
                    >
                      Channels
                    </Link> */}
           
                    {logged&&<Link
                      as="a"
                      to={"/UserDashboard"}
                      className=" text-black"
                      >
                      Profile
                    </Link>}
                  
                    {!logged?<Link
                      to='/Login'
                      
                      className=" text-black"
                    >
                      Login
                    </Link>:
                     <button  onClick={()=>{
                      setLogged(localStorage.removeItem('user'));
                      navigate('/', {replace: true});
                     }}
                    className=" text-black text-left "
                  
                  >
                    Log Out
                  </button> }
                    
                    
                    
                    
              
              </div>
            </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>

      <DeskNavbar />
    </>
  );
}
