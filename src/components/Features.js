import React from "react";

const Features = () => {
  return (
    <>
      <section className="bg-white py-12 mx-25">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8">
            Our Feature Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Feature 1
              </h3>
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="/img/10.jpg"
                  alt="Feature 1"
                />
              </div>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dapibus odio a hendrerit aliquam. Mauris maximus euismod urna
                vitae ullamcorper.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Feature 1
              </h3>
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="/img/8.jpg"
                  alt="Feature 1"
                />
              </div>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dapibus odio a hendrerit aliquam. Mauris maximus euismod urna
                vitae ullamcorper.
              </p>
            </div>
            <div className=" p-6 rounded-lg ">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Feature 1
              </h3>
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="/img/7.jpg"
                  alt="Feature 1"
                />
              </div>

              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dapibus odio a hendrerit aliquam. Mauris maximus euismod urna
                vitae ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
