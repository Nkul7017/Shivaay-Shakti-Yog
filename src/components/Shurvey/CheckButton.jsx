import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const CheckButton = ({ item, setDailyLife, dailyLife }) => {
  const [active, setActive] = useState(false);
  

  const removef = (item) => {
    var ind;
    for (var i = 0; i < dailyLife.length; i++) {
      if (item == dailyLife[i]) {
        ind = i;
        break;
      }
    }
    var temp = [...dailyLife];
    temp.splice(ind, 1);
    setDailyLife(temp);
 
  };
  return (
    <>
      <div
        className="w-36 h-36 rounded-full bg-[#FAE4CD] relative flex justify-center items-center "
        onClick={() => {
          active ? removef(item) : setDailyLife([...dailyLife, item]);
          setActive(!active);
        }}
      >
        {active && (
          <div className="right-2 top-2 absolute  ">
            <BsCheckLg className="w-5 h-5   text-white flex justify-items-end bg-green-500 rounded-full" />
          </div>
        ) }
        <div className=" w-32 p-3    ">
          <p className="text-[12px]  ">{item}</p>
        </div>
      </div>
    </>
  );
};

export default CheckButton;
