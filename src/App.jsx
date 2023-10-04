import React, { useEffect,useState } from "react";
import logovideo from '../public/loutput.gif'
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import Contact from "./pages/Contact";
import { ProgramDetail } from "./pages/ProgramDetail";
import { BrowserRouter as Router } from "react-router-dom";
import { setUser } from "./features/counter/userSlice";
import axios from "axios";
import Error from "./pages/Error";
import Category2 from "./pages/Category2";
import PopUp from "./components/PopUp";
import OneOnSess from "./pages/OneOnSess";
import NewHero from "./components/NewHero";
import ShurveyShivaay from "./components/Shurvey/ShurveyShivaay";
import About from "./pages/About";
import Test from "./components/Test/Test";
import ParticularProgram from "./components/ParticularProgram";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/features/counter/counterSlice'
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  
  const [show, setShow] = useState(false);
  const [userId, setUserId] = React.useState();
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    const local_ID = localStorage.getItem("ID");

    if (local_ID) {
      // setUserId(local_ID?.slice(1, 25));
    }
    console.log("local storage id", local_ID);
  }, [userId]);

  useEffect(() => {
    if (userId !== null && userId !== undefined) {
      axios
        .get(`https://shivayshaktibackend.onrender.com/trainee/user/${userId}`)
        .then((response) => {
          setUserData(response.data);
          console.log("Single User", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId]);

  console.log("user data UseState ", userData);

  useEffect(() => {
    dispatch(setUser(userData));
    console.log("dispatched");
  }, [userData]);

  // useEffect(() => { 
  //   // document.body.style.overflow = 'hidden';
  //   if(window.innerWidth>959)
  //  { const timeout=setTimeout(() => {
  //     // document.body.style.overflow = 'auto';
  //     // dispatch(increment());
  //     setShow(true);
  //   },5000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };}
  //   else setShow(true);
  // }, []);
  return (
    <>
      <BrowserRouter>
      {/* {!show&&<div className={` hidden lg:flex justify-center bg-[#f6f8ef]     w-[100vw] h-[100vh]  `} style={{transition:"0.3s width,0.3s height"}}  >
                <img src={logovideo} alt=""  className={`  `} />
                </div>}
       {show&& */}
        <Routes>
      
          {/* Normal Routes         */}
          <Route path="test" element={<Test />} />
          <Route path="/ParticularProgram" element={<ParticularProgram/>} />

          <Route exact path="/" element={<Home />} />
          <Route  path="/(.*)" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="contact" element={<Contact />} /> */}

          <Route
            path="category/personal-training-session"
            element={<Category2 />}
          />
          {/* <Route path="category/group-session" element={<Category />} /> */}
          <Route path="Login" element={<Login />} />

          <Route path="Program/Login" element={<Login />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="OneOnSession" element={<OneOnSess />} />
          <Route path="category/our-programs" element={<Category />} />


          {/* <Route path="category/group-session/program-detail" element={<ProgramDetail />} /> */}
          <Route
            path="category/group-session/:id"
            element={<ProgramDetail />}
          />
          <Route
            path="category/personal-training-session/:id"
            element={<OneOnSess />}
          />
          {/* <Route
          path="category/group-session/:id"
          element={<PopUp />}
        /> */}
          {/* DashBoard Routes */}
          <Route path="Transactions" element={<Transactions />} />
          <Route path="Account" element={<Account />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />

          <Route path="Hero" element={<NewHero />} />
          <Route path="Shurvey" element={<ShurveyShivaay />} />
        </Routes>
        {/* } */}
      </BrowserRouter>
    </>
  );
}

export default App;
