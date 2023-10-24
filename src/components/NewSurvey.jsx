import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import AOS from 'aos';
import { HiXMark } from "react-icons/hi2";
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
  });
function NewSurvey({shurveyPopup,setShurveyPopup,logovideo}) {
     const [next,setNext]=useState(false);
  return (
    <>
   
    <Popup
    open={shurveyPopup}
    lockScroll={true}
     contentStyle={{
         height:"100vh",
         width:"100vw",
        background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",
           display:"flex",
           justifyContent:"center",
           alignItems:"center"
     }}
     
    >
   <div  className='   grid lg:grid-cols-2 relative  place-content-center w-screen h-screen '>

    <div className=' hidden lg:grid place-content-center  ' >
    <img src={logovideo} alt="" />
    </div>

 {/*----------------------------- Page1------------------------------------ */}
    {!next?
    <>
    <div className=' py-14 lg:py-32   px-11 flex  flex-col gap-3 lg:gap-5 '>

      <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">What is your name?</label> 
      <input type="text" className=' w-[220px] lg:w-[400px] h-7 lg:h-8 ' />
      </div>

      <div  className=' flex flex-col  lg:flex-row gap-2 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>When were you born ?</label>
      <input type="text" className='
      w-[180px]  lg:w-[228px] h-8 ' />
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor=""  className=' text-sm lg:text-[18px]'>Your Country</label>
      <select name="" id="" className='  pl-3 button3 w-[180px]  lg:w-[228px] h-8' >
        <option value="">India</option>
      </select>
      </div>
      </div>

      <div>
      <div className=' flex flex-col gap-2 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>You Identify yourself as?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 '>
        <button className=' button2a lg:button2  ' >Male </button>
        <button className=' button2a lg:button2' >Female</button>
        <button className='button2a  lg:button2' >Other</button>
        <button className='button2a  lg:button2' >Specify</button>
     </div>
      </div>
      </div>

      <div  className=' flex    gap-3 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Height ?</label>
<div className=' flex gap-2 '>
<input type="text" className=' w-[50px] lg:w-[140px] h-8 ' />
      <select name="" id=""  className=' border border-[#2C3E50] rounded-md p-1 h-8  ' >
        <option value="">inches</option>
        <option value="">cm</option>
      </select>
      </div>
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Weight ?</label>
<div className=' flex gap-2 '>
<input type="text" className=' w-[50px] lg:w-[140px] h-8    ' />
      <select name="" id=""  className=' border border-[#2C3E50] rounded-md p-1 h-8  ' >
        <option value="">kg</option>
        <option value="">pound</option>
      </select>
      </div>
      </div>
      </div>

      <div>
      <div className=' flex flex-col gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>At what level do you practice yoga?</label>
     <div className=' flex gap-5 flex-wrap '>
        <button className=' button2' >Beginner </button>
        <button className=' button2' >Intermediate</button>
        <button className=' button2' >Advanced</button>
     </div>
      </div>
      </div>

      <div className=' mt-3 lg:mt-5'>
        <button className=' button3  text-xl  ' onClick={()=>setNext(!next)} style={{width:"140px",height:"40px"}} >Next</button>
      </div>

    </div>

 
 </>:

// ------------------------------ Page2 ---------------------------------------
<div className=' py-12 lg:py-32 lg:px-14   px-11 flex  flex-col gap-3 lg:gap-5 '>

    
      <div className=' flex flex-col gap-2 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Select the goal/ goals and diseases that you wish to treat through yoga?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 '>
        <button className=' button2b   w-40 ' >Weight Management</button>
        <button className=' button2b  w-16 ' >PCOS</button>
        <button className='button2b w-20 ' >Diabetese</button>
        <button className='button2b  w-28 ' >Mental Health</button>
        <button className='button2b w-24 ' >Flexibility</button>
        <button className='button2b w-24 ' >Arthritis</button>
        <button className='button2b w-20' >Asthama</button>
        <button className='button2b w-40 ' >General Well Being</button>
        <button className='button2b w-20 ' >Spirituality</button>
        <button className='button2b w-16 ' >Others</button>
        <button className='button2b w-16' >Specify</button>
     </div>
      </div>

      
      <div  className=' flex    gap-1 lg:gap-5 ' >
        <div className=' flex flex-col gap-2'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>How does your daily life looks like?</label>
   <p className='bluish text-[10px] -mt-1 lg:text-[14px]'> Select all the instances that applies ?</p>

      <select name="" id=""  className='   button2b bg-transparent rounded-md w-[80vw] lg:w-auto p-1 h-8  ' >
        <option value="">I manage to sleep 7-8 hours daily and have a good sleep schedule</option>
      </select>
  
      </div>
      </div>


      <div className=' flex flex-col gap-1 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Which Type of person you are?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 '>
        <button className=' button2b   w-20 ' >Morning</button>
        <button className=' button2b  w-20 ' >Evening</button>
      </div>
      <div className=' flex flex-wrap gap-3 lg:gap-5 mt-1 '>
        <button className=' button2b   w-40 ' >4:00 AM - 6:00 AM</button>
        <button className=' button2b   w-40 ' >6:00 AM - 8:00 AM</button>
        <button className=' button2b   w-40 ' >8:00 AM - 10:00 AM</button>

     </div>
      </div>

      <div className=' mt-3 lg:mt-5'>
        <button className=' button3  text-xl  ' onClick={()=>setShurveyPopup(!shurveyPopup)} style={{width:"140px",height:"40px"}} >Submit</button>
      </div>






 </div>
 
 }
 <div className=' absolute top-5 right-5  '>
      <button onClick={()=>setShurveyPopup(!shurveyPopup)}><HiXMark  className='  text-3xl lg:text-4xl ' /></button>
 </div>
   </div>
  </Popup>

    </>
  )
}

export default NewSurvey
