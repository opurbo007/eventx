import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className=" bg-zinc-100 w-full">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <p className=" pt-36 tracking-wide">UNPARALLELED, STRESS-FREE</p>
            <h2 className="text-4xl tracking-wide font-bold mb-7 mt-5">
              EVENT PLANNING & DESIGN
            </h2>
            <p className="text-sm pb-20 mx-20 text-gray-500">
              The Infinity experience is unlike any other.
              <br /> Our full-service event planning and design team will guide
              you every step of the way, ensuring a stress-free experience from
              start to finish.
              <br />
              With us, customization is guaranteed. From the very beginning, we
              will create a custom proposal tailored to your specific wants and
              needs. You'll be paired with an Infinity Event Team who will
              collaborate with you to bring your vision to life. We will team up
              with some of the best vendors in Nashville and take care of all
              the details like meeting scheduling, delivery dates, payments,
              day-of setup, and more. When it’s showtime, our staff will work
              tirelessly to guarantee your event is effortless and
              unforgettable.
            </p>

            <button className="bg-black hover:bg-gray-100 text-white hover:text-black font-semibold py-3 px-10 mb-20 border border-gray-400 ">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
