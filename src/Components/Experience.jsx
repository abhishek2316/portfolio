import React from "react";

function Experience() {
  return (
    <section className="flex flex-col w-full p-8 mt-24 text-gray-300">
      <h2 id="experience" className="text-xl font-bold text-white uppercase mb-6">
        WORK EXPERIENCE
      </h2>

      <div className="bg-gray-800 rounded-lg hover:bg-gray-700 transition p-8">
        <div className="flex w-full gap-10">
          <div className="w-1/5">
            <p className="text-gray-300 whitespace-nowrap max-sm:hidden text-xl">2023 - Present</p>
          </div>

          <div className="flex flex-col w-4/5">
            <p className="text-white text-xl font-bold">Programmer</p>
            <p className="text-gray-400 mb-4">
              Inflibnet Centre
              <span className="text-gray-400 whitespace-nowrap hidden max-sm:inline-block ml-2 text-xl">
                • (2023 - Present)
              </span>
            </p>
            <p className="text-gray-300">
              For the past 1.5 years, I have been working in the organization, 
              where I developed an analytical dashboard using Flask 
              and contributed to a Spring Boot web application for 
              managing INFLIBNET services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;