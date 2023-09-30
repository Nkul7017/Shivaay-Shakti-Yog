import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroNavbar from "./HeroNavbar";
import P1 from "../../public/Program/P1.png";
import img1 from "../../public/Program/Details/img1.png"
import img2 from "../../public/Program/Details/img2.png"
import img3 from "../../public/Program/Details/img3.png"
import img4 from "../../public/Program/Details/img4.png"
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
function ParticularArticle() {
  const [show, setshow] = useState(false);
  const [page, setPage] = useState(0);
  const [view,setView]=useState(false);
  const data = [
    {
      icon: img1,
      icon_content: "60",
      sub_heading: "Batch-size",
    },
    {
      icon: img2,
      icon_content: "60 Days ",
      sub_heading: "Duration",
    },
    {
      
      icon_content: "Beginner",
      sub_heading: "Difficulty Level",
    },
    {
      icon: img3,
      icon_content: "Open",
      sub_heading: "Gender",
    },
    {
      
      icon_content: "18-40 Years",
      sub_heading: "Age Group",
    },
    {
      icon:img4,
      icon_content: "45",
      sub_heading: "Live Classes",
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
      <div className=" ">
        <div className=" relative z-10 ">
          <HeroNavbar />
        </div>
        <div className=" w-[98vw] mx-auto h-[530px] flex justify-between sm:gap-1 gap-1  -mt-40   ">
          <div>
            <img
              src={P1}
              className="   h-[530px] w-[375x] object-fill"
              alt=""
            />
          </div>
          <div>
            <img
              src={P2}
              className="  hidden lg:inline-block object-fill h-[530px] w-[375px]"
              alt=""
            />
          </div>
          <div>
            <img
              src={P3}
              className="  hidden md:inline-block object-fill h-[530px] w-[375px]"
              alt=""
            />
          </div>
          <div>
            <img
              src={P4}
              className="  h-[530px] w-[375px] object-fill "
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-[70vw] mt-10 mx-auto ">
        <div className=" flex justify-between items-center ">
          <p className=" heading text-6xl ">Hatha Yoga Course</p>
          <p className=" flex items-center gap-3"><img src={rstar} alt="" /> <span className="text-xl font-semibold para ">4.5</span></p>
        </div>
        <div className=" flex gap-6 items-center mt-8 ">
          <Link className="button3 ">
            <span>Book Now</span>
          </Link>
          <Link className=" heading  ">
            <span>Start a free trial</span>
          </Link>
        </div>
        <div className=" mt-5 heading text-2xl">Starting - 02 October</div>
        <div className=" mt-3 para text-3xl font-semibold">
          ₹ 30,000 <span className="para text-sm  ">Per Head</span>
        </div>
        <div className=" mt-10">
          <Details data={data} />
        </div>
        <div className=" mt-5">
          <p className="text-4xl heading">Details</p>
          <p className="text-md text-justify para">
            Hatha yoga is a traditional style of yoga that focuses on physical
            postures (asanas), breathing exercises (pranayama), and relaxation
            techniques. It is a gentle form of yoga that is suitable for
            beginners and experienced practitioners alike. Hatha yoga can help
            improve flexibility, strength, balance, and mental clarity{" "}
            {show &&
              " Hatha yoga is a traditional style of yoga that focuses on physical postures (asanas), breathing exercises (pranayama), and relaxation techniques. It is a gentle form of yoga that is suitable for beginners and experienced practitioners alike. Hatha yoga can help improve flexibility"}
          </p>
          <button
            className=" text-md font-semibold mt-1 para "
            onClick={() => {
              setshow(!show);
            }}
          >
            {!show ? "Read More" : "Read Less"}
          </button>
          <div className="flex gap-2  mt-10 w-[80vw]  flex-wrap  ">
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
          </div>
        </div>
        <div className=" mt-6  ">
         <p className=" heading text-4xl  ">FAQ'S</p>
         <div className=" space-y-4 mt-5  ">
         {
          data1.map((data,index)=>
          <Faq1 data={data?.content} key="Nakul+index" />
          )
         }
         </div>
        </div>
      
      <div className="flex flex-col items-center mt-20 gap-3   ">
          <p className="para text-2xl text-[#444444] font-semibold">HURRY !!!&nbsp; Only 30 Seats Left</p>
          <Link className="button3 mt-2 "><span>Book Now</span></Link>
          <p className="para text-xl font-semibold ">Starting - 02 October</p>
        </div>

        <div className=" mt-14 ">
          <p  className="heading text-4xl ">RATINGS & REVIEWS</p>
          <div className="mt-6"><img src={star} className="h-10 inline-block "  alt="" /><span className="text-4xl   heading">4.2/5</span></div>
        </div>
        <div className="mt-4">
          <span className="para text-md text-[#000000] font-semibold  ">26 ratings | 5 reviews</span>
        </div>
        <div className=" grid md:grid-cols-2 gap-5 mt-10">
          {reviews.slice(0,view?reviews.length:2).map((data,index)=>
           <Review {...data} key={"nkul"+index} />
          )}
        </div>
        <button onClick={()=>setView(!view)} className="button3 mt-10"><span>{!view?"View More":"View Less"}</span></button>
        </div>
        <div className="mt-20">
        <Footer/>
        </div>
    </>
  );
}

export default ParticularArticle;
