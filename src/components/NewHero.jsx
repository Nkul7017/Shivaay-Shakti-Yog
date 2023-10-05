import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.png";
import logo from "../../public/letter-head_CLR.png";
import bgVideo from "../../public/hero.mp4";
import bgVideo1 from "../../public/heroNew.mp4";
import logovideo from '../../public/loutput.gif'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
import { HiChevronDown } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroNavbar from "./HeroNavbar";
import { Link } from "react-router-dom";
import om from '../../public/Audio/om.mp3';
import ShurveyShivaay from "./Shurvey/ShurveyShivaay";
AOS.init({
  duration: 1200,
});

const NewHero = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(logovideo)
  const [show, setShow] = useState(false);
  const [shurveyPopup, setShurveyPopup] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if(window.innerWidth>959)
    {if(count==0){
    document.body.style.overflow = 'hidden';
    const timeout=setTimeout(() => {
      document.body.style.overflow = 'auto';
      dispatch(increment());
  setShow();
    },6000);
    return () => {
     
      clearTimeout(timeout);
    };}}
    else
    {
      dispatch(increment());
    }
  }, []);

  return (
    <>
        <>
          <div
            className=" "
            
          >
          
            <img
              className="myVideo  flex flex-col h-[700px] sm:h-[710px] "
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1113750711801499669/Rectangle_645.png"
              alt=""
            />

            <div className="content     ">
              <HeroNavbar login={login}></HeroNavbar>
              <div className="flex   justify-between items-center     pr-10   w-[83vw] ms-6 lg:ms-36 mx-auto h-auto    ">
                <div className="  flex flex-col  mt-14 sm:mt-0 pl-0 md:pl-12 lg:pl-16   lg:w-1/2    ">
                  {/* <h1 className="heading mt-10 text-xl  sm:text-2xl ">
                    Start your journey towards a{" "}
                  </h1> */}
                  <h1
                    className=" text-4xl  sm:text-6xl mt-4 sm:xl md:text-5xl heading"
                    style={{ fontWeight: 700 }}
                  >
                    For the
                  </h1>
                  <h1 className="text-4xl sm:text-6xl mt-4 sm:xl md:text-5xl heading"
                    style={{ fontWeight: 700 }}>
                 Betterment of Humanity
                  </h1>
                  <h3 className={` heading mt-6 text-md  sm:text-md  `}>
                    Occupying a small chunk in the{" "}
                    <span className="text-md font-bold! ">
                     
                      YOGA CAPITAL OF THE WORLD: RISHIKESH,
                    </span>
                    our organisation strives to make yoga accessible and
                    convenient to every citizen of the world. Get on board with
                    us to start your journey towards a healthier life.
                  </h3>
                  <button 
                  className="text-white text-sm button1 mt-8 sm:mt-16  shadow-md py-2 px-8  md:mt-5  rounded-md md:rounded-lg w-[260px] "
                  onClick={() => setShurveyPopup(!shurveyPopup)}
                >
                Take a Free Health Survey
                </button>
                </div>
                <div className={` hidden lg:flex justify-center     w-[100vw] h-[100vh]    absolute top-0 left-0 ${count?" w-[480px]    h-[480px]    relative       ":"bg-[#f6f8ef] "} `} style={{transition:"0.8s width,0.8s height"}}  >
                
                <img src={logovideo} alt=""  className={` ${!show?"":"w-[480px]    h-[480px]"}   `} />
               
                
                </div>
              
               
              </div>
            </div>
          </div>
        </>

      <ShurveyShivaay logovideo={logovideo} data={shurveyPopup}  setShurveyPopup={setShurveyPopup}  setLogin={setLogin} ></ShurveyShivaay>
    </>
  );
};

export default NewHero;
