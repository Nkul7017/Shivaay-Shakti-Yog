import React, { useEffect,useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import About from "./pages/About";
import ParticularProgram from "./pages/ParticularProgram";
import AllCourse from "./pages/AllCourse";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ParticularProgram/:_id" element={<ParticularProgram/>} />
          <Route exact path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Courses" element={<AllCourse/>} />
          <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="Contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
