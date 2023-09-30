import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Goalbtn2 from "./Shurvey/Goalbtn2";

const selectUser = (state) => state.user;

const goals = [
  "Weight Management",
  "PCOS",
  "Diabetes",
  "Mental Health",
  "Flexibility",
  "Arthritis",
  "Asthama",
  "General Well Being",
  "Spirituality",
];

const PersonalInfo = () => {
  const [active, setActive] = useState(false);
  const [goalFinal, setGoalFinal] = useState([]);

  const getUserData = useSelector(selectUser);

  useEffect(() => {
    if (getUserData?.user?.goal) {
      setGoalFinal(getUserData?.user?.goal);
    }
  }, [getUserData?.user?.goal]);

  console.log("ok", goalFinal);

  // console.log( "user in Personalinfo card",getUserData.user)

  return (
    <div>
      <div className="px- py-5 ml-3 ">
        <div className="bg-white rounded-3xl w-[220px] h-[310px]     lg:w-[250px] lg:h-[380px] ">
          <div className="p-4">
            <h1 className="text-[#FAA200] font-bold text-[14px]">
              Personal Information
            </h1>
            <h1 className="text-[12px] font-bold text-[#FAA200] mt-3">
              {" "}
              Name: <span className="text-black">{getUserData.user.name}</span>
            </h1>
            <h1 className="text-[12px] lg:mt-3 text-[#FAA200] ">
              {" "}
              Watsapp:{" "}
              <span className="text-black"> {getUserData.user.phone}</span>
            </h1>
            <p className="text-[12px] lg:mt-3 text-[#FAA200]">
              {" "}
              Age: <span className="text-black">
                {" "}
                {getUserData.user.age}
              </span>{" "}
            </p>
            <p className="text-[12px] lg:mt-3 text-[#FAA200]">
              {" "}
              Height:{" "}
              <span className="text-black"> {getUserData.user.height}</span>
            </p>
            <p className="text-[12px] lg:mt-3 text-[#FAA200]">
              {" "}
              Weight:{" "}
              <span className="text-black">{getUserData.user.weight}</span>{" "}
            </p>
            <p className="text-[12px] lg:mt-3 text-[#FAA200]">
              {" "}
              Goal: <span className="text-black">
                {" "}
                {getUserData.user.goal}
              </span>{" "}
            </p>

            <div className="flex flex-wrap gap-1 mt-4 ">
              {goals.map((item, index) => {
                return (
                  <>
                    <Goalbtn2
                      item={item}
                      index={index}
                      goalFinal={goalFinal}
                      setGoalFinal={setGoalFinal}
                      // initial= {apiData}
                    >
                      {item}
                    </Goalbtn2>
                  </>
                );
              })}
            </div>

            {/* <div className="flex flex-wrap mt-3 ">
              <button
                onClick={() => {
                  updateTemGoal("weight loss");

                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                weight loss
              </button>
              <button
                onClick={() => {
                  updateTemGoal("weight Gain");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Weight Gain
              </button>
              <button
                onClick={() => {
                  updateTemGoal("Core Strength");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Core Strength
              </button>
              <button
                onClick={() => {
                  updateTemGoal("PCOS");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                PCOS
              </button>
              <button
                onClick={() => {
                  updateTemGoal(" Diabetes");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Diabetes
              </button>
              <button
                onClick={() => {
                  updateTemGoal("Flexibility and Balance");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Flexibility and Balance
              </button>
              <button
                onClick={() => {
                  updateTemGoal("Arthritiss");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Arthritis
              </button>
              <button
                onClick={() => {
                  updateTemGoal("General Health");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                General Health
              </button>
              <button
                onClick={() => {
                  updateTemGoal("Mental Stability");
                }}
                className="p-2 rounded-2xl text-black text-[10px] bg-white hover:text-white hover:bg-[#283143]"
              >
                Mental Stability
              </button>
            </div> */}
            {/* <p className=" text-[13px]">Timings</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
