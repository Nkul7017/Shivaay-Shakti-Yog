import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Loader from "./Loader/Loader";
AOS.init({
  duration: 1200,
});

function Courses({data,loader}) {


const [show , setShow] = useState(false)


const [x , setX] = useState(3)



useEffect(() => {

  if (show) {
    
    setX(data.length)
  }
}, [show])



  return (
    <div id="scroll" className="mt-20 mb-16 scroll-smooth">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto ">
          {/* <div className="flex items-center">
          <h1 className="text-xl font-extrabold title-font lg:pl-36 text-yellow-600">
            TRENDING
          </h1>
          <img className="w-10 ml-2" src="https://cdn.discordapp.com/attachments/1078905801017659432/1101094802029817867/Frame_2.png" alt="" />
          </div> */}
          <h1 className="sm:text-[40px] text-2xl lg:pl-36 font-extrabold title-font text-gray-900 mb-10">
            Our Programmes
          </h1>
          <div className="flex flex-wrap lg:px-24 justify-evenly gap-2">
          {loader && <Loader />}
            { !loader &&  data.slice(0,x ).map((item, index) => {
              return (
                <div
                  className=" md:w-[320px] w-[400px] py-3 sm:py-1 mt-10 "
                  data-aos="zoom-in"
                >
                  <div className=" border-2 border-gray-200 shadow-2xl border-opacity-60 rounded-3xl overflow-hidden">
                    {index > 1 && (
                      <img
                        className=" w-full h-48 rounded-2xl rounded-b-none object-cover object-center"
                        src={item.image}
                        alt="blog"
                      />
                    )}
                    {index < 2 && (
                      <div className=" h-48 flex-col flex items-center justify-center rounded-t-2xl ">
                        <img
                          className="rounded-b-none w-36 relative mt-2 h-10  ml-[200px]   "
                          src="https://cdn.discordapp.com/attachments/1078905801017659432/1121352358849433731/trending.png"
                        />

                        <img
                          className=" object-cover object-center -mt-14 w-full h-48"
                          src={item.image}
                          alt="blog"
                        />
                      </div>
                    )}
                    <div className="p-3">
                      <h1 className=" text-lg  uppercase fontBold  text-gray-900 mb-1 h-14">
                        {item.name}
                      </h1>
                      <p className="title-font text-md font-light text-gray-900 mb-1">
                        Group Sessions
                      </p>
                      <div className="h-28 mb-1 overflow-y-scroll scrollbar-hide">
                        <p className="leading-relaxed mb-1 text-sm">
                          {item.details}
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap ">
                        <Link to={`/category/group-session/${item._id}`}>
                          <a className="text-black inline-flex items-center md:mb-0 lg:mb-0 hover:text-orange-400 ">
                            Learn More{" "}
                            <span className="ml-2 hover:text-orange-400 ">
                              <BsArrowRight />
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       {x <= 3 &&  <div className="text-center my-5 mt-10">
          <button  className="inline-flex text-white bg-[#293241] hover:bg-[#647490] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg"
          onClick={()=>setShow(true)}
          >
            Explore More
          </button>
        </div>}
      </section>
    </div>
  );
}

export default Courses;
