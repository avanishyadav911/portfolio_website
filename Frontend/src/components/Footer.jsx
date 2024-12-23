import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold opacity-80 tracking-wider">Contact Me!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="md:flex justify-center">
            <form className="space-y-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <textarea 
                placeholder="Your message" 
                rows={5} 
                className="w-full px-3 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="md:flex justify-center items-start space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#updates" className="hover:text-white transition-colors duration-300">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/avanishyadav911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/avanish-yadav/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/_Avanishyadav" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:avanish9113@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Avanish Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
