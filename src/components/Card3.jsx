import React, { useState } from 'react'
import GroupForm from './GroupForm'
import PersonalForm from './PersonalForm'

function Card3({img,type,types}) {
  const [toggle1,setToggle1]=useState(false);
  return (
    <>
     {type===1&&
     <>
     <button onClick={()=>setToggle1(true)} >
     <div className={`w-[150px] h-[240px]  `  } style={{
        borderRadius:"10px",
background: `linear-gradient(180deg, rgba(121, 217, 249, 0.00) 0.07%, #E6F5FA 99.93%), url(${img}), lightgray 50% / cover no-repeat`
    }} >
      
        <div className=' w-[100%]  gap-1 pb-4 h-[100%] flex flex-col justify-end items-center'>
         <p className='text-sm bluish '>{types}</p>
         <p className='text-sm bluish '>Training Course</p>
         <p className='price1 mt-1 text-xl '>₹ 30,000</p>
        </div>
      </div>
      </button> 
        {types==="Personal"&&<PersonalForm toggle1={toggle1} setToggle1={setToggle1} />}
        {types==="Group"&&<GroupForm toggle1={toggle1} setToggle1={setToggle1} />}
      
      </> }

        {type===2&&<>
          <button className={`w-[150px]  h-[240px]   `} style={{
            borderRadius:"10px",
    background: `linear-gradient(180deg, rgba(121, 217, 249, 0.00) 0.07%, #E6F5FA 99.93%)`,
    backgroundImage:`url(${img})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"
        }}> 
            <div className=' w-[100%]  gap-4 pb-5 h-[100%] flex flex-col justify-end   pl-4'>
             <p className='text-xl bluish '>Hatha Yoga</p>
           <button className='button3' style={{height:"26px",width:"120px"}}><span>Know More</span></button>
            </div>
       
            </button>
           </>

    }
    </> 
    
  )
}

export default Card3
