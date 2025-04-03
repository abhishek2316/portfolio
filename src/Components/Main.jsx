import React from "react";

function Main() {
  return (
    <section className="flex flex-col items-center gap-10 p-10 text-gray-300">
      {/* Top Section - Profile & Intro */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* Left - Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gradient bg-black p-1">
          <img
            src="/src/assets/images/test_img.png" // Replace with actual image path
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hey, I'm <span className="text-white">Abhishek</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            I'm a Software Engineer.
          </h2>

          {/* Open to work */}
          <div className="mt-3 inline-flex items-center gap-2 bg-green-800 text-white text-sm px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Open to work
          </div>

          {/* Location & Social Links */}
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-400 text-sm">
            <p className="flex items-center gap-1">
              <span>🏠</span> India
            </p>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-6b39b9215/"
              target="_blank"
              className="flex items-center gap-1 hover:text-white"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/abhishek2316/"
              target="_blank"
              className="flex items-center gap-1 hover:text-white"
            >
              🐱 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full max-w-4xl text-center">
        <h3 className="text-white text-2xl font-bold mb-4">Tech Stack</h3>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[{ name: "React", svg: "/src/assets/svg/react.svg" },
            { name: "JavaScript", svg: "/src/assets/svg/javascript.svg" },
            { name: "TypeScript", svg: "/src/assets/svg/typescript.svg" },
            { name: "Tailwind", svg: "/src/assets/svg/tailwindcss.svg" },
            { name: "HTML", svg: "/src/assets/svg/html5.svg" },
            { name: "CSS", svg: "/src/assets/svg/css.svg" },
            { name: "Spring", svg: "/src/assets/svg/spring-boot.svg" },
            { name: "Flask", svg: "/src/assets/svg/flask_icon.svg" },
            { name: "Java", svg: "/src/assets/svg/java.svg" },
            { name: "Python", svg: "/src/assets/svg/python.svg" },
            { name: "Node JS", svg: "/src/assets/svg/node-js.svg" },
            { name: "Express Js", svg: "/src/assets/svg/express-js.svg" },
            { name: "Mongo DB", svg: "/src/assets/svg/mongodb-icon.svg" },
            { name: "PostgreSQL", svg: "/src/assets/svg/postgresql.svg" },
            { name: "MySQL", svg: "/src/assets/svg/mysql.svg" },
            { name: "ElasticSearch", svg: "/src/assets/svg/elasticsearch.svg" },
            { name: "Linux", svg: "/src/assets/svg/linux.svg" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <img
                src={tech.svg}
                alt={tech.name}
                className="w-12 h-12 object-contain" // Adjust the size as needed
              />
              <p className="mt-2 text-gray-300 text-sm font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
