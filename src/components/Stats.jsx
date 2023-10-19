import React from 'react'
import heart from '../../public/dashboard/heart.png'
import setting from '../../public/dashboard/setting.png'
import { FaLocationDot} from "react-icons/fa6";
const Stats = () => {

    const data=[
        {}
    ]
  return (
    <div className=' flex  px-16 border  gap-20 h-[160px] pt-10  '>
     <div>
        <img src={"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className=' w-[236px] aspect-square rounded-full object-cover object-top  image -mt-20' alt="" />
     </div>
     <div className=' flex flex-col gap-1 -ml-5  '>
        <p className=' heading text-4xl '>Preeti_Insane</p>
        <p className=' bluish flex gap-2 items-center'>
        
            <span><FaLocationDot/></span>
            <span>Dehradun</span>
        </p>
     </div>
     <div className='  items-center flex flex-col  '>
        <p className='w-[45px] aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-2xl ' >02</p>
        <p>Completed</p>
        <p>Courses</p>
     </div>
     <div className='  items-center flex flex-col  '>
        <p className='w-[45px] aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-2xl ' >02</p>
        <p>Active</p>
        <p>Courses</p>
     </div>
     <div className='  items-center flex flex-col  '>
        <p className='w-[82px] h-[45px]  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-2xl ' >7.8/10</p>
        <p>Performance</p>
        <p>Score</p>
     </div>
     <div className=' flex flex-col items-center justify-center -mt-10 gap-2 '>
        <img src={heart} alt="" />
        <p>Health Stats</p>
     </div>
     <div className=' flex flex-col items-center justify-center -mt-10 gap-2 '>
        <img src={setting} alt="" />
        <p>Edit</p>
     </div>
     
    </div>
  )
}

export default Stats
