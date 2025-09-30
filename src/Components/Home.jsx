import React from "react";
import profileImage from '../assets/images/test_img.png';

import reactImg from '../assets/svg/react.svg';
import javascriptImg from '../assets/svg/javascript.svg';
import typescriptImg from '../assets/svg/typescript.svg';
import tailwindImg from '../assets/svg/tailwindcss.svg';
import htmlImg from '../assets/svg/html5.svg';
import cssImg from '../assets/svg/css.svg';
import springImg from '../assets/svg/spring-boot.svg';
import flaskImg from '../assets/svg/flask_icon.svg';
import javaImg from '../assets/svg/java.svg';
import pythonImg from '../assets/svg/python.svg';
import nodeImg from '../assets/svg/node-js.svg';
import expressImg from '../assets/svg/express-js.svg';
import mongoImg from '../assets/svg/mongodb-icon.svg';
import postgresqlImg from '../assets/svg/postgresql.svg';
import mysqlImg from '../assets/svg/mysql.svg';
import elasticsearchImg from '../assets/svg/elasticsearch.svg';
import linuxImg from '../assets/svg/linux.svg';

function Main() {
  return (
    <section className="flex flex-col items-center gap-10 p-10 text-gray-500 dark:text-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gradient bg-black p-1">
          <img
          src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hey, I'm <span className="text-black dark:text-white">Abhishek</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            I'm a Software Engineer.
          </h2>

          
          <div className="mt-3 inline-flex items-center gap-2 bg-green-800 text-white text-sm px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Open to work
          </div>

          
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

      
      <div className="w-full max-w-4xl text-center">
        <h3 className="text-white text-2xl font-bold mb-4 uppercase">Tech Stack</h3>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "React", svg: reactImg },
            { name: "JavaScript", svg: javascriptImg },
            { name: "TypeScript", svg: typescriptImg },
            { name: "Tailwind", svg: tailwindImg },
            { name: "HTML", svg: htmlImg },
            { name: "CSS", svg: cssImg },
            { name: "Spring", svg: springImg },
            { name: "Flask", svg: flaskImg },
            { name: "Java", svg: javaImg },
            { name: "Python", svg: pythonImg },
            { name: "Node JS", svg: nodeImg },
            { name: "Express Js", svg: expressImg },
            { name: "Mongo DB", svg: mongoImg },
            { name: "PostgreSQL", svg: postgresqlImg },
            { name: "MySQL", svg: mysqlImg },
            { name: "ElasticSearch", svg: elasticsearchImg },
            { name: "Linux", svg: linuxImg },
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
