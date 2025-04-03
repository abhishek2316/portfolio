import React from "react";

function Experience() {
  return (
    <section id="experience" className="p-8 text-gray-300">
      <h2 className="text-white text-2xl font-bold mb-4">WORK EXPERIENCE</h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-400 mb-1">2023 - 2025</p>
        <h3 className="text-white text-lg font-bold">
          Frontend Software Developer
        </h3>
        <p className="text-gray-400 text-sm">Ocean ThinkIT • Full-time</p>

        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.
        </p>
      </div>
    </section>
  );
}

export default Experience;
