import React from "react";
import { Briefcase, Calendar, MapPin, Code, Database, Server } from "lucide-react";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Programmer",
      company: "Inflibnet Centre",
      location: "India",
      period: "2023 - Present",
      duration: "1.5 years",
      description: "Working on enterprise-level applications and analytical solutions for managing INFLIBNET services.",
      achievements: [
        "Developed an analytical dashboard using Flask to visualize and monitor key metrics",
        "Contributed to a Spring Boot web application for managing INFLIBNET services",
        "Implemented data-driven solutions to improve service management efficiency"
      ],
      technologies: ["Flask", "Spring Boot", "Python", "Java", "Data Analytics"]
    }
  ];

  return (
    <section className="flex flex-col w-full px-4 sm:px-8 lg:px-16 py-16 mt-12 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Work Experience
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-3 h-3 bg-blue-500 rounded-full -translate-x-[5px] shadow-lg shadow-blue-500/50 hidden md:block"></div>

              {/* Experience Card */}
              <div className="md:ml-12 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden group">
                {/* Header Section */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-gray-800/80 to-gray-800/40">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <span className="text-lg font-semibold text-blue-400">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700/50">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{exp.period}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-900/50 text-blue-400 rounded-lg text-sm font-medium border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-900 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add more experiences message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {/* Building experience one project at a time */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;