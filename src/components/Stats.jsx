import React from 'react'

const Stats = ({data}) => {
  console.log(data);
  return (
    <div className='flex flex-col lg:flex-row lg:h-[440px] stats w-[100%] py-2 sm:py-6 md:py-10   gap-10 ' style={{border:"none" ,borderRadius:"0"}} >
      <div className=' h-[200px]  lg:h-auto lg:w-[65vw]  rounded-md  bg-white '>
        <p className=' text-sm lg:text-xl bluish p-10 '>Progress Stats</p>
      </div>
      <div className='  lg:w-[33vw] rounded-md] space-y-4 items-center  px-10  lg:px-10 py-8  lg:py-10 bg-white'>
       <p className=' text-sm lg:text-xl bluish '>Remarks</p>
       <p className='  list-disc text-xs lg:text-sm space-y-3  para '>
        {data?.remarks}
       </p>
      </div>
    </div>
  )
}

export default Stats
