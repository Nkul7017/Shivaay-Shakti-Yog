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
import ForgotPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Articel1 from "./pages/Articel1";
import Article2 from "./pages/Article2";
import TermsAndConditions from "./pages/TermAndCondition";
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
          <Route path="/terms&conditions" element={<TermsAndConditions/>} />
          <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="Contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
          <Route path="/article1" element={<Articel1 />}></Route>
          <Route path="/article2" element={<Article2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
