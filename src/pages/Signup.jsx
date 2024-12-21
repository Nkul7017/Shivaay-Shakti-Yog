import React, { useMemo, useState } from "react";
import logovideo from "../../public/loutput.gif";
import axios from "axios";
import countryList from "react-select-country-list";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isPassword } from "../utils";
import { HiXMark } from "react-icons/hi2";
import { IoArrowBack } from "react-icons/io5";
function Signup() {
  const options1 = [
    { value: "waiting for options...", label: "waiting for options..." },
  ];
  const options = useMemo(() => countryList().getData(), []);
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    cpassword: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    gender: "",
    specify: "",
    born: "",
    height: 0,
    hunit: "",
    weight: 0,
    wunit: "",
    password: "",
    cpassword: "",
    medical_condition: "",
    contact: "",
    next: 1,
    message: "",
    toggle: false,
  });
  const [message, setMessage] = useState("");
  async function handlesubmit(e) {
    setData({ ...data, message: "Loading..." });
    // console.log("hello");
    e.preventDefault();
    if (data.hunit === "cm") {
      data.height = parseFloat(data.height) * 0.393701;
    } else {
      data.height = parseFloat(data.height);
    }
    if (data.wunit === "pound") {
      data.weight = parseFloat(data.weight) * 0.453592;
    } else {
      data.weight = parseFloat(data.height);
    }
    console.log(data);
    if (
      data.name.trim().length > 3 &&
      isEmail(data.email.trim()) &&
      isPassword(data.password.trim())
    ) {
      // console.log("naame");
      if (data) {
        if (data) {
          console.log(data);
          try {
            console.log(data);
            // console.log("bhai");
            const response = await axios.post(
              "https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/signup",
              // const response=await axios.post('https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/signup',
              {
                name: data.name,
                country: data.country,
                born: data.born,
                city: data.city,
                email: data.email,
                height: data.height,
                weight: data.weight,
                gender: data.gender,
                specify: data.specify,
                password: data.password,
                medical_condition: data.medical_condition,
                contact: data.contact,
              }
            );
            // console.log("hi");
            if (response.status === 201) {
              console.log(response);
              navigate("/login");
            }
          } catch (e) {
            setData({ ...data, message: e.response.data.message });
          }
        }
      } else {
        setData({ ...data, message: "Loading..." });
        console.log(data);
        try {
          console.log(data);
          const response = await axios.post(
            "https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/signup",
            // const response=await axios.post('https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/signup',
            {
              name: data.name,
              country: data.country,
              born: data.born,
              city: data.city,
              email: data.email,
              height: data.height,
              weight: data.weight,
              gender: data.gender,
              specify: data.specify,
              password: data.password,
              medical_condition: data.medical_condition,
              contact: data.contact,
            }
          );

          if (response.status === 201) {
            console.log(response);
            navigate("/login");
          }
        } catch (e) {
          console.log(e);
          setData({ ...data, message: e.response?.data?.message });
        }
      }
    } else {
      // console.log("name");
      setData({ ...data, message: "*All Fields Are Mandatory" });
    }
  }

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handle1(e) {
    setData({ ...data, gender: e.target.value, toggle: true });
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Check if passwords match
    if (name === "cpassword" && value !== data.password) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  return (
    <div className=" w-screen h-screen  bg-[#FFF1C1] flex justify-center items-center ">
      <div className=" absolute top-5 right-5 sm:right-10  ">
        <Link to="/">
          <HiXMark className="  text-3xl lg:text-4xl " />
        </Link>
      </div>
      <div className=" flex flex-col sm:flex-row w-full lg:w-[80vw]  justify-center items-center  ">
        <div className=" w-1/2 ">
          <img src={logovideo} alt="" />
        </div>

        <div className="w-[90vw]  md:w-[60vw] h-[500px]  text-black mx-auto  lg:w-1/2 rounded-2xl sm:mt-10 px-8">
          <h1 className=" text-3xl sm:text-5xl heading ">Sign Up</h1>
          <form onSubmit={handlesubmit}>
            {data.next === 1 && (
              <div className="flex flex-col mt-4 gap-3 w-full md:w-[300px] lg:w-[400px] ">
                <div className=" flex flex-col gap-1 ">
                  <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handle}
                    className="w-full p-3 h-8 rounded "
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
                      className="w-[135px] lg:w-[160px] p-3 h-8  rounded "
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
                      className="  pl-3 button3  w-[120px] lg:w-[160px]"
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
                <div className=" flex flex-col gap-1">
                  <label htmlFor="" className="  bluish text-sm lg:text-[18px]">
                    City
                  </label>
                  <input
                    type="text"
                    value={data.city}
                    name="city"
                    onChange={handle}
                    className="w-full p-3 h-8  rounded"
                  />
                </div>

                <div>
                  <div className=" flex flex-col gap-2 lg:gap-3">
                    <label htmlFor="" className="bluish text-sm lg:text-[18px]">
                      Gender
                    </label>
                    <div className=" flex flex-wrap md:flex-row gap-3 lg:gap-5 ">
                      <button
                        type="button"
                        onClick={handle1}
                        value="male"
                        className={` ${
                          data.toggle && data.gender == "male"
                            ? "button3 "
                            : "button2a"
                        } `}
                        style={{ height: "35px" }}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={handle1}
                        className={` ${
                          data.toggle && data.gender == "female"
                            ? "button3 "
                            : "button2a"
                        } `}
                        style={{ height: "35px" }}
                        value="female"
                      >
                        Female
                      </button>
                      <button
                        type="button"
                        onClick={handle1}
                        className={` ${
                          data.toggle && data.gender == "other"
                            ? "button3 "
                            : "button2a"
                        } `}
                        style={{ height: "35px" }}
                        value="other"
                      >
                        Other
                      </button>
                      <button
                        type="button"
                        onClick={handle1}
                        className={` ${
                          data.toggle && data.gender == "specify"
                            ? "button3 "
                            : "button2a"
                        } `}
                        style={{ height: "35px" }}
                        value="specify"
                      >
                        Specify
                      </button>
                      {data.gender == "specify" && (
                        <input
                          type="text"
                          value={data.specify}
                          className=" h-6 sm:h-8 p-3"
                          style={{ height: "35px" }}
                          onChange={(e) =>
                            setData({ ...data, specify: e.target.value })
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  {/* Height Section */}
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

                <div className=" flex  items-center gap-5   mt-3  ">
                  <button
                    type="button"
                    onClick={() => setData({ ...data, next: data.next + 1 })}
                    className="  button3 text-2xl  py-1   "
                  >
                    <span className=" text-[18px]">Next</span>
                  </button>
                </div>
              </div>
            )}
            {data.next === 2 && (
              <div className="flex flex-col mt-4 gap-3">
                <div className=" flex    gap-3 lg:gap-1  ">
                  <div className=" flex flex-col gap-2 w-full  sm:w-2/3 ">
                    <div className="flex items-center gap-2">
                      <label
                        className="bluish text-sm lg:text-[18px] "
                        htmlFor=""
                      >
                        Medical Condition
                      </label>
                      <p className="text-gray-800 text-[12px]">(Optional)</p>
                    </div>
                    <input
                      type="text"
                      name="medical_condition"
                      value={data.medical_condition}
                      onChange={(e) =>
                        setData({ ...data, [e.target.name]: e.target.value })
                      }
                      className=" w-[220px] p-3 lg:w-[400px] h-6 lg:h-8 rounded "
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-1 ">
                  <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                    Contact
                  </label>
                  <input
                    type="number"
                    name="contact"
                    value={data.contact}
                    onChange={handle}
                    className="w-[220px] p-3 lg:w-[400px] h-6 lg:h-8 rounded "
                  />
                </div>
                <div className=" flex flex-col gap-1 ">
                  <label className=" bluish text-sm lg:text-[18px] " htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handle}
                    className="w-[220px] p-3 lg:w-[400px] h-6 lg:h-8 rounded "
                  />
                </div>

                <div className="flex gap-3 lg:gap-5 flex-col">
                  <div className="flex flex-col gap-2 w-[400px] ">
                    <div className="flex gap-2 items-center">
                      <label
                        className="bluish text-sm lg:text-[18px]"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <p className="text-gray-800 text-[12px]">
                        (* Password should contain at least 8 letters.)
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type={showPassword.password ? "text" : "password"}
                        name="password"
                        value={data.password}
                        onChange={handlePasswordChange}
                        className="w-[220px] p-3 lg:w-[300px] h-6 lg:h-8 rounded pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("password")}
                        className="button1 text-md px-3 py-1 text-white rounded-md  "
                      >
                        {showPassword.password ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="flex flex-col gap-2 w-[400px]">
                    <label
                      className="bluish text-sm lg:text-[18px]"
                      htmlFor="cpassword"
                    >
                      Confirm Password
                    </label>
                    <div className="flex items-center gap-3 ">
                      <input
                        type={showPassword.cpassword ? "text" : "password"}
                        name="cpassword"
                        value={data.cpassword}
                        onChange={handlePasswordChange}
                        className="w-[220px] p-3 lg:w-[300px] h-6 lg:h-8 rounded pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("cpassword")}
                        className="button1 text-md px-3 py-1 text-white rounded-md  "
                      >
                        {showPassword.cpassword ? "Hide" : "Show"}
                      </button>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                </div>

                <div className=" flex  items-center gap-5   mt-3  ">
                  <button
                    type="button"
                    onClick={() => setData({ ...data, next: data.next - 1 })}
                    className="button2 text-2xl  py-1   "
                  >
                    <div className="flex items-center gap-1  ">
                      <IoArrowBack size={16} />
                      <span className=" text-[16px]">Back</span>
                    </div>
                  </button>
                  <button type="submit" className="  button3 text-2xl  py-1   ">
                    <span className=" text-[18px]">Sign Up</span>
                  </button>
                  <p className=" text-[18px] font-bold text-red-900">
                    {/* {data.message} */}
                    {
                      <span className="text-red-500">
                        {data.message === "Loading..." ? "This email id already exist." : ""}
                      </span>
                    }
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
