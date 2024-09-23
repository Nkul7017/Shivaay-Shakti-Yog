import React, { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Consultation({ setClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    gender: "",
  });
  const form = useRef();

  const closePopup = () => {
    setClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://shaadi-vyah-backend.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          number: formData.number,
          age: formData.age,
          gender: formData.gender,
        }),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          age: "",
          gender: "",
        });
        closePopup();
      } else {
        const errorMessage = await response.text();
        alert(`Failed to send the message. Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 p-4 bg-opacity-50 ">
        <div className="max-h-screen overflow-y-auto bg-white rounded-lg md:p-6 p-4 h-auto w-full md:max-w-[45rem] relative  lg:mx-8">
          <button
            onClick={closePopup}
            className="absolute top-[1.5rem] right-[0.75rem] text-gray-500 hover:text-gray-800"
          >
            <RxCross2 size={20} />
          </button>

          <h2 className="text-[1.3rem] md:text-xl font-bold text-black flex justify-between pb-5 ">
            Book a Demo Class
          </h2>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value) && value.length <= 10) {
                      setFormData({ ...formData, number: value });
                    }
                  }}
                  maxLength={10}
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="h-[3rem] w-full sm:w-[14.125rem] button3 text-white py-2 rounded-md hover:bg-[#02618f70] transition-colors duration-300"
              >
                Book consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
