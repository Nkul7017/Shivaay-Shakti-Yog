import React, { useMemo, useState } from 'react'
import Popup from 'reactjs-popup';
import { HiXMark } from "react-icons/hi2";
import countryList from 'react-select-country-list'
import Select from 'react-select';
import axios from 'axios';
function NewSurvey({shurveyPopup,setShurveyPopup,logovideo}) {
  const options1 =[
   {value:"waiting for options...",label:"waiting for options..."},
  ];
  
  const options = useMemo(() => countryList().getData(), [])
  const [toggle,setToggle]=useState(false);
  const [toggle1,setToggle1]=useState(false);
  const [toggle2,setToggle2]=useState(false);
  const [toggle3,setToggle3]=useState(false);
  const [toggle4,setToggle4]=useState(false);
  const [congrats,setCongrats]=useState(false);
  const [data,setData]=useState(
    {
      name:"",
      born:"",
      country:"",
      gender:"",
      specify:"",
      height:0,
      hunit:"",
      weight:0,
      wunit:"",
      level:"",
      goals:[],
      gspecify:"",
     daily_life_looks:[],
     daily_life:[],
      morning:[],
      evening:[],
     next:false,
     message:""
    }
  );

     function handle(e)
     {setData({...data,[e.target.name]:e.target.value});}


     function handle1(e){
     setToggle(true);
     setData({...data,gender:e.target.value});}

     function handle2(e) {
      setToggle1(!toggle2);
     setData({...data,level:e.target.value});  }

     function handle3(str,e){
      if(!(data[str].includes(e.target.value))) {
      data[str].push(e.target.value);
      setData(data); }
      else{
    data[str]=data[str].filter(v=>v!==e.target.value)
    setData(data); }}

    function handleChange(e)
    {
      setData({...data,daily_life_looks:e})
    }

     async function submit1()
    {
      setData({...data,message:""})
      console.log(data);
      delete data.message
      delete data.next
      delete data.hunit
      delete data.wunit
     data.daily_life_looks?.map(v=>
      data.daily_life.push(v.value))
      delete data.daily_life_looks;
  console.log(data);
  try{
const response=await axios.post('https://shivaay-shakti-backend-1.onrender.com/api/survey',data);
if(response.data.success===true)
{
  setShurveyPopup(false);
  setCongrats(true);
}
console.log(response);
  }
  catch(e){
    setData({...data,message:"Server Error"});
console.log(e);
  }
    }
      function handlesubmit(){
      if(data.hunit==="cm")
      { data.height=parseFloat(data.height)*0.393701;}
      if(data.wunit==="pound")
      { data.weight=parseFloat(data.weight)*0.453592;}
      if(data.name!==""&&data.born!==""&&data.gender!==""&&data.height>0&&data.weight>0&&data.level!==""&&data.country!=="") {
        if(data.gender=="specify" ) {
          if(data.specify!=="" ) {
         if(data.goals.includes("Specify")){
          if(data.gspecify!=="")
          submit1();
         else{ 
          setData({...data,message:"* All Fields are Mandatory"})
          }}
         else
         submit1();
        }}
        else if(data.goals.includes("Specify")){
          if(data.gspecify!=="")
          submit1();
        else  setData({...data,message:"* All Fields are Mandatory"})} 
        else{ 
          submit1(); 
        } }
     else{ setData({...data,message:"* All Fields are Mandatory"})} }
  
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
    {!data.next?
    <>
    <div className=' py-14 lg:py-32   px-11 flex  flex-col gap-3 lg:gap-5 '>

      <div className=' flex flex-col gap-1 '>
   <label className=' bluish text-sm lg:text-[18px] ' htmlFor="">What is your name?</label> 
      <input type="text" name="name" value={data.name} onChange={handle} className=' w-[220px] lg:w-[400px] h-7 lg:h-8 ' />
      </div>

      <div  className=' flex flex-col  lg:flex-row gap-2 lg:gap-5 ' >
        <div className=' flex flex-col gap-1'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>When were you born ?</label>
      <input type="date" value={data.born} name="born" onChange={handle} className='
      w-[180px]  lg:w-[228px] h-8 ' />
      </div>
      <div className=' flex flex-col gap-1'>
   <label htmlFor=""  className=' text-sm lg:text-[18px]'>Your Country</label>
      <select name="country"  value={data.country} onChange={handle} id="" className='  pl-3 button3 w-[150px]  lg:w-[228px] h-8' >
        {options?.map((value)=>
         <option className=' bg-white  text-black ' >{value.label}</option>
        )}
      </select>
      </div>
      </div>

      <div>
      <div className=' flex flex-col gap-2 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>You Identify yourself as?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 '>
        <button onClick={handle1}  value="male" className={` ${(toggle && data.gender=="male"  )?"button3 ":"button2a"} `} >Male</button>
        <button onClick={handle1} className={` ${toggle && data.gender=="female"  ?"button3 ":"button2a"} `} value="female" >Female</button>
        <button onClick={handle1}  className={` ${toggle && data.gender=="other"?"button3 ":"button2a"} `} value="other"  >Other</button>
        <button onClick={handle1}  className={` ${toggle && data.gender=="specify"?"button3 ":"button2a"} `} value="specify"  >Specify</button> 
        {data.gender=="specify"&&
         <input type="text" value={data.specify} className='border border-[#2C3E50] h-8' placeholder={data.country}  onChange={(e)=> setData({...data,specify:e.target.value})} />
        }

     </div>
      </div>
      </div>
      <div  className=' flex    gap-3 lg:gap-5 ' >
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

      <div>
      <div className=' flex flex-col gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>At what level do you practice yoga?</label>
     <div className=' flex gap-5 flex-wrap '>
     <button className={` ${(toggle1 && data.level=="Beginner"  )?"button3 ":"button2"} `} onClick={handle2} value="Beginner"  >Beginner</button>
        <button className={` ${(toggle1 && data.level=="Intermediate"  )?"button3 ":"button2"} `} onClick={handle2} value="Intermediate"  >Intermediate</button>
        <button className={` ${(toggle1 && data.level=="Advanced"  )?"button3 ":"button2"} `} onClick={handle2} value="Advanced" >Advanced</button>
     </div>
      </div>
      </div>

      <div className=' mt-3 lg:mt-5'>
        <button className=' button3  text-xl  ' onClick={()=>{setData({...data,next:!data.next})}} style={{width:"140px",height:"40px"}} >Next</button>
      </div>
    </div>

 
 </>:

// ------------------------------ Page2 ---------------------------------------
<div className=' py-12 lg:py-32 lg:px-14   px-11 flex  flex-col gap-3 lg:gap-5 '>

    
      <div className=' flex flex-col gap-2 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Select the goal/ goals and diseases that you wish to treat through yoga?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 ' onClick={()=>setToggle2(!toggle2)}>
        <button onClick={(e)=>handle3("goals",e)} value="Weight Management" className={` ${(data.goals.includes("Weight Management")  )?"button3 ":"button2"} `} >Weight Management</button>
        <button onClick={(e)=>handle3("goals",e)} value="PCOS" className={` ${( data.goals.includes("PCOS")  )?"button3 ":"button2"} `}>PCOS</button>
        <button onClick={(e)=>handle3("goals",e)} value="Diabetese" className={` ${( data.goals.includes("Diabetese")  )?"button3 ":"button2"} `} >Diabetese</button>
        <button onClick={(e)=>handle3("goals",e)} value="Mental Health" className={` ${(data.goals.includes("Mental Health")  )?"button3 ":"button2"} `}  >Mental Health</button>
        <button  onClick={(e)=>handle3("goals",e)} value="Flexibility" className={` ${(data.goals.includes("Flexibility")  )?"button3 ":"button2"} `} >Flexibility</button>
        <button onClick={(e)=>handle3("goals",e)} value="Arthritis" className={` ${( data.goals.includes("Arthritis")  )?"button3 ":"button2"} `} >Arthritis</button>
        <button onClick={(e)=>handle3("goals",e)} value="Asthama" className={` ${( data.goals.includes("Asthama")  )?"button3 ":"button2"} `}  >Asthama</button>
        <button onClick={(e)=>handle3("goals",e)} value="General Well Being" className={` ${(data.goals.includes("General Well Being")  )?"button3 ":"button2"} `}  >General Well Being</button>
        <button onClick={(e)=>handle3("goals",e)} value="Spirituality" className={` ${(data.goals.includes("Spirituality")  )?"button3 ":"button2"} `}  >Spirituality</button>
        <button onClick={(e)=>handle3("goals",e)} value="Specify" className={` ${(data.goals.includes("Specify")  )?"button3 ":"button2"} `}  >Specify</button>
        {data.goals.includes("Specify")&&
         <input type="text" value={data.gspecify} className='border border-[#2C3E50] h-8'  onChange={(e)=> setData({...data,gspecify:e.target.value})} />
        }
     </div> 
      </div>

      
      <div  className=' flex    gap-1 lg:gap-5 ' >
        <div className=' flex flex-col gap-2'>  
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>How does your daily life looks like?</label>
   <p className='bluish text-[10px] -mt-1 lg:text-[14px]'> Select all the instances that applies ?</p>
  
  <Select
  options={options1}
  value={data.daily_life_looks}
  onChange={handleChange}
  isMulti={true}
  placeholder={options1[0].label}
  />
      </div>
      </div>


      <div className=' flex flex-col gap-1 lg:gap-3'>
   <label htmlFor="" className='bluish text-sm lg:text-[18px]'>Which Type of person you are?</label>
     <div className=' flex flex-wrap gap-3 lg:gap-5 ' >
        <button  className={` ${(!toggle3)?"button3 ":"button2"} `}  onClick={()=>setToggle3(false)} >Morning</button>
        <button className={` ${(toggle3)?"button3 ":"button2"} `} onClick={()=>setToggle3(true)}   >Evening</button>
      </div>
      {!toggle3&&<div className=' flex flex-wrap gap-3 lg:gap-5 mt-1 ' onClick={()=>setToggle4(!toggle4)}>
        <button onClick={(e)=>handle3("morning",e)} className={` ${(data.morning.includes("4:00 AM - 6:00 AM")  )?"button3 ":"button2"} `} value="4:00 AM - 6:00 AM" >4:00 AM - 6:00 AM </button>
        <button onClick={(e)=>handle3("morning",e)} className={` ${(data.morning.includes("6:00 AM - 8:00 AM")  )?"button3 ":"button2"} `} value="6:00 AM - 8:00 AM" >6:00 AM - 8:00 AM</button>
        <button onClick={(e)=>handle3("morning",e)} className={` ${(data.morning.includes("8:00 AM - 10:00 AM")  )?"button3 ":"button2"} `} value="8:00 AM - 10:00 AM" >8:00 AM - 10:00 AM</button>
     </div>}
     {toggle3&&<div className=' flex flex-wrap gap-3 lg:gap-5 mt-1 ' onClick={()=>setToggle4(!toggle4)}>
        <button onClick={(e)=>handle3("evening",e)} className={` ${(data.evening.includes("4:00 PM - 6:00 PM")  )?"button3 ":"button2"} `} value="4:00 PM - 6:00 PM" >4:00 PM - 6:00 PM </button>
        <button onClick={(e)=>handle3("evening",e)} className={` ${(data.evening.includes("6:00 PM - 8:00 PM")  )?"button3 ":"button2"} `} value="6:00 PM - 8:00 PM" >6:00 PM - 8:00 PM</button>
        <button onClick={(e)=>handle3("evening",e)} className={` ${(data.evening.includes("8:00 PM - 10:00 PM")  )?"button3 ":"button2"} `} value="8:00 PM - 10:00 PM" >8:00 PM - 10:00 PM</button>
     </div>}
      </div>

      <div className=' mt-3  flex gap-3 lg:mt-5'>
        <button className=' button3  text-xl  ' onClick={handlesubmit} style={{width:"140px",height:"40px"}} >Submit</button>
        <button className=' button3  text-xl  ' onClick={()=>{
        setData({...data,next:!data.next})}
        } style={{width:"140px",height:"40px"}} >Back</button>
      </div>
      <p className=' text-red-500'>{data.message}</p>
 </div>
 
 }
 <div className=' absolute top-5 right-5  '>
      <button onClick={()=>setShurveyPopup(!shurveyPopup)}><HiXMark  className='  text-3xl lg:text-4xl ' /></button>
 </div>
   </div>
  </Popup>
  <Popup
   open={congrats}
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
 <p className=' text-6xl text-white font-bold heading '>Congratulation</p>
 <div className=' absolute top-5 right-5  '>
      <button onClick={()=>setCongrats(!congrats)}><HiXMark  className='   text-3xl lg:text-5xl ' /></button>
 </div>
  </Popup>
    </>
  )
}

export default NewSurvey
