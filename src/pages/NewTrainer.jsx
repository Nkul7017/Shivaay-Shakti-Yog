import React from 'react'

const NewTrainer = () => {
  return (
    <>
    <div className='mt-5'>
      <div className="flex flex-col items-center pt-16 md:gap-5  md:pt-10 ">
        <h1 className="text-[#FAA200] text-xl md:text-2xl font-medium">
          OUR EXPERTS
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-[#283143]">
          SHIVAAY SHAKTI COMMUNITY
        </h2>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center md:gap-20 md:pt-5 md:p-5">
        <img
          className="p-4"
          src="https://cdn.discordapp.com/attachments/1111568797476868128/1113797479574544404/image_131.png"
          alt=""
        />
        <div className="p-5 text-center md:text-right md:w-[535px] md:h-64 md:p-5 ">
          <p className="text-[#283143] leading-6 text-[14px]">
            Introducing{" "}
            <span className=" md:font-normal font-bold">Shivaay Shakti</span>,
            a group of passionate yoga trainers on a mission to uplift{" "}
            <span className=" md:font-normal font-bold">humanity</span> . Our
            online portal offers convenient access to transformative yoga
            services. With the motto{" "}
            <span className=" md:font-normal font-bold">
              "For the Betterment of Humanity,"
            </span>{" "}
            we provide inclusive virtual classes tailored to individual needs.
            Expert instructors bring diverse expertise, empowering members to
            lead balanced lives and cultivate connections. Beyond yoga, our
            hub offers resources, meditation sessions, and personalized
            guidance for holistic well-being. Join Shivaay Shakti's vibrant
            community and embark on a journey of self-discovery and personal
            growth.
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default NewTrainer