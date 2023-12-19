import React from "react";

const Work = () => {
  return (
   
      <div className="container mx-auto px-4 text-center pb-20">
        <h2 className="work text-4xl font-bold text-[#f68b09] font-rubik">Work</h2>
        <p className="mb-10 text-gray-400 text-xl">
          Some of the projects I have built.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 ">
          <a
            href="https://easy-travel-pink.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl font-bold block bg-[#05172e] p-4 rounded-md transition duration-300 ease-in-out hover:bg-[#311c02] hover:shadow-md"
          >
            <h3 className="font-rubik">
              Easy Travel
            </h3>
            <p className="text-base text-gray-400 mt-2 font-thin ">
              It is a prototype website that deals with booking airline tickets and various rooms.
            </p>
            <ul className="text-sm text-gray-400 mt-4 ">
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
            </ul>
          </a>
        </div>
      </div>
   
  );
};

export default Work;
