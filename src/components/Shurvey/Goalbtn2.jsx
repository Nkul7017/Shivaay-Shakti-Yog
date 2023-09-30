import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const selectUser = (state) => state.user;

const Goalbtn2 = ({ item, index, setGoalFinal, goalFinal, initial }) => {
  const getUserData = useSelector(selectUser);
  // console.log("okkk333", getUserData?.user?.goal);

  const [active, setActive] = useState(false);

  const removef = (item) => {
    var ind;
    for (var i = 0; i < goalFinal.length; i++) {
      if (item == goalFinal[i]) {
        ind = i;
        break;
      }
    }
    var temp = [...goalFinal];
    temp.splice(ind, 1);
    setGoalFinal(temp);
  };

  const addf = (item) => {
    setGoalFinal([...goalFinal, item]);
  };

  const updateGoal = async () => {
    try {
      var options = {
        method: "Patch",
        url: `https://shivayshaktibackend.onrender.com/trainee/updateGoal/${getUserData?.user?._id}`,
        headers: {
          Accept: "application/json",
        },
        data: {
          goal: goalFinal,
        },
      };

      axios.request(options).then(function (response) {
        // console.log(response);
      });
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    let timeout;

    if (getUserData?.user?._id) {
      timeout = setTimeout(() => {
        updateGoal();
        // console.log("update task runnn");
      }, 3500);
    } else {
      // console.log("update task else runnn");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [goalFinal]);

  // console.log("okk 2", goalFinal);

  return (
    <div
      className="flex "
      key={index}
      onClick={() => {
        active ||
        goalFinal[0] == item ||
        goalFinal[1] == item ||
        goalFinal[2] == item ||
        goalFinal[3] == item ||
        goalFinal[4] == item ||
        goalFinal[5] == item ||
        goalFinal[6] == item ||
        goalFinal[7] == item ||
        goalFinal[8] == item
          ? removef(item)
          : addf(item);
        setActive(!active);
      }}
    >
      <button
        className={`  ${
          goalFinal[0] == item ||
          goalFinal[1] == item ||
          goalFinal[2] == item ||
          goalFinal[3] == item ||
          goalFinal[4] == item ||
          goalFinal[5] == item ||
          goalFinal[6] == item ||
          goalFinal[7] == item ||
          goalFinal[8] == item
            ? " goalbtn "
            : ""
        }text-[8px] lg:text-[10px]  text-[#FAA200] shadow-xl rounded-full px-2  py-1  bg-gray-100 text-center`}
      >
        {item}
      </button>
    </div>
  );
};

export default Goalbtn2;
