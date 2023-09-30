import React, { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";

import { IoIosTime } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../../public/img/Group 385.png";
import img2 from "../../public/img/Group 386.png";
import img3 from "../../public/img/Group 387.png";
import img4 from "../../public/img/Group 388.png";
import img5 from "../../public/1.png";
import img6 from "../../public/2.png";
import img7 from "../../public/3.png";
import img8 from "../../public/4.png";
import img9 from "../../public/5.png";
import img10 from "../../public/6.png";
import img11 from "../../public/7.png";
import img12 from "../../public/8.png";
import img13 from "../../public/9.png";
import img14 from "../../public/10.png";
import StarRating from "./StarRating";

const selectCourse = (state) => state.course;

// const param = useParams();
// const id = param.id;

// console.log("pop param id ",id)

function PopUp() {
  const getCourse = useSelector(selectCourse);

  console.log("get course in pop up", getCourse.course);

  let [Clickon, Clickoff] = useState(false);

  const [Logged, setLogged] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    const local_ID = localStorage.getItem("ID");

    setId(local_ID);
  }, []);

  useEffect(() => {
    if (id !== undefined && id !== "" && id !== null) {
      setLogged(true);
    } else {
      setLogged(false);
      console.log("else runnn");
    }
  }, [id]);

  console.log("id ", id);
  console.log("logged value", Logged);
  

  return (
    <div className="z-50 ">
      <div className="bgcover relative items-center py-12 gap-4 flex flex-col ml-6   ">
        <button
          className="text-white text-lg font-bold p-2 bg-[#FAA200] w-44 rounded-3xl "
          onClick={() => Clickoff(!Clickon)}
        >
          BookNow
        </button>
      </div>

      {Clickon && (
        <div className="bg-gray-100 overflow-hidden	  fixed inset-0 	">
          <div className="flex h-screen justify-center items-center  ">
            <div className="flex flex-col justify-center items-center font-serif bg-white text-black   rounded-3xl shadow-2xl ">
              {/* <h1 className="text-xl text-[#FAA200] shadow-2xl  font-bold  mt-4  lg:text-6xl lg:ml-28 tracking-wider ">
                {data.data.name}
              </h1> */}
              <div className="p-2">
                <div className="lg:w-[800px] lg:h-[550px] w-80 h-[650px] ">
                  <div
                    className="flex justify-end text-4xl cursor-pointer"
                    onClick={() => Clickoff(!Clickon)}
                  >
                    <HiOutlineX></HiOutlineX>
                  </div>

                  <h1 className="text-center lg:text-left lg:text-3xl text-xl text-[#FAA200] mt-4">
                    Hatha Yoga 60 Days Course{" "}
                  </h1>

                  <div className="flex justify-between lg:px-4 lg:mt-4 mt-2">
                    <div className=" lg:flex gap-14">
                      <div className="flex items-center gap-1 ">
                        <div>
                          <IoIosTime className="lg:text-lg text:sm "></IoIosTime>
                        </div>
                        <div>
                          <h6>{getCourse.course.timings}</h6>
                          <h6 className="lg:text-lg text:sm ">
                            Morning Sessions
                          </h6>
                        </div>
                      </div>

                      <div>
                        <h1 className="lg:text-lg text:sm ">Group Sessions</h1>
                      </div>
                    </div>

                    <div>
                      <StarRating></StarRating>
                      <h3 className="">
                        Based on {Math.floor(Math.random() * (10 - 56)) + 56}{" "}
                        Reviews
                      </h3>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-4">
                    <div className="lg:flex hidden lg:gap-10 mt-4 ">
                      <img className="w-20 h-20 " src={img1} />
                      <img className="w-20 h-20 " src={img2} />
                      <img className="w-20 h-20 " src={img3} />
                      <img className="w-20 h-20  " src={img4} />
                    </div>

                    <div className="lg:flex flex-col hidden">
                      <h1 className="text-2xl ">
                        INR 30,000{" "}
                        <span className="text-[10px]">per person</span>
                      </h1>
                      <h1 className="text-[16px] text-[#FAA200]">
                        Total:{" "}
                        <span className="text-2xl text-black">INR 30,000</span>
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between lg:px-4 lg:pr-44 px-1 mt-4 lg:mt-5">
                    <div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img5} />
                        <h1>Name: -</h1>
                        <h1>{getCourse.course.name} </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8 " src={img6} />
                        <h1>Batch size -</h1>
                        <h1>{getCourse.course.batchSize} </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img7} />
                        <h1>Starting Date -</h1>
                        <h1>{getCourse.course.startDate}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img8} />
                        <h1>Durations -</h1>
                        <h1>{getCourse.course.duration} </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img9} />
                        <h1>Timing -</h1>
                        <h1> {getCourse.course.timings} </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img10} />
                        <h1>Difficulty level -</h1>
                        <h1> {getCourse.course.difficulty}</h1>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img11} />
                        <h1>Gender -</h1>
                        <h1> {getCourse.course.gender}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img12} />
                        <h1>Age Group - </h1>
                        <h1> {getCourse.course.ageGroup}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img13} />
                        <h1>Live Classes -</h1>
                        <h1> {getCourse.course.liveClasses}</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-8" src={img14} />
                        <h1>Price -</h1>
                        <h1> {getCourse.course.price}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden mt-5">
                    <h1 className="text-4xl ">
                      INR 30,000 <span className="text-[16px]">per person</span>
                    </h1>
                  </div>
{Logged ?
                  <div className="flex justify-center text-center items-center mt-5">
                    <button className="text-white text-lg font-bold p-2 bg-[#FAA200]  w-44 rounded-3xl mb-5 ">
                      Proceed
                    </button>
                  </div>
:
                  <div className="flex justify-center text-center items-center mt-5">
                    <Link to="/login" className="text-white text-lg font-bold p-2 bg-[#FAA200]  w-44 rounded-3xl mb-5 ">
                      Login
                    </Link>
                  </div>
}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
