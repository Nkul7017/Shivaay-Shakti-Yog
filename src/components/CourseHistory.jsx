import React from "react";
import { FiChevronsRight } from "react-icons/fi";

const CourseHistory = ({ data }) => {
  console.log("data==========>", data);
  // const data = [
  //     {
  //         img:"https://cdn.siasat.com/wp-content/uploads/2020/01/ramdev-1476456347.jpg",
  //       MainTitle: "Kundalini Yog Programme",
  //       batchsize: "50",
  //       duration:
  //         "60 days ",
  //       startDate:
  //         "02/04/23",
  //       price: "INR 50000",

  //     },
  //     {
  //         img:"https://cdn.siasat.com/wp-content/uploads/2020/01/ramdev-1476456347.jpg",
  //       MainTitle: "Kundalini Yog Programme",
  //       batchsize: "50",
  //       duration:
  //         "60 days ",
  //       startDate:
  //         "02/04/23",
  //       price: "INR 50000",

  //     },
  //     {
  //         img:"https://cdn.siasat.com/wp-content/uploads/2020/01/ramdev-1476456347.jpg",
  //       MainTitle: "Kundalini Yog Programme",
  //       batchsize: "50",
  //       duration:
  //         "60 days ",
  //       startDate:
  //         "02/04/23",
  //       price: "INR 50000",

  //     },
  //   ];
  return (
    <div>
      <h1 className="  text-xl pl-2">Course History</h1>
      <div className="flex gap-4  overflow-x-scroll scrollbar-hide">
        {data &&
          data.map((item, index) => {
            return (
              <div className="px- py-5 ml-3 ">
                <div className="bg-white rounded-3xl   w-[220px] h-[310px] ">
                  <img
                    className="rounded-b-none rounded-t-2xl w-[220px] h-44 lg:w-[220px] lg:h-[150px]"
                    src={item.image}
                  />

                  <div className="p-4">
                    <h1 className="text-[#FAA200] font-bold text-[14px]">
                      {item.name}
                    </h1>
                    <h6 className="text-[14px]">Group Session </h6>
                    <h1 className="text-[12px] font-bold">
                      {" "}
                      batchsize :{item.batchSize}
                    </h1>
                    <h1 className="text-[10px] "> Duration: {item.duration}</h1>
                    <p className="text-[10px]">
                      {" "}
                      Start Date: {item.startDate.slice(0, 10)}
                    </p>
                    <p className=" text-[13px]">Timings : {item.timings}</p>
                    <p className="text-[10px] font-bold">Price: {item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-end lg:hidden">
        <h1 className="font-mono font-bold text-[14px]">SWIPE </h1>
        <FiChevronsRight></FiChevronsRight>
      </div>
    </div>
  );
};

export default CourseHistory;
