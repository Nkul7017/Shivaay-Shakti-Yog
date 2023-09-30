import React from "react";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/HeroNavbar";
import DeskNavbar from "../components/DeskNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="overflow-hidden">
          <div className="bg-[url('https://res.cloudinary.com/eduminatti-com/image/upload/v1687167469/Untitled_design_16_1.png')] w-full bg-no-repeat bg-cover">
            <Navbar />
            {/* <Filter></Filter> */}
            <h1 className="lg:text-[39px] text-[20px] lg:pt-40 lg:pb-40 pb-10 pl-4 pt-4 lg:pl-32 text-white">
              Empower Yourself: <br />{" "}
              <span className="lg:text-[25px] text-[16px]">
                Embrace the Healing Power of Yoga.
              </span>
            </h1>
          </div>
        </div>

        <h1 className="text-center text-[14px] lg:text-[15px] lg:px-20 lg:pt-24 px-8 pt-10">
          Introducing Shivaay Shakti, a group of passionate yoga trainers on a
          mission to uplift humanity. We offer convenient access to
          transformative yoga services empowering members to lead balanced lives
          and cultivate connections. Beyond yoga, our hub offers resources,
          meditation sessions, and personalized guidance for holistic
          well-being.
        </h1>

        <div className="flex justify-center pt-10">
          <img
            className="w-[300px] h-[250px] lg:w-[350px] lg:h-[350px] lg:hidden"
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1687168325/Rectangle_648.png"
            alt=""
          />
        </div>
        <div className="flex justify-center  flex-wrap gap-14 lg:gap-40 pt-10  lg:pt-20 items-center">
          <div className="w-[350px] lg:w-[700px] flex flex-col gap-5 text-[14px] lg:text-[15px] px-2 lg:px-0 text-center lg:text-left">
            <h1>
              Our mission is to provide a convenient and accessible platform for
              individuals of all levels to practice yoga from the comfort of
              their own homes. Whether you're a beginner looking to explore the
              benefits of yoga or an experienced yogi seeking to deepen your
              practice, we have something for everyone.
            </h1>
            <h1>
              What sets us apart is our commitment to delivering live yoga
              classes led by experienced and certified instructors. We believe
              that real-time instruction fosters a sense of community,
              accountability, and personalized guidance. Through our interactive
              platform, you'll have the opportunity to connect with expert
              teachers and fellow practitioners from around the globe, creating
              a supportive and uplifting environment.
            </h1>
          </div>

          <div>
            <img
              className="w-[300px] h-[250px] lg:w-[400px] lg:h-[400px] lg:flex hidden"
              src="https://res.cloudinary.com/eduminatti-com/image/upload/v1687168325/Rectangle_648.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <h1 className="text-[#FAA200] lg:text-[40px] text-[20px] text-center pt-8 lg:pt-20">
            KEY FEATURES
          </h1>
          <h1 className="text-black lg:text-[25px] text-[13px] text-center">
            Shivaay Shakti Live Yoga Training Web App:
          </h1>
        </div>

        <div className="flex flex-col  items-center pt-10">
          <div className="flex justify-center gap-2 w-[350px] lg:w-[800px]">
            <div className="flex flex-col">
              <div className="rounded-full w-7 h-7 bg-black text-white flex justify-center items-center">
                1
              </div>
              <div className="border-l-[1px] self-center border-black border-dashed h-28 lg:h-20"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#FAA200] text-lg ">
                Live Interactive Classes:
              </h1>
              <p className="w-[300px] lg:w-[750px] ">
                Engage in real-time yoga sessions led by knowledgeable
                instructors who provide personalized guidance and corrections,
                ensuring that you get the most out of your practice.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 w-[350px] lg:w-[800px] ">
            <div className="flex flex-col">
              <div className="rounded-full w-7 h-7 bg-black text-white flex justify-center items-center">
                2
              </div>
              <div className="border-l-[1px] self-center border-black border-dashed h-40 lg:h-20"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#FAA200] text-lg ">
                Diverse Yoga Styles:
              </h1>
              <p className="w-[300px] lg:w-[750px]  ">
                Choose from a wide range of yoga styles, including General
                Wellness, Weight Management, Mental Wellness and more. Our
                classes cater to various preferences and skill levels, allowing
                you to explore different approaches to yoga and find what
                resonates with you.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 w-[350px] lg:w-[800px] ">
            <div className="flex flex-col">
              <div className="rounded-full w-7 h-7 bg-black text-white flex justify-center items-center">
                3
              </div>
              <div className="border-l-[1px] self-center border-black border-dashed h-36 lg:h-20"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#FAA200] text-lg w-48">
                Flexible Schedule:
              </h1>
              <p className="w-[300px] lg:w-[750px]  ">
                We understand that life can be busy, so we offer a flexible
                schedule with classes throughout the day to accommodate your
                needs. Join a class whenever it fits into your routine, and even
                catch up on missed sessions with our on-demand library.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2  w-[350px] lg:w-[800px] ">
            <div className="flex flex-col">
              <div className="rounded-full w-7 h-7 bg-black text-white flex justify-center items-center">
                4
              </div>
              <div className="border-l-[1px] self-center border-black border-dashed  h-36 lg:h-16"></div>
            </div>
            <div>
              <h1 className="font-semibold text-[#FAA200] text-lg w-72">
                Accesible Anytime, Anywhere:
              </h1>
              <p className="w-[300px] lg:w-[750px] ">
                Our web app is accessible from any device with an internet
                connection, giving you the freedom to practice yoga wherever you
                are. Whether you prefer practicing in your living room or while
                traveling, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around gap-8 lg:gap-0  items-center flex-wrap mt-10 lg:mt-24 ">
          <img
            className="w-[300px] h-[250px] lg:w-[568px] lg:h-[288px]"
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1687171822/Rectangle_653.png"
            alt=""
          />
          <p className="w-[300px] lg:w-[550px] ">
            At Shivaay Shakti, we believe that yoga is not just a physical
            exercise but a holistic practice that nurtures the mind, body, and
            spirit. Join us on this transformative journey and experience the
            numerous benefits of yoga firsthand. Whether you're looking to
            reduce stress, increase flexibility, improve strength, or find inner
            peace, our live yoga training web app is here to support you every
            step of the way.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black  text-[13px] lg:text-[20px] text-center pt-20 lg:px-0 px-4 font-bold">
            Start your yoga journey with us today and unlock the power of a
            balanced and harmonious life.
          </h1>
          <img
            className="w-40 h-40 "
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1687173182/Namaste_1.png"
            alt=""
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
