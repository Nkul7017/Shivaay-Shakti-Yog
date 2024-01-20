import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-[440px] stats w-[100%] py-2 sm:py-6 md:py-10   gap-10 ' style={{border:"none" ,borderRadius:"0"}} >
      <div className=' h-[200px]  lg:h-auto lg:w-[65vw]  rounded-md  bg-white '>
        <p className=' text-sm lg:text-xl bluish p-10 '>Progrees Stats</p>
      </div>
      <div className='  lg:w-[33vw] rounded-md] space-y-4 items-center  px-10  lg:px-10 py-8  lg:py-10 bg-white'>
       <p className=' text-sm lg:text-xl bluish '>Remarks</p>
       <ul className='  list-disc text-xs lg:text-sm space-y-3  para '>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Phasellus dapibus magna sit amet urna molestie venenatis. Aenean suscipit semper nisl, et luctus diam euismod ut. Mauris ac maximus sem, vitae aliquam tortor.</li>
        <li>Integer urna nisi, convallis sit amet ante rutrum, consectetur gravida lorem. Aliquam erat volutpat.</li>
       </ul>
      </div>
    </div>
  )
}

export default Stats
