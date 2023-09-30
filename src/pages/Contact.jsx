import React from "react";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DeskNavbar from "../components/DeskNavbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="overflow-hidden">
          <div className="bg-[url('https://res.cloudinary.com/eduminatti-com/image/upload/v1687167469/Untitled_design_16_1.png')] w-full bg-no-repeat bg-cover">
            <Navbar />
            {/* <Filter></Filter> */}
            <h1 className="lg:text-[39px] text-center text-[20px] lg:pt-40 lg:pb-40 pb-10  pt-4  text-white">
              CONTACT US <br />{" "}
              <span className="lg:text-[25px] text-[16px]">
                Have any questions? We’d love to hear from you.
              </span>
            </h1>
          </div>
        </div>

        <h1 className="text-center text-[14px] lg:text-[15px] lg:px-20 lg:pt-24 px-8 pt-10">
          We value your feedback, questions, and concerns. Our team is here to
          assist you in any way we can. Please feel free to reach out to us
          using the contact information provided below, and we will respond to
          you as soon as possible.
        </h1>

        <div className="flex flex-wrap justify-around  pt-10 gap-5  items-center">
          <div className="flex flex-col justify-center items-center gap-8 lg:pt-20 ">
            <div className="w-[300px] lg:w-[600px]">
              <h1 className="text-[#FAA200] ">Customer Support:</h1>
              <p className="">
                Engage in real-time yoga sessions led by knowledgeable
                instructors who provide personalized guidance and corrections,
                ensuring that you get the most out of your practice.
              </p>
            </div>

            <div className="w-[300px] lg:w-[600px]">
              <h1 className="text-[#FAA200]"> Media and Press Inquiries: </h1>
              <p className="s">
                For media inquiries, interviews, or press-related matters,
                please contact our media relations team at media@yogawebapp.com.
                We would be happy to provide you with any information or
                resources you may need.
              </p>
            </div>

            <div className="w-[300px] lg:w-[600px]">
              <h1 className="text-[#FAA200]"> Feedback and Suggestions: </h1>
              <p className="s">
                We greatly value your feedback and suggestions as they help us
                improve our web app and provide a better experience for our
                users. If you have any ideas, suggestions, or feedback, please
                email us at feedback@yogawebapp.com. We appreciate your input
                and strive to continually enhance our services based on user
                feedback.
              </p>
            </div>

            <div className="w-[300px] lg:w-[600px]">
              <h1 className="text-[#FAA200]"> Social Media: </h1>
              <p className="">
                Stay connected with us on social media for updates, inspiration,
                and community engagement.
              </p>
            </div>

            <div className="flex gap-2">
              <img
                className="w-16 h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt=""
              />
              <img
                className="w-16 h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                alt=""
              />
              <img
                className="w-16 h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
                alt=""
              />
            </div>
            <h1 className="mt-4 lg:px-20  px-8">
              Follow us to join the conversation and be a part of our growing
              online community.
            </h1>
          </div>

          <div className="lg:w-[450px] lg:h-[500px] flex flex-col sm:justify-center items-center w-[300px] h-[500px] bg-[#F2F2F2] p-4">
            <h1 className="text-black lg:text-[13px] lg:px-5  text-left text-[13px] lg:-mt-20 pt-8">
              For any inquiries regarding our web app, technical support, or
              general questions,
            </h1>
            <div className="flex flex-col lg:gap-7 gap-5">
              <div className="flex items-center gap-2 pt-8 text-[13px]">
                <img
                  className="w-8 h-8"
                  src="https://w7.pngwing.com/pngs/218/354/png-transparent-computer-icons-email-mail-icon-miscellaneous-angle-rectangle.png"
                  alt=""
                />
                <h1>
                  Email us <br /> <span>at support@yogawebapp.com</span>{" "}
                </h1>
              </div>

              <div className="flex items-center gap-4 text-[13px]">
                <img
                  className="w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/512/46/46854.png"
                  alt=""
                />
                <h1>
                  Call our customer support line at <br />{" "}
                  <span> +1 (123) 456-7890</span>
                </h1>
              </div>

              <div className="flex items-center gap-3 text-[13px]">
                <img
                  className="w-6 h-6"
                  src="https://img.freepik.com/free-icon/placeholder_318-903608.jpg"
                  alt=""
                />
                <h1>
                  Address <br /> Yoga Web App Company Name <br /> 123 Yoga Way
                  City, State Country Postal Code
                </h1>
              </div>

              <div className="flex items-center gap-8 text-[13px]">
                <span></span>
                <h1 className="px-4">
                  Our dedicated support team is available to assist you during
                  our business hours, Monday through Friday, from 9:00 AM to
                  6:00 PM (IST).
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
