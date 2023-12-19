import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400">Experience</h2>
        <p className="text-lg text-gray-400">
          A quick summary of my most recent experiences.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-xl font-bold text-white">
              Sr. Frontend Developer
            </h3>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm text-gray-400 mt-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-xl font-bold text-white">
              Team Leader
            </h3>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm text-gray-400 mt-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-xl font-bold text-white">
              Full Stack Developer
            </h3>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="text-sm text-gray-400 mt-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;