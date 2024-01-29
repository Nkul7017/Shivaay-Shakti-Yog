import React,{useState} from 'react'
import logovideo from '../../public/loutput.gif'
import axios from 'axios';
import { isPassword } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
  const [message,setMessage]=useState("");
  const [data,setData]=useState({
    email:"",
    password:""
  })
 async function handlesubmit(e)
  {
e.preventDefault();
if( isPassword(data.password.trim()))
{
  setMessage("Loading...")
  try{
  const res=await axios.post("https://shivaay-shakti-backend-1.onrender.com/api/auth/login",data);
  // const res=await axios.post("http://localhost:5000/api/auth/login",data);
if(res.status===200)    
{
  console.log(res.data.user);
  setMessage("Login Successful")
  localStorage.setItem('user', JSON.stringify( res.data.user ));
  localStorage.setItem('jwt', JSON.stringify( res.data.token ));
  navigate('/', {replace: true});
}
  }
catch(e)
{
  setMessage(e.response.data.message);
}
}
else{
  setMessage("Invlaid Credentials");
}

  }
  return (
    <div className=' w-screen h-screen bg-[#FFF1C1] grid place-content-center ' >
       <div  className=' flex w-[80vw]  justify-center items-center  ' >
       <div className='  hidden lg:block w-1/2 '  >
       <img src={logovideo}  alt="" />
       </div>
       {/* style={{ background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",}}  */}
       <div className=' w-[90vw] sm:w-[80vw] md:w-[70vw] h-[500px]  text-black mx-auto  lg:w-1/2 rounded-2xl  sm:p-8 md:p-12 lg:p-16 ' >
        <h1 className='text-5xl heading ' >Login</h1>
        <form className=' flex flex-col mt-10 gap-5 ' onSubmit={handlesubmit} >
          <div className=' flex flex-col gap-2 '>
         <label className=' text-2xl bluish  ' htmlFor="">Email</label>
         <input type="text" name="email"  value={data.email} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className=' font-semibold  px-3   text-red-900  rounded-lg py-1 '  />
         </div>
          <div className=' flex flex-col bluish gap-2 '>
         <label className=' text-2xl ' htmlFor="">Password</label>
         <input type="password" name="password" value={data.password} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className='  text-red-900 rounded-lg px-3 py-1  '  />
         </div>
          <div className=' flex  items-center gap-5   mt-6  '>
         <button type='submit' className=' text-2xl px-3 py-1 button3  '><span>Login</span></button>
         <Link to='/Signup' className=' button3 text-2xl px-3 py-1  '>
          <span>Signup</span></Link>
         <p className=' text-[18px] font-bold text-red-900'>{message}</p>
         </div>
         <div>
         <Link to='/forgot-password' className='  '>
          <span>Forget Password?</span></Link>
         </div>
        
        </form>
       </div>
       </div>
    </div>
  )
}

export default Login
