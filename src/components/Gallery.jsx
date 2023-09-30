import React from "react";
import img1 from "../../public/helping.png";

function FourImg() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex   gap-4 ">
        <div className="w-[300px] h-[200px]    self-end ">
          <img
            src={img1}
            alt="img"
            className=" w-[300px] h-[200px] rounded-lg object-cover self-end "
          />
        </div>
        <div className=" w-[200px] h-[300px]   ">
          <img
            src={img1}
            alt=""
            className=" w-[200px] h-[300px]  rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex  gap-4 ">
        <div className="w-[200px] h-[300px]     ">
          <img src={img1} alt="" className="w-[200px] h-[300px]  rounded-lg object-cover" />
        </div>
        <div className=" w-[300px] h-[200px]    ">
          <img
            src={img1}
            alt="img"
            className=" w-[300px] h-[200px] rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
}

function MainImg() {
  return (
    <div className="grid place-content-center px-2    ">
      <div className="w-[400px] h-[350px]  rounded-lg  ">
        <img src="https://api.time.com/wp-content/uploads/2015/06/international-yoga-day-1.jpg" alt="" className="w-[400px] h-[350px] rounded-lg object-cover " />
      </div>
    </div>
  );
}

function Gallery() {
    const data=[]
  return (
    <>
    <div className=" text-left heading text-4xl pt-28 pl-8 sm:pl-40 ">Shivaay Shakti Community</div>
      <div className="flex overflow-x-scroll scrollbar-hide   w-[87vw] sm:w-[96vw] mx-auto space-x-2 mt-8">
        <FourImg />
        <MainImg />
        <FourImg />
        <MainImg />
        <FourImg />
        <MainImg />
        <FourImg />
      </div>
    </>
  );
}

export default Gallery;
