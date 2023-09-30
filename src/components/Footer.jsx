import React from "react";
import footerlogo from "../assets/Images/footerlogo.png"
import { Link } from "react-router-dom";
import {GoLocation,GoMail} from "react-icons/go";
import {BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="helpingbg h-[730px] sm:h-[650px] md:h-[470px]  lg:h-[420px] ">
        <footer className=" space-y-4 body-font ">
          <div className="">
            <a className="title-font font-medium">
              <img
                className="w-[430px]  mx-auto"
                src={footerlogo}
                alt=""
              />
            </a>
          </div>

          <div className="text-2xl flex heading justify-center items-center w-[80vw]  mx-auto flex-wrap gap-x-28 gap-y-4">
              <Link>HOME</Link>
              <Link>PROGRAMS</Link>
              <Link>ABOUT</Link>
              <Link>CHANNELS</Link>
            </div>

          <div className=" para lg:w-[46vw] sm:w-[60vw] flex flex-col items-center md:items-start  md:flex-row mx-auto ">
            <div className=" w-1/2  text-left space-y-3    ">
              <p className="text-2xl  heading">Contact</p>
              <div className="flex gap-3   ">
                <BsTelephone size={20} clas />
                <p>+91 2589631475</p>
              </div>
              <div className="flex gap-3">
                <GoMail size={24}/>
                <p className="w-20">shivaayshaktiyog@gmail.com</p>
              </div>
              
            </div>
            <div className=" w-1/2 text-left  space-y-3 mt-5 md:mt-0 ">
            <p className=" text-2xl heading">Address</p>
            <div className="flex gap-3">
              <p><GoLocation size={24} /></p>
              <p className=" text-justify" >Shaheed Gireesh Bhadri Chowk, Mothrowala, Banjarawala Rd, Ajabpur Khurd, Dehradun, Uttarakhand 248001</p>
            </div>
            </div>
          </div>

          <div className=" para">
            <div className="">Copyright all right reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
