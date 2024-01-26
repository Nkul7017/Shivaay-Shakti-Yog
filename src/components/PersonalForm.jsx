import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import { format } from 'date-fns';
import Stack from '@mui/material/Stack';
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MultipleDate from './MulitpleDate'
import Terms from './Terms';
import { ControlPointDuplicate } from '@mui/icons-material';
AOS.init({
  duration: 1200,
});

function PersonalForm({toggle1,setToggle1,data,type}) {
  console.log(data);
const navigate=useNavigate();
  const [purchasedData,setPurchasedData]=useState({
  user_id:JSON.parse(localStorage.getItem('user'))?._id,
  status:"active",
  preferred_timing:"00:00",
  duration:"",
  price:"",
  starting_date:"",
  index:null,
  message:"",
  toggle2:false,
  toggle3:false,
  toggle4:false,
  agree:false,
  days:[],
  })
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days-1);
    return result.toISOString().split('T')[0];
  };
  async function handle1()
  {
    // console.log(purchasedData)
    setPurchasedData({...purchasedData,message:""})
    if(localStorage.getItem('user'))
    {
    if(purchasedData.preferred_timing!=="" &&purchasedData.duration!==""  &&purchasedData.price!=="" && purchasedData.starting_date!="")
    {
      setPurchasedData({...purchasedData,toggle2:true,message:""})
    }
    else{
      setPurchasedData({...purchasedData,message:"* All Field Are Mandatory"})
    }}
      else{
        navigate('/login',{replace:true});
      }
    
  }
  async function handle2()
  {
    console.log(purchasedData)
    setPurchasedData({...purchasedData,message:""})
    if(localStorage.getItem('user'))
    {
    if(purchasedData.agree===true && purchasedData.preferred_timing!=="" &&purchasedData.duration!==""  &&purchasedData.price!=="" && purchasedData.duration==="1 Month"?purchasedData.days.length===30:purchasedData.duration==="3 Month"?purchasedData.days.length===90:purchasedData.duration==="9 Month"?purchasedData.days.length===270:null)
    {
      console.log(purchasedData.days.length)
      setPurchasedData({...purchasedData,toggle4:true,message:""})
    }
    else{
      setPurchasedData({...purchasedData,message:"*All Fields are Mandatory"})
    }}
      else{
        navigate('/login',{replace:true});
      }
    
  }
  async function handle3()
  {
    console.log(purchasedData)
    setPurchasedData({...purchasedData,message:""})
    if(localStorage.getItem('user'))
    {
    if(purchasedData.preferred_timing!=="" &&purchasedData.duration!==""  &&purchasedData.price!=="" && purchasedData.duration==="1 Month"?purchasedData.days.length===30:purchasedData.duration==="3 Month"?purchasedData.days.length===90:purchasedData.duration==="9 Month"?purchasedData.days.length===270:null)
    {
      setPurchasedData({...purchasedData,toggle3:true,message:""})
    }
    else{
      setPurchasedData({...purchasedData,message:`* selecting  ${purchasedData.duration==="1 Month"?"30":purchasedData.duration==="3 Month"?"90":purchasedData.duration==="3 Month"?"90":null} dates is mandatory  `})
    }}
      else{
        navigate('/login',{replace:true});
      }
    
  }
  async function handlesubmit()
  {
    console.log(purchasedData)
    setPurchasedData({...purchasedData,message:"loading"})
    if(purchasedData?.transaction_id?.trim().length===6 &&purchasedData.agree===true &&purchasedData.preferred_timing!=="" &&purchasedData.duration!==""  &&purchasedData.price!=="" && purchasedData.duration==="1 Month"?purchasedData.days.length===30:purchasedData.duration==="3 Month"?purchasedData.days.length===90:purchasedData.duration==="9 Month"?purchasedData.days.length===270:null)
    {
      purchasedData.days=purchasedData.days.sort((a,b)=>a-b);
      purchasedData.days = purchasedData.days.map(dateString => {
        const dateObject = new Date(dateString);
        return format(dateObject, 'yyyy-MM-dd');
      });
      
      const formattedDates = data?.days.map(dateString => {
        return parse(dateString, 'yyyy-MM-dd', new Date());
    });
    

      const expirationDate = purchasedData.days[purchasedData.days.length-1];
      console.log(expirationDate)
      purchasedData.course_id=data?.name;
      purchasedData.course_type=type;


      try{
       const response=await axios.post('https://shivaay-shakti-backend-1.onrender.com/api/purchase',{
        user_id:purchasedData?.user_id,
        course_id:data?._id,
        status:purchasedData?.status,
        starting_date:purchasedData?.days[0],
        preferred_timing:purchasedData?.preferred_timing,
        duration:purchasedData?.duration,
        expiration_date:expirationDate,
        price:purchasedData?.price,
        course_name:data?.name,
        course_type:type,
        days:purchasedData?.days,
        transaction_id:purchasedData?.transaction_id,
        transaction_status:"pending",
        name:JSON.parse(localStorage.getItem('user'))?.name,
       },{
        headers:{
          Authorization:localStorage.getItem('jwt')
        }
       })
       if(response?.data?.success===true)
       {
         setPurchasedData({...purchasedData,message:"",toggle2:false,toggle3:false,toggle4:false})
        setToggle1(false);
        setTimeout(() => {
          navigate('/UserDashboard',{replace:true})
        },1);
       }
      }
      catch(e)
      {
      setToggle1(false);
      }
    }
    else{
      setPurchasedData({...purchasedData,message:"* Enter Last 6 digit of transaction id"})
    }
  
  }
  return (
    <>
           <Popup
          open={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            closeOnEscape={false}
            contentStyle={{
               placeContent:"center",
            backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
    <div className='  w-[100%] h-[100%] p-3 sm:p-4 md:p-8 lg:py-16 lg:px-24   '>
        <div className=' relative w-[100%] h-[100%]'>
    <div className='  flex justify-between   '> 
     <h1 className=' text-2xl  lg:text-4xl heading'>{data?.name} {data?.course_duration_days1} Days Course</h1>
     <div className="cursor-pointer   " title="close" onClick={() => {setToggle1(false); }}>
                          <HiXMark size={40} />
                        </div> 
     </div>
     <div className='flex flex-col  mt-3 lg:hidden  '>
        <div className='flex items-center gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read"  defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-sm para  font-extrabold '>4.5</p>
        </div>
        <p className=' text-xs   para font-bold'>based on 78 reviews</p>
        </div>
     <div className=' flex justify-between mt-5  lg:mt-8 ga-x-10 sm:gap-x-14 md:gap-x-20  lg:gap-x-36 gap-y-4 flex-wrap '>
      
      <div className=' flex flex-col gap-5  '>
        <div className=' flex gap-2 font-extrabold items-center' style={{color:"#283143"}}>
        <AiOutlineUser size={24} className='  text-[#2C3E50] ' />
     <h1 className=' bluish text-xl lg:text-2xl '>Personal Training Sessions</h1>
        </div>

        <div className=' flex flex-col mt-1 lg:mt-4  '>
        <p className=' bluish text-[16px]  lg:text-xl'>Preferred time Slot:</p>
        <input name="preferred_timing" type="time" value={purchasedData.preferred_timing} onChange={(e) => {
    const [hours] = e.target.value.split(':');
    const newValue = `${hours}:00`;
    setPurchasedData({
      ...purchasedData,
      [e.target.name]: newValue,
    });
  }} className='h-10 mt-2' />
        </div>
        <div className='  '>
       <p className=' bluish  text-[16px]  lg:text-xl'>Select Date:</p>
         <input name="starting_date" min={new Date().toISOString().split('T')[0]} type="date" value={purchasedData.starting_date} onChange={(e)=>{setPurchasedData({...purchasedData,[e.target.name]:e.target.value})}} className='h-10 mt-2' />
        </div>
        <div >
<p className=' text-xl lg:text-2xl   heading ' style={{color:"#283143"}}>Select Duration</p>
<div className=' mt-4 flex flex-wrap gap-2 lg:gap-10'>
{
 data&&data.personal_duration?.map((value,i)=>
    <>
    <div>
        <button onClick={()=>{
          setPurchasedData({...purchasedData,duration:value?.timing,price:value?.price,index:i})
        }} className={`${purchasedData.index===i?"button3":"button2"}`} >{value?.timing}</button>
        <p className=' text-center mt-2 para  font-semibold text-xl lg:text-2xl '  style={{color:"#283143"}}>₹ {value?.price}</p>
    </div>
    </>)
    }
</div>
    <p className=' font-semibold mt-2 text-sm text-red-500'>{purchasedData.message}</p>
     </div>

      </div>
      
        <div className='hidden mr-40 lg:block '>
        <div className='lg:flex gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-xl para font-extrabold '>4.5</p>
        </div>
        <p className='  float-right para font-bold'>based on 80 reviews</p>
        </div>
     </div>

   
     <button  onClick={handle1} className='absolute bottom-0 button3 right-4'>Proceed</button>
    </div>
    </div>
          </Popup>
          <Popup
          open={purchasedData?.toggle2}
            position="center center"
            closeOnDocumentClick={false}
          
            lockScroll={true}
            closeOnEscape={false}
            contentStyle={{
               placeContent:"center",
            backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
    <div className='  w-[100%] h-[100%] p-3 sm:p-4 md:p-8 lg:py-16 lg:px-24   '>
        <div className=' relative w-[100%] h-[100%]'>
    <div className='  flex justify-between   '> 
     <h1 className=' text-2xl  lg:text-4xl heading'>{data?.name} {data?.course_duration_days1} Days Course</h1>
     <div className="cursor-pointer   " title="close" onClick={() => {setPurchasedData({...purchasedData,toggle2:false}); }}>
                          <HiXMark size={40} />
                        </div> 
     </div>
     <div className=' flex justify-between mt-5  lg:mt-8 ga-x-10 sm:gap-x-14 md:gap-x-20  lg:gap-x-36 gap-y-4 flex-wrap '>
      
      <div className=' flex flex-col gap-5  '>
        <div className=' flex gap-2 font-extrabold items-center' style={{color:"#283143"}}>
        <AiOutlineUser size={24} className='  text-[#2C3E50] ' />
     <h1 className=' bluish text-xl lg:text-2xl '>Personal Training Sessions</h1>
        </div>
        <div className='  '>
       <p className=' bluish   text-[16px]  lg:text-xl'>Select Date: <span className='text-red-500'>{purchasedData.message}</span></p>
       <MultipleDate  setPurchasedData={setPurchasedData} purchasedData={purchasedData} />
        </div>


      </div>
     </div>

   
     <button  onClick={handle3} className='absolute bottom-0 button3 right-4'>Proceed</button>
    </div>
    </div>
          </Popup>
          <Popup
          open={purchasedData.toggle3}
            // onClose={purchasedData.toggle3}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
               backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-10 overflow-y-auto scrollbar-hide '>
           <div className=' flex justify-between items-center '>
            <p className=' heading text-2xl sm:text-3xl md:text-6xl'>Terms & Conditions</p>
            <div
                          className="cursor-pointer text-3xl"
                          title="close"
                          onClick={() => {
                            setPurchasedData({...purchasedData,toggle3:false});
                          }}
                        >
                          <HiXMark />
                        </div>
           </div>
           <div className=' mt-8 flex flex-col  gap-8 text-justify text-[12px] sm:text-[14px]  md:text-[18px]  para ' style={{color:"#000"}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </p>
           </div>
           <div className='  mt-8 flex flex-col gap-y-7 sm:gap-0 sm:flex-row justify-between sm:items-center
            '>
            <div className=' flex gap-3 items-center '>
                 <input type="checkbox" checked={purchasedData.agree} onClick={()=>setPurchasedData({...purchasedData,agree:!purchasedData.agree})}  name="agree"  id="agree" className=' focus:accent-[#2C3E50] w-6 h-6 ' />
                 <label className='para text-sm md:text-[18px]   font-semibold' htmlFor="agree" style={{color:"black"}}>I agree to the terms above</label>
                 <p className='text-red-500'>{purchasedData.message}</p>
               
            </div>
            <div className=' hidden md:flex '>
                <button  className=' button3 para text-xl font-semibold  ' onClick={handle2} style={{minWidth:"260px",height:"40px",color:"white"}}><span>Proceed To Checkout</span></button>
            </div>
            <div className='md:hidden flex  self-end '>
                <button  onClick={handle2} className=' button3 para text-[18px] font-semibold  ' style={{minWidth:"260px",height:"40px",color:"white"}}><span>Proceed To Checkout</span></button>
            </div>
           </div>
            </div>
            </div>
          </Popup>
          <Popup
          open={purchasedData.toggle4}
            // onClose={purchasedData.toggle4}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
               backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-10 overflow-y-auto scrollbar-hide '>
           <div className=' flex justify-between items-center '>
            <p className=' heading text-2xl sm:text-3xl md:text-6xl'>Payment</p>
            <div
                          className="cursor-pointer text-3xl"
                          title="close"
                          onClick={() => {
                            setPurchasedData({...purchasedData,toggle4:false});
                          }}
                        >
                          <HiXMark />
                        </div>
           </div>
           <div className=' mt-8 flex flex-col h-[300px] w-[300px] bg-blue-gray-300  gap-8 text-justify text-[12px] sm:text-[14px]  md:text-[18px]  para ' style={{color:"#000"}}>
            
           </div>
           <div className='  mt-8 flex flex-col gap-y-7 sm:gap-0 lg:flex-row justify-between lg:items-center
            '>
            <div className=' flex flex-col gap-3'>
            <label className='para text-sm md:text-[18px]   font-semibold' htmlFor="transaction_id" style={{color:"black"}}>Enter Transaction Id</label>
                 <input placeholder='enter last 6 digit....' type="text" value={purchasedData.transaction_id} onChange={(e)=>setPurchasedData({...purchasedData,transaction_id:e.target.value})} maxLength={6}  name="transaction_id"  id="transaction_id" className=' p-2 text-black border border-gray-400 rounded-md w-full sm:w-[400px] h-[40px] ' />
                 
                 <p className='text-red-500'>{purchasedData.message}</p>
               
            </div>
            <div className=' hidden lg:flex '>
                <button  className=' button3 para text-xl font-semibold  ' onClick={handlesubmit} style={{minWidth:"260px",height:"40px",color:"white"}}><span>Submit</span></button>
            </div>
            <div className='lg:hidden flex  self-end '>
                <button  onClick={handlesubmit} className=' button3 para text-[18px] font-semibold  ' style={{minWidth:"260px",height:"40px",color:"white"}}><span>Submit</span></button>
            </div>
           </div>
            </div>
            </div>
          </Popup>


    </>
  )
  }
export default PersonalForm
