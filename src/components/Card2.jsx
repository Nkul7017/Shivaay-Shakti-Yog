import React, { useState } from "react";

import GroupForm from "./GroupForm";
import PersonalForm from "./PersonalForm";
import { GoDotFill } from "react-icons/go";
function Card2({ img, heading, types, staticData, courseData }) {
  const [toggle1, setToggle1] = useState(false);

  const [showFullText, setShowFullText] = useState(false); // State for toggling full text

  // Function to toggle "Read More" and "Read Less"
  const handleReadMoreToggle = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <div className=" w-[415px] h-auto md:h-[50%] card2 ">
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
                <p key={index} className="">
                  <p className="flex  gap-2">
                    <GoDotFill />
                    <p>
                      {v?.heading}{" "}
                      <span className="font-normal">
                        {showFullText
                          ? v?.description
                          : `${v?.description.substring(0, 80)}...`}
                      </span>
                    </p>
                  </p>
                </p>
              ))}
            </div>
          )}

          {types === "group" && (
            <div className="min-h-[168px] bluish text-xs space-y-2">
              {staticData?.group_benefits?.map((v, index) => (
                <p key={index} className="">
                  <p className="flex gap-2">
                    <GoDotFill />
                    <p>
                      {v?.heading}
                      <span className="font-normal">
                        {showFullText
                          ? v?.description
                          : `${v?.description.substring(0, 45)}...`}
                      </span>
                    </p>
                  </p>
                </p>
              ))}
            </div>
          )}

          {/* Read More / Read Less Button */}
          <div className="flex justify-start">
            <button
              onClick={handleReadMoreToggle}
              className="text-blue-500 text-sm mt-2"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          </div>

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
                  <div className="">
                  <PersonalForm 
                    type={"personal"}
                    staticData={staticData}
                    courseData={courseData}
                    toggle1={toggle1}
                    setToggle1={setToggle1}
                  />
                  </div>
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
