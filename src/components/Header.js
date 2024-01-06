

// import React, { useState } from "react";
// import { Link } from "react-scroll";



// const Header = () => {
//   return (
//     <header  className="py-5 px- rounded-xl   bg-[#04192f] mr-4">
//       <nav className="flex items-center justify-between">
//         <div className="flex items-center">
//           <Link
//             activeClass="text-yellow-400"
//             to="*"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <span className="text-white text-4xl font-bold font-rubik ml-4">Phuris</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-7 ">
//           <Link
//             activeClass="text-yellow-400"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <button className="font-rubik hover:text-[#54d2d2] text-xl">About</button>
//           </Link>
//           <Link
//             activeClass="text-yellow-400"
//             to="skills"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <button className="font-rubik hover:text-[#ffcb00] text-xl">Skills</button>
//           </Link>
          // <Link
          //   activeClass="text-yellow-400"
          //   to="work"
          //   spy={true}
          //   smooth={true}
          //   offset={-70}
          //   duration={500}
          // >
          //   <button className="font-rubik hover:text-[#f68b09] text-xl">Work</button>
          // </Link>
          // <Link
          //   activeClass="text-yellow-400"
          //   to="contact"
          //   spy={true}
          //   smooth={true}
          //   offset={-70}
          //   duration={500}
          // >
          //   <button className="font-rubik hover:text-[#ff6150] text-xl">Contact</button>
          // </Link>
//           <a
//             href="https://drive.google.com/uc?export=download&id=1YLrQJcXDGusH-6HH7wk5k2RbEa6ygYUW"
//             target="_blank"
//             rel="noreferrer"
//             className=" text-xl bg-[#ffffff] hover:bg-[#bfc8d3] text-[#272643] px-3 py-1.5 rounded-lg font-rubik"
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="py-5  rounded-xl bg-[#04192f]  ">
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
        <div className="hidden md:flex items-center space-x-7 mr-4">
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
            href="https://drive.google.com/uc?export=download&id=1YLrQJcXDGusH-6HH7wk5k2RbEa6ygYUW"
            target="_blank"
            rel="noreferrer"
            className=" text-xl bg-[#ffffff] hover:bg-[#bfc8d3] text-[#272643] px-3 py-1.5 rounded-lg font-rubik"
          >
            Download CV
          </a>
        </div>
        {/* Responsive Toggle Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Responsive Nav Menu */}
        {isNavOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-[#04192f] p-4 space-y-4  ">
            <ul>
              <li className="mb-1">
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
              </li>
              <li className="mb-1">
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
              </li>
              <li className="mb-1">
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
              </li>
              <li className="mb-3">
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
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/151Z47917h6Q005Y7536316574q17838/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-xl bg-[#ffffff] hover:bg-[#bfc8d3] text-[#272643] px-3 py-1.5 rounded-lg font-rubik"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;







