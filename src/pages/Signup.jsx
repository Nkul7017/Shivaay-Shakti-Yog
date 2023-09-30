import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import { HiMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VscLocation } from "react-icons/vsc";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [confirmPin, setConfirmPin] = useState(0);
  const [pin, setPin] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("India");
  const [realPin, setRealPin] = useState(0);
  const [load, setLoad] = useState(false);
  // Value Console
  console.log(
    name,
    email,
    phone,
    confirmPin,
    pin,
    age,
    height,
    weight,
    gender,
    country,
    realPin
  );

  useEffect(() => {
    if ((pin !== confirmPin) & (confirmPin.length >= 5)) {
      setTimeout(() => {
        toast.error("Pin And Confirm Pin Not Matched", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1000);
    } else if (pin == confirmPin) {
      setRealPin(confirmPin);
      console.log("Real Pin ==> ", realPin);
    } else {
      console.log("Nothing is here...");
    }
  }, [confirmPin]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [load]);

  const notifyAndApiCall = () => {
    setLoad(true);

    if (
      email == "" ||
      pin == 0 ||
      name == "" ||
      phone == 0 ||
      age == 0 ||
      confirmPin == 0 ||
      height == 0 ||
      weight == 0 ||
      gender == ""
    ) {
      toast.error("All Feilds Are Mandatory", {
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
        method: "POST",
        url: "https://shivayshaktibackend.onrender.com/trainee",
        headers: {
          Accept: "application/json",
        },
        data: {
          name: name,
          email: email,
          phone: phone,
          pin: realPin,
          age: age,
          height: height,
          weight: weight,
          gender: gender,
          country: country,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);

          toast.success("Sign Up Successfully Please Wait !", {
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

          setTimeout(() => {
            const local_ID = localStorage.getItem("ID");
            console.log("local storage id in sign up page", local_ID);
            navigate("/");
          }, 3500);
        })
        .catch(function (error) {
          if (error.response.data.message == "Trainee already exists!") {
            toast.error("You Are Already Registered , Go Back To Login", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(() => {
              navigate("/login");
            }, 4000);
          } else {
            toast.error("Oops Please Try Again Some Times", {
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

          // toast.error("Error Api Not Called", {
          //       position: "bottom-right",
          //       autoClose: 3000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       progress: undefined,
          //       theme: "colored",
          //     });
          console.error(error);
          console.error(error.response.data.message);
        });
    }
  };

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
      <div className="mobSignUp lg:hidden">
        <div className="flex flex-col items-center justify-center justify-items-center ">
          <img className="w-28" src="img/image 3.png" />
          <img src="img/yoga.png" />
        </div>

        <div className="flex flex-row justify-between mt-5 ">
          <h1 className="text-black text-center text-3xl font-semibold mt-4 pb-10 ml-5">
            Let's begin
          </h1>

          <div className="mt-5 mr-5 flex justify-end gap-0 ">
            <HiMapPin className="text-black text-3xl  "></HiMapPin>
            <div className="font-bold text-4xl -mt-3">
              <Country></Country>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center text-black">
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-[320px] h-[50px] rounded-xl p-2"
              placeholder="username*"
            ></input>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="w-[320px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Whatsapp number*"
            ></input>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-[320px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Email*"
            ></input>
          </div>
          <div className="flex flex-row gap-1">
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              className="w-[60px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Age*"
            ></input>
            <input
              type="number"
              onChange={(e) => setHeight(e.target.value)}
              className="w-[90px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Height(cm)*"
            ></input>
            <input
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              className="w-[100px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Weight*(kg)"
            ></input>
            <div className="p- border-1 border-black  ">
              <select
                className="w-[60px] h-[50px] rounded-lg shadow-2xl"
                onChange={(e) => setGender(e.target.value)}
              >
                <option className="" value="Not Selected">
                  Sex
                </option>

                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <input
              type="number"
              maxLength="6"
              onChange={(e) => setPin(e.target.value)}
              className="w-[140px] h-[50px] rounded-xl p-2 text-black"
              placeholder="6 digit login pin*"
            ></input>
            <input
              type="number"
              maxLength="6"
              onChange={(e) => setConfirmPin(e.target.value)}
              className="w-[140px] h-[50px] rounded-xl p-2 text-black"
              placeholder="Re-enter 6 digit login pin*"
            ></input>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5 ">
          <Link to="/login">
            <button className="ml-5 bg-[#283143] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300">
              Log in
            </button>
          </Link>
          <button className="mr-5  bg-[#FAA200] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300">
            Sign Up
          </button>
        </div>
      </div>

      {/* Destop-view */}

      <div className="bgsignUp w-screen  hidden sm:flex justify-center ">
        <div className="flex justify-center mt-auto mb-auto">
          <div className="">
            <img
              className=" w-[450px] h-[600px] rounded-l-3xl"
              src="img/Rectangle.png"
            />
          </div>
          <div className="bg-gray-100  w-[450px] h-[600px] rounded-r-3xl  ">
            <div className="flex flex-col items-start ml-6">
              <img className="mt-10 w-28 " src="img/image 3.png" />
              <h1 className="text-2xl text-black ml-10">Welcome!</h1>
            </div>

            <div className="-mt-10 mr-5 flex justify-end gap-0 ">
              <VscLocation className="text-black text-3xl  "></VscLocation>
              <div className="font-bold text-4xl -mt-3">
                <Country></Country>
              </div>
            </div>

            <div className="flex flex-col gap-5 -mt-10">
              <input
                onChange={(e) => setName(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl mt-12 ml-16 text-black"
                placeholder="username*"
              ></input>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl ml-16 text-black"
                placeholder="Whatsapp number*"
              ></input>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl ml-16 text-black"
                placeholder="Email*"
              ></input>

              <div className="flex flex-row gap-1 ml-16">
                <input
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                  className="w-[60px] h-[50px] rounded-xl p-2 text-black"
                  placeholder="Age*"
                ></input>
                <input
                  type="number"
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-[90px] h-[50px] rounded-xl p-2 text-black"
                  placeholder="Height(cm)*"
                ></input>
                <input
                  type="number"
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-[100px] h-[50px] rounded-xl p-2 text-black"
                  placeholder="Weight*(kg)"
                ></input>
                <div className="p- border-1 border-black text-gray-500  ">
                  <select
                    className="w-[60px] h-[50px] rounded-lg shadow-2xl"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option className="" value="Not Selected">
                      Sex
                    </option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-8 ml-16">
                <input
                  maxLength={6}
                  onChange={(e) => setPin(e.target.value)}
                  type="text"
                  className="w-[140px] h-[50px] rounded-xl p-2 text-black"
                  placeholder="6 digit login pin*"
                ></input>
                <input
                  maxLength={6}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  type="text"
                  className="w-[140px] h-[50px] rounded-xl p-2 text-black"
                  placeholder="Re-enter 6 digit login pin*"
                ></input>
              </div>
            </div>
            <div className="flex flex-row gap-12 justify-center mt-10">
              <Link to="/login">
                <button className="w-[135px] h-[45px] bg-[#283143] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300">
                  Log in
                </button>
              </Link>

              {/* <button onClick={notifyAndApiCall} className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300">
                Sign Up
              </button> */}

              {load == false ? (
                <button
                  onClick={notifyAndApiCall}
                  className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  onClick={notifyAndApiCall}
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

export default Signup;
