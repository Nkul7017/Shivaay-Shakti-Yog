import React, { useState } from "react";
import CourseHistory from "../components/CourseHistory";
import PersonalInfo from "../components/PersonalInfo";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import DesboardNavbar from "../components/DesboardNavbar";
import Navbar from "../components/Navbar";

const selectUser = (state) => state.user;

const Account = () => {
  const getUserData = useSelector(selectUser);

  console.log("user in account", getUserData.user);
  console.log("shivanggggggg", getUserData?.user?.courseHistory);

  const [gender, setGender] = useState("Male");

  const bmi =
    getUserData?.user?.weight /
    ((getUserData?.user?.height / 100) * (getUserData?.user?.height / 100));

  console.log("bmi====", bmi);

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="sm:flex hidden h-screen">
            <Sidebar></Sidebar>
          </div>

          <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1086910403788931153/Screen_1.png')] w-full bg-no-repeat bg-cover overflow-y-scroll h-screen ">
            <div className="lg:flex lg:flex-col hidden">
              <Navbar />
            </div>
            <div className="lg:hidden">
              <DesboardNavbar />
            </div>
            <div className="p-4">
              <h1 className="text-2xl mt-4">User Dashboard</h1>
              <div className="flex items-center gap-5 mt-4">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147140.png"
                  />
                </div>
                <div>
                  <h2>Hlo {getUserData?.user?.name} </h2>
                  <h2>
                    Track your details, progress, manage courses and check
                    history here.
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-7">
              <div className=" lg:gap-16 lg:ml-14 ml-10 gap-7  lg:flex hidden">
                <div className="flex">
                  <h1 className="mt-60 sticky -mr-12">
                    {" "}
                    {getUserData?.user?.weight} kg
                  </h1>
                  <img className="h-96" src="img/Group 435.png" />
                </div>
                {getUserData.user.gender == "Male" ? (
                  <img className="h-80 mt-20" src="img/image 14.png" />
                ) : (
                  <img className="h-80 mt-20" src="img/image 7 (1).png" />
                )}
                <div className="flex">
                  <img className="h-96" src="img/Group 436.png" />
                  <h1 className="mt-16 sticky -ml-12">
                    {" "}
                    {getUserData?.user?.height} cm{" "}
                  </h1>
                </div>

                {bmi < 18 ? (
                  <>
                    <img
                      className="h-40 w-44 mt-16 ml-24"
                      src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686997496/low.png"
                    />
                    <h1 className="-ml-32 mt-40 text-green-500  text-[26px]">
                      BMI: {bmi.toString().slice(0, 5)}
                      <br />
                      <span className="text-black text-[14px]">
                        {" "}
                        Underweight
                      </span>
                    </h1>
                  </>
                ) : bmi >= 18 && bmi <= 24 ? (
                  <>
                    <img
                      className="h-40 w-40 mt-16 ml-24"
                      src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686997499/medium.png"
                    />
                    <h1 className="-ml-32 mt-40 text-green-500  text-[26px]">
                      BMI: {bmi.toString().slice(0, 5)}
                      <br />
                      <span className="text-black text-[14px]"> Healthy</span>
                    </h1>
                  </>
                ) : bmi > 24 && bmi <= 30 ? (
                  <>
                    <img
                      className="h-40 w-44 mt-16 ml-24"
                      src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686997503/average.png"
                    />
                    <h1 className="-ml-32 mt-40 text-green-500  text-[26px]">
                      BMI: {bmi.toString().slice(0, 5)}
                      <br />
                      <span className="text-black text-[14px]">
                        {" "}
                        Overweight
                      </span>
                    </h1>
                  </>
                ) : (
                  <>
                    <img
                      className="h-40 w-44 mt-16 ml-24"
                      src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686997508/high.png"
                    />
                    <h1 className="-ml-32 mt-40 text-green-500  text-[26px]">
                      BMI: {bmi.toString().slice(0, 5)}
                      <br />
                      <span className="text-black text-[14px]"> Obese</span>
                    </h1>
                  </>
                )}
              </div>

              <div className="mr-24 px-20 lg:px-0  ">
                <PersonalInfo></PersonalInfo>
              </div>
            </div>

            <div className="flex lg:gap-44 lg:ml-20 ml-10 gap-7 mt-24 lg:hidden">
              <div className="flex">
                <h1 className="mt-60 sticky -mr-12">
                  {" "}
                  {getUserData?.user?.weight} kg
                </h1>
                <img className="h-96" src="img/Group 435.png" />
              </div>
              {gender === "Male" ? (
                <img className="h-80 mt-20" src="img/image 14.png" />
              ) : (
                <img className="h-80 mt-20" src="img/image 7 (1).png" />
              )}
              <div className="flex">
                <img className="h-96" src="img/Group 436.png" />
                <h1 className="mt-16 sticky -ml-12">
                  {" "}
                  {getUserData?.user?.height} cm{" "}
                </h1>
              </div>
            </div>

            <div className="lg:hidden mt-44  ">
              <div>
                <CourseHistory data={getUserData?.user?.courseHistory} />
              </div>
              {/* <div className="   justify-end hidden sm:flex ">
                <img
                  className="w-64 -mt-16 absolute  "
                  src="img/image 4 (3).png"
                />
                <img className="w-72 ml-64 mt-44" src="img/Ellipse 1.png" />
              </div> */}
            </div>

            <div className="sm:flex mt-6 hidden ">
              <div>
                <CourseHistory data={getUserData?.user?.courseHistory} />
              </div>
              {/* <div className="   justify-end hidden sm:flex "> */}
              {/* <img
                  className="w-64 -mt-16 absolute  "
                  src="img/image 4 (3).png"
                /> */}
              {/* <img className="w-72 ml-64 mt-44" src="img/Ellipse 1.png" /> */}
              {/* </div> */}
            </div>

            {/* <h1 className='text-xl ml-6'>Recorded Sessions</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
