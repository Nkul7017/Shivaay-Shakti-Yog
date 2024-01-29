import React from 'react'

export default function Details({data}) {
 
  return (
   <>
   <div className='flex gap-4 md:gap-5 justify-between flex-wrap overflow-auto scrollbar-hide '>
    {data?.benefits?.map((value,index)=>
      <div key={index+101}  className=' flex flex-col  items-center  min-w-[80px] max-w-[80px]   sm:min-w-[130px]  sm:max-w-[130px] gap-2 para  md:max-h-[160px]   '>
      
          <div> <img src={value?.icon} className=' max-w-[85px] max-h-[85px] sm:min-w-[100px] sm:min-h-[100px]' alt="" /> </div>
      <div className=' text-xs  sm:text-sm para text-center '>{value?.heading}</div>
  </div>
    )}
   
    </div>
   </>
  )
}
