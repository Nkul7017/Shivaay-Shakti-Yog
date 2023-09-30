import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/counter/userSlice";

// import {  user} from '../features/counter/userSlice'

// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

const Login = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState(0);
  const [load, setLoad] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const notify = () => {
    setLoad(true);
    if (email == "" || pin == 0) {
      toast.error("Email & Pin Cannot be Empty", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      var options = {
        method: "GET",
        url: "https://shivayshaktibackend.onrender.com/trainee/login",
        headers: {
          Accept: "application/json",
          email: email,
          pin: pin,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data._id);
          toast.success("Login Successfully Please Wait !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          localStorage.setItem("ID", JSON.stringify(response.data._id));
          setResponseData(response.data);

       


          setTimeout(() => {
            const local_ID = localStorage.getItem("ID");
            console.log("local storage id", local_ID);
            navigate(-1);
          }, 3500);


          


        })
        .catch(function (error) {
          if (error.response.data.message == "incorrect pin") {
            toast.error("Passward incorrect", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error("Check Your Email & Passward", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          console.error(error);
          console.error(error.response.data.message);
        });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [load]);

  console.log("use State Response =================> ", responseData);
  // console.log("Email => ", email);
  // console.log("Pin => ", pin);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* mob view */}

      <div className="bgCatmob lg:hidden  ">
        <div className="flex flex-col items-center justify-center justify-items-center  ">
          <img className="w-36" src="img/image 3.png" />
          <img className="-mt-2 w-64" src="img/image 4.png" />
        </div>
        <h1 className="text-black  text-center text-3xl font-semibold -mt-6 pb-10">
          Welcome!
        </h1>
        <div className=" flex flex-col gap-4 items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[350px] h-[50px] rounded-xl pl-4 text-gray-700"
            placeholder="User Name / Email*"
          ></input>
          <input
            onChange={(e) => setPin(e.target.value)}
            className="w-[350px] h-[50px] rounded-xl pl-4 text-gray-700"
            placeholder="6 Digit Pin*"
          ></input>
        </div>
        <div className="flex flex-row justify-between mt-5 ">
          <Link to="/SignUp">
            <button className="ml-5 bg-[#283143] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300">
              Sign Up
            </button>
          </Link>

          {load == false ? (
            <button
              onClick={notify}
              className="mr-5  bg-[#FAA200]   text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={notify}
              className="mr-5  bg-[#FAA200] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  className="w-7"
                  version="1.1"
                  id="L9"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 0 0"
                  xml:space="preserve"
                >
                  <path
                    fill="#fff"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="1s"
                      from="0 50 50"
                      to="360 50 50"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
                <span> Wait</span>
              </div>
            </button>
          )}
        </div>
      </div>
      {/* mob view end */}

      {/* destop view */}

      <div className="bgCatdes hidden sm:flex justify-center ">
        <div className="flex justify-center mt-10">
          <div className="">
            <img className="" src="img/Rectangle 334.png" />
          </div>
          <div className="bg-gray-100  w-[450px] h-[500px] mt-14 rounded-r-3xl -ml-20 ">
            <div className="flex flex-col items-start ml-6">
              <img className="mt-10 w-40 " src="img/image 3.png" />
              <h1 className="text-2xl text-black ml-10">Welcome!</h1>
            </div>
            <div className="flex flex-col gap-5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl mt-12 ml-16 text-black"
                placeholder="User Name / Email*"
              ></input>
              <input
                onChange={(e) => setPin(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl ml-16 text-black"
                placeholder="6 Digit Pin*"
              ></input>
            </div>
            <div className="flex flex-row gap-12 justify-center mt-10">
              <Link to="/SignUp">
                <button className="w-[135px] h-[45px] bg-[#283143] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300">
                  Sign Up
                </button>
              </Link>
              {load == false ? (
                <button
                  onClick={notify}
                  className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Log in
                </button>
              ) : (
                <button
                  onClick={notify}
                  className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300 "
                >
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-7"
                      version="1.1"
                      id="L9"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enable-background="new 0 0 0 0"
                      xml:space="preserve"
                    >
                      <path
                        fill="#fff"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="1s"
                          from="0 50 50"
                          to="360 50 50"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                    <span> Wait</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
