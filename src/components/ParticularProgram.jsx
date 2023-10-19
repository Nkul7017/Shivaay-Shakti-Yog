import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroNavbar from "./HeroNavbar";
import P1 from "../../public/Program/P1.png";
import Details1 from "./Details1";

import img1 from "../../public/Program/Personal/img1.png"
import img2 from "../../public/Program/Personal/img2.png"
import img3 from "../../public/Program/Personal/img3.png"
import img101 from "../../public/Program/Details/img1.png"
import img201 from "../../public/Program/Details/img2.png"
import img301 from "../../public/Program/Details/img4.png"
import img401 from "../../public/Program/Details/img3.png"


import img11 from "../../public/Program/Group/img1.png"
import img22 from "../../public/Program/Group/img2.png"
import img33 from "../../public/Program/Group/img3.png"
import img44 from "../../public/Program/Group/img4.png"
import P2 from "../../public/Program/P2.png";
import P3 from "../../public/Program/P3.png";
import P4 from "../../public/Program/P4.png";
import left from "../../public/Program/Arrow/left.png";
import right from "../../public/Program/Arrow/right.png";
import star from '../../public/star.png'
import rstar from '../../public/rstar.png'
import Days from "../components/Days";
import Details from "../components/Details";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Faq1 from "./Faq1";
import Review from "./Review";
import TymPicker from "./TymPicker";
import DtePicker from "./DtePicker";
import MulitpleDate from "./MulitpleDate";
import Terms from "./Terms";
import Confirmation from "./Confirmation";
import Types from './Type';
function ParticularArticle() {
  const [toggle,setToggle]=useState(false);
  const [toggle1,setToggle1]=useState(false);
  const [show, setshow] = useState(false);
  const [book,setBook]=useState(false); 
  const [personal,setPersonal]=useState(true); 
  const [group,setGroup]=useState(false); 
  const [page, setPage] = useState(0);
  const [view,setView]=useState(false);
  const data = [
    {
      icon: img301,
      icon_content: "60",
      sub_heading: "More Strength",
    },
    {
      icon: img201,
      icon_content: "60 Days ",
      sub_heading: "More Energy",
    },
    {
      icon: img401,
      icon_content: "Open",
      sub_heading: "Balance",
    },
    {
      icon:img101,
      icon_content: "45",
      sub_heading: "Low Stress",
    },
  ];
  const data2 = [
    {
      icon: img1,
      icon_content: "60 Days ",
      sub_heading: "Duration",
    },
    {
      
      icon_content: "Beginner",
      sub_heading: "Difficulty Level",
    },
    {
      icon_content: "Open",
      sub_heading: "Gender",
    },
    {
      
      icon_content: "18-40 Years",
      sub_heading: "Age Group",
    },
    {
      icon:img2,
      icon_content: "",
      sub_heading: "Diet Plan",
    },
    {
      icon:img3,
      icon_content: "45",
      sub_heading: "LIve Classes",
    },
  ];
  const data3 = [
    {
      icon: img33,
      icon_content: "60 ",
      sub_heading: "Batch Size",
    },
    {
      icon: img22,
      icon_content: "60 Days ",
      sub_heading: "Duration",
    },
    {
      
      icon_content: "Beginner",
      sub_heading: "Difficulty Level",
    },
    {
      icon_content: "Open",
      sub_heading: "Gender",
    },
    {
      
      icon_content: "18-40 Years",
      sub_heading: "Age Group",
    },
    {
      icon:img44,
      icon_content: "",
      sub_heading: "Diet Plan",
    },
    {
      icon:img11,
      icon_content: "45",
      sub_heading: "LIve Classes",
    },
  ];

  const days = [
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
    { heading: "Introduction", time: "6:30-8:00 (hrs)" },
    { heading: "Standing postures and forward bends", time: "6:30-8:00 (hrs)" },
    { heading: "Twists and core strengthening", time: "6:30-8:00 (hrs)" },
    { heading: "Backbends and hip openers", time: "6:30-8:00 (hrs)" },
    {
      heading: "Full-body flow incorporating previous poses",
      time: "6:30-8:00 (hrs)",
    },
    { heading: "Restorative yoga and relaxation", time: "6:30-8:00 (hrs)" },
  ];
  const data1=[
    {content:"Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity."},
    {content:"Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity."},
    {content:"Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity."},
    {content:"Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity."},
    {content:"Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity."},
  ]
  const reviews=[
    {
      name:"Nakul Thakur",
      heading:"Nice environment for students",
      content:"Nice environment for students The teachers and administration really help children to grow Staff is really good"
    },
    {
      name:"Himanshika ",
      heading:"Nice environment for students",
      content:"Nice environment for students The teachers and administration really help children to grow Staff is really good"
    },
    {
      name:"Rishabh",
      heading:"Nice environment for students",
      content:"Nice environment for students The teachers and administration really help children to grow Staff is really good"
    },
    {
      name:"Nakul",
      heading:"Nice environment for students",
      content:"Nice environment for students The teachers and administration really help children to grow Staff is really good"
    },
    {
      name:"Himanshi",
      heading:"Nice environment for students",
      content:"Nice environment for students The teachers and administration really help children to grow Staff is really good"
    },
  ]
  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
  
    <>
      <div className="  ">
        <div className=" relative z-10 px-2  ">
          <HeroNavbar />
        </div>

        {/*------------------------------- Hero Section-------------------------------------------- */}
        <div className=" sm:w-[98.90vw] w-[100vw] flex justify-between gap-1 -mt-20 sm:-mt-40   ">
          <div className="object-fill">
            <img
              src={P2}
              className="  w-[185px] sm:w-[375px]  h-[268px]   sm:h-[530px]  object-fill"
              alt=""
            />
          </div>
          <div>
            <img
              src={P1}
              className="  hidden lg:inline-block object-fill w-[185px] sm:w-[375px]  h-[268px]   sm:h-[530px] "
              alt=""
            />
          </div>
          <div>
            <img
              src={P3}
              className="  hidden md:inline-block object-fill w-[185px] sm:w-[375px]  h-[268px]   sm:h-[530px]"
              alt=""
            />
          </div>
          <div>
            <img
              src={P4}
              className=" w-[185px] sm:w-[375px]  h-[268px]   sm:h-[530px] object-fill "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[80vw] sm:w-[70vw] mt-12  sm:mt-20 mx-auto ">
        <div className=" flex justify-between items-center  ">
          <p className=" heading text-2xl sm:text-6xl ">Hatha Yoga Course</p>
          <p className=" sm:flex items-center hidden  gap-3"><img src={rstar} alt="" /> <span className="text-xl font-semibold para ">4.5</span></p>
        </div>
       
        {/* {!book&&<div className=" flex gap-6 items-center mt-8 ">
          <button className="button3  " onClick={()=>setBook(!book)} style={{width:"150px"}}>
            <span>Book Now</span>
          </button>
          <Link className=" heading  ">
            <span>Start a free trial</span>
          </Link>
        </div>} */}
        {/* <div className=" mt-5 heading text-2xl">Starting - 02 October</div> */}
        {/* <div className=" mt-3 para text-3xl font-semibold">
          ₹ 30,000 <span className="para text-sm  ">Per Head</span>
        </div> */}

        {/*-------------------------------------- Icons---------------------------------------------- */}
        
        <div className=" mt-4">
          <Details data={data} />
        </div>

        {/*----------------------------------Description----------------------------------------------*/}

        <div className=" mt-5 sm:mt-10">
          <p className=" text-xl sm:text-4xl heading">Description</p>
          <p className=" text-sm text-justify para mt-3 ">
          Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility, strength, balance, and mental clarity. Online group classes are a convenient way to practice yoga from the comfort of your own home. 
            {show &&
              " They allow you to connect with a community of like-minded people and receive guidance from an experienced teacher. Online classes can be accessed through various platforms, such as Zoom, Skype, or Google Meet. Some instructors may offer live classes, while others may provide pre-recorded videos that you can access at your convenience."}
          </p>
          <button
            className=" text-md font-semibold mt-1 para   "
            onClick={() => {
              setshow(!show);
            }}
          >
            {!show ? "Read More" : "Read Less"}
          </button>
          </div>
       
          
        {/*----------------------------------Types----------------------------------------------*/}
        <section className=" mt-10 sm:mt-14">
        <p className=" text-xl sm:text-4xl heading">Select Course Type</p>
          <Types/>
        </section>


          {/*--------------------------------- SESSIONS----------------------------------------------- */}
          {/* {book&&<>
          <div id="jump" className=" flex mt-8  gap-4 sm:gap-7 ">
            <button onClick={()=>{setPersonal(true);setGroup(false)}} className={`  heading_colorless  session_button w-80  text-sm sm:text-md  md:w-80 md:text-xl lg:w-80 h-10 lg:text-2xl  ${personal?" sess_shadow bg-[#2C3E50] text-white":"text-[#2C3E50]  "  } `} ><span>Personal Training Session</span></button>
            <button onClick={()=>{setPersonal(false);setGroup(true)}} className={`  heading_colorless  session_button w-80  text-sm sm:text-md  md:w-80 md:text-xl lg:w-80 h-10 lg:text-2xl  ${group?" sess_shadow bg-[#2C3E50] text-white":"text-[#2C3E50]  "  } `} ><span>Group Training Session</span></button>
          </div>
          </>} */}

          {/*------------------------------- Personal Training--------------------------------------- */}

         {/* {
          (personal&&book)&&<>
           <div  className=" mt-10">
          <Details1 data={data2} />
        </div>

        <div>
          <p className="text-2xl mt-5 heading">Preferred Time Slot:</p>
         <TymPicker/>
    <p className="text-2xl mt-5 heading">Starting Date:</p>
    <DtePicker/>
    <p className="text-2xl mt-16 heading">Select Available Dates</p>
    <MulitpleDate/> 
        </div>
          <div className=" mt-6 heading text-6xl font-semibold">
          ₹ 30,000 <span className="para text-sm  ">Per Person</span>
        </div> 
        <button className="button3 mt-5 " onClick={()=>setToggle1(true)} >
            <span>Book Now</span>
          </button>
          <Confirmation toggle1={toggle1} setToggle={setToggle} setToggle1={setToggle1} />
          <Terms toggle={toggle} setToggle={setToggle}  />
          </>
         } */}





          {/*------------------------------- Group Training------------------------------------------- */}

          {/* {
          (group&&book)&&<>
           <div className=" mt-10">
          <Details1 data={data3} />
        </div>
        <div>
          <p className="text-2xl mt-5 heading">Time Slot - 06:00 AM - 08:00 AM </p>
          <TymPicker/> 
        </div>
         <div className=" mt-8 heading text-2xl">Starting - 02 October</div> 
         <div className=" mt-6 heading text-6xl font-semibold">
          ₹ 30,000 <span className="para text-sm  ">Per Person</span>
        </div>
        <button className="button3 mt-5 " onClick={()=>setToggle1(true)} >
            <span>Book Now</span>
          </button>
        <Confirmation toggle1={toggle1} setToggle={setToggle} setToggle1={setToggle1} />
          <Terms toggle={toggle} setToggle={setToggle}  />
          </>
         } */}


          

          {/*------------------------------ DETAILS OF COURSE PER DAY-------------------------------- */}

          {/* <div className="flex gap-2   mt-10 overflow-scroll scrollbar-hide   ">
            {days.slice(page * 6, (page + 1) * 6).map((days, index) => (
              <>
                <Days {...days} index={index + page * 6} key={"days" + index} />
              </>
            ))}
          </div>
          <div className=" text-xl para font-bold mt-5 flex items-center justify-center gap-2  ">
            <button
              className={`${page == 0 && " hidden "}`}
              onClick={() => {
                if (page > 0) setPage(page - 1);
              }}
            >
              {" "}
              <img src={left} alt="" />{" "}
            </button>{" "}
            <span>
              {" "}
              {page + 1}-{ (Math.min(days.length, (6*(page+1)))) } of {days.length}{" "}
            </span>{" "}
            <button
              className={`${page >= days.length / 6 - 1 && " hidden "}`}
              onClick={() => {
                if (page < days.length / 6 - 1) setPage(page + 1);
              }}
            >
              {" "}
              <img src={right} alt="" />{" "}
            </button>
          </div> */}
        

        {/*------------------------------------ FAQ --------------------------------------------------*/}
          
        <div className=" mt-10  sm:mt-20  ">
         <p className=" heading text-xl sm:text-4xl  ">FAQ'S</p>
         <div className=" space-y-4 mt-7  ">
         {
          data1.map((data,index)=>
          <Faq1 data={data?.content} key={"Nakul"+index} />
          )
         }
         </div>
        </div>
      
      {/* {!book&&<div className="flex flex-col items-center mt-20 gap-3   ">
          <p className="para text-2xl text-[#444444] font-semibold">HURRY !!!&nbsp; Only 30 Seats Left</p>
          <button className="button3 mt-2 " style={{width:"150px"}} onClick={()=>setBook(!book)}><a href="#jump"  >Book Now</a></button>
          <p className="para text-xl font-semibold ">Starting - 02 October</p>
        </div>} */}


        {/*----------------------------------- REVIEWS -----------------------------------------------*/}

        <div className=" mt-10 sm:mt-20 flex  justify-between  sm:block items-center sm:items-start ">
          <p  className="heading text-[18px] sm:text-4xl ">RATINGS & REVIEWS</p>
          <div>
          <div className="  flex gap-2 sm:gap-10 items-center mt-3 ">
            <img src={rstar} className="sm:h-7 sm:w-auto w-[75px] h-[12px]   "  alt="" />
            <span className=" text-[18px] sm:text-4xl pb-2 sm:pb-3   heading">4.2</span></div>
            <span className=" block sm:hidden para text-[8px] float-right sm:text-md text-[#000000] font-semibold self-end ">26 ratings | 5 reviews</span>
            </div>
        </div>
        <div className="mt-4 sm:block">
          <span className="para hidden sm:block text-md text-[#000000] font-semibold  ">26 ratings | 5 reviews</span>
        </div>
        <div className=" grid md:grid-cols-2 gap-5 mt-10">
          {reviews.slice(0,view?reviews.length:2).map((data,index)=>
           <Review {...data} key={"nkul"+index} />
          )}
        </div>
        <button onClick={()=>setView(!view)} className="button3 normal-case mt-10" style={{width:"120px"}}><span>{!view?"View more":"View less"}</span></button>
        </div>

        {/*----------------------------------- Footer------------------------------------------------ */}
        <div className="mt-20">
        <Footer/>
        </div>
    </>
  );
}

export default ParticularArticle;
