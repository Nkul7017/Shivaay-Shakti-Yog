import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineArrowDownTray, HiBars3CenterLeft } from "react-icons/hi2";
import DeskNavbar from "./DeskNavbar";
import Dropdown from "./Dropdown";
import logo from "../../public/letter-head_CLR.png"

const navigation = [
  { name: "Home", href: "/", current: false },

  { name: "Login", href: "/login", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroNavbar({ login }) {
  const [Logged, setLogged] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    const local_ID = localStorage.getItem("ID");

    setId(local_ID);
  }, []);

  

  useEffect(() => {
    console.log("id", id);
    if (id !== undefined && id !== "" && id !== null && !id) {
      console.log("if chala");
      setLogged(true);
    } else {
      setLogged(false);
      console.log("else runnn");
    }
  }, [id]);

  console.log(Logged);



  return (
    <>
      <Disclosure as="nav" className="sm:hidden -mt-2 pt-[20px]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex flex-row-reverse h-16 items-center justify-between">
                <div className="flex flex-1 items-start sm:items-stretch sm:justify-start">
                  <div className="flex items-center">
                    <img
                      className="block lg:hidden"
                      src={logo}
                      width={180}
                      alt="logo"
                    />
                    
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 text-black">
                      {navigation.map((item) => (
                        <a
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
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
            <Disclosure.Panel className="sm:hidden flex absolute top-12 right-7 justify-end items-center text-center">
              <div className="space-y-1   pb-3 pt-2">
                {navigation.map((item) =>
                  item.name == "Login" && Logged ? (
                    <Dropdown />
                  ) : (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-black"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                )}
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
