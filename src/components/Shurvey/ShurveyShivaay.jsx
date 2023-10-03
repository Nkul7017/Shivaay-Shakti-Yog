import React, { Fragment, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { dataDaily } from "./SurveyData.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiArrowBack } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import { BsCheckLg } from "react-icons/bs";

import logo from "../../../public/logo.png";
import img1 from "../../../public/ShurveyImg/498.png";
import img2 from "../../../public/ShurveyImg/499.png";
import img3 from "../../../public/ShurveyImg/500.png";
import img4 from "../../../public/ShurveyImg/501.png";
import img6 from "../../../public/ShurveyImg/506.png";
import fill from "../../../public/ShurveyImg/fill.png";
import notFill from "../../../public/ShurveyImg/notFill.png";
import CheckButton from "./CheckButton.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Goalbtn from "./Goalbtn.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

AOS.init({
  duration: 1200,
});

const ShurveyShivaay = ({ data, setLogin,setShurveyPopup,logovideo }) => {
  
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(1);
  const [msg, setMsg] = useState("");

  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [data]);
  const [ques2, setQues2] = useState("");
  const [ques3, setQues3] = useState("");
  const [ques4, setQues4] = useState("");
  const [bg, setBg] = useState();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [other, setOther] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [yogaLevel, setYogaLevel] = useState("");
  const [goal, setGoal] = useState([]);
  const [filterGoal, setFilterGoal] = useState([]);

  const [dailyLife, setDailyLife] = useState([]);
  const [Country, setCountry] = useState("India");

  const [timeSlot, setTimeSlot] = useState([]);
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState(null);

  const handleOpen = () => setOpen(!open);
  const { countries } = useCountries();

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    setTimeout(() => {
      // handleOpen();
    }, 100000);
  }, []);

  const [Shurveygoals,setshurveygoals] =useState([
    "Weight Management",
    "PCOS",
    "Diabetes",
    "Mental Health",
    "Flexibility",
    "Arthritis",
    "Asthama",
    "General Well Being",
    "Spirituality"
  ]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const ShurveyData = {
    name,
    dob,
    gender,
    height:heightUnit==="in"?height*2.54:height,
    weight:weightUnit==="pnd"?weight*0.45359237:weight,
    level: yogaLevel,
    goals: goal,
    dailyLife,
    country: Country,
    timeSlot,
    whatsapp,
    email,
  };

  const SignUpData = {
    name: name,
    email: email,
    phone: whatsapp,
    pin,
    age: dob,
    height: height,
    weight: weight,
    gender: gender,
    country: Country,
  };

  const formSubmit = () => {
    shurveySubmit();
  };

  useEffect(() => {
    if (data) {
      setOpen(!open);
    } else {
    }
  }, [data]);

  const handleChange = (event) => {
    setCountry(event);
  };

  useEffect(() => {
  }, [dailyLife]);

  const shurveySubmit = () => {
    setMsg("Form Submitting....");
    console.log("ShurveyData")
console.log(ShurveyData);
    // axios
    //   .post("https://shivayshaktibackend.onrender.com/trainee", SignUpData)
    //   .then((response) => {
    //     // console.log(response.data);
    //     localStorage.setItem("ID", JSON.stringify(response.data._id));
    //     setLogin(true);

    //     setTimeout(() => {
    //       const local_ID = localStorage.getItem("ID");
    //       refreshPage();
    //       // console.log("local storage id shurvey page", local_ID);
    //       navigate("/category/our-programs");
    //     }, 3500);

        axios
          .post(
            "https://shivayshaktibackend.onrender.com/surveyItem",
            ShurveyData
          )
          .then((response) => {
            console.log(response.data);
            setTimeout(() => {
              setMsg("Form Submitted");

              setTimeout(() => {
                setPage(1);
                setMsg("");
                setName("");
                setDailyLife([]);
                setDob("");
                setEmail("");
                setGender("");
                setHeight("");
                setWeight("");
                setYogaLevel("");
                setGoal([]);
                setTimeSlot([]);
                setWhatsapp("");

                setOpen(false);
                setPopup(true);

              }, 2300);
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
          });
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  };

  function handle(item) {
   if (!goal.includes(item)) setGoal([...goal, item]);
    else setGoal(goal.filter((value) => value !== item));
  }
  return (
    <>
      
     
     <Popup
          open={data}
            onClose={data}
            position="center center"
            closeOnDocumentClick={false}
            contentStyle={{
           border:"none",
              display:"flex",
              justifyContent:"center",
              backgroundColor: "rgba(255, 255, 255, 0.5 )",
              width:"100vw",
              height:"100vh",
            }}
          >
        <>
          <div
            className=" sm:hidden justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none "
            // data-aos="zoom-in"
          >
            <div className="relative w-auto mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-screen sm:w-[360px]  h-screen sm:h-[720px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between  border-b border-solid border-slate-200 rounded-t">
                  <div
                    className={`${
                      page == 1
                        ? "bg-[url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')]"
                        : page == 2
                        ? "bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1115547218720604210/2.png')]"
                        : page == 3
                        ? "bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1115547219219722280/3.png')]"
                        : page == 4
                        ? "bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1115547219517521971/4.png')]"
                        : "bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1115547219815313469/5.png')]"
                    }  bg-contain  w-screen sm:w-[360px]  h-screen sm:h-[720px]   `}
                  >
                    <div className="pt-5">
                      <div className="flex justify-between mx-3 items-center text-center">
                        <button
                          disabled={page == 1}
                          className=" text-2xl  "
                          title="Back"
                          onClick={() => {
                            setPage(page - 1);
                          }}
                        >
                          <BiArrowBack />
                        </button>
                        <div>
                          <img className="w-24" src={logo} alt="" />
                        </div>
                        <div
                          className="cursor-pointer text-xl"
                          title="close"
                          onClick={() => {
                            setOpen(!open);
                          }}
                        >
                          <HiXMark />
                        </div>
                      </div>

                      <div className="  w-full flex items-center justify-center ">
                        <div className="flex flex-col items-center gap-3 justify-center text-center">
                          {page == 1 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 text-center  ">
                                <img src={img1} alt="track" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont text-[19px]">
                                  What is your Name?
                                </h1>

                                <input
                                  onChange={(e) => setName(e.target.value)}
                                  className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                  type="text"
                                  placeholder="enter name"
                                />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  When were you born?
                                </h1>

                                <input
                                  onChange={(e) => setDob(e.target.value)}
                                  className="flex items-center w-72 h-10 p-2 rounded-lg shadow-2xl bg-white"
                                  type="date"
                                  placeholder="dd/mm/yyyy"
                                />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  You identify as?
                                </h1>
                                <div className="flex  items-center gap-2 px-2">
                                  <div className="flex gap-1 ">
                                    <button
                                      onClick={() => {
                                        setGender("Male");
                                      }}
                                      className={` bg-white ${
                                        gender == "Male" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Male
                                    </button>
                                    <button
                                      onClick={() => {
                                        setGender("Female");
                                      }}
                                      className={` bg-white ${
                                        gender == "Female" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Female
                                    </button>
                                    <button
                                      onClick={() => {
                                        setToggle(!toggle);
                                        setGender("Others");
                                      }}
                                      className={` bg-white ${
                                        gender == "Others" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Others
                                    </button>
                                    {toggle && (
                                      <>
                                        <br />
                                        <input
                                          onChange={(e) =>
                                            setGender(e.target.value)
                                          }
                                          className=" flex p-2 items-center w-[120px] h-10 rounded-lg shadow-xl bg-white font-semi textFont"
                                          type="text"
                                          placeholder="mention"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 2 */}

                          {page == 2 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img2} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont text-[19px]">
                                  Your height?{" "}
                                </h1>

                                <input
                                  onChange={(e) => {
                                    setHeight(parseFloat(e.target.value));
                                  }}
                                  onFocus={() => setToggle1(true)}
                                  className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                  type="number"
                                  placeholder="enter height"
                                />
                                {toggle1 && (
                                  <div className="flex flex-col gap-2 self-start    ">
                                    <div className=" flex items-center self-start ">
                                      <input
                                        type="radio"
                                        id="heightcm"
                                        name="heightUnit"
                                        onChange={(e) =>
                                          setHeightUnit(e.target.value)
                                        }
                                        checked={heightUnit == "cm"}
                                        value="cm"
                                        className="   shadow-2xl bg-white"
                                      />{" "}
                                      &nbsp;
                                      <label htmlFor="heightcm" className=" ">
                                        cm
                                      </label>
                                    </div>
                                    <div className=" flex items-center  self-start ">
                                      <input
                                        type="radio"
                                        id="heightin"
                                        name="heightUnit"
                                        onChange={(e) =>
                                          setHeightUnit(e.target.value)
                                        }
                                        checked={heightUnit == "in"}
                                        value="in"
                                        className="  shadow-2xl bg-white"
                                      />
                                      &nbsp;
                                      <label htmlFor="heightin">in</label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  Your approximate weight?
                                </h1>

                                <input
                                  onChange={(e) => {
                                     setWeight(parseFloat(e.target.value));
                                  }}
                                  onFocus={() => setToggle2(true)}
                                  className="flex items-center w-72 h-10 p-2 rounded-lg shadow-2xl bg-white"
                                  type="number"
                                  placeholder="enter weight"
                                />
                                {toggle2 && (
                                  <div className="flex flex-col gap-2 self-start    ">
                                    <div className=" flex items-center self-start ">
                                      <input
                                        type="radio"
                                        id="weightkg"
                                        name="weightUnit"
                                        onChange={(e) =>
                                          setWeightUnit(e.target.value)
                                        }
                                        checked={weightUnit == "kg"}
                                        value="kg"
                                        className="   shadow-2xl bg-white"
                                      />{" "}
                                      &nbsp;
                                      <label htmlFor="weightkg" className=" ">
                                        kg
                                      </label>
                                    </div>
                                    <div className=" flex items-center  self-start ">
                                      <input
                                        type="radio"
                                        id="weightpnd"
                                        name="weightUnit"
                                        onChange={(e) =>
                                          setWeightUnit(e.target.value)
                                        }
                                        checked={weightUnit == "pnd"}
                                        value="pnd"
                                        className="  shadow-2xl bg-white"
                                      />
                                      &nbsp;
                                      <label htmlFor="weightpnd">pound</label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 text-center"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  At what level you are in terms of practising
                                  yoga?
                                </h1>
                                <div
                                  className="flex  items-center  px-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => setYogaLevel("Beginner")}
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Beginner"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[100px] h-10  text-center`}
                                    >
                                      Beginner
                                    </button>
                                    <button
                                      onClick={() =>
                                        setYogaLevel("Intermediate")
                                      }
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Intermediate"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[120px] h-10  text-center`}
                                    >
                                      Intermediate{" "}
                                    </button>
                                    <button
                                      onClick={() => setYogaLevel("Advance")}
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Advance"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[100px] h-10  text-center`}
                                    >
                                      Advance{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 3 */}
                          {page == 3 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img3} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Select the goal/ goals and diseases that you
                                  wish to treat through yoga
                                </h1>
                              </div>
                              <div
                                className="flex gap-2 flex-wrap px-3 gap-y-5 justify-center mt-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                {Shurveygoals.map((item, index) =>
                                  
                                    <button
                                      onClick={() => handle(item)}
                                      className={` bg-white ${
                                        goal.includes(item)
                                          ? " shurveyBtn "
                                          : ""
                                      } font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-3  h-9  text-center`}
                                    >
                                      {item}
                                    </button>
                                  )
                                }
                                 <button
                                      onClick={() => setToggle4(!toggle4)}
                                      className={` bg-white ${
                                         toggle4 ? " shurveyBtn "
                                          : ""
                                      } font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-3  h-9  text-center`}
                                    >
                                      others
                                    </button>
                                {toggle4 && (
                                  <>
                                    <br />
                                    <input
                                     onBlur={(e)=>{
                                      setGoal([...goal,e.target.value]);
                                      setshurveygoals([...Shurveygoals,e.target.value]);
                                      setToggle4(!toggle4);
                                     }}
                                     
                                      className=" flex p-2 items-center w-[120px] h-10 rounded-lg shadow-xl bg-white font-semi textFont"
                                      type="text"
                                      placeholder="mention"
                                    />
                                  </>
                                )}
                              </div>
                            </>
                          )}

                          {page == 4 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img4} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  How does your daily life looks like?
                                  <br />
                                  <span className="text-sm">
                                    Select all the instances that applies
                                  </span>
                                </h1>
                              </div>
                              <div>
                                <div className="flex flex-wrap gap-6 h-80 overflow-auto items-center justify-center">
                                  {dataDaily.map((item, index) => {
                                    return (
                                      <CheckButton
                                        item={item}
                                        key={index}
                                        setDailyLife={setDailyLife}
                                        dailyLife={dailyLife}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 5  */}

                          {page == 5 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-5 ">
                                <img src={img6} alt="" />
                              </div>
                              <div
                                className="pt-2 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Where are you from?
                                </h1>
                              </div>
                              <div className="w-48">
                                <Select
                                  onChange={handleChange}
                                  size="lg"
                                  label={Country}
                                  selected={(element) =>
                                    element &&
                                    React.cloneElement(element, {
                                      className:
                                        "flex items-center px-0 gap-2 pointer-events-none",
                                    })
                                  }
                                >
                                  {countries.map(({ name, flags }) => (
                                    <Option
                                      key={name}
                                      value={name}
                                      className="flex items-center gap-2"
                                    >
                                      <img
                                        src={flags.svg}
                                        alt={name}
                                        className="h-5 w-5 rounded-full object-cover"
                                      />
                                      {name}
                                    </Option>
                                  ))}
                                </Select>
                              </div>
                              <div>
                                <h1 className="text-[10px]">
                                  What are your preferred yoga/exercise timings?
                                </h1>
                              </div>
                              <div>
                                <div className="flex text-center items-center ">
                                  {timeSlot.includes("4:00 am to 6:00:am") ||
                                  timeSlot.includes("6:00am to 8:00am") ||
                                  timeSlot.includes("8:00am to 10:00am") ||
                                  timeSlot.includes("10:00am to 12:00pm") 
                                   ? (
                                    <img className="w-10" src={fill} alt="" />
                                  ) : (
                                    <img
                                      className="w-10"
                                      src={notFill}
                                      alt=""
                                    />
                                  )}
                                  <span className="text-[15px]">
                                    I am a morning person!
                                  </span>
                                </div>
                                <div
                                  className="flex gap-2 flex-wrap px-2 gap-y-5 justify-center mt-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <button
                                    onClick={() =>
                                      {if(timeSlot.includes("4:00 am to 6:00:am"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="4:00 am to 6:00:am"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"4:00 am to 6:00:am"])}
                                    }
                                    className={` bg-white ${
                                      timeSlot.includes("4:00 am to 6:00:am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    4:00 am to 6:00:am{" "}
                                  </button>
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("6:00am to 8:00am"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="6:00am to 8:00am"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"6:00am to 8:00am"])}
                                  }
                                    className={` bg-white ${
                                      timeSlot.includes("6:00am to 8:00am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    6:00am to 8:00am{" "}
                                  </button>
                                  {/* <button className="bg-white font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg  px-2 h-9  text-center">
                                    8:00am to 10:00am{" "}
                                  </button> */}
                                  <button
                                     onClick={() =>
                                      {if(timeSlot.includes("8:00am to 10:00am"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="8:00am to 10:00am"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"8:00am to 10:00am"])}
                                    }
                                    className={` bg-white ${
                                      timeSlot.includes("8:00am to 10:00am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    8:00am to 10:00am{" "}
                                  </button>
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("10:00am to 12:00pm"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="10:00am to 12:00pm"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"10:00am to 12:00pm"])}
                                  }
                                    className={` bg-white ${
                                      timeSlot.includes("10:00am to 12:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    10:00am to 12:00pm
                                  </button>
                                </div>
                                <div className="flex text-center items-center ">
                                  {timeSlot.includes("3:00pm to 5:00pm") ||
                                  timeSlot.includes("5:00pm to 7:00pm" )? (
                                    <img className="w-10" src={fill} alt="" />
                                  ) : (
                                    <img
                                      className="w-10"
                                      src={notFill}
                                      alt=""
                                    />
                                  )}
                                  <span className="text-[15px]">
                                    I like the evening vibe!
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div
                                  className="flex gap-2 flex-wrap px-2 gap-y-5 justify-center mt-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("3:00pm to 5:00pm"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="3:00pm to 5:00pm"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"3:00pm to 5:00pm"])}
                                  }
                                    className={`bg-white ${
                                      timeSlot.includes("3:00pm to 5:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    3:00pm to 5:00pm
                                  </button>
                                  <button
                                    onClick={() =>
                                      {if(timeSlot.includes("5:00pm to 7:00pm"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="5:00pm to 7:00pm"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"5:00pm to 7:00pm"])}
                                    }
                                    className={`bg-white ${
                                      timeSlot.includes("5:00pm to 7:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    5:00pm to 7:00pm{" "}
                                  </button>
                                </div>
                              </div>
                              <div>
                                {/* <div className="flex text-center items-center ">
                                  <img className="w-10" src={notFill} alt="" />
                                  <span className="text-[15px]">other </span>
                                </div> */}
                              </div>
                            </>
                          )}

                          {/* Page 6 */}

                          {page == 6 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img6} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Let's wrap  it up <br />
                                  <span className="text-[12px] pl-3 pr-4 ">
                                    Fill up your contact details and we will
                                    send you the free trial session information
                                  </span>
                                </h1>
                              </div>
                              <div>
                                <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Enter your whatsapp number{" "}
                                  </h1>

                                  <input
                                    onChange={(e) =>
                                      setWhatsapp(e.target.value)
                                    }
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="number"
                                    placeholder="Enter Number"
                                  />
                                </div>
                                <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Enter your email id{" "}
                                  </h1>

                                  <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="email"
                                    placeholder="Email"
                                  />
                                </div>
                                {/* <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Set Pin
                                  </h1>

                                  <input
                                    onChange={(e) => setPin(e.target.value)}
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div> */}
                              </div>
                            </>
                          )}
                          <div>
                            <button
                              disabled={
                                ((name.length <= 0 ||
                                  dob.length <= 0 ||
                                  gender.length <= 0) &&
                                  page == 1) ||
                                ((height===undefined ||
                                  weight===undefined ||
                                  yogaLevel.length <= 0) &&
                                  page == 2) ||
                                (goal.length <= 0 && page == 3) ||
                                (dailyLife.length <= 0 && page == 4) ||
                                (timeSlot.length <= 0 && page == 5) ||
                                ((whatsapp.length <= 0 || email.length <= 0) &&
                                  page == 6)
                              }
                              className=" bg-[#FAA200]  shadow-[#FAA200] mt-8 shadow-lg text-white rounded-3xl w-[100px] h-10 text-center disabled:bg-white disabled:text-orange-400 disabled:border-orange-400 border-2"
                              onClick={() => {
                                if (page >= 6) {
                                  formSubmit();
                                } else {
                                  nextPage();
                                }
                              }}
                            >
                              {page == 6 ? "Submit" : " NEXT"}
                            </button>

                            <h6 className="text-green-600 mt-3">{msg}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" hidden  sm:flex overflow-x-hidden overflow-y-auto fixed 
             inset-0 z-50  outline-none focus:outline-none scrollbar-hide "
            data-aos="zoom-in" 
          >
            
              {/*content*/}
              <div className="border-0 bg-[url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')]   shadow-lg relative sm:px-10 md:px-14 lg:px-20  grid md:grid-cols-2 w-screen  h-screen  outline-none focus:outline-none">
              <div className={`hidden md:flex items-center  justify-center  h-[100vh]`} style={{transition:"0.8s width,0.8s height"}}  >
                <img src={logovideo} alt=""  className={` md:h-[50vh]   lg:h-[64vh]   `} />
                </div>
                {/*header*/}
                <div className="flex  border-b border-solid border-slate-200 rounded-t">
                  <div
                    className=" bg-contain  w-screen  h-screen flex items-center justify-center   "
                  >
                    <div className=" h-[90vh] relative  flex justify-center items-center    ">
                      <div className="absolute mx-3 top-10 right-0   text-center">
                        <div
                          className="cursor-pointer text-3xl"
                          title="close"
                          onClick={() => {
                            setShurveyPopup(!data);
                          }}
                        >
                          <HiXMark />
                        </div>
                      </div>
                      <div className="absolute  bottom-28 right-60  text-center">
   
                      </div>

                      <div className="  w-[400px]   flex items-center justify-center ">
                        <div className="flex flex-col items-center gap-3  ">
                          {page == 1 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 text-center  ">
                                <img src={img1} alt="track" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont text-[19px]">
                                  What is your Name?
                                </h1>

                                <input
                                  onChange={(e) => setName(e.target.value)}
                                  className="font-light flex items-center p-2 w-72 h-10 rounded-lg  bg-white"
                                  type="text"
                                  placeholder="enter name"
                                />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  When were you born?
                                </h1>

                                <input
                                  onChange={(e) => setDob(e.target.value)}
                                  className="flex items-center w-72 h-10 p-2 rounded-lg  bg-white"
                                  type="date"
                                  placeholder="dd/mm/yyyy"
                                />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  You identify as?
                                </h1>
                                <div className="flex  items-center gap-2 px-2">
                                  <div className="flex gap-1 ">
                                    <button
                                      onClick={() => {
                                        setGender("Male");
                                      }}
                                      className={` bg-white ${
                                        gender == "Male" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2  text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Male
                                    </button>
                                    <button
                                      onClick={() => {
                                        setGender("Female");
                                      }}
                                      className={` bg-white ${
                                        gender == "Female" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2  text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Female
                                    </button>
                                    <button
                                      onClick={() => {
                                        setToggle(!toggle);
                                        setGender("Others");
                                      }}
                                      className={` bg-white ${
                                        gender == "Others" ? " shurveyBtn " : ""
                                      }  font-semi  textFont border-[#FAA200] border-2  text-[#FAA200] rounded-lg w-[70px] h-10  text-center`}
                                    >
                                      Others
                                    </button>
                                    {toggle && (
                                      <>
                                        <br />
                                        <input
                                          onChange={(e) =>
                                            {setGender(e.target.value);
                                            }
                                          }
                                          className=" flex shurveyBtn p-2 items-center w-[120px] border-2 border-[#FAA200] h-10 rounded-lg  font-semi  "
                                          type="text"
                                          placeholder="mention"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 2 */}

                          {page == 2 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img2} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont text-[19px]">
                                  Your height?{" "}
                                </h1>

                                <input
                                  onChange={(e) => {
                                    setHeight(parseFloat(e.target.value));
                                  }}
                                  onFocus={() => setToggle1(true)}
                                  className="font-light flex items-center p-2 w-72 h-10 rounded-lg  bg-white"
                                  type="number"
                                  placeholder="enter height"
                                />
                                {toggle1 && (
                                  <div className="flex  gap-2 self-start    ">
                                    <div className=" flex items-center self-start ">
                                      <input
                                        type="radio"
                                        id="heightcm"
                                        name="heightUnit"
                                        onChange={(e) =>
                                          setHeightUnit(e.target.value)
                                        }
                                        checked={heightUnit == "cm"}
                                        value="cm"
                                        className="    "
                                    
                                      />{" "}
                                      &nbsp;
                                      <label htmlFor="heightcm" className=" ">
                                        cm
                                      </label>
                                    </div>
                                    <div className=" flex items-center  self-start ">
                                      <input
                                        type="radio"
                                        id="heightin"
                                        name="heightUnit"
                                        onChange={(e) =>
                                          setHeightUnit(e.target.value)
                                        }
                                        checked={heightUnit == "in"}
                                        value="in"
                                        className="  "
                                      />
                                      &nbsp;
                                      <label htmlFor="heightin">Inches</label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  Your approximate weight?
                                </h1>

                                <input
                                  onChange={(e) => {
                                     setWeight(parseFloat(e.target.value));
                                  }}
                                  onFocus={() => setToggle2(true)}
                                  className="flex items-center w-72 h-10 p-2 rounded-lg  bg-white"
                                  type="number"
                                  placeholder="enter weight"
                                />
                                {toggle2 && (
                                  <div className="flex  gap-2 self-start    ">
                                    <div className=" flex items-center self-start ">
                                      <input
                                        type="radio"
                                        id="weightkg"
                                        name="weightUnit"
                                        onChange={(e) =>
                                          setWeightUnit(e.target.value)
                                        }
                                        checked={weightUnit == "kg"}
                                        value="kg"
                                        className="   "
                                      />{" "}
                                      &nbsp;
                                      <label htmlFor="weightkg" className=" ">
                                        kg
                                      </label>
                                    </div>
                                    <div className=" flex items-center  self-start ">
                                      <input
                                        type="radio"
                                        id="weightpnd"
                                        name="weightUnit"
                                        onChange={(e) =>
                                          setWeightUnit(e.target.value)
                                        }
                                        checked={weightUnit == "pnd"}
                                        value="pnd"
                                        className="  "
                                      />
                                      &nbsp;
                                      <label htmlFor="weightpnd">Pound</label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 text-center"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi text-[19px] textFont">
                                  At what level you are in terms of practising
                                  yoga?
                                </h1>
                                <div
                                  className="flex  items-center  px-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => setYogaLevel("Beginner")}
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Beginner"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[100px] h-10  text-center`}
                                    >
                                      Beginner
                                    </button>
                                    <button
                                      onClick={() =>
                                        setYogaLevel("Intermediate")
                                      }
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Intermediate"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[120px] h-10  text-center`}
                                    >
                                      Intermediate{" "}
                                    </button>
                                    <button
                                      onClick={() => setYogaLevel("Advance")}
                                      className={`bg-white font-semi textFont ${
                                        yogaLevel == "Advance"
                                          ? " shurveyBtn "
                                          : ""
                                      }  border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg w-[100px] h-10  text-center`}
                                    >
                                      Advance{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 3 */}
                          {page == 3 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img3} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Select the goal/ goals and diseases that you
                                  wish to treat through yoga
                                </h1>
                              </div>
                              <div
                                className="flex gap-2 flex-wrap px-3 gap-y-5 justify-center mt-5"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                {Shurveygoals.map((item, index) =>
                                  
                                    <button
                                      onClick={() => handle(item)}
                                      className={` bg-white ${
                                        goal.includes(item)
                                          ? " shurveyBtn "
                                          : ""
                                      } font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-3  h-9  text-center`}
                                    >
                                      {item}
                                    </button>
                                  )
                                }
                                 <button
                                      onClick={() => setToggle4(!toggle4)}
                                      className={` bg-white ${
                                         toggle4 ? " shurveyBtn "
                                          : ""
                                      } font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-3  h-9  text-center`}
                                    >
                                      others
                                    </button>
                                {toggle4 && (
                                  <>
                                    <br />
                                    <input
                                     onBlur={(e)=>{
                                      setGoal([...goal,e.target.value]);
                                      setshurveygoals([...Shurveygoals,e.target.value]);
                                      setToggle4(!toggle4);
                                     }}
                                     
                                      className=" flex p-2 items-center w-[120px] h-10 rounded-lg shadow-xl bg-white font-semi textFont"
                                      type="text"
                                      placeholder="mention"
                                    />
                                  </>
                                )}
                              </div>
                            </>
                          )}

                          {page == 4 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img4} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto  "
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  How does your daily life looks like?
                                  <br />
                                  <span className="text-sm">
                                    Select all the instances that applies
                                  </span>
                                </h1>
                              </div>
                              <div>
                                <div className="flex flex-wrap gap-6 h-80 overflow-auto scrollbar-hide items-center justify-center">
                                  {dataDaily.map((item, index) => {
                                    return (
                                      <CheckButton
                                        item={item}
                                        key={index}
                                        setDailyLife={setDailyLife}
                                        dailyLife={dailyLife}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Page 5  */}

                          {page == 5 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-5 ">
                                <img src={img6} alt="" />
                              </div>
                              <div
                                className="pt-2 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Where are you from?
                                </h1>
                              </div>
                              <div className="w-48">
                                <Select
                                  onChange={handleChange}
                                  size="lg"
                                  label={Country}
                                  selected={(element) =>
                                    element &&
                                    React.cloneElement(element, {
                                      className:
                                        "flex items-center px-0 gap-2 pointer-events-none",
                                    })
                                  }
                                >
                                  {countries.map(({ name, flags }) => (
                                    <Option
                                      key={name}
                                      value={name}
                                      className="flex items-center gap-2"
                                    >
                                      <img
                                        src={flags.svg}
                                        alt={name}
                                        className="h-5 w-5 rounded-full object-cover"
                                      />
                                      {name}
                                    </Option>
                                  ))}
                                </Select>
                              </div>
                              <div>
                                <h1 className="text-[10px]">
                                  What are your preferred yoga/exercise timings?
                                </h1>
                              </div>
                              <div>
                                <div className="flex text-center items-center ">
                                  {timeSlot.includes("4:00 am to 6:00:am") ||
                                  timeSlot.includes("6:00am to 8:00am") ||
                                  timeSlot.includes("8:00am to 10:00am") ||
                                  timeSlot.includes("10:00am to 12:00pm") 
                                   ? (
                                    <img className="w-10" src={fill} alt="" />
                                  ) : (
                                    <img
                                      className="w-10"
                                      src={notFill}
                                      alt=""
                                    />
                                  )}
                                  <span className="text-[15px]">
                                    I am a morning person!
                                  </span>
                                </div>
                                <div
                                  className="flex gap-2 flex-wrap px-2 gap-y-5 justify-center mt-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <button
                                    onClick={() =>
                                      {if(timeSlot.includes("4:00 am to 6:00:am"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="4:00 am to 6:00:am"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"4:00 am to 6:00:am"])}
                                    }
                                    className={` bg-white ${
                                      timeSlot.includes("4:00 am to 6:00:am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    4:00 am to 6:00:am{" "}
                                  </button>
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("6:00am to 8:00am"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="6:00am to 8:00am"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"6:00am to 8:00am"])}
                                  }
                                    className={` bg-white ${
                                      timeSlot.includes("6:00am to 8:00am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    6:00am to 8:00am{" "}
                                  </button>
                                  {/* <button className="bg-white font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg  px-2 h-9  text-center">
                                    8:00am to 10:00am{" "}
                                  </button> */}
                                  <button
                                     onClick={() =>
                                      {if(timeSlot.includes("8:00am to 10:00am"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="8:00am to 10:00am"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"8:00am to 10:00am"])}
                                    }
                                    className={` bg-white ${
                                      timeSlot.includes("8:00am to 10:00am")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    8:00am to 10:00am{" "}
                                  </button>
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("10:00am to 12:00pm"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="10:00am to 12:00pm"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"10:00am to 12:00pm"])}
                                  }
                                    className={` bg-white ${
                                      timeSlot.includes("10:00am to 12:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    10:00am to 12:00pm
                                  </button>
                                </div>
                                <div className="flex text-center items-center ">
                                  {timeSlot.includes("3:00pm to 5:00pm") ||
                                  timeSlot.includes("5:00pm to 7:00pm" )? (
                                    <img className="w-10" src={fill} alt="" />
                                  ) : (
                                    <img
                                      className="w-10"
                                      src={notFill}
                                      alt=""
                                    />
                                  )}
                                  <span className="text-[15px]">
                                    I like the evening vibe!
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div
                                  className="flex gap-2 flex-wrap px-2 gap-y-5 justify-center mt-2"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <button
                                   onClick={() =>
                                    {if(timeSlot.includes("3:00pm to 5:00pm"))
                                    {
                                      setTimeSlot(timeSlot.filter((value)=>value!=="3:00pm to 5:00pm"))
                                    }
                                    else
                                    setTimeSlot([...timeSlot,"3:00pm to 5:00pm"])}
                                  }
                                    className={`bg-white ${
                                      timeSlot.includes("3:00pm to 5:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    3:00pm to 5:00pm
                                  </button>
                                  <button
                                    onClick={() =>
                                      {if(timeSlot.includes("5:00pm to 7:00pm"))
                                      {
                                        setTimeSlot(timeSlot.filter((value)=>value!=="5:00pm to 7:00pm"))
                                      }
                                      else
                                      setTimeSlot([...timeSlot,"5:00pm to 7:00pm"])}
                                    }
                                    className={`bg-white ${
                                      timeSlot.includes("5:00pm to 7:00pm")
                                        ? " shurveyBtn "
                                        : ""
                                    }  font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-2  h-9  text-center`}
                                  >
                                    5:00pm to 7:00pm{" "}
                                  </button>
                                </div>
                              </div>
                              <div>
                                {/* <div className="flex text-center items-center ">
                                  <img className="w-10" src={notFill} alt="" />
                                  <span className="text-[15px]">other </span>
                                </div> */}
                              </div>
                            </>
                          )}

                          {/* Page 6 */}

                          {page == 6 && (
                            <>
                              <div className=" bg-slate-200 w-40 h-8 mt-10 ">
                                <img src={img6} alt="" />
                              </div>
                              <div
                                className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                data-aos="zoom-in"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500"
                              >
                                <h1 className="font-semi textFont ">
                                  Let's wrap  it up <br />
                                  <span className="text-[12px] pl-3 pr-4 ">
                                    Fill up your contact details and we will
                                    send you the free trial session information
                                  </span>
                                </h1>
                              </div>
                              <div>
                                <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Enter your whatsapp number{" "}
                                  </h1>

                                  <input
                                    onChange={(e) =>
                                      setWhatsapp(e.target.value)
                                    }
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="number"
                                    placeholder="Enter Number"
                                  />
                                </div>
                                <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Enter your email id{" "}
                                  </h1>

                                  <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="email"
                                    placeholder="Email"
                                  />
                                </div>
                                {/* <div
                                  className="pt-5 flex flex-col items-center gap-5 font-roboto"
                                  data-aos="zoom-in"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="500"
                                  data-aos-duration="500"
                                >
                                  <h1 className="font-semi textFont text-[15px]">
                                    Set Pin
                                  </h1>

                                  <input
                                    onChange={(e) => setPin(e.target.value)}
                                    className="font-light flex items-center p-2 w-72 h-10 rounded-lg shadow-2xl bg-white"
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div> */}
                              </div>
                            </>
                          )}
                          <div  className=" flex gap-5  justify-center mt-8 items-center  " >
                            
                            <button
                              disabled={
                                ((name.length <= 0 ||
                                  dob.length <= 0 ||
                                  gender.length <= 0) &&
                                  page == 1) ||
                                ((height===undefined ||
                                  weight===undefined ||
                                  yogaLevel.length <= 0) &&
                                  page == 2) ||
                                (goal.length <= 0 && page == 3) ||
                                (dailyLife.length <= 0 && page == 4) ||
                                (timeSlot.length <= 0 && page == 5) ||
                                ((whatsapp.length <= 0 || email.length <= 0) &&
                                  page == 6)
                              }
                              className=" bg-[#FAA200]  shadow-[#FAA200] shadow-lg text-white rounded-3xl w-[100px] h-10 text-center disabled:bg-white disabled:text-orange-400 disabled:border-orange-400 border-2"
                              onClick={() => {
                                if (page >= 6) {
                                  formSubmit();
                                } else {
                                  nextPage();
                                }
                              }}
                            >
                              {page == 6 ? "Submit" : " NEXT"}
                            </button>
                            <button
                          disabled={page == 1}
                          className=" text-4xl   "
                          title="Back"
                          onClick={() => {
                            setPage(page - 1);
                          }}
                        >
                          <BiArrowBack />
                        </button>

                           
                          </div>
                          <h6 className="text-green-600 block mt-3">{msg}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
     
      
        
          </Popup>
        <Popup
          // open={data}
            // onClose={data}
            position="center center"
            closeOnDocumentClick={false}
            contentStyle={{
           border:"none",
              display:"flex",
              justifyContent:"center",
              backgroundColor: "rgba(255, 255, 255, 0.5 )",
              width:"100vw",
              height:"100vh",
              // backdropFilter: "blur(2px)",
            }}
          >
  <div className="relative  ">
        <div className="bg-blue w-screen h-screen flex justify-center items-center ">
       <h1 className=" text-5xl ">Congratulaion</h1>
        </div>
           <button onClick={()=>setPopup(false)} className=" absolute top-20 sm:top-18 md:top-16 sm:right-4 right-2 md:right-16  text-3xl  ">
              <AiFillCloseCircle/>
            </button>
        </div>

          </Popup>
    </>
  );
};

export default ShurveyShivaay;
