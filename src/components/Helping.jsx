import React, { useState } from "react";
import helping from "../../public/helping.png";
function Helping() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" grid   lg:grid-cols-2 w-[80vw] h-auto mx-auto    sm:mt-20  sm:space-y-0 mb-8 ">
      <div
        className={` row-start-2 sm:row-auto my-2 sm:my-auto space-y-2  rounded-xl  `}
      >
        <div className=" space-y-2 sm:w-[70%] -ml-2 sm:-ml-0 flex flex-col gap-1.5 ">
        <div
                className={`overflow-hidden transition-all duration-500 space-y-4 ${
                  isExpanded ? "h-auto" : "h-[78vh] md:h-[60vh] lg:h-[70vh]"
                }`}
              >
          <div className=" ">
            <p className=" text-2xl heading mt-2 sm:mt-0 ">Why Choose</p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              Shivaay Shakti Yog ?
            </p>
          </div>
         
          <p className="text-md leading-6 para text-justify   ">
            In today&apos;s fast-paced world, many people find themselves
            trapped in unhealthy lifestyles, leading to stress and various
            mental and physical challenges. At Shivaay Shakti Yog, we are
            dedicated to promoting the betterment of humanity through the
            ancient practice of yoga, embracing the eight limbs that form its
            foundation. Our mission is to help you counter the adverse effects
            of modern living and prevent these issues from escalating.
            Here&apos;s why choosing us will be one of the best decisions you
            make for your well-being:
          </p>
          <div className="space-y-4">
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              1. Expertise and Experience
            </p>

            <p className="text-md leading-6 para text-justify   ">
              Our team of highly qualified and experienced yoga instructors is
              passionate about guiding you on your journey to better health and
              harmony. Each instructor brings a wealth of knowledge and a deep
              commitment to helping you achieve your personal goals, whether
              you're a beginner or a seasoned practitioner.
            </p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              2. Holistic Approach
            </p>

            <p className="text-md leading-6 para text-justify   ">
              We believe in a holistic approach to wellness that goes beyond
              physical fitness. Our programs are designed to nourish your mind,
              body, and spirit, integrating the ancient wisdom of yoga with
              modern insights. We focus on creating a balanced lifestyle that
              promotes long-term health and happiness.
            </p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              3. Personalized Attention
            </p>

            <p className="text-md leading-6 para text-justify   ">
              We understand that everyone&apos;s journey is unique. That&apos;s why we
              offer personalized guidance tailored to your individual needs and
              aspirations. Whether you&apos;re looking to improve flexibility, reduce
              stress, or deepen your practice, we provide the support and
              attention you need to thrive.
            </p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              4. Inclusive Community
            </p>

            <p className="text-md leading-6 para text-justify   ">
              When you join us, you become part of a welcoming and inclusive
              community. Our classes are designed for all ages, backgrounds, and
              fitness levels. We foster an environment where everyone can feel
              comfortable, supported, and inspired.
            </p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              5. Proven Results
            </p>

            <p className="text-md leading-6 para text-justify   ">
              Our programs are rooted in time-tested practices that have helped
              countless individuals achieve their wellness goals. From stress
              relief and enhanced mental clarity to improved physical strength
              and flexibility, our approach delivers real, lasting results.
            </p>
            <p className=" text-3xl sm:text-4xl heading sm:mt-1 ">
              6. Commitment to Your Growth
            </p>

            <p className="text-md leading-6 para text-justify   ">
              We are dedicated to your continuous growth and development. We
              offer a variety of classes, workshops, and events that keep your
              practice dynamic and engaging. Our goal is to empower you to live
              a healthier, more fulfilling life.
              <br />
              Begin your transformative journey with Shivaay Shakti Yog and make
              a life-changing decision towards a healthier, more balanced
              future.
            </p>
          </div>
        </div>

         {/* Toggle Button */}
         <div className="text-center md:pb-5 lg:pb-0 ">
            <button
              onClick={toggleContent}
              className="mt-4 px-4 py-2 border border-[#db9562] text-[#db9562] rounded-md"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

      </div>
      </div>
      <div className=" row-start-1 -ml-2 sm:ml-0 w-[84vw] mx-auto sm:w-auto sm:row-auto grid  mt-10 sm:mt-0  ">
        <img
          src={helping}
          className=" h-[400px]  sm:w-[694px] sm:h-[550px]  object-cover "
          alt=""
          style={{
            borderRadius: "10px",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25);Rectangle 43Image · 867 x 1,3001x",
          }}
        />
      </div>
    </div>
  );
}

export default Helping;
