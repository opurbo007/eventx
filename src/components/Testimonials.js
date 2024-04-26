import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "The staff was so accommodating and friendly. I felt like they were having a good time with us which was just great.",
    author: "Micheal Gough",
  },
  {
    id: 2,
    content:
      "Infinity was able to give my husband and I the wedding of our dreams! ",
    author: "John Smith",
  },
  {
    id: 3,
    content:
      "The service and attention to detail was impeccable. Thanks for making my dream wedding come true!",
    author: "Jane Doe",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-100 w-full pb-15">
      <div className="max-w-4xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <p className="pt-10 tracking-wide">TESTIMONIALS FROM OUR</p>
        <h2 className="text-4xl tracking-wide font-bold mb-7 mt-5">
          HAPPY CLIENTS
        </h2>
        <figure className="min-w-screen-xl mx-auto overflow-hidden">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="transition-transform duration-500 ease-in-out transform translate-x-[calc(-100%*var(--testimonial-index))]">
            <p className="text-sm font-sm text-gray-900">
              {testimonials[currentTestimonial].content}
            </p>
          </blockquote>
          <figcaption className="mt-6 space-x-3">
            <div className="text-center font-medium text-gray-900">
              {testimonials[currentTestimonial].author}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
