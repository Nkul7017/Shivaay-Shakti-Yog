import React from 'react'

function Days({heading,time,index}) {
  return (
   
    <div className=' flex flex-col pt-7 pb-4 px-5  justify-between  h-[200px] w-[180px] bg-[#B7DFC7] rounded-md '>
      <div className='space-y-3 w-[120px]  '><p className=' text-2xl para  font-semibold '>Day {index+1}</p>
      <p className='heading font-extrabold text-md overflow-auto scrollbar-hide h-[90px] ' style={{textShadow:"none",}}>{heading}</p></div>
      <p className='  para text-xs font-semibold '>Time:- {time}</p>
    </div>   
   
  )
}

export default Days
