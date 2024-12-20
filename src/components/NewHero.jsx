// import React, { useEffect, useState } from "react";
// // import logo from "../../public/logo.png";
// import logo from "../../public/letter-head_CLR.png";
// import bgVideo from "../../public/hero.mp4";
// import bgVideo1 from "../../public/heroNew.mp4";
// import logovideo from '../../public/loutput.gif'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../features/counter/counterSlice'
// import { HiChevronDown } from "react-icons/hi2";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import HeroNavbar from "./HeroNavbar";
// import { Link } from "react-router-dom";
// import NewSurvey from "./NewSurvey";

// const NewHero = () => {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
//   const [shurveyPopup, setShurveyPopup] = useState(false);
//   const [login, setLogin] = useState(false);
//   AOS.init({
//     duration: 800,
//   });
  
//   useEffect(() => {
    
//     {if(count===0){
//     document.body.style.overflow = 'hidden';
//     const timeout=setTimeout(() => {
//       document.body.style.overflow = 'auto';
//       dispatch(increment());
//   // setShow(true);
//     },6000);
//     return () => {
     
//       clearTimeout(timeout);
//       // setShow(false);
//     };}}
   
//   }, []);

//   return (
//     <>
//         <>
//           <div  className="  bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1113750711801499669/Rectangle_645.png')] bg-cover bg-center w-[100vw]  lg:h-[750px] md:h-[650px] h-[600px]    " 
//           >
            
//             {count!==0&&<HeroNavbar login={login}></HeroNavbar>}
//               <div className="flex  flex-col lg:pt-32    items-center      ">
                     
//                 <div className={` flex flex-col items-center    justify-center     ${count>0?"  opacity-100    lg:h-[580px] h-[400px]  sm:h-[430px] md:h-[500px]  justify-center    relative  lg:-mt-20  md:-mt-6 mt-10  ":"w-[100vw] h-[100vh]   top-0 left-0  bg-[#f6f8ef]  absolute"} ` }
               
//  >
//                 <img src={logovideo} alt=""  className={`  
//                 duration-1000
//                 ${count===0?"  -mt-16 sm:mt-0  md:h-[500] md:w-[500] w-[400px] h-[350px] lg:h-[600px] lg:w-[600px]  ":" w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] md:w-[450px] md:h-[450px]   "}`
            
//               }/>
//                 <h1
//                     className=" text-2xl   lg:text-5xl   md:text-3xl heading"
//                     style={{ fontWeight: 700, width:"auto" }}>
//                     For the Betterment of Humanity
//                   </h1>
//                 </div>
//                 <button 
//                   className="text-white text-sm button1  shadow-md py-2 px-8  mb-6   rounded-md md:rounded-lg w-[260px] "
//                   onClick={() => setShurveyPopup((prev=>!prev))}>
//                 Take a Free Health Survey
//                 </button>
//                 </div>
//           </div>
//         </>

//     <NewSurvey logovideo={logovideo} shurveyPopup={shurveyPopup}  setShurveyPopup={setShurveyPopup}  />
//       {/* <ShurveyShivaay logovideo={logovideo} data={shurveyPopup}  setShurveyPopup={setShurveyPopup}  setLogin={setLogin} ></ShurveyShivaay> */}
//     </>
//   );
// };

// export default NewHero;

import React, { useEffect, useState } from "react";
import logovideo from "../../public/loutput.gif";
import HeroNavbar from "./HeroNavbar";
import NewSurvey from "./NewSurvey";

const NewHero = () => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [shurveyPopup, setShurveyPopup] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (!isLogoLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLogoLoaded]);

  const handleLogoLoad = () => {
    setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setIsLogoLoaded(true), 1000); // Complete transition after fade-out
    }, 2000); // 2-second delay before fade-out starts
  };

  return (
    <>
      <div className="bg-cover bg-center w-full h-full">
        {isLogoLoaded && <HeroNavbar login={login}></HeroNavbar>}
        {!isLogoLoaded && (
          <img
            src={logovideo}
            alt="Logo Video"
            onLoad={handleLogoLoad}
            className={` z-[9999] w-full h-[100vh] object-contain transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
        
        <div className="flex flex-col pt-20 md:pt-0 lg:pt-32 xl:pt-[20%] items-center">
          <div className="flex flex-col items-center justify-center relative lg:-mt-20 md:-mt-6 mt-10">
            <img
              src={logovideo}
              alt="Logo Video"
              onLoad={handleLogoLoad}
              className={`w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] md:w-[450px] md:h-[450px] transition-transform duration-1000 ${
                isLogoLoaded ? "scale-100" : "scale-0"
              }`}
            />
            {isLogoLoaded && (
              <h1
                className="text-2xl lg:text-5xl md:text-3xl heading"
                style={{ fontWeight: 700, width: "auto" }}
              >
                For the Betterment of Humanity
              </h1>
            )}
          </div>
          {isLogoLoaded && (
            <button
              className="text-white text-sm button1 shadow-md py-2 px-8 mb-6 rounded-md md:rounded-lg w-[260px]"
              onClick={() => setShurveyPopup((prev) => !prev)}
            >
              Take a Free Health Survey
            </button>
          )}
        </div>
      </div>

      {isLogoLoaded && (
        <NewSurvey
          logovideo={logovideo}
          shurveyPopup={shurveyPopup}
          setShurveyPopup={setShurveyPopup}
        />
      )}
    </>
  );
};

export default NewHero;
