import React,{useState} from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import { HiXMark } from "react-icons/hi2";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from '../../public/Program/Group/group_form_icon/1.png'
import img2 from '../../public/Program/Group/group_form_icon/2.png'
import img3 from '../../public/Program/Group/group_form_icon/3.png'
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
AOS.init({
  duration: 1200,
});
function GroupForm({toggle1,setToggle1,data,type}) {
const navigate=useNavigate();
  const [purchasedData,setPurchasedData]=useState({
    user_id:JSON.parse(localStorage.getItem('user'))?._id,
    status:"active",
    duration:"",
    price:"",
    index:null,
    message:""
    })
    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days-1);
      return result.toISOString().split('T')[0];
    };
    async function handlesubmit()
  {
   if(localStorage.getItem('user'))
   {
    setPurchasedData({...purchasedData,message:""})
    if(purchasedData.duration!==""  &&purchasedData.price!=="")
    {
      const b=purchasedData.duration.split(" ");
      if(b[1]==="Month")
      {
       b[0]=parseInt(b[0])*30;
      }
      const expirationDate = addDays(data?.group_starting_date,parseInt(b[0]));
      delete purchasedData.index;
      delete purchasedData.message;
      purchasedData.expiration_date=expirationDate;
      purchasedData.course_name=data?.name;
      purchasedData.course_type=type;
      purchasedData.preferred_timing=data?.group_timing
      purchasedData.starting_date=data?.
      group_starting_date
      console.log(purchasedData);
      try{
       const response=await axios.post('http://localhost:5000/api/purchase',purchasedData,{
        headers:{
          Authorization:localStorage.getItem('jwt')
        }
       })
       if(response?.data?.success===true)
       {
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
      setPurchasedData({...purchasedData,message:"* All Field Are Mandatory"})
    }}
    else{
  navigate('/login',{replace:true});
    }
  }
  return (
    <>
    <Popup
          open={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
               placeContent:"center",
            backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
    <div className='  w-[100%] h-[100%] p-6 sm:p-6 md:p-10 lg:p-24   '>
        <div className=' relative w-[100%] h-[100%]'>
    <div className='  flex justify-between   '> 
     <h1 className=' text-2xl  lg:text-4xl heading'>{data?.name} {data?.course_duration_days2} Days Course</h1>
     <div className="cursor-pointer   " title="close" onClick={() => {setToggle1(false); }}>
                          <HiXMark size={40} />
                        </div> 
     </div>
     <div className='flex flex-col lg:hidden mt-3   '>
        <div className='flex  gap-2 items-center '>
        <Stack spacing={1}   >
      <Rating name="half-rating-read"  defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-sm  para  font-extrabold '>4.2</p>
        </div>
        <p className=' text-xs  para font-bold'>based on 78 reviews</p>
        </div>
     <div className=' flex mt-6 lg:mt-8 gap-x-10 sm:gap-x-14 md:gap-x-20  lg:gap-x-36 gap-y-4 flex-wrap '>
     
            
             <div className=' flex gap-3 '>
                {/* <img src="" alt="" /> */}
                <p><img src={img3} className='mt-1'  alt="" /></p>
                <div>
                    <p className=' text-[#283143] text-[16px] para  font-extrabold ' >Group Sessions</p>
                    <p className=' heading text-xl lg:text-2xl  '>{data&&data.group_batch_size} yogis</p>
                </div>
             </div>
             <div className=' flex gap-3 '>
                {/* <img src="" alt="" /> */}
                <p><img src={img2} className='mt-1'  alt="" /></p>
                <div>
                    <p className=' text-[#283143] text-[16px] para  font-extrabold ' >{data?.group_timing}</p>
                    <p className=' heading text-xl lg:text-2xl  '>{data?.group_session}</p>
                </div>
             </div>
             <div className=' flex gap-3 '>
                {/* <img src="" alt="" /> */}
                <p><img src={img1} className='mt-1'  alt="" /></p>
                <div>
                    <p className=' text-[#283143] text-[16px] para  font-extrabold ' >Starting</p>
                    <p className=' heading text-xl lg:text-2xl  '>{data?.group_starting_date}</p>
                </div>
             </div>
          
      
        <div className='hidden lg:block '>
        <div className='lg:flex gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-xl para font-extrabold '>4.5</p>
        </div>
        <p className='  float-right para font-bold'>based on 78 reviews</p>
        </div>
     </div>

     <div className='mt-14'>
<p className=' text-xl lg:text-2xl   heading ' style={{color:"#283143"}}>Select Duration</p>
<div className=' mt-4 flex flex-wrap gap-3 lg:gap-10'>
{
  // data&&data.group_duration?.map
  data&&data.group_duration?.map((value,i)=>
    <>
    <div>
        <button onClick={()=>{
          setPurchasedData({...purchasedData,duration:value?.timing1,price:value?.price3,index:i})
        }} className={`${purchasedData.index===i?"button3":"button2"}`} >{value?.timing1}</button>
        <p className=' text-center mt-2 para  font-semibold text-xl lg:text-2xl '  style={{color:"#283143"}}>₹ {value?.price3}</p>
    </div>
    </>)
    }
</div>
<p className=' font-semibold mt-2 text-sm text-red-500'>{purchasedData.message}</p>
     </div>
     <button  onClick={handlesubmit} className='absolute bottom-0 button3 right-4'>Proceed</button>
    </div>
    </div>
          </Popup>


    </>
  )
  }
export default GroupForm
