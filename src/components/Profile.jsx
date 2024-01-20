import React, { useEffect, useState, useMemo } from 'react'
import heart from '../../public/dashboard/heart.png'
import setting from '../../public/dashboard/setting.png'
import { HiXMark } from "react-icons/hi2";
import { FaLocationDot} from "react-icons/fa6";
import Popup from 'reactjs-popup';
import axios from 'axios';
import countryList from 'react-select-country-list'
import imageprofile from '../../public/userprofile.png'
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { useNavigate } from 'react-router-dom';
const Stats = ({completed,active}) => {
   const [toggle,setToggle]=useState(false)
   const [toggle2,setToggle2]=useState(false)
   const [toggle1,setToggle1]=useState(false)
  const user= JSON.parse(localStorage.getItem('user'));
//   console.log(user);
  const options1 =[
   {value:"waiting for options...",label:"waiting for options..."},
  ];
   const handleUploadedImage = async(imageUrl, thnl) => {
   try{
    const response=await axios.put(`https://shivaay-shakti-backend-1.onrender.com/api/auth/update/${user?._id}`,
    {
      profile_img:imageUrl
    }
    );
   
    if(response.status===200)
    {
      console.log(response);
      localStorage.setItem('user', JSON.stringify( response.data.dta ));
    }
   }
   catch(e){
    console.log(e);
   }}
  const options = useMemo(() => countryList().getData(), [])
  const [toggle3,setToggle3]=useState(false);
 const navigate=useNavigate();
 const [data,setData]=useState({
   ...user,
   hunit:"",
   wunit:"",
   cpassword:"",
   next:1,
    message:"",
    toggle:false
 })
 const[message,setMessage]=useState("");
 async function handlesubmit(e)
 {
e.preventDefault();
if(data.hunit==="cm")
{ data.height=parseFloat(data.height)*0.393701;}
else{
 data.height=parseFloat(data.height);
}
if(data.wunit==="pound")
{ data.weight=parseFloat(data.weight)*0.453592;}
else{
 data.weight=parseFloat(data.height);
}
if(data.name.trim().length>3  &&  data.country!=="" &&data.gender!==""&&data.height>0&&data.weight>0&&data.country!==""&&data.city!==""&&data.contact!=="")
{ 
 setData({...data,message:"Loading..."});
 console.log(data);
 try{
   console.log(data);
 const response=await axios.put(`https://shivaay-shakti-backend-1.onrender.com/api/auth/update/${user?._id}`,
//  const response=await axios.put(`http://localhost:5000/api/auth/update/${user?._id}`,

 {
  name:data.name,
  country:data.country,
  born:data.born,
  city:data.city,
  height:data.height,
  weight:data.weight,
  gender:data.gender,
   medical_condition:data.medical_condition,
   contact:data.contact
 }
 );

 if(response.status===200)
 {
   console.log(response);
   localStorage.setItem('user', JSON.stringify( response.data.dta ));
   setToggle1(false);
 }
}
catch(e){
 setData({...data,message:e.response.data.message,});
}}
else{
 setData({...data,message:"*All Fields Are Mandatory"});
}
 }

 function handle(e)
 {setData({...data,[e.target.name]:e.target.value});}

  return (
   
   <div className=' flex flex-1     px-4 lg:px-16 border flex-wrap g justify-between h-[160px]        '>

        <div className=' flex gap-3   lg:gap-10 justify-center items-center     '>
     <div onMouseOver={()=>setToggle2(true)} onMouseOut={()=>setToggle2(false)} className=' relative w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[236px] lg:h-[236px]
       mt-0     lg:-mt-14 '>
        <img   src={imageprofile} className='  w-[100%] h-[100%]
         rounded-full image object-cover object-top  ' alt="" />
        {/* {toggle2&&<div   className='   absolute top-4 left-2 sm:top-[21%] sm:left-[9%] md:top-[35%] md:left-[28%] lg:top-[40%] lg:left-[35%] '>
         <CloudinaryUploadWidget  onImageUpload={handleUploadedImage} />
         </div>} */}
     </div>
     <div className=' flex flex-col gap-1  '>
        <p className=' heading text-[18px]   lg:text-4xl capitalize '>{user?.name}</p>
        <p className=' bluish text-sm lg:text-2xl flex gap-2 items-center'>
        
            <span><FaLocationDot/></span>
            <span>Dehradun</span>
        </p>
     </div>
     </div>

     <div className=' flex -mt-8 md:-mt-0  gap-8 sm:gap-6  lg:gap-10 items-center justify-center order-3 md:order-2 '>
     <div className='  items-center flex gap-2  md:flex-col  '>
        <p className='w-[36px] lg:w-[45px]  aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >{String(completed).padStart(2, '0')}</p>
        <div className=' mt-3 md:mt-0 text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p>Completed</p>
        <p>Courses</p>
        </div>
     </div>
     <div className='  items-center gap-2  flex md:flex-col '>
        <p className=' w-[36px] lg:w-[45px] aspect-square  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >{String(active).padStart(2, '0')}</p>
        <div className=' mt-3 md:mt-0  text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p >Active</p>
        <p>Courses</p>
        </div>
     </div>
     {/* <div className='  items-center gap-1  flex md:flex-col  '>
        <p className='w-[72px] h-[36px] lg:w-[82px] lg:h-[45px]  grid place-content-center  rounded-xl bg-[#2C3E50] text-white text-[18px] md:text-2xl ' >7.8/10</p>
        <div className=' mt-3 md:mt-0  text-[9px] lg:text-sm flex flex-col md:flex-row'>
        <p>Performance</p>
        <p>Score</p></div>
     </div> */}
     </div>

     <div className='flex gap-5 sm:gap-4 md:gap-8 lg:gap-12 items-center justify-center order2  md:order-3    '>
     <div className=' flex flex-col items-center justify-center  gap-2 '>
        <button onClick={()=>setToggle3(true)} ><img src={heart} className=' hover:scale-110  w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ' alt="" /></button>
        <p className=' text-xs lg-text-sm'>Health Stats</p>
     </div>
     <div className=' flex flex-col items-center justify-center  gap-2 '>
     <button onClick={()=>setToggle1(true)} ><img src={setting} className=' w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]' alt="" /></button>
        
        <p className=' text-xs lg-text-sm'>Edit</p>
        <Popup
     open={toggle1}
     closeOnEscape={false}
     lockScroll={true}

     contentStyle={{
      height:"100vh",
      width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backdropFilter:"blur(8px)",
        overflow:"auto"
  }}

     >
  <div data-aos="fade-up" className='relative   hi w-[90vw] sm:w-[60vw] md:w-[50vw] bg-[#FFF1C1] p-20 '>
  <form  onSubmit={handlesubmit} >
        {data.next===1&&<div className='flex flex-col mt-4 gap-3'>
        <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">What is your name?</label> 
      <input type="text" name="name" value={data.name} onChange={handle} className=' w-[220px] lg:w-[400px] h-6 lg:h-8 ' />
      </div>
      <div  className=' flex flex-col  lg:flex-row gap-2 lg:gap-5 ' >
        <div className=' flex flex-col gap-1  '>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>When were you born ?</label>
      <input type="date" value={data.born} name="born" onChange={handle} className='
       h-6 sm:h-8  ' />
      </div>
      <div className=' flex flex-col gap-1 '>
   <label htmlFor=""  className='  bluish text-sm lg:text-[18px]'>Your Country</label>
   <input type="text" name="country" value={data.country} onChange={handle} className='  h-6 lg:h-8 ' />
      </div>
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor=""  className='  bluish text-sm lg:text-[18px]'>Your City</label>
   <input type="text" value={data.city} name="city" onChange={handle} className='
      w-[180px]  lg:w-[228px] h-6 sm:h-8 ' />
      </div>

      <div>
       <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">Gender</label> 
      <input type="text" name="gender" value={data.gender} onChange={handle} className=' w-full sm:w-2/3 h-6 lg:h-8 ' />
      </div>
      </div>
      <div  className=' flex  flex-wrap   gap-3 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Height ?</label>
<div className=' flex gap-2 '>
<input type="number" name='height' value={data.height} onChange={handle} className=' w-[50px] lg:w-[140px] h-8 ' />
      <select onChange={handle} name='hunit'    className=' border border-[#2C3E50] rounded-md p-1 h-8  ' >
        <option value="inches">inches</option>
        <option value="cm">cm</option>
      </select>
      </div>
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Weight ?</label>
<div className=' flex gap-2 '>
<input type="number" name='weight' value={data.weight} onChange={handle} className=' w-[50px] lg:w-[140px] h-8    ' />
      <select  id="weight" onChange={handle} name='wunit'  className=' border border-[#2C3E50] rounded-md p-1 h-8  ' >
        <option value="kg">kg</option>
        <option value="pound">pound</option>
      </select>
      </div>
      </div>
      </div>
          
      
         <div className=' flex  items-center gap-5   mt-3  '>
         <button  type='button' onClick={()=>setData({...data,next:data.next+1})} className='  button3 text-2xl  py-1   '><span className=' text-[18px]'>Next</span></button> 
         </div>
         </div>}
         {data.next===2&&<div className='flex flex-col mt-4 gap-3'>
         <div  className=' flex    gap-3 lg:gap-1  ' >
            <div className=' flex flex-col gap-2 w-full  sm:w-2/3 '>
         <label className='bluish text-sm lg:text-[18px]' htmlFor="">Medical Condition (optional)</label>
         <input type="text" name="medical_condition" value={data.medical_condition} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' w-[220px] lg:w-[400px] h-6 lg:h-8 '  />
         </div>
         
         </div>
         <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">Contact</label> 
      <input type="number" name="contact" value={data.contact} onChange={handle} className=' w-full sm:w-2/3 h-6 lg:h-8 ' />
      </div>


         <div className=' flex  items-center gap-5   mt-3  '>
         <button  type='submit' className='  button3 text-2xl  py-1   '><span className=' text-[18px]'>Update</span></button>
         <button  type='button' onClick={()=>setData({...data,next:data.next-1})} className='  button3 text-2xl  py-1   '><span className=' text-[18px]'>Back</span></button> 
         <p className=' text-[18px] font-bold text-red-900'>{message}</p> 
         </div>
         </div>}


        </form>
  <div className=' absolute top-5 right-5  '>
      <button onClick={()=>setToggle1(false)}><HiXMark  className='  text-3xl lg:text-4xl ' /></button>
 </div>
  </div>

     </Popup>
     </div>
     </div>
     <Popup
     open={toggle3}
     closeOnEscape={false}
     lockScroll={true}

     contentStyle={{
      height:"100vh",
      width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backdropFilter:"blur(8px)",
        overflow:"auto"
  }}

     >
  <div data-aos="fade-up"  className='relative   hi w-[90vw] sm:w-[60vw] md:w-[50vw] bg-[#FFF1C1] p-20 '>
   <div className=' flex flex-wrap gap-x-10 gap-y-3 '>
      <div className='flex  items-center gap-3 '>
         <p className=' font-bold'>Height</p>
         <p >{user?.height} Inches</p>
      </div>
      <div className='flex gap-3 items-center   '>
      <p className='font-bold'>Weight</p>
         <p>{user?.weight} Kg</p>
      </div>
      <div  className='flex  items-center gap-3 '>
      <p className=' font-bold'>Age</p>
         <p>{new Date().getFullYear()-new Date(user?.born).getFullYear()}</p>
      </div>
   </div>
   <div className='  flex flex-col gap-5  mt-5' >
      <div  className='space-y-1'>
      <p className='font-bold'>Medical Health</p>
         <p>{user?.medical_condition}</p>
      </div>
   </div>
  <div className=' absolute top-5 right-5  '>
      <button onClick={()=>setToggle3(false)}><HiXMark  className='  text-3xl lg:text-4xl ' /></button>
 </div>
  </div>

     </Popup>

    </div>

  )
}

export default Stats
