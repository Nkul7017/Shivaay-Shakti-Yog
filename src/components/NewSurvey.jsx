import React, { useMemo, useState } from "react";
import Popup from "reactjs-popup";
import { HiXMark } from "react-icons/hi2";
import countryList from "react-select-country-list";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
function NewSurvey({ shurveyPopup, setShurveyPopup, logovideo }) {
  const navigate = useNavigate();
  const options1 = [
    { value: "work_office", label: "Work at the office" },
    { value: "work_remote", label: "Work remotely from home" },
    { value: "exercise_regularly", label: "Exercise regularly" },
    { value: "spend_time_family", label: "Spend time with family" },
    { value: "socialize_friends", label: "Socialize with friends" },
    {
      value: "leisure_activities",
      label: "Engage in leisure activities (e.g., reading, hobbies)",
    },
    { value: "outdoor_activities", label: "Participate in outdoor activities" },
    { value: "relaxation", label: "Relax and unwind" },
    { value: "travel_commute", label: "Commute or travel regularly" },
    { value: "other", label: "Other" },
  ];

  const options = useMemo(() => countryList().getData(), []);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [congrats, setCongrats] = useState(false);
  const [data, setData] = useState({
    name: "",
    born: "",
    country: "",
    gender: "",
    specify: "",
    height: 0,
    hunit: "",
    weight: 0,
    wunit: "",
    level: "",
    goals: [],
    gspecify: "",
    daily_life_looks: [],
    daily_life: [],
    morning: [],
    evening: [],
    email: "",
    contact: null,
    next: 0,
    message: "",
  });

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handle1(e) {
    setToggle(true);
    setData({ ...data, gender: e.target.value });
  }

  function handle2(e) {
    setToggle1(!toggle2);
    setData({ ...data, level: e.target.value });
  }

  function handle3(str, e) {
    if (!data[str].includes(e.target.value)) {
      data[str].push(e.target.value);
      setData(data);
    } else {
      data[str] = data[str].filter((v) => v !== e.target.value);
      setData(data);
    }
  }

  function handleChange(e) {
    setData({ ...data, daily_life_looks: e });
  }

  async function submit1() {
    try {
      const response = await axios.post(
        "https://shivaay-shakti-backend-vm3k.onrender.com/api/survey",
        data
      );
      if (response.data.success === true) {
        setShurveyPopup(false);
        setCongrats(true);
      }
      console.log(response);
      setData({
        name: "",
        born: "",
        country: "",
        gender: "",
        specify: "",
        height: 0,
        hunit: "",
        weight: 0,
        wunit: "",
        level: "",
        goals: [],
        gspecify: "",
        daily_life_looks: [],
        daily_life: [],
        morning: [],
        evening: [],
        email: "",
        contact: null,
        next: 0,
        message: "",
      });
    } catch (e) {
      setData({ ...data, message: "Server Error" });
      console.log(e);
    }
  }
  function handlesubmit() {
    setData({ ...data, message: "loading" });
    if (data.hunit === "cm") {
      data.height = parseFloat(data.height) * 0.393701;
    }
    if (data.wunit === "pound") {
      data.weight = parseFloat(data.weight) * 0.453592;
    }
    if (
      data.name !== "" &&
      data.born !== "" &&
      data.gender !== "" &&
      data.height > 0 &&
      data.weight > 0 &&
      data.level !== "" &&
      data.country !== "" &&
      data.email !== "" &&
      data?.contact !== null
    ) {
      if (data.gender == "specify") {
        if (data.specify !== "") {
          if (data.goals.includes("Specify")) {
            if (data.gspecify !== "") submit1();
            else {
              setData({ ...data, message: "* All Fields are Mandatory" });
            }
          } else submit1();
        }
      } else if (data.goals.includes("Specify")) {
        if (data.gspecify !== "") submit1();
        else setData({ ...data, message: "* All Fields are Mandatory" });
      } else {
        submit1();
      }
    } else {
      setData({ ...data, message: "* All Fields are Mandatory" });
    }
  }

  return (
    <>
      <Popup
        open={shurveyPopup}
        lockScroll={true}
        contentStyle={{
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className=" relative flex flex-col md:flex-row items-center justify-center w-screen h-screen ">
          <div className="w-1/3 md:w-1/2">
            <img src={logovideo} alt="" />
          </div>

          {/*----------------------------- Page1------------------------------------ */}
          {data?.next === 0 && (
            <>
              <div className=" w-[80vw] md:w-[60vw] lg:w-[500px]  lg:py-32 overflow-y-scroll  md:px-10 flex  flex-col gap-3 lg:gap-5 ">
                <div className=" flex flex-col gap-1 ">
                  <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handle}
                    className=" w-full h-8 rounded p-1"
                  />
                </div>

                <div className=" flex flex-row justify-between ">
                  <div className=" flex flex-col gap-1">
                    <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={data.born}
                      name="born"
                      onChange={handle}
                      className="w-[160px] p-3 h-8  rounded "
                    />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <label
                      htmlFor=""
                      className="  bluish text-sm lg:text-[18px]"
                    >
                      Your Country
                    </label>
                    <select
                      name="country"
                      value={data.country}
                      onChange={handle}
                      id=""
                      className="  pl-3 button3 w-[160px]"
                      style={{ height: "35px" }}
                    >
                      <option className="  bg-white  text-black ">
                        Select Options
                      </option>
                      {options?.map((value, i) => (
                        <option key={i} className="  bg-white  text-black ">
                          {value.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className=" flex flex-col gap-2 lg:gap-3">
                    <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                      Gender
                    </label>
                    <div className=" flex flex-wrap gap-3 md:justify-between">
                      <button
                        onClick={handle1}
                        value="male"
                        className={` ${
                          toggle && data.gender == "male"
                            ? "button3 "
                            : "button2a"
                        } `}
                      >
                        Male
                      </button>
                      <button
                        onClick={handle1}
                        className={` ${
                          toggle && data.gender == "female"
                            ? "button3 "
                            : "button2a"
                        } `}
                        value="female"
                      >
                        Female
                      </button>
                      <button
                        onClick={handle1}
                        className={` ${
                          toggle && data.gender == "other"
                            ? "button3 "
                            : "button2a"
                        } `}
                        value="other"
                      >
                        Other
                      </button>
                      <button
                        onClick={handle1}
                        className={` ${
                          toggle && data.gender == "specify"
                            ? "button3 "
                            : "button2a"
                        } `}
                        value="specify"
                      >
                        Specify
                      </button>
                      {data.gender == "specify" && (
                        <input
                          type="text"
                          value={data.specify}
                          className="border border-[#2C3E50] h-8"
                          placeholder={data.country}
                          onChange={(e) =>
                            setData({ ...data, specify: e.target.value })
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="height"
                      className="bluish text-sm lg:text-[18px]"
                    >
                      Height
                    </label>
                    <div className="relative flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          name="height"
                          value={data.height}
                          onChange={handle}
                          className="w-[125px] lg:w-[160px] h-8 p-2 pr-12 rounded border border-gray-300"
                        />
                        <select
                          onChange={handle}
                          name="hunit"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent outline-none text-gray-500 text-sm"
                        >
                          <option value="inches">in</option>
                          <option value="cm">cm</option>
                          <option value="ft">ft</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Weight Section */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="weight"
                      className="bluish text-sm lg:text-[18px]"
                    >
                      Weight
                    </label>
                    <div className="relative flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          name="weight"
                          value={data.weight}
                          onChange={handle}
                          className="w-[125px] lg:w-[160px] h-8 p-2 pr-14 rounded border border-gray-300"
                        />
                        <select
                          onChange={handle}
                          name="wunit"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent outline-none text-gray-500 text-sm"
                        >
                          <option value="kg">kg</option>
                          <option value="pound">pnd</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" flex flex-col gap-3">
                    <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                      At what level do you practice yoga?
                    </label>
                    <div className=" flex gap-5 flex-wrap ">
                      <button
                        className={` ${
                          toggle1 && data.level == "Beginner"
                            ? "button3 "
                            : "button2"
                        } `}
                        onClick={handle2}
                        value="Beginner"
                      >
                        Beginner
                      </button>
                      <button
                        className={` ${
                          toggle1 && data.level == "Intermediate"
                            ? "button3 "
                            : "button2"
                        } `}
                        onClick={handle2}
                        value="Intermediate"
                      >
                        Intermediate
                      </button>
                      <button
                        className={` ${
                          toggle1 && data.level == "Advanced"
                            ? "button3 "
                            : "button2"
                        } `}
                        onClick={handle2}
                        value="Advanced"
                      >
                        Advanced
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" mt-3 lg:mt-5">
                  <button
                    className=" button3  text-xl  "
                    onClick={() => {
                      setData({ ...data, next: data.next + 1 });
                    }}
                    style={{ width: "140px", height: "40px" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}

          {/* // ------------------------------ Page2 --------------------------------------- */}
          {data?.next === 1 && (
            <div className=" w-[80vw] lg:w-[60vw] lg:py-32 lg:px-14 flex overflow-y-scroll  flex-col gap-5 ">
              <div className=" flex flex-col gap-2 lg:gap-3">
                <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                  Select the goal/ goals and diseases that you wish to treat
                  through yoga?
                </label>
                <div
                  className=" flex flex-wrap gap-3 lg:gap-5 "
                  onClick={() => setToggle2(!toggle2)}
                >
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Weight Management"
                    className={` ${
                      data.goals.includes("Weight Management")
                        ? "button3 "
                        : "button2"
                    } `}
                  >
                    Weight Management
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="PCOS"
                    className={` ${
                      data.goals.includes("PCOS") ? "button3 " : "button2"
                    } `}
                  >
                    PCOS
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Diabetese"
                    className={` ${
                      data.goals.includes("Diabetese") ? "button3 " : "button2"
                    } `}
                  >
                    Diabetese
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Mental Health"
                    className={` ${
                      data.goals.includes("Mental Health")
                        ? "button3 "
                        : "button2"
                    } `}
                  >
                    Mental Health
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Flexibility"
                    className={` ${
                      data.goals.includes("Flexibility")
                        ? "button3 "
                        : "button2"
                    } `}
                  >
                    Flexibility
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Arthritis"
                    className={` ${
                      data.goals.includes("Arthritis") ? "button3 " : "button2"
                    } `}
                  >
                    Arthritis
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Asthama"
                    className={` ${
                      data.goals.includes("Asthama") ? "button3 " : "button2"
                    } `}
                  >
                    Asthama
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="General Well Being"
                    className={` ${
                      data.goals.includes("General Well Being")
                        ? "button3 "
                        : "button2"
                    } `}
                  >
                    General Well Being
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Spirituality"
                    className={` ${
                      data.goals.includes("Spirituality")
                        ? "button3 "
                        : "button2"
                    } `}
                  >
                    Spirituality
                  </button>
                  <button
                    onClick={(e) => handle3("goals", e)}
                    value="Specify"
                    className={` ${
                      data.goals.includes("Specify") ? "button3 " : "button2"
                    } `}
                  >
                    Specify
                  </button>
                  {data.goals.includes("Specify") && (
                    <input
                      type="text"
                      value={data.gspecify}
                      className="border border-[#2C3E50] h-8"
                      onChange={(e) =>
                        setData({ ...data, gspecify: e.target.value })
                      }
                    />
                  )}
                </div>
              </div>

              <div className=" flex    gap-1 lg:gap-5 ">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                    How does your daily life looks like?
                  </label>
                  <p className="bluish text-[10px] -mt-1 lg:text-[14px]">
                    {" "}
                    Select all the instances that applies ?
                  </p>

                  <Select
                    options={options1}
                    value={data.daily_life_looks}
                    onChange={handleChange}
                    isMulti={true}
                    placeholder={options1[0].label}
                    className="w-[80vw] md:w-full"
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-1 lg:gap-3">
                <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                  Which Type of person you are?
                </label>
                <div className=" flex flex-wrap gap-3 lg:gap-5 ">
                  <button
                    className={` ${!toggle3 ? "button3 " : "button2"} `}
                    onClick={() => setToggle3(false)}
                  >
                    Morning
                  </button>
                  <button
                    className={` ${toggle3 ? "button3 " : "button2"} `}
                    onClick={() => setToggle3(true)}
                  >
                    Evening
                  </button>
                </div>
                {!toggle3 && (
                  <div
                    className=" flex flex-wrap gap-3 lg:gap-5 mt-1 "
                    onClick={() => setToggle4(!toggle4)}
                  >
                    <button
                      onClick={(e) => handle3("morning", e)}
                      className={` ${
                        data.morning.includes("4:00 AM - 6:00 AM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="4:00 AM - 6:00 AM"
                    >
                      4:00 AM - 6:00 AM{" "}
                    </button>
                    <button
                      onClick={(e) => handle3("morning", e)}
                      className={` ${
                        data.morning.includes("6:00 AM - 8:00 AM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="6:00 AM - 8:00 AM"
                    >
                      6:00 AM - 8:00 AM
                    </button>
                    <button
                      onClick={(e) => handle3("morning", e)}
                      className={` ${
                        data.morning.includes("8:00 AM - 10:00 AM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="8:00 AM - 10:00 AM"
                    >
                      8:00 AM - 10:00 AM
                    </button>
                  </div>
                )}
                {toggle3 && (
                  <div
                    className=" flex flex-wrap gap-3 lg:gap-5 mt-1 "
                    onClick={() => setToggle4(!toggle4)}
                  >
                    <button
                      onClick={(e) => handle3("evening", e)}
                      className={` ${
                        data.evening.includes("4:00 PM - 6:00 PM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="4:00 PM - 6:00 PM"
                    >
                      4:00 PM - 6:00 PM{" "}
                    </button>
                    <button
                      onClick={(e) => handle3("evening", e)}
                      className={` ${
                        data.evening.includes("6:00 PM - 8:00 PM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="6:00 PM - 8:00 PM"
                    >
                      6:00 PM - 8:00 PM
                    </button>
                    <button
                      onClick={(e) => handle3("evening", e)}
                      className={` ${
                        data.evening.includes("8:00 PM - 10:00 PM")
                          ? "button3 "
                          : "button2"
                      } `}
                      value="8:00 PM - 10:00 PM"
                    >
                      8:00 PM - 10:00 PM
                    </button>
                  </div>
                )}
              </div>

              <div className=" mt-3  flex gap-3 lg:mt-5">
                <button
                  className=" button2  text-xl  "
                  onClick={() => {
                    setData({ ...data, next: data?.next - 1 });
                  }}
                  style={{ width: "140px", height: "40px" }}
                >
                  <div className="flex items-center gap-1  ">
                    <IoArrowBack size={16} />
                    <span className=" text-[16px]">Back</span>
                  </div>
                </button>
                <button
                  className=" button3  text-xl  "
                  onClick={() => {
                    setData({ ...data, next: data?.next + 1 });
                  }}
                  style={{ width: "140px", height: "40px" }}
                >
                  Next
                </button>
              </div>
              <p className=" text-red-500">{data.message}</p>
            </div>
          )}
          {data?.next === 2 && (
            <div className=" w-[80vw] lg:w-[60vw] md:px-10  lg:py-32 lg:px-14 flex  flex-col gap-3 lg:gap-5 ">
              <div className=" flex flex-col gap-1 ">
                <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data?.email}
                  onChange={handle}
                  className="w-full  h-10 border border-black rounded "
                />
              </div>
              <div className=" flex flex-col gap-1 ">
                <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                  Contact
                </label>
                <input
                  type="number"
                  placeholder=""
                  name="contact"
                  value={data.contact}
                  onChange={handle}
                  className="w-full h-10 px-2 border border-black rounded"
                />
              </div>
              <p className=" text-red-500">{data.message}</p>

              <div className=" mt-3  flex gap-3 lg:mt-5">
                <button
                  className=" button2  text-xl  "
                  onClick={() => {
                    setData({ ...data, next: data?.next - 1 });
                  }}
                  style={{ width: "120px", height: "40px" }}
                >
                  <div className="flex items-center gap-1  ">
                    <IoArrowBack size={16} />
                    <span className=" text-[16px]">Back</span>
                  </div>
                </button>
                <button
                  className=" button3  text-xl  "
                  onClick={handlesubmit}
                  style={{ width: "140px", height: "40px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          <div className=" absolute top-5 right-5  ">
            <button onClick={() => setShurveyPopup(!shurveyPopup)}>
              <HiXMark className="  text-3xl lg:text-4xl " />
            </button>
          </div>
        </div>
      </Popup>
      <Popup
        open={congrats}
        lockScroll={true}
        contentStyle={{
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p className="text-xl w-[80vw] text-center lg:text-6xl text-white font-bold heading ">
            Congratulation
          </p>
          <div className="flex justify-center items-center mt-4 w-[70vw] lg:w-[50vw] mx-auto gap-4 ">
            <button onClick={() => navigate("/login")}>
              <span className="button3 text-lg ">Login</span>
            </button>
            <button onClick={() => navigate("/home")}>
              <span className="button3 text-lg ">Home</span>
            </button>
          </div>
          <div className=" absolute top-5 right-5  ">
            <button onClick={() => setCongrats(!congrats)}>
              <HiXMark className="   text-3xl lg:text-5xl " />
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default NewSurvey;
