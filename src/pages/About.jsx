import React,{useState} from 'react'
import HeroNavbar from '../components/HeroNavbar'
import about from '../../public/About/about.png'
import Shivji from '../../public/About/Shivji.png'
import Shivji1 from '../../public/About/Shivji1.png'
import Namaste from '../../public/About/Namaste.png'
import Footer from '../components/Footer'

function About() {
const [toggle,setToggle]=useState(undefined);
  const data=[
    {heading:"Live Interactive Classes:",content:"Engage in real-time yoga sessions led by knowledgeable instructors who provide personalized guidance and corrections, ensuring that you get the most out of your practice."},
    {heading:"Diverse Yoga Styles:",content:"Choose from a wide range of yoga styles, including General Wellness, Weight Management, Mental Wellness and more. Our classes cater to various preferences and skill levels, allowing you to explore different approaches to yoga and find what resonates with you."},
    {heading:"Flexible Schedule:",content:"We understand that life can be busy, so we offer a flexible schedule with classes throughout the day to accommodate your needs. Join a class whenever it fits into your routine, and even catch up on missed sessions with our on-demand library."},
    {heading:"Accessible,Anytime, Anywhere:",content:"Our web app is accessible from any device with an internet connection, giving you the freedom to practice yoga wherever you are. Whether you prefer practicing in your living room or while traveli"},
  ]
  return (
    <>
    <div className="  ">
        <div className=" relative z-10  ">
          <HeroNavbar />
        </div>

        {/*------------------------------- Hero Section-------------------------------------------- */}
        <div className=' relative sm:pt-20 '>
          <div className='px-8'>
            <img
            className="  hidden sm:block rounded-2xl   w-screen object-cover   h-[170px] sm:h-[500px]   "
              src={about}
              alt=""
            />
            </div>
            <img
            className=" block sm:hidden   w-screen   h-[309px] sm:h-[500px]   "
              src={Shivji1}
              alt=""
            />
            <p className='  absolute bottom-7 heading w-[100%] text-center   text-2xl sm:text-5xl ' style={{color:"white"}}>Empower Yourself</p>
            </div>
  
      </div>
      <div className=' w-[90vw] mx-auto mt-5 '>
        <p className=' heading text-[18px] sm:text-5xl text-center '>
        Embrace the healing power of yoga
        </p>
        <p className=' text-black text-[12px] sm:text-[18px] mt-6 sm:mt-12 text-center'>
        Introducing Shivaay Shakti, a group of passionate yoga trainers on a mission to uplift humanity. We offer convenient access to transformative yoga services empowering members to lead balanced lives and cultivate connections. Beyond yoga, our hub offers resources, meditation sessions, and personalized guidance for holistic well-being.
        </p>
      

      <div className=' hidden  sm:flex   flex-col lg:flex-row md:px-2  lg:px-28 gap-10 mt-14 justify-between  '>
      <div className=' flex flex-col lg:flex-row items-center justify-center lg:w-1/2  text-justify  '>
      <div className='  lg:w-1/2'>
        <img src={Shivji} alt="" className='about  lg:w-[570px] lg:h-[500px] hidden sm:block lg:hidden  md:w-[500px] md:h-[500px] ' />
        </div>
        <div className=' space-y-5 mt-0 sm:mt-10 lg:mt-0    text-black text-[18px] para '>
          <p>Our mission is to provide a convenient and accessible platform for individuals of all levels to practice yoga from the comfort of their own homes. Whether you're a beginner looking to explore the benefits of yoga or an experienced yogi seeking to deepen your practice, we have something for everyone.</p>
          <p>What sets us apart is our commitment to delivering live yoga classes led by experienced and certified instructors. We believe that real-time instruction fosters a sense of community, accountability, and personalized guidance. Through our interactive platform, you'll have the opportunity to connect with expert teachers and fellow practitioners from around the globe, creating a supportive and uplifting environment.</p>
        </div>
      </div>
      <div className='  lg:w-1/2'>
        <img src={Shivji} alt="" className='about  lg:w-[570px] lg:h-[500px] hidden  lg:block md:w-[500px] md:h-[500px] ' />
        </div>
      </div>

      <div className=' mt-10'>
    <p className=' heading text-2xl sm:text-4xl ' style={{color:"black"}}>Key Features</p>
    <p className=" hidden sm:block text-[18px] mt-1 font-bold ">Shivaay Shakti Live Yoga Training Web App:</p>
      </div>

      <div className=' hidden sm:flex  flex-wrap gap-5 lg:gap-8    mt-8 '>
        {data.map((value,index)=>
          <>
          <div key={index} className=' flex  justify-center items-center   text-justify about_box '  >
            <div className=' h-[166px] w-[220px] space-y-3 '>
              <p className='text-xl  heading ' >{value.heading}</p>
             <p className=' text-sm para '>{value.content}</p>
            </div>
          </div>
          </>
        )}
      </div>
      <div className=' sm:hidden block transition-all duration-300  flex-wrap  mt-8 '>
        {data.map((value,i)=>
          <>
          <div key={i} className={`about_box1 mt-3 p-4  `}  onClick={()=>setToggle(i)}   >
            <div className={` space-y-2   ${toggle===i?"h-auto":"h-[30px]" }  `} style={{transition:"all 1s"}}>
              <p className='heading text-[18px]'>{value.heading}</p>
              {toggle===i && <p className='para text-sm' >{value.content}</p>}
            </div>
          </div>
          </>
        )}
      </div>

      <div>
        <p className=' text-[12px] sm:text-[16px]  text-black text-center mt-14 sm:mt-24 para '>At Shivaay Shakti, we believe that yoga is not just a physical exercise but a holistic practice that nurtures the mind, body, and spirit. Join us on this transformative journey and experience the numerous benefits of yoga firsthand. Whether you're looking to reduce stress, increase flexibility, improve strength, or find inner peace, our live yoga training web app is here to support you every step of the way.</p>
      </div>

      <div className=' mt-14 sm:mt-24'>
      <p className=' heading text-[18px] sm:text-4xl text-center  sm:w-[60%] mx-auto '>
        Start your yoga journey with us today and unlock the power of a balanced and harmonious life.</p>
      </div>

      <div className=' flex justify-center mt-12 '>
        <img src={Namaste} className=' w-[125px] h-[130px] sm:w-[247px] sm:h-[255px] ' alt="" />
      </div>
      </div>

      <section className=' mt-6 sm:mt-14'>
        <Footer/>
      </section>
    </>
  )
}

export default About
