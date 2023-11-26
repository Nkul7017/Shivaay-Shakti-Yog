import React, { useState } from 'react'
import img1 from '../assets/Icons/img1.png'
import img2 from '../assets/Icons/img2.png'
import img3 from '../assets/Icons/img3.png'
import img4 from '../assets/Icons/img4.png'
import img5 from '../assets/Icons/img5.png'
import img6 from '../assets/Icons/img6.png'
import GroupForm from './GroupForm'
import PersonalForm from './PersonalForm'
function Card2({img,heading,types,data}) {
    const [toggle1,setToggle1]=useState(false);
  return (
    <>
    <div className=' w-[415px] h-auto card2 '>
    <div className=' relative '>
        <img src={img} className=' w-[559px] h-[150px] object-cover ' alt="" />
        <p className='heading absolute bottom-1 left-6 text-2xl  ' style={{textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25"}}>{heading}</p>
    </div>
    <div className=' flex flex-col gap-5 px-6 py-3  '>
        <div className=' min-h-[80px] para text-sm  text-justify' style={{color:"#444"}}>
            <p>{types==="personal"?data?.Personal_description1:data?.Group_description2}</p>
        </div>
        {types==="personal"&&<div  className=" min-h-[168px]    bluish text-xs space-y-1.5 "> 
           <p> <span><img src={img6} className='icon' alt="" /></span> <span>{data?.live_sessions1
} live sessions</span> </p>
            <p> <span><img src={img2} className='icon' alt="" /></span> <span>{data?.recorded_sessions1} recorded sessions
</span></p>
            <p> <span><img src={img5} className='icon' alt="" /></span> <span>{data?.course_duration_days1} Days Course</span> </p>
            {data?.beginner_friendly1&&<p> <span><img src={img4} className='icon' alt="" /></span> <span>Beginner friendly</span> </p>}
            {data?.beginner_friendly1&&<p> <span><img src={img3} className='icon'  alt="" /></span> <span>Female oriented</span> </p>}
            <p> <span><img src={img1} className='icon' alt="" /></span> <span>Suitable for {data?.age_range1} years</span> </p>
        </div>}
        {types==="group"&&<div className=" min-h-[168px] bluish text-xs space-y-1.5 "> 
           <p> <span><img src={img6} className='icon' alt="" /></span> <span>{data?.live_sessions2
} live sessions</span> </p>
            <p> <span><img src={img2} className='icon' alt="" /></span> <span>{data?.recorded_sessions2} recorded sessions</span> </p>
            <p> <span><img src={img5} className='icon' alt="" /></span> <span>{data?.course_duration_days2} Days Course</span> </p>
            {data?.beginner_friendly1&&<p> <span><img src={img4} className='icon' alt="" /></span> <span>Beginner friendly</span> </p>}
            {data?.female_oriented2
&&<p> <span><img src={img3} className='icon'  alt="" /></span> <span>Female oriented</span> </p>}
            <p> <span><img src={img1} className='icon' alt="" /></span> <span>Suitable for {data?.age_range2}  years</span> </p>
        </div>}
        <div className=' flex justify-between items-center '> 
        <div className=' -space-y-4 '>
            <p className='para text-xs '>Starting</p>
            <p className='heading text-4xl  '>{types==="group"?"₹"+data?.price2:"₹"+data?.price1}</p>
        </div>
        <div>
            {types==="personal"&&
            <>
            <button onClick={()=>setToggle1(true)} className='button3' style={{width:"150px",height:"35px"}} ><span>Proceed</span></button>
           <PersonalForm data={data} toggle1={toggle1} setToggle1={setToggle1} />
            </>}
            {types==="group"&&
            <>
            <button onClick={()=>setToggle1(true)} className='button3' style={{width:"150px",height:"35px"}} ><span>Proceed</span></button>
            <GroupForm data={data} toggle1={toggle1} setToggle1={setToggle1} /> 
            </>}
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Card2
