import React, { useState } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full border-2 overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden h-[68vh]  rounded-lg">
        {/* Render each slide */}
        {[0, 1, 2].map((slideIndex) => (
          <div
            key={slideIndex}
            className={`${
              slideIndex === activeSlide ? "" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={slideIndex === activeSlide ? "active" : ""}
          >
            <img
              src={`/img/${slideIndex + 8}.jpg`}
              className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${slideIndex + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none border-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        {/* Previous button SVG */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none border-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
        {/* Next button SVG */}
      </button>
    </div>
  );
};

export default Hero;
