import React, { useEffect, useState } from "react";
import "../style/categ.css";
import { AiOutlineSearch } from "react-icons/ai";
import Helping from "./Helping";
import Trainer from "./Trainer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSlice } from "../features/counter/userSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Filter from "./Filter";


// const userData = { name: "John", age: 30 };

function Slug2() {


  // const  [courses,setCourses] = useState([]) 

  // const shivang = async(category)=>{

  // await  axios.get(`https://shivayshaktibackend.onrender.com/course/courses/${category}`).then((response)=>{
  //        console.log("response=====",response.data)
  
  //   })
  
  // }

  useEffect(() => {
  
    window.scrollTo({top: 0 , left: 0 , behavior: 'smooth'}) 
    
    }, [])
    
    

  const dispatch = useDispatch();

  const [GroupSession, setGroupSession] = React.useState([{}]);

  const [input, setInput] = React.useState("");
 
  const [userData, setUserData] = React.useState([]);
  const [userId, setUserId] = React.useState("");

  useEffect(() => {
    const local_ID = localStorage.getItem("ID");
    setUserId(local_ID);
    console.log("local storage id", local_ID);
  }, [userId]);



  useEffect(() => {
    
    if (userId !== null && userId !== undefined){
      axios
      .get(
        `https://shivayshaktibackend.onrender.com/trainee/user/${userId.slice(1,25)}`
      )
      .then((response) => {
        setUserData(response.data);
        console.log("Single User", response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    }
  }, [userId]);


  useEffect(() => {
    axios
      .get(`https://shivayshaktibackend.onrender.com/course1`)
      .then((response) => {
        setGroupSession(response.data);
        console.log("Group Session", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // var loggedUser = alluser.find((user) => {
  //   return user._id;
  // });


  // const newUser = user.map((number) => number);


  console.log("user data UseState ", userData);

  useEffect(() => {
    dispatch(setUser(userData));
    console.log("dispatched");
  }, [userData]);







  return (
    <div>
      <div>
        <div className="bgCat2">
         <Navbar></Navbar>

          <section className="text-gray-600 body-font bghero1 h-80 ">
            <div className=" py-40">
              <div className="">
                <p className=" text-white mb-5 text-3xl">
                  Experience the benefits of yoga from the comfort of your home!
                </p>
              </div>
              <div className="cat flex justify-center">
                <div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-l-xl "
                  >
                    <option select="true">Programme</option>
                    <option defaultValue="US"> General Fitness</option>
                    <option defaultValue="CA">Weight Management</option>
                    <option defaultValue="FR">Mental Wellness</option>
                    <option defaultValue="DE">Medical Conditions</option>
                    <option defaultValue="FR">Flexibility</option>
                    <option defaultValue="DE">Spirituality</option>
                  </select>
                </div>
                <div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option select="true">Type</option>
                    <option defaultValue="US">1 By 1 Session</option>
                    <option defaultValue="CA">Group Sessions</option>
                  </select>
                </div>
                <div>
                  <div
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  rounded-r-xl "
                  >
                    <AiOutlineSearch size={19.5} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Search  Component */}

        <div className=" items-center text-center justify-around py-10  lg:flex">
          <div className=" flex items-center justify-center ">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                 onChange={(e) => setInput(e.target.value)}
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block lg:w-[53em] w-72 pl-10 p-2.5"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="">
            <h1 className="text-2xl mt-5 lg:text-lg">{GroupSession.length} Results Page 1 of 1</h1>
          </div>
        </div>
<div className="lg:flex px-12  ">
<div className="mt-32 lg:flex  hidden">
<Filter></Filter>
</div>
<div>
        <section className=" body-font">
          <div className="container  py-10 mx-auto rounded-2xl">
            <div className="flex flex-wrap  justify-evenly gap-x-0">
              {GroupSession.filter((item) => {
                return input.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(input);
              }).map((item, index) => {
               
                return (
                  <div className="flex items-center mt-14 hover:-translate-y-1 mx-10 hover:scale-110  duration-300 drop-shadow-2xl">
                    <div className="lg:h-[450px] h-full  w-[345px] lg:w-[280px] border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
                      <img
                        className=" object-cover object-center w-full h-48 "
                        src={item.image}
                        alt="blog"
                      />
                      <div className="p-2">
                        <h1 className="title-font text-lg font-medium text-yellow-500 mb-2">
                          {item.name}
                        </h1>
                        <p className="leading-relaxed mb-2">1 on 1 Session</p>
                        {item?.batchSize !== undefined ? (
                          <p className="leading-relaxed ">
                            Batch Size :{item.batchSize}
                          </p>
                        ) : (
                          <span />
                        )}
                        <p className="leading-relaxed ">
                          Duration: {item.duration} Days
                        </p>
                        <p className="leading-relaxed ">
                          Start Date: {item?.startDate?.slice(0,10)}
                        </p>
                        {/* <p className="leading-relaxed ">Price  :{item.priceI}</p> */}
                        <p className="leading-relaxed ">Price :{item.priceC}</p>

                      </div>
                      <div className="btn text-center mb-3">
                      <Link to={`/category/personal-training-session/${item._id}`} >
                          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            View Details
                          </button>
                        </Link>
                        <button className="text-white bg-gray-900 border hover:text-gray-900 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </div>
        </div>

        <Helping />
        <div className="mb-20">
        <Trainer />
        </div>
        

        <Footer />
      </div>
    </div>
  );
}

export default Slug2;
