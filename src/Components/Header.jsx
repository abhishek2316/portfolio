import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full ">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-gray-300 font-semibold text-xl uppercase hover:text-white">
          Abhishek Kumar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/#work-experience" onClick={scrollToExperience} className="text-gray-300 hover:text-white">
            Work Experience
          </a>
          <Link to="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <a 
            href="/src/assets/pdf/Abhishek_kumar.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white"
          >
            Resume
          </a>
          <a href="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="/#work-experience" className="text-gray-300 hover:text-white">
            Work Experience
          </a>
          <Link to="/projects" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <a 
            href="/src/assets/pdf/Abhishek_kumar.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white"
          >
            Resume
          </a>
          <a href="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
