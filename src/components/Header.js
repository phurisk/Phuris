// import React, { useState } from "react";
// import { Link } from "react-scroll";

// const Header = () => {
  

//   return (
    
//     <header className="bg-gray-800 py-4 px-8">
//       <nav className="flex items-center justify-between">
//         <div className="flex items-center">
//           <Link
//             activeClass="text-yellow-400"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <span className="text-white text-2xl font-bold">Phuris</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link
//             activeClass="text-yellow-400"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             About
//           </Link>
//           <Link
//             activeClass="text-yellow-400"
//             to="work"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Work
//           </Link>
//           <Link
//             activeClass="text-yellow-400"
//             to="testimonials"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Contact
//           </Link>
//           <a
//             href="https://drive.google.com/file/d/151Z47917h6Q005Y7536316574q17838/view?usp=sharing"
//             target="_blank"
//             rel="noreferrer"
//             className="bg-blue-400 hover:bg-blue-300 text-gray-900 px-4 py-2 rounded-md"
//           >
          
//             Download CV
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link } from "react-scroll";



const Header = () => {
  return (
    <header  className="py-5 px- rounded-xl   bg-[#04192f] mr-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            activeClass="text-yellow-400"
            to="*"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="text-white text-4xl font-bold font-rubik ml-4">Phuris</span>
          </Link>
        </div>
        <div className="flex items-center space-x-7 ">
          <Link
            activeClass="text-yellow-400"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="font-rubik hover:text-[#54d2d2] text-xl">About</button>
          </Link>
          <Link
            activeClass="text-yellow-400"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="font-rubik hover:text-[#ffcb00] text-xl">Skills</button>
          </Link>
          <Link
            activeClass="text-yellow-400"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="font-rubik hover:text-[#f68b09] text-xl">Work</button>
          </Link>
          <Link
            activeClass="text-yellow-400"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="font-rubik hover:text-[#ff6150] text-xl">Contact</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/151Z47917h6Q005Y7536316574q17838/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className=" text-xl bg-[#ffffff] hover:bg-[#bfc8d3] text-[#272643] px-3 py-1.5 rounded-lg font-rubik"
          >
            Download CV
          </a>
          
        </div>
      </nav>
    </header>
    
  );
};

export default Header;









