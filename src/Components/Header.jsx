import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import resume from '../assets/pdf/Abhishek_kumar.pdf'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, setDark } = useTheme();

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          className="text-gray-900 dark:text-gray-200 font-semibold text-xl uppercase hover:text-black dark:hover:text-white"
        >
          Abhishek Kumar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Projects
          </Link>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white dark:bg-gray-900">
          <Link
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
