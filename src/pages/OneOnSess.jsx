import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { HiChevronRight, HiSearch } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import PopUp from "../components/PopUp";
import HighlightCourse from "../components/HighlightCourse";
import Crousel from "../components/Crousel";

import img1 from "../../public/img/Group 385.png";
import img2 from "../../public/img/Group 386.png";
import img3 from "../../public/img/Group 387.png";
import img4 from "../../public/img/Group 388.png";
import Ellipse from "../../public/img/Ellipse 3.png";

import Footer from "../components/Footer";
import CrouselSession from "../components/CrouselSession";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setCourse2 } from "../features/counter/course2Slice";
import { useDispatch } from "react-redux";
import HighlightCourseOneOnOne from "../components/HighlightCourseOneOnOne";

const OneOnSess = () => {
  const [course, setCourses] = useState([{}]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios
      .get(`https://shivayshaktibackend.onrender.com/course1/${id}`)
      .then((response) => {
        setCourses(response.data);
        // console.log("Group Session", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (course) {
      dispatch(setCourse2(course));
      console.log("Course2 Dispatched");
    }
  }, [course]);

  // console.log("course one on one ", course)

  return (
    <>
      <div className="bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1091314107514372116/Group_78.png')] bg-cover w-full h-[200px] lg:hidden overflow-x-hidden">
        <Navbar />
      </div>

      <div className=" bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1091320977671081984/Group_439_1.png')]  bg-cover h-[500px] w-full lg:flex  hidden">
        <div className="w-full mt-5 ">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="flex gap-2 text-sm mt-4 ml-6 flex-wrap text-center items-center font-semibold lg:mt-8 lg:text-xl lg:ml-16">
        <a href="">
          <h1>Home</h1>
        </a>
        <HiChevronRight className="text-sm mt-1"></HiChevronRight>
        <a href="">
          {" "}
          <h1>Programmes</h1>
        </a>
        <HiChevronRight className="text-sm mt-1"></HiChevronRight>
        <a href="">
          {" "}
          <h1>{course.category}</h1>
        </a>
        <HiChevronRight className="text-sm mt-1"></HiChevronRight>
        <a href="">
          <h1>{course.name}</h1>
        </a>
      </div>

      <div className="flex ml-6 lg:ml-14 mt-10">
        <div className="">
          <input
            className="h-[45px] lg:w-[700px] lg:rounded-l-3xl lg:ml-14 w-[280px] p-2 border-r-0 border-gray-400 border-2 rounded-l-2xl rounded-t-l-2xl rounded-r-none  rounded-b-none outline-none "
            placeholder="Search..."
          ></input>
        </div>
        <div>
          <HiSearch className="w-[44px] h-[45px] p-1 lg:rounded-r-3xl  border-l-0  border-gray-400 border-2 outline-none rounded-r-2xl text-gray-500"></HiSearch>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl text-[#FAA200] font-bold  mt-10 ml-6 lg:text-5xl lg:ml-28 tracking-wider ">
            {course.name}
          </h1>
        </div>
        <div>
          <img className="w-52  lg:flex hidden" src={Ellipse} />
        </div>
      </div>
      <h1 className="ml-6 mb-5 lg:ml-28 lg:-mt-[600px] w-44">
        One on One Session
      </h1>

      <div className="flex justify-between lg:ml-10">
        <div className="flex items-center gap-1 lg:ml-14">
          <div>
            <IoIosTime className="text-xl ml-4 "></IoIosTime>
          </div>
          <div>
            <h6>{course.timings}</h6>
            <h6>Morning Sessions</h6>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 lg:gap-36 lg:px-36">
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img1} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img2} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img3} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px] " src={img4} />
      </div>

      <div className="flex items-center gap-1 mt-4 ml-5 lg:ml-20 lg:mt-12 lg:gap-4 lg:pb-6">
        <h2 className="text-[#FF754C] lg:text-2xl lg:px-20">30 Seats Left!</h2>

        {/* <PopUp></PopUp> */}
        <div className="bgcover relative items-center py-12 gap-4 flex flex-col ml-6  scroll-smooth	 ">
          <a  href="#timeSlot " >
        <button
          className="text-white text-lg font-bold p-2 bg-[#FAA200] w-44 rounded-3xl"
          
        >
          BookNow
        </button>
        </a>
      </div>
      </div>

      <h1 className="font-bold text-2xl ml-4 mt-3 lg:hidden">
        INR {course.priceI} <span className="text-lg">Per Person</span>
      </h1>

      <HighlightCourseOneOnOne data={course}></HighlightCourseOneOnOne>

      <CrouselSession
        day="Day 1"
        intro=" Introduction to Hatha Yoga, basic breathing techniques, and Sun
            Salutation."
        time="Time:- 6:30 - 8:00 (hrs)"
      ></CrouselSession>

      <Footer></Footer>
    </>
  );
};

export default OneOnSess;
