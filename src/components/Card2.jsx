import React, { useState } from "react";
import img1 from "../assets/Icons/img1.png";
import img2 from "../assets/Icons/img2.png";
import img3 from "../assets/Icons/img3.png";
import img4 from "../assets/Icons/img4.png";
import img5 from "../assets/Icons/img5.png";
import img6 from "../assets/Icons/img6.png";
import GroupForm from "./GroupForm";
import PersonalForm from "./PersonalForm";
import { GoDotFill } from "react-icons/go";
function Card2({ img, heading, types, staticData, courseData }) {
  const [toggle1, setToggle1] = useState(false);
  return (
    <>
      <div className=" w-[415px] h-auto card2 ">
        <div className=" relative sh ">
          <img
            src={img}
            className=" w-[559px] h-[150px] object-cover "
            alt=""
          />
          <p
            className="heading absolute  bottom-1 left-6 text-2xl  "
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              zIndex: "999",
            }}
          >
            {heading}
          </p>
        </div>
        <div className=" flex flex-col gap-5 px-6 py-3  ">
          <div
            className=" min-h-[80px] para text-sm  text-justify"
            style={{ color: "#444" }}
          >
            <p>
              {types === "personal"
                ? staticData?.personal_card_description
                : staticData?.group_card_description}
            </p>
          </div>
          {types === "personal" && (
            <div className="min-h-[168px] bluish text-xs space-y-1.5">
              {staticData?.personal_benefits?.map((v, index) => (
                <p key={index}>
                  <span className="flex items-center gap-2">
                    <GoDotFill />
                    {v?.heading}
                  </span>
                </p>
              ))}
            </div>
          )}

          {types === "group" && (
            <div className="min-h-[168px] bluish text-xs space-y-1.5">
              {staticData?.group_benefits?.map((v, index) => (
                <p key={index}>
                  <span className="flex items-center gap-2">
                    <GoDotFill />
                    {v?.heading}
                  </span>
                </p>
              ))}
            </div>
          )}
          <div className=" flex justify-between items-center ">
            {/* <div className=" -space-y-4 ">
              <p className="para text-xs ">Starting</p>
              <p className="heading text-4xl  ">
                {types === "group"
                  ? "₹" + courseData?.price2
                  : "₹" + courseData?.price1}
              </p>
            </div> */}
            <div>
              {types === "personal" && (
                <>
                  <button
                    onClick={() => setToggle1(true)}
                    className="button3"
                    style={{ width: "150px", height: "35px" }}
                  >
                    <span>Proceed</span>
                  </button>
                  <PersonalForm
                    type={"personal"}
                    staticData={staticData}
                    courseData={courseData}
                    toggle1={toggle1}
                    setToggle1={setToggle1}
                  />
                </>
              )}
              {types === "group" && (
                <>
                  <button
                    onClick={() => setToggle1(true)}
                    className="button3"
                    style={{ width: "150px", height: "35px" }}
                  >
                    <span>Proceed</span>
                  </button>
                  <GroupForm
                    type={"group"}
                    staticData={staticData}
                    courseData={courseData}
                    toggle1={toggle1}
                    setToggle1={setToggle1}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
