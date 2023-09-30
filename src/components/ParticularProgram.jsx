import React from 'react'
import HeroNavbar from './HeroNavbar'
import Image from '../assets/Images/Article1.jpeg'
function ParticularArticle() {
  return (
    <>
     <div class="   bg-[url(https://cdn.discordapp.com/attachments/1078905801017659432/1113750711801499669/Rectangle_645.png)] bg-center bg-cover p-5   ">
              <HeroNavbar ></HeroNavbar>
              <div className="flex md:px-28  ">
                <div className="sm:w-1/2 flex flex-col justify-center ">
                  <h1 className="text-[#FAA200] mt-10 text-4xl font-semibold">
                  Yoga in the Modern World{" "}
                  </h1>
                  <h1
                    className=" text-3xl mt-2 sm:xl md:text-2xl text-[#283143]"
                    style={{ fontWeight: 600 }}
                  >
                    The Perfect Blend of Ancient Wisdom and Contemporary Needs
                  </h1>
                </div>
                <div className="w-1/2  ">
                  <img
                    className="hidden sm:flex md:w-[550px] sm:w-[260px] mt-10  sm:mt-10 	 "
                    src={Image}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center flex flex-col items-center mt-10 p-5 md:px-28 ">
                <h1 className="text-2xl text-[#FAA200] font-semibold">Introduction</h1>
                {/* <h2 className="text-[#FAA200]">Get a free trial session!</h2> */}
                <h3 className='pt-2 text-justify '>
                In an era defined by stress, anxiety, and chronic busyness, ancient practices like yoga offer a beacon of hope. As science and technology propel us forward, we increasingly find ourselves looking back to wisdom rooted in the distant past. Yoga, a spiritual and physical discipline that originated in India over 5,000 years ago, has experienced a modern renaissance. The adoption of this age-old practice by various cultures and communities worldwide serves as a testament to its timeless utility. This article explores the growing relevance of yoga in today's modern world and how it bridges the gap between ancient wisdom and contemporary challenges.
                </h3>
              </div>
            </div>
         
    </>
  )
}

export default ParticularArticle
