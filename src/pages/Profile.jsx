import { useState, React, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import DesboardNavbar from "../components/DesboardNavbar";

const selectUser = (state) => state.user;

const Profile = () => {
  const getUserData = useSelector(selectUser);
  const [count, setcounter] = useState(0);
  const [sleep, setSleep] = useState(false);
  const [fruits, setFruits] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    // const local_ID = localStorage.getItem("ID");

    // setId(local_ID.slice(1, 25));
    setcounter(getUserData?.user?.dailyTasks?.water);

    setFruits(getUserData?.user?.dailyTasks?.fruits);
    setSleep(getUserData?.user?.dailyTasks?.sleep);

    setTimeout(() => {
      setId(getUserData?.user?._id);
    }, 1000);
  }, [getUserData]);

  const updateCount = () => {
    setcounter(count + 1);
  };
  const decrement = () => {
    setcounter(count - 1);
  };

  const data = getUserData?.user?.course;

  const updateTasks = async () => {
    try {
      var options = {
        method: "PUT",
        url: `https://shivayshaktibackend.onrender.com/trainee/tasks/${id}`,
        headers: {
          Accept: "application/json",
        },
        data: {
          water: count,
          sleep: sleep,
          fruits: fruits,
        },
      };

      axios.request(options).then(function (response) {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timeout;

    if (id) {
      timeout = setTimeout(() => {
        updateTasks();
        console.log("update task runnn");
      }, 5000);
    } else {
      console.log("update task else runnn");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [count, sleep, fruits]);

  // console.log(" user detail in profile page", getUserData?.user);

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="lg:flex  hidden h-screen">
            <Sidebar></Sidebar>
          </div>

          <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1086910403788931153/Screen_1.png')] w-full bg-no-repeat bg-cover overflow-y-scroll h-screen ">
            <div className="lg:flex lg:flex-col hidden">
              <Navbar />
            </div>
            <div className="lg:hidden">
              <DesboardNavbar />
            </div>
            <h1 className="font-bold text-lg pl-5 mt-5 ">User Dashboard</h1>

            <div className="flex gap-10 ">
              <div className="p-4 ">
                <div className="bg-[#F6E0BE] rounded-2xl h-44 lg:w-[700px] lg:h-28 ">
                  <div className="flex gap-4 pl-4">
                    <div className="flex flex-col gap-3">
                      <h1 className="font-bold text-xl mt-3">
                        Hi {getUserData?.user?.name}!
                      </h1>
                      <h1 className="text-[#FAA200]">
                        Today is a great day to add to your fitness journey!
                      </h1>
                    </div>
                    <div>
                      <img
                        className=" h-44 lg:w-48 lg:-mt-12 lg:h-40 "
                        src="img/image 6.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden  relative lg:flex lg:mt-20 ">
                <div>
                  <img
                    className="   w-[250px] -mt-24 "
                    src="img/Ellipse 2.png"
                  />
                </div>
                <div className="w-36 flex flex-col items-center text-center -ml-48 p-4 -mt-28  ">
                  <img className="w-12  mt-8" src="img/Idea.png" />
                  <h1>Tip of the day!</h1>
                  <p className="text-[10px]  w-36 text-[#FF754C]">
                    Remember to practice gratitude and appreciation for your
                    body and your practice, as this will enhance your overall
                    experience and lead to greater growth and transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:-mt-10">
              <h1 className="text-md ml-4 font-semibold lg:ml-10 ">
                Today’s Tasks
              </h1>
              <h1 className="text-[#FAA200] ml-4  lg:ml-10">
                03/04/2023, Monday{" "}
              </h1>
            </div>
            <div className="lg:flex">
              <div>
                <div className="flex gap-4  overflow-x-scroll scrollbar-hide ">
                  {/* {data.map((item, index) => {
                    return ( */}
                  <div className="px- py-5 ml-3">
                    <div className="bg-[#F6E0BE] p-4 w-[220px] h-[270px] rounded-2xl">
                      <h1 className="text-[#FAA200] text-[14px]">
                        {data?.name}
                      </h1>
                      {/* <h1 className="text-[12px] font-bold">{data?.day}</h1> */}
                      {/* <h1 className="text-[10px] ">{data?.name}</h1> */}
                      <p className=" text-[13px]">Details</p>
                      <div className="w-[200px] h-[120px] scrollbar-hide overflow-y-scroll ">
                        <p className="text-[10px] ">{data?.details}</p>
                      </div>
                      <p className=" text-[13px]">Timings</p>
                      <p className="text-[12px] font-bold">
                        {" "}
                        <span className="text-[10px] font-semibold">
                          {data?.timings}{" "}
                        </span>
                      </p>
                      <div className="flex gap-4 ">
                        {data?.status == "Pending" ? (
                          <button className="bg-[#21251e]  text-[10px] px-5 py-2 rounded-2xl text-white mt-3">
                            {data?.status}
                          </button>
                        ) : (
                          <button className="bg-[#7CCE2A] text- text-[10px] px-5 py-2 rounded-2xl text-white mt-3">
                            {data?.status}
                          </button>
                        )}
                        <Link to={`/category/group-session/${data?._id}`}>
                          <button className="bg-[#7CCE2A] text-[10px] px-5 py-2 rounded-2xl text-white mt-3 ">
                            Detail View
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* );
                  })} */}
                </div>

                <div className="ml-16 -mt-4 gap-44 hidden lg:flex ">
                  <button className="bg-[#283143] text-white px-7 py-2 rounded-xl">
                    join
                  </button>
                </div>

                <div className="lg:pl-10 hidden lg:flex justify-center">
                  <h1 className="text-[24px] font-bold mt-5">Achievements</h1>
                  <div className="lg:flex gap-12 mt-16 -ml-44  ">
                    {fruits == true ? (
                      <div className="flex flex-col items-center text-center ">
                        <img className="w-12" src="img/Group Of Fruits.png" />

                        <h1 className="text-[#FAA200] text-[12px]">
                          Consistent
                        </h1>
                        <h1 className="text-[#283143] text-[15px] ">
                          Consumption of fruits
                        </h1>
                      </div>
                    ) : null}

                    {sleep == true ? (
                      <div className="flex flex-col items-center text-center ">
                        <img className="w-12" src="img/Sleeping in Bed.png" />

                        <h1 className="text-[#FAA200] text-[12px]">Success!</h1>
                        <h1 className="text-[#283143] text-[15px] ">
                          8 hours of continuous sleep{" "}
                        </h1>
                      </div>
                    ) : null}

                    {count >= 8 ? (
                      <div className="flex flex-col   items-center text-center">
                        <img className="w-12" src="img/Water Wave.png" />
                        <h1 className="text-[#FAA200] text-[12px]">
                          Hydration Champ!
                        </h1>
                        <h1 className="text-[#283143] text-[15px] ">
                          Drank 8+ glasses of water daily!
                        </h1>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="lg:mt-10 sm:mt-5 lg:-ml-16">
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-[rgb(246,224,190)] flex justify-between lg:px-1 w-80  items-center  text-center h-14 lg:w-[350px] rounded-xl pl-4">
                    <div>
                      <img className="w-8" src="img/Sparkling Water.png" />
                    </div>
                    <div className="text-[12px]">
                      <h2>8 Glass of water</h2>
                    </div>
                    <div className="flex gap-2">
                      <div className=" text-2xl bg-white w-8 text-center  h-6 text-[#FAA200] shadow-2xl rounded-md">
                        <button
                          className="cursor-pointer"
                          onClick={updateCount}
                        >
                          <FiPlus className="ml-1"> </FiPlus>
                        </button>
                      </div>
                      <div>
                        <h1> {count} </h1>
                      </div>
                      <div className="text-2xl bg-white w-8   h-6 text-[#FAA200] shadow-2xl rounded-md">
                        <button
                          disabled={count <= 0 || count >= 8}
                          onClick={decrement}
                          className="cursor-pointer"
                        >
                          <FiMinus className="ml-1 cursor-pointer"></FiMinus>
                        </button>
                      </div>
                    </div>
                    {count <= 7 ? (
                      <div className="bg-white text-[#FAA200] sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button> Pending </button>
                      </div>
                    ) : (
                      <div className="bg-[#7CCE2A] text-white sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button>Done</button>
                      </div>
                    )}
                  </div>

                  <div className="bg-[rgb(246,224,190)] flex justify-between lg:px-1 w-80   items-center text-center h-14 lg:w-[350px] rounded-xl pl-4">
                    <div>
                      <img className="w-8" src="img/Sleeping in Bed.png" />
                    </div>
                    <h1>8 hours of continuous sleep </h1>
                    {!sleep ? (
                      <div className="bg-white text-[#FAA200] sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button onClick={() => setSleep(!sleep)}>
                          {" "}
                          Pending{" "}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[#7CCE2A] text-white sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button
                          disabled={sleep == true}
                          onClick={() => setSleep(!sleep)}
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="bg-[rgb(246,224,190)] flex justify-between lg:px-1 w-80    items-center text-center h-14 lg:w-[350px] rounded-xl pl-4">
                    <div>
                      <img className="w-8" src="img/Group Of Fruits.png" />
                    </div>
                    <h1>Consumption of fruits</h1>

                    {!fruits ? (
                      <div className="bg-white text-[#FAA200] sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button onClick={() => setFruits(!fruits)}>
                          {" "}
                          Pending{" "}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[#7CCE2A] text-white sm:px-4 sm:py-2 lg:px-2 py-1 rounded-md w-20 ">
                        <button
                          disabled={fruits}
                          onClick={() => setFruits(!fruits)}
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-96 lg:h-[400px] lg:ml-96 -mt-1  lg:flex hidden  ">
                  <img src="img/image 4 (3).png" />
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center text-center p-4  md:hidden  ">
              <img className="w-16  mt-8" src="img/Idea.png" />
              <h1>Tip of the day!</h1>
              <p className="text-[14px] w-56  text-[#FF754C]">
                Remember to practice gratitude and appreciation for your body
                and your practice, as this will enhance your overall experience
                and lead to greater growth and transformation.
              </p>
            </div>

            <div className="lg:pl-10 lg:hidden ">
              <h1 className="text-[24px] font-bold mt-5 ml-3">Achievements</h1>
              <div className="flex gap-12 ">
                {fruits == true ? (
                  <div className="flex flex-col items-center text-center ">
                    <img className="w-12" src="img/Group Of Fruits.png" />

                    <h1 className="text-[#FAA200] text-[12px]">Consistent</h1>
                    <h1 className="text-[#283143] text-[15px] ">
                      Consumption of fruits
                    </h1>
                  </div>
                ) : null}

                {sleep == true ? (
                  <div className="flex flex-col items-center text-center ">
                    <img className="w-12" src="img/Sleeping in Bed.png" />

                    <h1 className="text-[#FAA200] text-[12px]">Success!</h1>
                    <h1 className="text-[#283143] text-[15px] ">
                      8 hours of continuous sleep{" "}
                    </h1>
                  </div>
                ) : null}

                {count >= 8 ? (
                  <div className="flex flex-col   items-center text-center">
                    <img className="w-12" src="img/Water Wave.png" />
                    <h1 className="text-[#FAA200] text-[12px]">
                      Hydration Champ!
                    </h1>
                    <h1 className="text-[#283143] text-[15px] ">
                      Drank 8+ glasses of water daily!
                    </h1>
                  </div>
                ) : null}
              </div>
            </div>

            {/* <ProfileCard></ProfileCard> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
