import React, { useState } from "react";

const Goalbtn = ({ item, index, setGoal, goal }) => {
  const [active, setActive] = useState(false);

  const removef = (item) => {
    var ind;
    for (var i = 0; i < goal.length; i++) {
      if (item == goal[i]) {
        ind = i;
        break;
      }
    }
    var temp = [...goal];
    temp.splice(ind, 1);
    setGoal(temp);
  };

  return (
    <div
      key={index}
      onClick={() => {
        active ? removef(item) : setGoal([...goal, item]);
        setActive(!active);
      }}
    >
        
      <button className= {` bg-white ${active ? " shurveyBtn " : "" } font-semi textFont border-[#FAA200] border-2 shadow-xl text-[#FAA200] rounded-lg px-3  h-9  text-center`}>
        {item}
      </button>
    </div>
  );
};

export default Goalbtn;
