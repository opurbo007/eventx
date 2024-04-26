import React from "react";

const Bookings = () => {
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <form className="py-4 px-6" action="" method="POST">
          <div className="mb-10">
            <input
              className=" appearance-none border-b  text-left border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-10">
            <input
              className="border-b  text-left border-black appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-10">
            <input
              className="border-b  text-left border-black appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-10">
            <input
              className="border-b  text-left border-black appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="Select a date"
            />
          </div>
          <div className="mb-10">
            <input
              className="border-b  text-left border-black appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              placeholder="Select a time"
            />
          </div>
          <div className="mb-10">
            <select
              className="border-b  text-left border-black appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
            >
              <option value="">Select a service</option>
              <option value="haircut">Weeding</option>
              <option value="coloring">Meeting</option>
              <option value="styling">Concert</option>
            </select>
          </div>
          <div className="mb-10">
            <textarea
              className="border-b  text-left border-black appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
              id="message"
              rows="4"
              placeholder="Enter any additional information"
            ></textarea>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-100 hover:text-black hover:border-black focus:outline-none focus:shadow-outline"
              type="submit"
            >
              s Book Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Bookings;
