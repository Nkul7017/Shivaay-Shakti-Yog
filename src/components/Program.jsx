import React from 'react'
import Card1 from './Card1'
export default function Program() {
  return (
   <>
   <div className=" pl-4 sm:pl-40  text-4xl pt-28 heading ">
          <h1 className='mb-10'>Programs</h1>
        </div>
        <section className=' p-2  w-[94vw] sm:w-[95vw] h-auto mx-auto flex gap-7 sm:gap-14 mt-1  overflow-scroll scrollbar-hide  '>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
        </section>
   </>
  )
}
