import React, { useState } from "react";
import s2 from "../../public/img/s2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

function Trainer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container py-24 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-xl text-2xl font-medium title-font text-yellow-600">
              OUR EXPERTS
            </h1>
            <h1 className="sm:text-[40px] text-2xl font-medium title-font text-gray-900 mb-4">
              About Our Trainers
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              At Shivaayshakti, our trainers are more than just instructors—they
              are the heart and soul of our community. Each of our trainers
              brings a unique blend of expertise, passion, and dedication,
              ensuring that every class you take is a step toward greater
              well-being, mindfulness, and personal growth.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>

          <div className="flex flex-wrap  justify-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center ">
              <div className=" inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500  flex-shrink-0">
                <img src={s2} alt="" />
              </div>
              {/* <div className="flex-grow ">
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
              </div> */}
            </div>
            <div
              className="lg:w-[650px] lg:mt-10 text-center p-3  mx-auto"

              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <div
                className={`overflow-hidden transition-all duration-500 space-y-4 ${
                  isExpanded ? "h-auto" : "h-[60vh]"
                }`}
              >
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Highly Trained and Certified Experts{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Our team of trainers is comprised of highly skilled
                  professionals, each holding certifications from respected yoga
                  institutions. With years of experience across various
                  disciplines—including Hatha, Vinyasa, Ashtanga, Kundalini, and
                  specialized areas like pre and post-natal yoga—our trainers
                  are equipped to guide you safely and effectively through your
                  yoga journey.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Diverse Teaching Styles and Specialties{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  We understand that every individual&apos;s path in yoga is
                  different, and our trainers reflect that diversity in their
                  teaching styles and specialties. Whether you&apos;re looking
                  to deepen your practice, find relaxation, improve flexibility,
                  or focus on spiritual growth, you&apos;ll find a trainer who
                  resonates with your personal goals. From restorative yoga to
                  dynamic flows, our trainers offer a wide range of classes
                  tailored to all levels, from beginners to advanced
                  practitioners.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  A Commitment to Continuous Learning{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Our trainers are lifelong learners, continuously enhancing
                  their knowledge and skills to bring the latest and most
                  effective practices to their students. They regularly
                  participate in advanced workshops, teacher training, and
                  wellness courses, ensuring that you receive instruction that
                  is both current and grounded in deep tradition.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Personalized Attention and Support{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  What sets our trainers apart is their commitment to providing
                  personalized attention and support to every student. Whether
                  you&apos;re in a live interactive class or following along
                  with a recorded session, our trainers are dedicated to helping
                  you achieve your personal best. They take the time to
                  understand your needs, offer modifications, and provide
                  encouragement, making your practice both safe and rewarding.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Inspiring and Approachable Mentors{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Beyond their technical skills, our trainers are approachable
                  mentors who genuinely care about your progress. They create a
                  welcoming and inclusive environment where you feel supported
                  every step of the way. Many of our students describe their
                  relationship with our trainers as transformative, not just in
                  terms of their physical practice but in their overall approach
                  to life.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Community Leaders and Contributors{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Our trainers are also active leaders within the Shivaayshakti
                  Community. They don&apos;t just teach; they engage with
                  members through community discussions, Q&A sessions, and
                  special events. Their involvement goes beyond the mat, as they
                  contribute to the growth and cohesion of our community,
                  ensuring that every member feels connected and valued.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Global Experience and Recognition{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Many of our trainers have taught internationally, leading
                  workshops, retreats, and masterclasses around the world. Their
                  global experience brings a rich and diverse perspective to
                  their teaching, allowing them to connect with students from
                  all walks of life. Some of our trainers have been featured in
                  leading yoga publications and have received accolades for
                  their contributions to the yoga community.
                </p>
                <h1 className="lg:flex lg:justify-end text-2xl font-bold">
                  Join Us on the Mat{" "}
                </h1>
                <p className="lg:mt-10 mt-4 lg:text-right text-center">
                  Whether you&apos;re taking your first steps into yoga or
                  you&apos;re a seasoned practitioner, our trainers are here to
                  guide, inspire, and support you. Explore their profiles, find
                  the perfect match for your needs, and start your journey with
                  the assurance that you are in expert hands. At Shivaayshakti,
                  we believe that the right teacher can make all the difference,
                  and we are proud to have a team of trainers who are as
                  passionate about your growth as you are.
                </p>
              </div>
            </div>
          </div>
          {/* Toggle Button */}
          <div className="text-center">
            <button
              onClick={toggleContent}
              className="mt-4 px-4 py-2 border border-[#db9562] text-[#db9562] rounded-md"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
