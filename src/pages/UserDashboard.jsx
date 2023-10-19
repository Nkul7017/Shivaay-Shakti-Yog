import React from 'react'
import HeroNavbar from '../components/HeroNavbar'
import Stats from '../components/Stats'
import Ongoing from '../components/Ongoing'

const UserDashboard = () => {
  return (
    <>
    <div className="  ">
        <div className=" relative z-10 px-10  ">
          <HeroNavbar/>
        </div>

        <section className='w-[90vw] mx-auto stats'>
        <Stats/>
        </section>
  
  <section className='w-[90vw] mt-20 h-[354px] mx-auto ongoing '>
    <Ongoing/>
  </section>
      </div>
    </>
  )
}

export default UserDashboard
