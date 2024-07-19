import React,{useMemo, useState} from 'react'
import logovideo from '../../public/loutput.gif'
import axios from 'axios';
import countryList from 'react-select-country-list'
import { Link, useNavigate } from 'react-router-dom';
import { isEmail,isPassword } from '../utils';
import { HiXMark } from 'react-icons/hi2';
function Signup() {
  const options1 =[
    {value:"waiting for options...",label:"waiting for options..."},
   ];
   const options = useMemo(() => countryList().getData(), [])
   const [toggle,setToggle]=useState(false);
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:"",
    email:"",
    city:"",
    country:"",
    gender:"",
    specify:"",
    born:"",
    height:0,
    hunit:"",
    weight:0,
    wunit:"",
    password:"",
    cpassword:"",
    medical_condition:"",
    contact:"",
    next:1,
     message:"",
     toggle:false
  })
  const[message,setMessage]=useState("");
  async function handlesubmit(e)
  {
    setData({...data,message:"Loading..."});
    console.log("hello");
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
console.log(data)
if(data.name.trim().length>3 && isEmail(data.email.trim()) && isPassword(data.password.trim()) && data.cpassword.trim()!=="" && data.password===data.cpassword && data.country!=="" &&data.gender!==""&&data.height>0&&data.weight>0&&data.country!==""&&data.city!==""&&data.contact!=="")
{ 
  console.log("naame")
  if(data.gender=="specify" ) {
    if(data.specify!=="" ) {
  
  console.log(data);
  try{
    console.log(data);
    console.log("bhai")
  const response=await axios.post('http://localhost:5000/api/auth/signup',
  // const response=await axios.post('http://localhost:5000/api/auth/signup',
  {
   name:data.name,
   country:data.country,
   born:data.born,
   city:data.city,
   email:data.email,
   height:data.height,
   weight:data.weight,
   gender:data.gender,
    specify:data.specify,
    password:data.password,
    medical_condition:data.medical_condition,
    contact:data.contact
  }
  );
  console.log("hi");
  if(response.status===201)
  {
    console.log(response);
   navigate('/login');
  }
}
catch(e){
  setData({...data,message:e.response.data.message,});
}}
else{
  setData({...data,message:"*All Fields Are Mandatory",});

}}
else
{
  setData({...data,message:"Loading..."});
  console.log(data);
  try{

    console.log(data);
  const response=await axios.post('http://localhost:5000/api/auth/signup',
  // const response=await axios.post('http://localhost:5000/api/auth/signup',
  {
    name:data.name,
    country:data.country,
    born:data.born,
    city:data.city,
    email:data.email,
    height:data.height,
    weight:data.weight,
    gender:data.gender,
     specify:data.specify,
     password:data.password,
     medical_condition:data.medical_condition,
     contact:data.contact
   }
  );

  if(response.status===201)
  {
    console.log(response);
   navigate('/login');
  }
}
catch(e){
  console.log(e);
  setData({...data,message:e.response?.data?.message});
}}
} 
else{
  console.log("name")
  setData({...data,message:"*All Fields Are Mandatory"});
}
  }

  function handle(e)
  {setData({...data,[e.target.name]:e.target.value});}


  function handle1(e){
  setData({...data,gender:e.target.value,toggle:true});}


  
  return (
    <div className=' w-screen h-screen  bg-[#FFF1C1] flex justify-center sm:grid   sm:place-content-center ' >
      <div className=' absolute top-5 right-5 sm:right-10  '>
      <Link to="/" ><HiXMark  className='  text-3xl lg:text-4xl ' /></Link>
 </div>
       <div  className=' flex  sm:w-[80vw]  justify-center  ' >
       <div className='  hidden lg:block w-1/2 '  >
       <img src={logovideo}  alt="" />
       </div>
       {/* style={{ background: "linear-gradient(90deg, #FFF -0.83%, #FFF1C1 99.93%)",}}  */}
       <div className=' w-[98vw] sm:w-[80vw] md:w-[70vw] h-[500px]  text-black mx-auto  lg:w-1/2 rounded-2xl mt-14 sm:mt-10  px-8' >
       
       <h1 className=' text-3xl sm:text-5xl heading ' >Sign Up</h1>
        <form  onSubmit={handlesubmit} >
        {data.next===1&&<div className='flex flex-col mt-4 gap-3'>
        <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">What is your name?</label> 
      <input type="text" name="name" value={data.name} onChange={handle} className=' w-[220px] lg:w-[400px] p-3 h-6 lg:h-8 ' />
      </div>
      <div  className=' flex flex-col  lg:flex-row gap-2 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>When were you born ?</label>
      <input type="date" value={data.born} name="born" onChange={handle} className='
      w-[180px]  p-3 lg:w-[228px] h-6 sm:h-8 ' />
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor=""  className='  bluish text-sm lg:text-[18px]'>Your Country</label>
      <select name="country"  value={data.country} onChange={handle} id="" className='  pl-3 button3  w-[150px]  lg:w-[228px] ' style={{height:"35px"}} >
        {options?.map((value,i)=>
         <option key={i} className='  bg-white  text-black ' >{value.label}</option>
        )}
      </select>
      </div>
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor=""  className='  bluish text-sm lg:text-[18px]'>Your City</label>
   <input type="text" value={data.city} name="city" onChange={handle} className='
      w-[180px] p-3  lg:w-[228px] h-6 sm:h-8 ' />
      </div>

      <div>
      <div className=' flex flex-col gap-2 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>You Identify yourself as?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 '>
        <button type="button" onClick={handle1}  value="male" className={` ${(data.toggle && data.gender=="male"  )?"button3 ":"button2a"} `} style={{height:"35px"}} >Male</button>
        <button type="button" onClick={handle1} className={` ${data.toggle && data.gender=="female"  ?"button3 ":"button2a"} `} style={{height:"35px"}} value="female" >Female</button>
        <button type="button" onClick={handle1}  className={` ${data.toggle && data.gender=="other"?"button3 ":"button2a"} `} style={{height:"35px"}} value="other"  >Other</button>
        <button type="button" onClick={handle1}  className={` ${data.toggle && data.gender=="specify"?"button3 ":"button2a"} `} style={{height:"35px"}} value="specify"  >Specify</button> 
        {data.gender=="specify"&&
         <input type="text" value={data.specify} className=' h-6 sm:h-8 p-3' style={{height:"35px"}}  onChange={(e)=> setData({...data,specify:e.target.value})} />
        }

     </div>
      </div>
      </div>
      <div  className=' flex    gap-3 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Height ?</label>
<div className=' flex gap-2 '>
<input type="number" name='height' value={data.height} onChange={handle} className=' w-[50px] p-3 lg:w-[140px] h-8 ' />
      <select onChange={handle} name='hunit'    className=' border border-[#2C3E50] rounded-md p-1 h-8  ' >
        <option value="inches">inches</option>
        <option value="cm">cm</option>
      </select>
      </div>
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Your Weight ?</label>
<div className=' flex gap-2 '>
<input type="number" name='weight' value={data.weight} onChange={handle} className='p-3 w-[50px] lg:w-[140px] h-8    ' />
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
         <label className='bluish text-sm lg:text-[18px] ' htmlFor="">Medical Condition (optional)</label>
         <input type="text" name="medical_condition" value={data.medical_condition} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' w-[220px] p-3 lg:w-[400px] h-6 lg:h-8 '  />
         </div>
         
         </div>
         <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">Contact</label> 
      <input type="number" name="contact" value={data.contact} onChange={handle} className=' p-3 w-full sm:w-2/3 h-6 lg:h-8 ' />
      </div>
         <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">Email</label> 
      <input type="email" name="email" value={data.email} onChange={handle} className='p-3 w-full sm:w-2/3 h-6 lg:h-8 ' />
      </div>
      <div  className=' flex    gap-3 lg:gap-5  flex-wrap ' >
            <div className=' flex flex-col gap-2 w-full sm:w-1/3 '>
         <label className=' bluish text-sm lg:text-[18px]' htmlFor="">Password</label>
         <input type="password" name="password" value={data.password} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' text-red-900  px-3 py-1  h-6 sm:h-8 '  />
         </div>
         
          <div className=' flex  flex-col gap-2 w-full sm:w-1/3  '>
         <label className='bluish text-sm lg:text-[18px]' htmlFor="">Confirm Password</label>
         <input type="password" name="cpassword" value={data.cpassword} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  className=' text-red-900  px-3 py-1  h-6 sm:h-8    '  />
         </div>
         </div>


         <div className=' flex  items-center gap-5   mt-3  '>
         <button  type='submit' className='  button3 text-2xl  py-1   '><span className=' text-[18px]'>Sign Up</span></button>
         <button  type='button' onClick={()=>setData({...data,next:data.next-1})} className='  button3 text-2xl  py-1   '><span className=' text-[18px]'>Back</span></button> 
         <p className=' text-[18px] font-bold text-red-900'>{data.message}</p> 
         </div>
         </div>}


        </form>

        </div>
        </div>
        </div>
      
  )}

export default Signup
