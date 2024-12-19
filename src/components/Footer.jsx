import React from "react";
import footerlogo from "../assets/Images/footerlogo.png";
import { Link } from "react-router-dom";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="">
      <div className="helpingbg  ">
        <footer className=" space-y-4  flex flex-col w-[90vw] lg:w-[95vw] xl:w-[90vw] mx-auto   lg:gap-8   ">
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
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/ECf6xCU2eRYGUe9x6"
                  className=" text-justify"
                >
                  Shaheed Gireesh Bhadri Chowk, Mothrowala, Banjarawala Rd,
                  Ajabpur Khurd, Dehradun, Uttarakhand 248001
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="text-2xl  flex sm:flex-row flex-col heading justify-center items-center w-full    flex-wrap gap-x-28 gap-y-4">
            <a href="/">Home</a>
            <a href="/Courses">Courses</a>
            <a href="/about-us">About</a>
            <a
              href={"/terms&conditions"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms And Condition
            </a>
          </div>
          <div className=" flex flex-row justify-center w-[50vw] para mx-auto gap-10 md:hidden">
            <a>
              <BsTelephone size={20} />
            </a>

            <a href="mailto:shivaayshaktiyog@gmail.com">
              <GoMail size={24} />
            </a>

            <a target="_blank" href="https://maps.app.goo.gl/ECf6xCU2eRYGUe9x6">
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
