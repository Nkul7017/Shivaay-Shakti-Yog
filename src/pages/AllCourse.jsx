import React,{useState,useEffect} from 'react'
import course from '../../public/Course/course.png'
import HeroNavbar from '../components/HeroNavbar'
import Card1 from '../components/Card1';
import {FaSearch } from "react-icons/fa";
import Footer from '../components/Footer';
import {FaFilter } from "react-icons/fa";
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import helping1 from "../../public/helping1.png";
import axios from 'axios';
function AllCourse() {
  const [data,setData]=useState([]);
  async function getdata()
  {
    try{
  const response=await axios.get("/data.json");
   setData(response?.data);
    }
    catch(e)
    {
console.log(e);
    }
  }
  useEffect(()=>{
    getdata();
  },[])
  return (
   <>
   
    <div className="  ">
        <div className=" relative z-10   ">
          <HeroNavbar />
        </div>

        {/*------------------------------- Hero Section-------------------------------------------- */}
            
            <div className=' w-screen relative h-[170px] sm:h-[470px]  '>
            <img
            className="  w-screen h-[170px] sm:h-[470px]   "
              src={course}
              alt=""
            />
            <p className=' text-[24px] left-8 bottom-4 sm:text-[48px]  absolute sm:bottom-10 sm:left-16 md:left-20 lg:left-24 heading  ' style={{color:"white"}}>Explore our Courses</p>
            </div>
  
      </div>
      <div className='w-[88vw] sm:w-[70vw] mt-12  sm:mt-20 mx-auto '>
      {/* <div className='relative flex justify-between w-[100%] items-center '>
          <input type="text" placeholder=' Search' className='  pl-10 placeholder-[#444444] w-[60vw] text-2xl h-[36px] rounded-[10px] text-[#444] bg-[#EEEEEE]' />
          <FaSearch className='absolute w-[20px] top-2 left-3  text-[#444444]   z-50  '/>
          <FaFilter className='w-[25px] h-[25px]  mr-10 text-[#2C3E50] '/>
          </div> */}

          <div className="  text-4xl pt-20 p sm:pl-2 heading  ">
          <h1 className=' mb-10  '>Most Popular</h1>
        </div>

        {/*-------------------------------- Desktop------------------------------------------- */}

        <section className=' hidden sm:flex box  p-1   gap-7 sm:gap-10 mt-6  scrollbar-hide   overflow-scroll '>
            {data.map((value)=>
            
            <Card1 value={value}/>
            )}
        </section>

        {/*-------------------------------- MObile--------------------------------------------- */}
        <section className=' flex sm:hidden box  p-1  box  gap-7 sm:gap-10 mt-6  overflow-x-scroll scrollbar-hide '>
        {data.map((value)=>
            <Card4 value={value}  />
          )}
        </section>

        <div className="  text-4xl pt-12     sm:pt-28 p sm:pl-2 heading  ">
          <h1 className=' mb-10  '>All Courses</h1>
        </div>

        {/*-------------------------------- Desktop------------------------------------------- */}
        <section className=' hidden box  p-1  sm:flex gap-7 sm:gap-10 mt-6   flex-wrap  '>
        {data.map((value)=>
            
            <Card1 value={value}/>
            )}
        </section>

        {/*-------------------------------- MObile--------------------------------------------- */}
        <section className=' sm:hidden box    flex gap-5 sm:gap-10 mt-6   flex-wrap  '>
        {data.map((value)=>
     <Card3 img={value?.main_url} type={2} data={value} />
     )}
        </section>

      </div>
      <section className='mt-24'>
      <Footer/>
      </section>
   </>
  )
}

export default AllCourse
