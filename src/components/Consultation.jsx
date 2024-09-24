import axios from "axios";
import React, { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Consultation({ setClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    gender: "",
    type: "",
    slots: "",
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
      const response = await axios.post("https://shivaay-shakti-backend-vm3k.onrender.com/send-email", formData);
      
      if (response.status === 200) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          age: "",
          gender: "",
          type: "",
          slots: "",
        });
        closePopup();
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      alert("An error occurred while sending your message.");
    }
  };
  

  const renderPersonalSlotOptions = () => {
    const personalSlots = [];
    for (let hour = 5; hour < 21; hour++) {
      let startHour = hour < 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`;
      let endHour = hour + 1 < 12 ? `${hour + 1}:00 AM` : `${hour + 1 - 12}:00 PM`;
      if (hour === 11) endHour = "12:00 PM";
      personalSlots.push(
        <option key={hour} value={`${startHour} to ${endHour}`}>
          {startHour} to {endHour}
        </option>
      );
    }
    return personalSlots;
  };

  const renderSlotOptions = () => {
    if (formData.type === "Personal") {
      return renderPersonalSlotOptions();
    } else if (formData.type === "Group") {
      return [
        { label: "5:30 AM to 6:30 AM", value: "5:30 AM to 6:30 AM" },
        { label: "7:00 AM to 8:00 AM", value: "7:00 AM to 8:00 AM" },
        { label: "8:00 AM to 9:00 AM", value: "8:00 AM to 9:00 AM" },
        { label: "5:00 PM to 6:00 PM", value: "5:00 PM to 6:00 PM" },
        { label: "6:00 PM to 7:00 PM", value: "6:00 PM to 7:00 PM" },
      ].map((slot) => (
        <option key={slot.value} value={slot.value}>
          {slot.label}
        </option>
      ));
    }

    return null;
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 p-4 bg-opacity-50 ">
        <div className="max-h-screen overflow-y-auto bg-white rounded-lg md:p-6 p-4 h-auto w-full md:max-w-[45rem] relative lg:mx-8">
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
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="type"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="Personal">Personal</option>
                  <option value="Group">Group</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="slots"
                  className="block font-semibold text-black text-[1rem]"
                >
                  Select Slot
                </label>
                <select
                  name="slots"
                  id="slots"
                  value={formData.slots}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-black placeholder-[#02618f]"
                >
                  <option value="" disabled>
                    Select Slot
                  </option>
                  {renderSlotOptions()}
                </select>
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
