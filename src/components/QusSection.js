import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const QusSection = () => {
  return (
    <>
      <section className="bg-white py-12 mx-25">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="p-6 rounded-lg flex flex-col items-center mx-4 mb-8 lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-center">
                WANT TO CONTACT US?
              </h3>
              <h2 className="text-base font-semibold mb-4 text-center">
                SEND US A MESSAGE
              </h2>
              <p className="text-gray-700 text-center">
                Whether you are planning a wedding, a corporate meeting or a
                social gathering, the diverse scope of Infinity Hospitality
                Group allows for the creation of unique events for all
                occasions.
              </p>
              <a
                href="https://example.com"
                className="text-gray-700 border border-gray-600 hover:bg-gray-500 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mt-4"
              >
                <HiOutlineArrowRight className="w-5 h-5" />
                <span className="sr-only">Icon description</span>
              </a>
            </div>
            <div className="p-6 rounded-lg flex flex-col items-center mx-4 mb-8 lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-center">
                FROM THE BLOG
              </h3>
              <h2 className="text-base font-semibold mb-4 text-center">
                LATEST BLOG ARTICLES
              </h2>
              <p className="text-gray-700 text-center">
                Take a look at our Infinity Blog for advice from our Event
                Specialists, real weddings, and the latest trends in Nashville
                events, DIY weddings, event planning, and more!
              </p>
              <a
                href="https://example.com"
                className="text-gray-700 border border-gray-600 hover:bg-gray-500 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mt-4"
              >
                <HiOutlineArrowRight className="w-5 h-5" />
                <span className="sr-only">Icon description</span>
              </a>
            </div>
            <div className="p-6 rounded-lg flex flex-col items-center mx-4 mb-8 lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-center">
                STAY IN THE LOOP
              </h3>
              <h4 className="text-base font-semibold mb-4 text-center">
                SIGN UP FOR OUR NEWSLETTER
              </h4>
              <p className="text-gray-700 text-center">
                Sign up for our Infinity Newsletter to receive wedding
                inspiration, helpful tips and tricks, see the hottest trends in
                Nashville weddings, and more delivered
              </p>
              <a
                href="https://example.com"
                className="text-gray-700 border border-gray-600 hover:bg-gray-500 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mt-4"
              >
                <HiOutlineArrowRight className="w-5 h-5" />
                <span className="sr-only">Icon description</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QusSection;
