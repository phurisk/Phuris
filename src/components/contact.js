import React from "react";

const Contact = () => {
  return (
    
      <div className="container mx-auto px-4 text-center font-rubik">
        <h2 className="contact text-4xl font-bold text-[#ff6150]">Contact</h2>
        <p className="text-xl mb-10 text-gray-400 ">
          Get in touch with us to get the ball rolling
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <a
            href="mailto:phurissor@gmail.com"
            className="flex items-center justify-center w-full p-4 text-gray-400 hover:text-[#ff6150] rounded-md"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email
          </a>
          <a
            href="tel:+66824895029"
            className="flex items-center justify-center w-full p-4 text-gray-400 hover:text-[#ff6150] rounded-md"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Phone
          </a>
          // <a
          //   href="https://www.facebook.com/PhurisKR"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="flex items-center justify-center w-full p-4 text-gray-400 hover:text-[#ff6150] rounded-md"
          // >
          //   <svg
          //     fill="none"
          //     stroke="currentColor"
          //     strokeWidth="1.5"
          //     viewBox="0 0 24 24"
          //     xmlns="http://www.w3.org/2000/svg"
          //     aria-hidden="true"
          //     className="w-6 h-6 mr-2"
          //   >
          //     <path
          //       strokeLinecap="round"
          //       strokeLinejoin="round"
          //       d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          //     />
          //   </svg>
          //   Facebook
          // </a>
          {/* Other contact options */}
        </div>
      </div>
  
  );
};

export default Contact;
