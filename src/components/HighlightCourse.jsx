import React from "react";
import img1 from "../../public/1.png";
import img2 from "../../public/2.png";
import img3 from "../../public/3.png";
import img4 from "../../public/4.png";
import img5 from "../../public/5.png";
import img6 from "../../public/6.png";
import img7 from "../../public/7.png";
import img8 from "../../public/8.png";
import img9 from "../../public/9.png";
import img10 from "../../public/10.png";

const HighlightCourse = (data) => {
  return (
    <>
      <div className="flex gap-2 mt-4 px-2 lg:px-32 lg:gap-8 ">
        <a href="#Highlights"> <h2 className="text-[#283143] lg:border-4 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-xl lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl">
          Highlights
        </h2>
        </a>
       <a href="#Details"> <h2 className=" text-[#283143] lg:border-4 border-2 hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-xl lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl">
          Details
        </h2></a>
       
       <a href="#faqs"><h2 className=" text-[#283143] lg:border-4 border-2 hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-xl lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl">
          FAQs
        </h2></a>
        
        <a href="#booking"><h2 className=" text-[#283143] lg:border-4 border-2 hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-xl lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl">
          Bookings
        </h2></a>
        
        <a href="#Reviews">
        <h2 className=" text-[#283143] lg:border-4 border-2 hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-xl lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl">
          Reviews
        </h2>
        </a>
       
      </div>

      <div id="Highlights" className=" shadow-2xl lg:w-[80%] lg:ml-28 mt-5 ">
        <div className=" w-[360px] ml-4 lg:w-[80%] lg:mt-12 lg:px-20 text-[14px] lg:py-10 py-4 ">
          <h1 className="text-[#FAA200] text-xl pt-4 pb-4 font-bold ml-2 lg:text-4xl">
            Course Highlights
          </h1>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img1} />
            <h1>Name: -</h1>
            <h1>{data.data.name} </h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img2} />
            <h1>Batch size -</h1>
            <h1>{data.data.batchSize} </h1>
          </div> 
         {/* <div className="flex gap-2 items-center">
            <img className="w-8" src={img3} />
            <h1>Starting Date -</h1>
            <h1>{data?.data?.startDate?.slice(0,10)}</h1>
          </div> */}
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img4} />
            <h1>Durations -</h1>
            <h1>{data.data.duration} </h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img5} />
            <h1>Timing -</h1>
            <h1> {data.data.timings} </h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img6} />
            <h1>Difficulty level -</h1>
            <h1> {data.data.difficulty}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img7} />
            <h1>Gender -</h1>
            <h1> {data.data.gender}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img8} />
            <h1>Age Group - </h1>
            <h1> {data.data.ageGroup}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img9} />
            <h1>Live Classes -</h1>
            <h1> {data.data.liveClasses}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-8" src={img10} />
            <h1>Price -</h1>
            <h1> {data.data.price}</h1>
          </div>
        </div>
      </div>

      <div id="Details" className="p-4 w-[360px] ml-4 shadow-2xl lg:w-[80%] lg:mt-8 lg:ml-28 lg:py-12 lg:px-10 mt-6 text-[14px]">
        <h1 className="text-[#FAA200] text-2xl font-bold">Details</h1>
        <p className="lg:hidden mt-4"> {data.data.details}</p>
        <p className="hidden sm:flex mt-4">{data.data.details}</p>
        <p className="text-[#FAA200] text-md font-bold text-end lg:hidden">
          Read More
        </p>
      </div>
    </>
  );
};

export default HighlightCourse;
