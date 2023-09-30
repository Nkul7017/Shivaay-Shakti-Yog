import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="">
      <div className="bghero">
        <Navbar></Navbar>
        <section className="text-gray-600 body-font bghero1 ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse  items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:ml-10">
              <h1 className="title-font sm:text-xl text-3xl mb-4 font-normal text-yellow-500">
                Shivay Shakti
              </h1>
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-black">
                Better Health
                <br />
                Better Lifestyle
              </h1>
              <p className="mb-8 leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat..
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-[#293241] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg">
                  Learn More
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#293241] hover:text-white rounded-full text-lg">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg h-96 lg:w-full md:w-1/2 w-5/6 mb-16 sm:mb-0">
              <img
                className="object-cover object-center rounded  sm:hidden"
                alt="hero"
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="https://kitpro.site/groweal/wp-content/uploads/sites/63/2022/01/mudra-and-asana-2021-08-26-15-32-15-utc.png"
              />
              {/* <img className="object-cover object-center rounded sm:hidden" alt="hero" src="https://cdn.discordapp.com/attachments/1078905801017659432/1111918362826653818/Untitled_design_9_1.png" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
