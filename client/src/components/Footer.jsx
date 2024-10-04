import React from 'react';
import { Footer } from 'flowbite-react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const FooterCom = () => {
  return (
    <Footer container>
      <div className="w-full bg-blue-500 py-4">
        <div className="flex justify-between items-center px-6">
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/prashant-agrawal-aa7a55253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-white transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/PrashantAgrawal2107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://mern-estate-app-pk.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition duration-300"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
          <div className="text-yellow-500">
            &copy; {new Date().getFullYear()} Prashant Agrawal. All Rights Reserved.
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
