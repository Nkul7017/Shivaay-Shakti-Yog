import React, { useState } from "react";
import HeroNavbar from "../components/HeroNavbar";
import about from "../../public/About/about.jpg";
import Shivji from "../../public/About/Shivji.png";
import Shivji1 from "../../public/About/Shivji1.png";
import Namaste from "../../public/About/Namaste.png";
import Footer from "../components/Footer";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const [toggle, setToggle] = useState(undefined);
  const data = [
    {
      heading: "Live Interactive Classes:",
      content:
        "Engage in real-time yoga sessions led by knowledgeable instructors who provide personalized guidance and corrections, ensuring that you get the most out of your practice.",
    },
    {
      heading: "Diverse Yoga Styles:",
      content:
        "Choose from a wide range of yoga styles, including General Wellness, Weight Management, Mental Wellness and more. Our classes cater to various preferences and skill levels, allowing you to explore different approaches to yoga and find what resonates with you.",
    },
    {
      heading: "Flexible Schedule:",
      content:
        "We understand that life can be busy, so we offer a flexible schedule with classes throughout the day to accommodate your needs. Join a class whenever it fits into your routine, and even catch up on missed sessions with our on-demand library.",
    },
    {
      heading: "Accessible,Anytime, Anywhere:",
      content:
        "Our web app is accessible from any device with an internet connection, giving you the freedom to practice yoga wherever you are. Whether you prefer practicing in your living room or while traveli",
    },
  ];
  return (
    <>
      <div className="  ">
        <div className=" relative z-10  ">
          <HeroNavbar />
        </div>

        {/*------------------------------- Hero Section-------------------------------------------- */}
        <div className=" relative sm:pt-20 ">
          <div className="px-8">
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
          <p
            className="  absolute bottom-7 heading w-[100%] text-center   text-2xl sm:text-5xl "
            style={{ color: "white" }}
          >
            Empower Yourself
          </p>
        </div>
      </div>
      <div className=" w-[90vw] mx-auto mt-5 ">
        <p className=" heading text-[18px] sm:text-5xl text-center ">
          Embrace the healing power of yoga
        </p>
        <p className=" text-black text-[12px] sm:text-[18px] mt-6 sm:mt-12 text-center">
          Welcome to <span className="font-bold"> Shivaay Shakti Yog </span>
          where our mission is to elevate the well-being of individuals and
          contribute to the betterment of humanity through the transformative
          power of yoga.
          <br />
          At Shivaay Shakti Yog, we believe that yoga is more than just a
          practice—it&apos;s a pathway to holistic wellness and personal growth.
          Our studio is dedicated to fostering an environment where mind, body,
          and spirit align harmoniously, enabling you to achieve your fullest
          potential.
        </p>

        <div className=" flex   flex-col lg:flex-row md:px-2  lg:px-28 gap-10 mt-14 justify-between  ">
          <div className=" flex flex-col lg:flex-row items-center justify-center lg:w-1/2  text-justify  ">
            <div className="  lg:w-1/2">
              <img
                src={Shivji}
                alt=""
                className="about  lg:w-[570px] lg:h-[500px] hidden sm:block lg:hidden  md:w-[500px] md:h-[500px] "
              />
            </div>
            <div className=" space-y-5 mt-0 sm:mt-10 lg:mt-0    text-black text-[18px] para ">
              <div
                className={`overflow-hidden transition-all duration-500 space-y-4 ${
                  isExpanded ? "h-auto" : "h-[60vh]"
                }`}
              >
                <h1 className="heading text-[18px] sm:text-3xl">Our Vision</h1>
                <p>
                  We envision a world where every individual experiences the
                  profound benefits of yoga, leading to a more balanced and
                  harmonious society. Through our practices and teachings, we
                  aim to inspire positive change, enhance mental clarity, and
                  promote overall health.
                </p>
                <h1 className="heading text-[18px] sm:text-3xl">
                  What Sets Us Apart{" "}
                </h1>
                <p>
                  <strong>1. Expert Guidance:</strong> Our team of highly
                  qualified and experienced yoga instructors is committed to
                  providing personalized attention and guidance. Each instructor
                  brings a wealth of knowledge and a deep passion for yoga,
                  ensuring that you receive the highest quality of instruction
                  and support.
                </p>
                <p>
                  <strong> 2. Comprehensive Programs:</strong> We offer a
                  diverse range of yoga styles and programs designed to meet the
                  needs of all individuals, regardless of experience level. From
                  dynamic sequences to restorative practices, our programs are
                  tailored to help you achieve your health and wellness goals.
                </p>
                <p>
                  <strong>3. Holistic Approach:</strong> We emphasize the
                  importance of integrating physical, mental, and emotional
                  well-being. Our classes and workshops focus on nurturing all
                  aspects of your health, promoting inner peace, and fostering
                  personal growth.
                </p>
                <p>
                  <strong>4. Community and Connection:</strong> At Shivaay
                  Shakti Yog , we cultivate a supportive and inclusive community
                  where every individual feels valued. We believe in the power
                  of collective energy and encourage meaningful connections
                  among our members.
                </p>

                <h1 className="heading text-[18px] sm:text-3xl">
                  What We Offer to Our Members
                </h1>
                <p className="text-black text-[18px] para ">
                  At Shivaayshakti, our goal is to support you in every aspect
                  of your yoga journey. As a member of our community,
                  you&apos;ll have access to a wide range of offerings designed
                  to enhance your practice, deepen your understanding, and
                  support your overall well-being. Here's what we provide to our
                  members:
                </p>

                <p>
                  <strong>1. Live Interactive Classes</strong>Experience the
                  energy and engagement of real-time yoga classes from the
                  comfort of your home. Our live sessions allow you to interact
                  with our instructors, ask questions, and receive personalized
                  feedback, ensuring that you get the most out of each class.
                  Whether you&apos;re a beginner or an advanced practitioner,
                  our live classes cater to all levels and needs.
                </p>
                <p>
                  <strong>2. On-Demand Recorded Sessions</strong>Practice yoga
                  whenever it fits your schedule with our extensive library of
                  recorded sessions. These on-demand classes cover various yoga
                  styles, from calming restorative practices to energizing
                  vinyasa flows, allowing you to choose the perfect class to
                  match your mood and goals.
                </p>
                <p>
                  <strong>
                    3. Access to Highly Trained and Certified Instructors
                  </strong>
                  Our team of instructors is made up of highly trained and
                  certified professionals who bring years of experience and a
                  deep passion for teaching yoga. They are skilled in a variety
                  of disciplines, including Hatha, Vinyasa, Ashtanga, Kundalini,
                  and specialized areas like pre and post-natal yoga. Their
                  qualifications ensure that you are guided safely and
                  effectively through your practice, with attention to your
                  individual needs and aspirations.
                </p>
                <p>
                  <strong>4. Personalized Consultancy and Guidance</strong> We
                  recognize that every yoga journey is unique. That's why we
                  offer personalized consultancy services to help you tailor
                  your practice to your specific needs, whether that&apos;s
                  managing stress, improving flexibility, or navigating the
                  physical changes of pregnancy and postpartum. Our consultants
                  are here to provide expert advice and personalized
                  recommendations, helping you achieve your personal health and
                  wellness goals.
                </p>
                <p>
                  <strong>5. Exclusive Community Access</strong>As a member of
                  the Shivaayshakti Community, you&apos;ll be part of a
                  supportive network of like-minded individuals who share your
                  passion for yoga and well-being. Our community offers forums,
                  discussion groups, and social events where you can connect,
                  share experiences, and grow together with others on the same
                  path.
                </p>
                <p>
                  <strong>6. Special Workshops and Events</strong>Enhance your
                  practice and knowledge with our exclusive workshops and
                  events. We regularly host sessions on various topics, such as
                  meditation, breathwork, advanced poses, and holistic wellness,
                  led by our expert trainers and guest instructors. These events
                  are designed to deepen your understanding of yoga and its
                  applications in daily life.
                </p>
                <p>
                  <strong>7. Member-Only Challenges and Programs</strong>
                  Participate in member-only challenges and programs that are
                  designed to motivate and inspire you. Whether it&apos;s a
                  30-day yoga challenge, a mindfulness program, or a detox plan,
                  these initiatives help you stay committed to your practice and
                  explore new aspects of your wellness journey.
                </p>
                <p>
                  <strong>8. Early Access to New Classes and Content</strong>Be
                  the first to explore new classes, courses, and content with
                  early access exclusively for members. Stay ahead with the
                  latest offerings and continue to expand your practice with
                  fresh and innovative sessions.
                </p>
                <p>
                  <strong>9. Discounts and Special Offers</strong>Enjoy
                  exclusive discounts on our products, services, and events.
                  Members receive special pricing on everything from yoga props
                  and apparel to workshops and retreats, making it easier to
                  invest in your practice and well-being.
                </p>
                <p>
                  <strong>10. Continuous Learning and Growth</strong>Our
                  commitment to your growth goes beyond the mat. We provide
                  access to educational resources, articles, and courses that
                  help you deepen your knowledge of yoga, mindfulness, and
                  holistic health. Whether you&apos;re interested in the
                  philosophy of yoga, anatomy, or the latest research on
                  wellness, we offer the tools and resources to support your
                  ongoing .
                </p>

                <h1 className="heading text-[18px] sm:text-3xl">
                  Our Commitment to Humanity
                </h1>

                <p>
                  Our mission extends beyond the studio walls. We are dedicated
                  to making a positive impact on the world by promoting
                  sustainable practices and supporting initiatives that
                  contribute to the greater good. By choosing [Your Yoga Studio
                  Name], you are not only investing in your own well-being but
                  also participating in a movement toward a healthier and more
                  compassionate world.
                  <br />
                  Join us on this journey to enhance your life and contribute to
                  the betterment of humanity. Experience the transformative
                  power of yoga and be part of a community that strives to make
                  a difference.
                  <br />
                  Welcome to <strong>Shivaay Shakti Yog</strong>—where your
                  journey to wellness begins, and the quest for a better world
                  unfolds.
                </p>
              </div>
            </div>
          </div>

          <div className="  lg:w-1/2">
            <img
              src={Shivji}
              alt=""
              className="about  lg:w-[570px] lg:h-[500px] hidden  lg:block md:w-[500px] md:h-[500px] "
            />
          </div>
        </div>

        <div className="text-start lg:mx-40">
          <button
            onClick={toggleContent}
            className="mt-4 px-4 py-2 border border-[#db9562] text-[#db9562] rounded-md"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="mt-10 md:mt-20 ">
          <p
            className=" heading text-2xl sm:text-4xl "
            style={{ color: "black" }}
          >
            Key Features
          </p>
          <p className=" hidden sm:block text-[18px] mt-1 font-bold ">
            Shivaay Shakti Live Yoga Training Web App:
          </p>
        </div>

        <div className=" hidden sm:flex  flex-wrap gap-5 lg:gap-8    mt-8 ">
          {data.map((value, index) => (
            <>
              <div
                key={index}
                className=" flex  justify-center items-center   text-justify about_box "
              >
                <div className=" h-[166px] w-[220px] space-y-3 ">
                  <p className="text-xl  heading ">{value.heading}</p>
                  <p className=" text-sm para ">{value.content}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" sm:hidden block transition-all duration-300  flex-wrap  mt-8 ">
          {data.map((value, i) => (
            <>
              <div
                key={i}
                className={`about_box1 mt-3 p-4  `}
                onClick={() => setToggle(i)}
              >
                <div
                  className={` space-y-2   ${
                    toggle === i ? "h-auto" : "h-[30px]"
                  }  `}
                  style={{ transition: "all 1s" }}
                >
                  <p className="heading text-[18px]">{value.heading}</p>
                  {toggle === i && (
                    <p className="para text-sm">{value.content}</p>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>

        <div>
          <p className=" text-[12px] sm:text-[16px]  text-black text-center mt-14 sm:mt-24 para ">
            At Shivaay Shakti, we believe that yoga is not just a physical
            exercise but a holistic practice that nurtures the mind, body, and
            spirit. Join us on this transformative journey and experience the
            numerous benefits of yoga firsthand. Whether you're looking to
            reduce stress, increase flexibility, improve strength, or find inner
            peace, our live yoga training web app is here to support you every
            step of the way.
          </p>
        </div>

        <div className=" mt-14 sm:mt-24">
          <p className=" heading text-[18px] sm:text-4xl text-center  sm:w-[60%] mx-auto ">
            Start your yoga journey with us today and unlock the power of a
            balanced and harmonious life.
          </p>
        </div>

        <div className=" flex justify-center mt-12 ">
          <img
            src={Namaste}
            className=" w-[125px] h-[130px] sm:w-[247px] sm:h-[255px] "
            alt=""
          />
        </div>
      </div>

      <section className=" mt-6 sm:mt-14">
        <Footer />
      </section>
    </>
  );
}

export default About;
