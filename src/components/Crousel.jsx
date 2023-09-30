import React, { useEffect, useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopUp from "./PopUp";
import { useSelector } from "react-redux";
import img1 from "../../public/img/Group 385.png";
import img2 from "../../public/img/Group 386.png";
import img3 from "../../public/img/Group 387.png";
import img4 from "../../public/img/Group 388.png";
import StarRating from "./StarRating";
import Faq from "./Faq";

const selectCourse = (state) => state.course;

const faqData = [
  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },

  {
    ques: " What do I need for an online Yoga Class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
    point1:
      "Yoga mat: For your practice, a decent yoga mat offers support, comfort, and grip. It offers a comfortable surface for a variety of positions while assisting in preventing sliding. ",
    point2:
      "Comfortable Clothes: Wear loose, flexible, breathable clothing that does not restrict your movement for comfort. Choose attire that will not limit your movement or cause you tobecome distracted while practising.",
    point3:
      "Water bottle: Keep some fluids on hand during your session to stay hydrated. Even when working out online, it is crucial to stay hydrated.",
    point4:
      "Yoga Props: Yoga props are optional, however depending on the style of the class you are taking, you might find them useful. Yoga blocks, straps, bolsters, and blankets are common props. These accessories can help with alignment, offer support, and ease the difficulty of some poses.",
    point5:
      "Towel: When doing relaxation or seated postures, keep a towel handy in case you need to wipe off sweat or make yourself more comfortable. ",
    point6:
      "A quiet and well-lit space: An environment that is both quiet and well-lit should be chosen for your practice sessions. Make sure the space is well-lit so you can see the instructor andthe poses properly.",
    point7:
      "Laptop, smartphone, etc: To access the online yoga class, you will need a computer,tablet, or smartphone with a reliable internet connection. While practising, make sure yourdevice is charged and in a position that makes it simple for you to see the screen.",
    point8:
      "Speakers: External speakers or headphones are not required, however, they can improveyour experience by improving the audio quality and allowing you to concentrate on theinstructor's instructions. ",
    point9:
      "Always remember to arrange your area so that you may move around safely andcomfortably. Remove any impediments and make sure you have enough space to comfortably stretch and lengthen your body. Enjoy your yoga class online!",
  },

  {
    ques: "Can I eat before a Yoga Session?",
    ans: "It is generally advised to avoid having a large meal right before practising yoga. When you  practise yoga while you are full, it might be difficult to move and stretch without feeling uncomfortable. If you have recently consumed a substantial meal, your body may be diverting energy and blood flow from your practice in favour of helping you digest.  It is preferable to consume a light snack at least 1-2 hours before a yoga session if you feel  the desire to do so. Choose items that are simple to digest, such as fruits, yoghurt, a tiny amount of nuts or seeds, or a smoothie. These alternatives provide you with a little boost of energy without making you feel heavy or uncomfortable during your practice. On the other hand, you might opt to practise without food if you are participating in an early morning or pre-breakfast yoga session. To stay hydrated in this scenario, it is still a good idea to drink a glass of water. In the end, pay attention to your body and experiment with what suits you the most. It is crucial to strike a balance that enables you to practise easily and pleasantly.",
    point1:
      "Group sessions may not have the same trainer for every class. Trainers would be assigned as per availability. ",
    point2:
      "Classes missed in a group session WILL NOT be re-conducted. You may contact the support team to access the recording of the live class if it is available",
    point3:
      "A WhatsApp or telegram group would be made for a particular group session in which daily updates, class timings or changes would be informed.",
    point4:
      "In group sessions, flexibility is limited, hence you will have to punctually attend all the classes to get the maximum benefits.",
    point5: "Trial classes may be available",
  },

  {
    ques: "Can I change my coach after confirmation and payment?",
    ans: "Yes, you can only if you have a valid condition to change your coach and timings, for that you need to connect with the management team . This condition applies in both group session as well as private session . ",
  },

  {
    ques: "What is the refund policy?  ",
    ans: "GROUP SESSIONS: In a group session there will be a predefined schedule and classes that would be conducted on a designated time duration regularly. A full programme schedule would be available to you before booking the session. You can go through the details and select a programme that best matches your daily routine and your health concerns. You can also contact our consultation team to guide you in selecting the most suitable sessions. ",
  },

  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },

  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },

  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },

  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },
  {
    ques: "Before I pay, can I take a trial class?",
    ans: "A trial class can be provided to the first-time user. You will have to request a trial class by emailing our contact and support team",
  },
];

