import React, { useState } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";


const DatePick = () => {
  const today = new Date();
  const endDate = today;

  endDate.setDate(endDate.getDate() + 80);
  const [values, setValues] = useState([]);

  const preDate = today;

  preDate.setDate(preDate.getDate() - 1);

  const showMonths = Math.ceil(50 / 30) + 1;

  return (
    <>
      <div className="p-20 shadow-xl  ml-36">
   
            <h3 className="text-start -ml-16 mb-5 text-xl text-orange-400">Select Availability Dates</h3>
          
        <div className="flex flex-col justify-center text-center items-center mx-auto ">
         

          <Calendar
            className="px-10 "
            multiple
            minDate={"2023/04/26"}
            maxDate={endDate}
            value={values}
            onChange={setValues}
            numberOfMonths={4}
            format="DD-MM-YYYY"
            plugins={[weekends([0]), <DatePanel position="right" />]}
            
          />
        </div>
      </div>
    </>
  );
};

export default DatePick;
