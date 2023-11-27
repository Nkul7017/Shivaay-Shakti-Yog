import React,{useState} from 'react'
import logovideo from '../../public/loutput.gif'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isEmail,isPassword } from '../utils';
function Signup() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    cpassword:""
  })
  const[message,setMessage]=useState("");
  async function handlesubmit(e)
  {
e.preventDefault();

if(data.username.trim().length>3 && isEmail(data.email.trim()) && isPassword(data.password.trim()) && data.cpassword.trim()!=="" && data.password===data.cpassword)
{ 
  setMessage("");
  console.log(data);
  try{
  const response=await axios.post('https://shivaay-shakti-backend-1.onrender.com/api/auth/signup',data);

  if(response.status===201)
  {
    console.log(response);
   navigate('/login');
  }
}
catch(e){
setMessage(e.response.data.message);
}
  
}
else{
  setMessage("*All Fields Are Mandatory")
}
  }
  return (
    <div className=' w-screen h-screen bg-black grid place-content-center ' >
       <div  className=' flex w-[80vw]  justify-center items-center  ' >
       <div className='  hidden lg:block w-1/2 '  >
       <img src={logovideo}  alt="" />
       </div>
       {/* style={{ background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",}}  */}
       <div className=' w-[90vw] sm:w-[80vw] md:w-[70vw] h-[500px]  text-white mx-auto  lg:w-1/2 rounded-2xl  px-8' >
        <h1 className='text-5xl ' >Sign Up</h1>
        <form className=' flex flex-col mt-10 gap-5 ' onSubmit={handlesubmit} >
          <div className=' flex flex-col gap-2 '>
         <label className=' text-2xl  ' htmlFor="">Username</label>
         <input type="text" name="username" value={data.username} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className=' font-semibold  px-3   text-red-900  rounded-lg py-1 '  />
         </div>
          <div className=' flex flex-col gap-2 '>
         <label className=' text-2xl  ' htmlFor="">Email </label>
         <input type="text" name="email" value={data.email} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className=' font-semibold  px-3   text-red-900  rounded-lg py-1 '  />
         </div>
          <div className=' flex  flex-col sm:flex-row  gap-5 sm:gap-10 w-[100%] '>
            <div className=' flex flex-col gap-2 w-full sm:w-2/3 '>
         <label className=' text-2xl ' htmlFor="">Password</label>
         <input type="password" name="password" value={data.password} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' text-red-900 rounded-lg px-3 py-1  '  />
         </div>
         
          <div className=' flex  flex-col gap-2 w-full sm:w-2/3  '>
         <label className=' text-2xl ' htmlFor="">Confirm Password</label>
         <input type="password" name="cpassword" value={data.cpassword} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' text-red-900 rounded-lg px-3 py-1   '  />
         </div>
         </div>
         <div className=' flex  items-center gap-5   mt-6  '>
         <button  type='submit' className=' text-2xl px-3 py-1  border-2 border-white '>Submit</button>
         <p className=' text-[18px] font-bold text-red-900'>{message}</p>
         </div>
        </form>
       </div>
       </div>
    </div>
  )
}

export default Signup
