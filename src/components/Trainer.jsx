import React from "react";
import s2 from "../../public/img/s2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

function Trainer() {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container py-24 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-xl text-2xl font-medium title-font text-yellow-600">
              OUR EXPERTS
            </h1>
            <h1 className="sm:text-[40px] text-2xl font-medium title-font text-gray-900 mb-4">
              Meet Richa Aggarwal
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              With the country's best trainers in our team, we assure guaranteed
              results and exemplary services to our customers.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center">
            <div
              className="p-4 md:w-1/3 flex flex-col text-center items-center"
              // data-aos="fade-left"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <div className=" inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500  flex-shrink-0">
                <img src={s2} alt="" />
              </div>
              <div className="flex-grow ">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Yamini Das
                </h2>
                <p className="leading-relaxed text-base">
                  Facial Yoga Expert
                  <br />
                  Experience 10+ Years
                </p>

                <div className="rate">
                  <div className="flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <p className=" mx-2">5/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:w-[650px] lg:mt-10 text-center p-3 "
             



              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                About Richha
              </h1>
              <p className="lg:mt-10 mt-4 lg:text-right text-center">
                Richa is a highly experienced and dedicated yoga instructor who
                is passionate about helping her clients achieve their fitness
                goals through the practice of yoga. With a warm and friendly
                demeanor, Richa creates a welcoming and supportive environment
                for her students to learn and grow in their practice. She has a
                deep understanding of the principles and techniques of yoga, and
                she uses this knowledge to design custom-tailored programs that
                meet the unique needs and preferences of each of her clients.
                Whether you're a beginner or an experienced yogi, Richa is
                committed to helping you develop your skills and achieve your
                fitness objectives. During her classes, Richa emphasizes the
                importance of mindfulness, breath awareness, and proper
                alignment. She encourages her students to approach their
                practice with an open mind and a positive attitude, and she
                provides plenty of guidance and feedback to help them progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
