import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import DatePick from "./DatePicker";
import DatePicker, { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import colors from "react-multi-date-picker/plugins/colors";
import indian from "react-date-object/calendars/indian";
import indian_en from "react-date-object/locales/indian_en";
import { useSelector } from "react-redux";
import axios from "axios";

const selectCourse = (state) => state.course2;

const TimeSlot = () => {
  const getCourse = useSelector(selectCourse);

  console.log(
    "Course Detail In Time Slot component",
    getCourse?.course2?.liveClasses
  );

  const data = [
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1093496448080957480/3_6.png",
      name: "Yamini Das",
      expert: "Facial Yoga Expert ",
      experience: "Experience 10+ Years  ",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1093496466485551164/3_4.png",
      name: "Yamini Das",
      expert: "Facial Yoga Expert ",
      experience: "Experience 10+ Years  ",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1093496466485551164/3_4.png",
      name: "Yamini Das",
      expert: "Facial Yoga Expert ",
      experience: "Experience 10+ Years  ",
    },
  ];

  const today = new Date();
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 80);

  const [value, setValue] = useState([]);
  const [Colorset, setColorset] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [startingSDate, setStartingDate] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [startCalender, setStartCalender] = useState(
    new Date().setDate(endDate.getDate())
  );

  const [trainer, setTrainer] = useState(null);



  const preDate = today;

  preDate.setDate(preDate.getDate());

  const showMonths = Math.ceil(50 / 30) + 1;

  console.log(endDate, startingSDate);

  var filterItem = [];

  // console.log("cdsdkj",totleDate);

  value.map((item) => {
    return filterItem.push(item.format());
  });

  useEffect(() => {
    setStartCalender(new Date(startingSDate));
  }, [startingSDate]);

  const notifyAndApiCall = () => {
    
    if (slotTime == "" || startingSDate == "") {
      // alert("Please Select Date");
    } else {
      var options = {
        method: "POST",
        url: "https://shivayshaktibackend.onrender.com/trainer/dnt",
        headers: {
          Accept: "application/json",
         
        },
        data: {
          startDate: startingSDate,
          timeSlot: slotTime,
          // startDate: "2023-05-18",
          // timeSlot: "06:00",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setTrainer(response?.data[0])
          console.log("trainer fatch",response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
  // const data1 = { startDate: "2023-05-18",
  //        timeSlot: "06:00", };

  // async function postJSON() {
  //   try {
  //     const response = await fetch("https://shivayshaktibackend.onrender.com/trainer/dnt", {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data1),
  //     });
  
  //     const result = await response.json();
  //     console.log("Success:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }


  // postJSON()
  useEffect(() => {

    notifyAndApiCall()
    
  }, [startingSDate,slotTime])
  

  return (
    <>
      <div id="timeSlot" className="overflow-hidden scroll-smooth	">
        <div className="flex flex-col gap-10 lg:pl-9 mt-20   ">
          <div className="p-4 w-[360px] ml-4 shadow-2xl lg:w-[80%] lg:mt-8 lg:ml-28 lg:py-12 mt-6 text-[14px] ">
            <div>
              <h1 className="text-[#FAA200] ">Preferred time Slot (IST) : </h1>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="font-bold ml-4">Morning Session</h1>

                <div className="flex gap-2 mt-4 px-2  lg:gap-8 ">
                  <button
                    onClick={() => {
                      setColorset("A");
                      setSlotTime("05:00");
                    }}
                    className={` ${
                      Colorset == "A" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    05:00 - 06:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("B");
                      setSlotTime("06:00");
                    }}
                    className={` ${
                      Colorset == "B" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    06:00 - 07:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("C");
                      setSlotTime("07:00");
                    }}
                    className={` ${
                      Colorset == "C" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    07:00 - 08:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("D");
                      setSlotTime("08:00");
                    }}
                    className={` ${
                      Colorset == "D" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    08:00 - 09:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("E");
                      setSlotTime("09:00");
                    }}
                    className={` ${
                      Colorset == "E" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    09:00 - 10:00
                  </button>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <h1 className="font-bold ml-4">Evening Session</h1>

                <div className="flex gap-2 mt-4 px-2  lg:gap-8 ">
                  <button
                    onClick={() => {
                      setColorset("F");
                      setSlotTime("16:00");
                    }}
                    className={` ${
                      Colorset == "F" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    04:00 - 05:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("G");
                      setSlotTime("17:00");
                    }}
                    className={` ${
                      Colorset == "G" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    05:00 - 06:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("H");
                      setSlotTime("18:00");
                    }}
                    className={` ${
                      Colorset == "H" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    06:00 - 07:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("I");
                      setSlotTime("19:00");
                    }}
                    className={` ${
                      Colorset == "I" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    07:00 - 08:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("J");
                      setSlotTime("20:00");
                    }}
                    className={` ${
                      Colorset == "J" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    08:00 - 09:00
                  </button>

                  <button
                    onClick={() => {
                      setColorset("K");
                      setSlotTime("21:00");
                    }}
                    className={` ${
                      Colorset == "K" ? " bgSet " : " "
                    } text-[#283143] lg:border-2 border-2  hover:text-white hover:bg-[#283143] border-[#283143] rounded-xl px-1 lg:text-[14px] lg:px-4 lg:py-2 lg:cursor-pointer lg:rounded-3xl`}
                  >
                    09:00 - 10:00
                  </button>
                </div>
                {slotTime && <p>Selected Time { slotTime}</p>}

                
              </div>

              <p className="text-red-500 mt-8 pl-4">
                *Note - The above mentioned timings are according to Indian
                Standard Time (IST)
              </p>
            </div>

            {/* <div className="flex">
            <input
              className="w-36 h-8 rounded-md rounded-r-none border-black p-2  border-t-2 border-b-2 border-l-2  border-r-none outline-none"
              type="time"
              placeholder="00 Hrs"
              onChange={(e)=>{console.log(typeof e.target.value)}}
            ></input>
            <img
              className="w-8 h-8 border-r-2 border-t-2 border-b-2 border-black rounded-r-md "
              src="/AlarmClock.png"
            />
          </div> */}

            {/* <div className="flex items-center gap-2">
            <h1 className="text-[#FAA200]">IST</h1>
            <HiChevronDown className="text-xl "></HiChevronDown>
          </div> */}
          </div>

          {/* <div className="flex gap-5 items-center">
          <div>
            <h1 className="text-[#FAA200] w-48">Starting Date: </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-5">
            <div className="flex">
              <input
                className="w-36 h-8 rounded-md rounded-r-none border-black p-2  border-t-2 border-b-2 border-l-2  border-r-none outline-none"
                type="date"
                placeholder="00 Hrs"
              ></input>
              <img
                className="w-8 h-8 border-r-2 border-t-2 border-b-2 border-black rounded-r-md "
                src="/Calendar.png"
              />
            </div>

          
          </div>
        </div> */}
        </div>

        {/* mobile view timeslot */}

        {/* <div className="flex justify-center mt-10"> */}
        {/* <div className=" bg-white lg:w-[75%] lg:h-300px  shadow-2xl rounded-md overflow-x-scroll scrollbar-hide"> */}
        {/* <div className="shadow-2xl  w-[1050px] sm:-ml-36  "
        >
          <h1 className="text-[#FAA200] text-xl ml-2 ">Trainers Available</h1>
          <div className="flex flex-wrap justify-center px-2  mx-auto ">
            {data.map((item, index) => {
              return (
                <div className="p-4 w-72  flex flex-col text-center   my-5">
                  <div className=" flex items-center justify-center   flex-shrink-0">
                    <img className="w-72" src={item.img} alt="" />
                  </div>
                  <div className="flex-grow py-14">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {item.name}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.expert}
                      <br />
                      {item.experience}
                    </p>

                    <div className="rate">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <p className=" mx-2">5/5</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="bg-[#283143] text-white p-2 rounded-md w-32 ">
                      Select
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
        <>
          <div className="px-10 shadow-2xl mt-5 sm:ml-36 ml-0 ">
            <div className="flex gap-5 items-center pt-6 mt-5">
              <div>
                <h1 className="text-[#FAA200] w-28 lg:w-48">Starting Date: </h1>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
                <div className="flex">
                  <input
                    className="w-36 h-8 rounded-md rounded-r-none border-black p-2  border-t-2 border-b-2 border-l-2  border-r-none outline-none"
                    type="date"
                    placeholder="00 Hrs"
                    onChange={(e) => {
                      setStartingDate(e.target.value);
                    }}
                  ></input>

                  <img
                    className="w-8 h-8 border-r-2 border-t-2 border-b-2 border-black rounded-r-md "
                    src="/Calendar.png"
                  />
                </div>
                {startingSDate && <p> Start Date {startingSDate}</p>}
              </div>


            </div>
      { trainer &&     <h1 className="mt-8 text-green-500">Trainer {trainer.name} Assigned SuccessFully </h1>}
            <h3 className="text-start -ml-5 sm:-ml-0 pt-10 text-xl text-orange-400">
              Select Availability Dates
            </h3>
            {console.log("start date ss", startCalender)}
            <div className="flex flex-col justify-center text-center items-center mx-auto overflow-x-scroll	 scrollbar-hide ">
              <Calendar
                className="ml-[700px] sm:-ml-36  my-20 "
                multiple
                minDate={
                  startCalender == "Invalid Date" ? today : startCalender
                }
                maxDate={"2023-06-26"}
                value={value}
                sort={true}
                shadow={true}
                onChange={setValue}
                numberOfMonths={4}
                format="DD-MM-YYYY"
                plugins={[weekends([0]), <DatePanel position="right" />]}
              />
            </div>
          </div>
        </>
      </div>

      <div className="bgcover relative items-center py-2 gap-4 flex flex-col ml-6   ">
        <button
          className="text-white text-lg font-bold p-2 bg-[#FAA200] w-44 rounded-3xl"
          onClick={() => Clickoff(!Clickon)}
        >
          BookNow
        </button>
      </div>
    </>
  );
};

export default TimeSlot;
