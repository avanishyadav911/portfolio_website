import React from 'react';
import { motion } from 'framer-motion';
import proj9 from '../assets/images/proj9.png';
import proj11 from '../assets/images/proj11.png';
import proj12 from '../assets/images/proj12.png';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: "Chatify",
    desc: "A real-time chat application built using Socket.io for real-time communication.",
    devstack: "MongoDB, Express, React, Nodejs",
    link: "https://github.com/avanishyadav911/ChatApp",
    git: "https://github.com/example",
    src: proj9,
    type: "fullstack",
  },
  {
    title: "Real Estate Website",
    desc: "Showcase your work and skills in a beautifully crafted portfolio.",
    devstack: "React, TailwindCSS",
    link: "https://github.com/avanishyadav911/Real-Estate-App",
    git: "https://github.com/avanishyadav911/Real-Estate-App",
    src: proj11,
    type: "frontend",
  },
  {
    title: "PARMARTH - IET Lucknow Website",
    desc: "Redesigned and maintained the website using React, enhancing user experience with new features and providing technical support to resolve issues",
    devstack: "React, Nodejs, Prisma",
    link: "https://parmarth-client.onrender.com/",
    git: "https://parmarth-client.onrender.com/",
    src: proj12,
    type: "fullstack",
  },
];

export const Portfolio = () => {
  return (
    <div className="text-white py-24 lg:py-16" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.desc}</p>
                <p className="text-white font-medium mb-2">
                  Stack: <span className="text-emerald-300">{project.devstack}</span>
                </p>
                <p className="text-white font-medium mb-4 capitalize">
                  Type: <span className="text-emerald-300">{project.type}</span>
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-blue-300 transition-colors text-xl"
                  >
                    <HiOutlineExternalLink />
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
