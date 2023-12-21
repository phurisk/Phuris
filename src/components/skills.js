import React from "react";

const Skills = () => {
  return (
    
      <div className="container mx-auto px-4 text-center font-rubik pb-20">
        <h2 className="skills text-4xl  font-bold text-[#ffcb00]">Skills</h2>
        <p className="text-lg mb-10 text-gray-400 text-xl">
          The skills I have learned at university and from other sources.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-8 text-xl">
          {["Microsoft SQL Server", "Statistical Analysis", "Data Analysis", "Python", "Rstudio", "Knime", "React.js"].map(skill => (
            <div key={skill} className="flex flex-col items-center ">
              <h3 className="hover:text-[#ffcb00] transition duration-300 ease-in-out">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Skills;
