import React from 'react'
import heart from '../../public/dashboard/heart.png'
import setting from '../../public/dashboard/setting.png'
import { FaLocationDot} from "react-icons/fa6";
const Stats = () => {
  return (
   
   <div className=' flex flex-1   px-4 lg:px-16 border flex-wrap g justify-between h-[160px]        '>

        <div className=' flex gap-3  lg:gap-10 justify-center items-center     '>
     <div className=' w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[236px] lg:h-[236px]
       mt-0     lg:-mt-14 '>
        <img src={"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className='  w-[100%] h-[100%]
         rounded-full image object-cover object-top  ' alt="" />
     </div>
     <div className=' flex flex-col gap-1  '>
        <p className=' heading text-[18px]   lg:text-4xl '>Preeti_Insane</p>
        <p className=' bluish text-sm lg:text-2xl flex gap-2 items-center'>
        
            <span><FaLocationDot/></span>
            <span>Dehradun</span>
        </p>
     </div>
     </div>

     <div className=' flex -mt-8 md:-mt-0  gap-4 sm:gap-6  lg:gap-10 items-center justify-center order-3 md:order-2 '>
     <div className='  items-center flex gap-1  md:flex-col  '>
        <p className='w-[36px] lg:w-[45px]  aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >02</p>
        <div className=' mt-3 md:mt-0 text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p>Completed</p>
        <p>Courses</p>
        </div>
     </div>
     <div className='  items-center gap-1  flex md:flex-col '>
        <p className=' w-[36px] lg:w-[45px] aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >02</p>
        <div className=' mt-3 md:mt-0  text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p >Active</p>
        <p>Courses</p>
        </div>
     </div>
     <div className='  items-center gap-1  flex md:flex-col  '>
        <p className='w-[72px] h-[36px] lg:w-[82px] lg:h-[45px]  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >7.8/10</p>
        <div className=' mt-3 md:mt-0  text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p>Performance</p>
        <p>Score</p></div>
     </div>
     </div>

     <div className='flex gap-5 sm:gap-4 md:gap-8  lg:gap-12 items-center justify-center order2  md:order-3    '>
     <div className=' flex flex-col items-center justify-center  gap-2 '>
        <img src={heart} className=' w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ' alt="" />
        <p className=' text-xs lg-text-sm'>Health Stats</p>
     </div>
     <div className=' flex flex-col items-center justify-center  gap-2 '>
        <img src={setting} className=' w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]' alt="" />
        <p className=' text-xs lg-text-sm'>Edit</p>
     </div>
     </div>
     
    </div>
  )
}

export default Stats
