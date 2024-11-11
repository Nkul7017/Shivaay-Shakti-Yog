import React from "react";
import footerlogo from "../assets/Images/footerlogo.png";
import { Link } from "react-router-dom";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import yt from "../../public/yt.svg";
function Footer() {
  return (
    <div className="">
      <div className="helpingbg  ">
        <footer className=" space-y-4  flex flex-col w-[90vw] lg:w-[80vw] mx-auto   lg:gap-8   ">
          <div className="  flex flex-col sm:flex-row  justify-around pt-10  md:gap-5  ">
            <div className="   md:w-1/3 lg:-mt-7 mx-auto md:mx-0   ">
              <a className="   ">
                <img
                  className="    lg:w-[430px] h-[120px] lg:h-[120px]  "
                  src={footerlogo}
                  alt=""
                />
              </a>
            </div>
            <div className="  space-y-3   lg:pl-20 hidden md:block     para w-1/3  ">
              <p className="text-2xl  heading">Contact</p>
              <div className="flex gap-3   ">
                <BsTelephone size={20} clas />
                <p>+91 2589631475</p>
              </div>
              <div className="flex gap-3">
                <GoMail size={24} />
                <p className="w-20">
                  <a
                    href="mailto:shivaayshaktiyog@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    shivaayshaktiyog@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className=" w-1/3   para  hidden md:block  space-y-3    ">
              <p className=" text-2xl heading">Address</p>
              <div className="flex gap-3">
                <p>
                  <GoLocation size={24} />
                </p>
                <p className=" text-justify">
                  Shaheed Gireesh Bhadri Chowk, Mothrowala, Banjarawala Rd,
                  Ajabpur Khurd, Dehradun, Uttarakhand 248001
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="text-2xl  flex sm:flex-row flex-col heading justify-center items-center w-full    flex-wrap gap-x-28 gap-y-4">
            <Link to="/">Home</Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/about-us">About</Link>
            <a
              href={"/terms&conditions"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms And Condition
            </a>
            {/* <Link to='/' ><img src={yt} className=" w-[50px] h-[50px] " alt="" /></Link> */}
          </div>
          <div className=" flex flex-row justify-center w-[50vw] para mx-auto gap-10 md:hidden">
            <a>
              <BsTelephone size={20} clas />
            </a>
            <a>
              <GoMail size={24} />
            </a>
            <a>
              <GoLocation size={24} />
            </a>
          </div>
          <div className=" para">
            <div className=" text-center">Copyright all right reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
