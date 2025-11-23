import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaStackOverflow,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import contactImg from "../assets/images/contact.png";
import Header from "./Header";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/abhishek2316",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/abhiishek23",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    id: 3,
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/abhiishek_23",
    color: "hover:text-yellow-600 dark:hover:text-yellow-400",
  },
  // {
  //   id: 4,
  //   name: "Stack Overflow",
  //   icon: FaStackOverflow,
  //   url: "https://stackoverflow.com/users/yourprofile",
  //   color: "hover:text-orange-600 dark:hover:text-orange-400",
  // },
];

const Contact = () => {
  return (
    <>
      <Header />
      <footer
        id="contact"
        className="w-full bg-white dark:bg-[#0c0f11] py-16 px-6 border-t border-gray-200 dark:border-gray-800 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Illustration + Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Illustration/Image */}
            {/* <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
                <div className="text-center p-8">
                  
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    <img src={contactImg} alt="Coding animation" />
                    <br />
                    <span className="text-xs">
                      (coding animation, workspace, etc.)
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl"></div>
            </div>
          </div> */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Image container - removed aspect-square and border */}
                <div className="w-full rounded-2xl overflow-hidden">
                  <img
                    src={contactImg}
                    alt="Coding workspace"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Decorative blur elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly chat. I'm always open to discussing new projects
                and ideas.
              </p>

              {/* Email Button */}
              <div className="mb-8">
                <a
                  href="mailto:abhiishek.dev@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg font-medium"
                >
                  <FaEnvelope className="text-xl" />
                  <span>abhiishek.dev@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start items-center gap-6">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200 transform hover:scale-110`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <IconComponent className="text-3xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