const Crousel = (data) => {
  const getCourse = useSelector(selectCourse);
  const [newCourse, SetNewCourse] = useState(["Loading"]);
  const [faq, SetFaq] = useState([{ ques: "Please Wait", ans: "" }]);
  useEffect(() => {
    if (
      getCourse?.course?.dayDetails != null &&
      getCourse?.course?.dayDetails != undefined
    ) {
      SetNewCourse(getCourse?.course?.dayDetails);
      SetFaq(getCourse?.course?.faq);
    }

    // console.log("if running with ", getCourse?.course?.dayDetails);
  }, [newCourse, getCourse?.course?.dayDetails, getCourse]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [show, setShow] = React.useState(false);
  const [set, offSet] = React.useState(false);
  return (
    <>
      {/* <div className="flex flex-row gap-6 snap-start w-full mt-20 overflow-x-scroll scrollbar-hide   px-5 ">
        {newCourse.map((item, index) => {
          console.log(newCourse);
          return (
            <div className="bg-[#F6E0BE] p-4  w-[340px]   rounded-xl justify-center items-center mx-auto">
              <h1 className="text-[#FF754C] text-2xl font-semibold">
                Day {index + 1}
              </h1>

             
              <div className="overflow-y-scroll scrollbar-hide w-[180px] h-[100px] mb-3 mt-2">
                <p className=" lg:text-[14px]">{item}</p>
              </div>
              <p className="text-[#FF754C] ">
                Time:- {getCourse?.course?.timings} (hrs){" "}
              </p>
            </div>
          );
        })}
      </div> */}
{/* 
      <div className="flex items-center justify-end mt-4 ">
        <h1 className="text-xl font-serif font-medium lg:text-3xl ">swipe </h1>

        <HiChevronDoubleRight className=""></HiChevronDoubleRight>
      </div> */}

      {/* ...........FAQ.......... */}
      <div className="mt-14">
      <Faq></Faq>
      </div>
      {/* <div
        id="faqs"
        className=" p-4 lg:w-[80%] shadow-2xl lg:mt-8 lg:ml-20 lg:hidden "
      >
        <h1 className="text-3xl text-[#FAA200] font-bold">FAQ's</h1>

        <h1 className="text-[#FAA200] text-xl mt-4 ">
          What do I need to participate in an online Hatha yoga program?
        </h1>
        <p className="text-[14px] mt-2">
          To participate in an online Hatha yoga program, you will need a
          computer or mobile device with a stable internet connection. You may
          also need a yoga mat, props (such as blocks or straps), and
          comfortable clothing.
        </p>

        {show && (
          <>
            <h1 className="text-[#FAA200] text-xl mt-6 ">
              Can beginners participate in a Hatha yoga online program?
            </h1>
            <p className="text-[14px] mt-2">
              Yes, Hatha yoga is a gentle form of yoga that is suitable for
              beginners. However, it's important to communicate with the
              instructor about any injuries or limitations you may have to
              ensure that the postures are modified appropriately.
            </p>
            <h1 className="text-[#FAA200] text-xl mt-6">
              Are online Hatha yoga classes as effective as in-person classes?
            </h1>
            <p className="text-[14px] mt-2">
              Online Hatha yoga classes can be just as effective as in-person
              classes, as long as the instructor is experienced and provides
              clear guidance. However, some people may find it challenging to
              stay motivated without the in-person energy of a class.
            </p>
            <h1 className="text-[#FAA200] text-xl mt-6 ">
              What is the duration of a typical Hatha yoga online class?
            </h1>
            <p className="text-[14px] mt-2">
              The duration of a Hatha yoga online class can vary, but it is
              usually between 60 to 90 minutes.
            </p>
            <h1 className="text-[#FAA200] text-xl mt-6 ">
              How often should I practice Hatha yoga during an online program?
            </h1>
            <p className="text-[14px] mt-2">
              The frequency of your practice during a Hatha yoga online program
              can vary depending on your goals and availability. However, it's
              generally recommended to practice at least three times a week to
              experience the benefits of the practice.
            </p>
            <h1 className="text-[#FAA200] text-xl mt-6 ">
              What should I expect from a Hatha yoga online program?
            </h1>
            <p className="text-[14px] mt-2">
              A Hatha yoga online program typically includes a series of classes
              that focus on physical postures, breathing exercises, and
              relaxation techniques. The instructor may provide modifications
              and adjustments to ensure that the practice is safe and effective.
              Additionally, some programs may include guided meditations,
              journaling prompts, or other practices to enhance the mind-body
              connection.
            </p>
          </>
        )}

        <div className="flex justify-end   " onClick={() => setShow(!show)}>
          <button className="text-[#FAA200] lg:hidden ">
            {show == false ? <span> Read More</span> : <span> Read Less</span>}
          </button>
        </div>
      </div> */}

      {/* destop faqs........... */}
      {/* <div id="faqs">
        <div className="hidden lg:flex ">
          <div className=" lg:w-[80%] shadow-2xl py-10 ml-28">
            <div className=" p-4 lg:mt-8 lg:py-8 lg:ml-20 ">
              <h1 className="text-3xl text-[#FAA200] font-bold">FAQ's</h1>
              {faqData.map((item, index) => {

                return (
                  <>
                    <h1 className="text-[#FAA200] text-xl mt-8 ">
                      {item.ques}
                    </h1>
                    <p className=" text-black text-md   mt-2">
                      {item.ans.split(":")[0]} :
                    </p>{" "}
                    <p className="text-[14px] mt-2">{item.ans.split(":")[1]}</p>
                    <p className="text-[14px]  font-extrabold mt-2">{item.point1}</p>
                    <p className="text-[14px] mt-2">{item.point2}</p>
                    <p className="text-[14px] mt-2">{item.point3}</p>
                    <p className="text-[14px] mt-2">{item.point4}</p>
                    <p className="text-[14px] mt-2">{item.point5}</p>
                    <p className="text-[14px] mt-2">{item.point6}</p>
                    <p className="text-[14px] mt-2">{item.point7}</p>
                    <p className="text-[14px] mt-2">{item.point8}</p>
                    <p className="text-[14px] mt-2">{item.point9}</p>
                    <p className="text-[14px] mt-2">{item.point10}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}

      <div id="booking">
        <h1 className="text-xl text-[#FAA200] font-bold text-center  mt-4 ml-6 lg:mt-24 lg:text-5xl lg:mx-[15%] tracking-wider ">
          {getCourse?.course?.name}
        </h1>
      </div>
      <div className="flex flex-row mt-10 lg:mt-20 lg:gap-36 lg:mx-[22%]">
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img1} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img2} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px]" src={img3} />
        <img className="w-24 h-20 lg:w-[100px] lg:h-[100px] " src={img4} />
      </div>

      <h1 className="ml-6 mb-5 pt-6 lg:mx-[22%]">Group Sessions</h1>
      <div className="flex justify-between lg:mx-10 lg:mt-12 ">
        <div className="flex items-center gap-1 lg:mx-[22%]">
          <div>
            <IoIosTime className="text-xl ml-4 "></IoIosTime>
          </div>
          <div>
            <h6>{getCourse?.course?.timings}</h6>
            <h6>Morning Sessions</h6>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex ml-8  h-8 lg:-ml-[650px]">
            <div>
              <StarRating></StarRating>
            </div>
          </div>
          <div className="lg:-ml-[680px]">
            <h3 className="ml-8">
              Based on {Math.floor(Math.random() * (10 - 56)) + 56} Reviews
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center z-50"></div>

      <div className="bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1086980123829485678/yoga.jpg')]  bg-cover w-full h-[500px] z-0 mt-8">
        <div className="h-[500px]  p-6 text-center flex flex-col items-center justify-center z-0 absolute ">
          <div>
            <h1 className="text-[#FF754C] text-xl z-0">Shivay Shakti </h1>
            <h1 className="text-white text-3xl -tracking-wide font-bold mt-2">
              Helping You Make The Right Choices.
            </h1>
            <p className="text-white mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              pariatur, fugit quasi ut illum, veniam at, corporis reprehenderit
              totam nulla minima veritatis a ex quis necessitatibus numquam.
              Possimus, alias laudantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labore saepe distinctio suscipit obcaecati quam
              molestias, nesciunt consectetur eius ducimus ipsam aut possimus
              sed ea animi. Tempore libero hic blanditiis dicta?
            </p>
          </div>
          <div className="mt-6">
            <a
              href=""
              className=" bg-[#FAA200] text-xl text-white px-2 py-2 rounded-lg lg:text-2xl "
            >
              {" "}
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* CLIENTS...../ */}

      <div id="Reviews">
        <h1 className="text-center text-[#FAA200] text-md font-semibold mt-5">
          REVIEWS
        </h1>
      </div>
      <h1 className="text-center text-xl font-semibold mt-2">
        Reviws From Our Clients
      </h1>

      <div className="w-full p-6">
        <Slider {...settings}>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="p-4 ml-5 mr-5 shadow-2xl">
              <img
                className="w-24"
                src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                at quae voluptatem explicabo enim nisi aperiam ipsam, blanditiis
                et dolorem impedit commodi, recusandae ducimus ad voluptate! Sit
                eos commodi fugit.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-5">
                <div>
                  <img
                    className="w-16"
                    src="https://cdn-icons-png.flaticon.com/512/147/147133.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-1">Prince</h3>
                  <h3 className="text-xl mt-2">Client</h3>
                </div>
              </div>
            </div>{" "}
          </div>
        </Slider>
      </div>

      {/* .............. policy........ */}

      <div className="p-4 lg:hidden">
        <div className="p-6 bg-[#F6E0BE] rounded-3xl">
          <h1 className="text-xl mt-4">Confirmation Policy </h1>
          <p className="text-[#283143] text-[14px] mt-3">
            {" "}
            As soon as the payment is made, a confirmation email would be sent
            to your provided email id. The payment receipt will be attached with
            the mail.
          </p>

          {set && (
            <>
              <h1 className="text-xl mt-4">Payment Terms </h1>
              <p className="text-[#283143] text-[14px] mt-3">
                Payment can be made through UPI, Net-banking, Account Transfer,
                Credit & Debit cards.
              </p>
              <p className="text-[#283143] text-[14px] mt-3">
                Cash payment is not available.
              </p>
              <p className="text-[#283143] text-[14px] mt-3">
                100% payment is to be made 48 hours before the programme start
                date.
              </p>

              <h1 className="text-xl mt-4">Cancellation Policy</h1>
              <p className="text-[#283143] text-[14px] mt-3">
                If cancellation is made 72 hours before the tour date, a 100%
                refund would be processed.
              </p>
              <p className="text-[#283143] text-[14px] mt-3">
                Id cancellation is made 48 hours before the tour date, 50%
                refund would be processed.
              </p>
              <p className="text-[#283143] text-[14px] mt-3">
                A refund would not be processed if a cancellation is made at the
                last moment, or one day before the tour.
              </p>
              <p className="text-[#283143] text-[14px] mt-3">
                Cancellation should be timely informed so that the compensation
                and other formalities can be managed properly.
              </p>

              <h1 className="text-xl mt-4">Refund Policy</h1>
              <p className="text-[#283143] text-[14px] mt-3">
                The refund would be processed within 10 business days.
              </p>
            </>
          )}

          <div className="flex justify-end   " onClick={() => offSet(!set)}>
            <button className="text-[#FAA200] lg:hidden ">
              {set == false ? <span> Read More</span> : <span> Read Less</span>}
            </button>
          </div>
        </div>
      </div>

      {/* .........policy destopview........ */}
      <>
        <div className=" hidden lg:flex    justify-center  mt-14 rounded-3xl">
          <div className=" bg-[#F6E0BE] px-10 py-10 rounded-2xl w-[92%]">
            <h1 className="text-xl mt-4">Confirmation Policy </h1>
            <p className="text-[#283143] text-[14px] mt-3">
              {" "}
              As soon as the payment is made, a confirmation email would be sent
              to your provided email id. The payment receipt will be attached
              with the mail.
            </p>

            <h1 className="text-xl mt-4">Payment Terms </h1>
            <p className="text-[#283143] text-[14px] mt-3">
              Payment can be made through UPI, Net-banking, Account Transfer,
              Credit & Debit cards.
            </p>
            <p className="text-[#283143] text-[14px] mt-3">
              Cash payment is not available.
            </p>
            <p className="text-[#283143] text-[14px] mt-3">
              100% payment is to be made 48 hours before the programme start
              date.
            </p>

            <h1 className="text-xl mt-4">Cancellation Policy</h1>
            <p className="text-[#283143] text-[14px] mt-3">
              If cancellation is made 72 hours before the tour date, a 100%
              refund would be processed.
            </p>
            <p className="text-[#283143] text-[14px] mt-3">
              Id cancellation is made 48 hours before the tour date, 50% refund
              would be processed.
            </p>
            <p className="text-[#283143] text-[14px] mt-3">
              A refund would not be processed if a cancellation is made at the
              last moment, or one day before the tour.
            </p>
            <p className="text-[#283143] text-[14px] mt-3">
              Cancellation should be timely informed so that the compensation
              and other formalities can be managed properly.
            </p>

            <h1 className="text-xl mt-4">Refund Policy</h1>
            <p className="text-[#283143] text-[14px] mt-3">
              The refund would be processed within 10 business days.
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Crousel;
