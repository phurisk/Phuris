// import React from "react";
// import Header from "./components/Header.js";
// import About from "./components/about.js";
// import Skills from "./components/skills.js";
// import Work from "./components/work.js";
// import Contact from "./components/contact.js";
// import Footer from './components/Footer.js';
// import "tailwindcss/tailwind.css";
// import './App.css';


// function App() {
//   return (
//     <div style={{ background: '#020c17', color: 'white' }}>
//       <Header />
    
//       <main className="container mx-auto  py-16 ">
//       <main className="container mx-auto px-4 py-16 bg-[#04192f] rounded-xl ">
//         <About />
//         <Skills />
//         <Work />
//         <Contact />
        
//       </main>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Header from "./components/Header.js";
import About from "./components/about.js";
import Skills from "./components/skills.js";
import Work from "./components/work.js";
import Contact from "./components/contact.js";
import Footer from './components/Footer.js';
import "tailwindcss/tailwind.css";
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ background: "#020c17", color: "white" }}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto py-16 ">
        <main
          className={`container mx-auto px-4 py-16 ${
            isDarkMode ? "bg-[#04192f] rounded-xl" : "bg-white rounded-xl"
          }`}
        >
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

