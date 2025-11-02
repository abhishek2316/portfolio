import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Header from './Header';
import project1 from '../assets/images/demo.jpg';
import project2 from '../assets/images/java-debug.gif';
import project3 from '../assets/images/timecomplexity.png';
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    title: "Email - Ext",
    description: "A browser email extension that connects to a Spring Boot backend using the Gemini API for enhanced email features.",
    image: project1,
    technologies: ["Gemini API", "Spring Boot", "JavaScript", "React"],
    githubLink: "https://github.com/abhishek2316/email-ext",
    // liveLink: "https://email-ext-demo.com" 
  },
  {
    id: 2,
    title: "git-complexity-analyzer",
    description: "A tool to analyze the complexity of Git repositories.",
    image: project2,
    // image: "https://via.placeholder.com/600x400/1a1f26/ffffff?text=Project+2",
    technologies: ["Spring Boot", "React", "Tailwind"],
    githubLink: "https://github.com/abhishek2316/git-complexity-analyzer",
    // liveLink: "https://project2-demo.com"
  },
  {
    id: 3,
    title: "code-complexity-calculator",
    description: "A web application that calculates code complexity metrics for various programming languages.",
    image: project3,
    // image: "https://via.placeholder.com/600x400/1a1f26/ffffff?text=Project+3",
    technologies: ["TypeScript"],
    githubLink: "https://github.com/abhishek2316/code-complexity-calculator",
    // liveLink: "https://project3-demo.com"
  }
];


const ProjectCard = ({ project }) => {
  // Check if links exist
  const hasGithubLink = Boolean(project.githubLink);
  const hasLiveLink = Boolean(project.liveLink);
  const hasAnyLink = hasGithubLink || hasLiveLink;

  return (
    <article className="bg-white dark:bg-[#161b22] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      
      {/* Project Image */}
      <div className="relative overflow-hidden h-64 bg-gray-200 dark:bg-[#0d1117]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        
        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={`${project.id}-${tech}-${index}`}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Automatically adjusts based on available links */}
        {hasAnyLink && (
          <div className="flex gap-4">
            
            {/* GitHub Repository Button - Shows only if githubLink exists */}
            {hasGithubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 ${
                  hasLiveLink ? 'flex-1' : 'flex-1'
                }`}
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            )}
            
            {/* Live View Button - Shows only if liveLink exists */}
            {hasLiveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                aria-label={`View ${project.title} live demo`}
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Live View</span>
              </a>
            )}
            
          </div>
        )}
      </div>
    </article>
  );
};

/**
 * ============================================
 * PROJECTS PAGE COMPONENT
 * ============================================
 * Main page component that displays all projects
 */
const Projects = () => {
  return (
    <>
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main className="min-h-screen bg-white dark:bg-[#0c0f11] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Below are some of my recent projects that demonstrate my work and experience in software development.
            </p>
          </header>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>

          {/* Back to Home Button */}
          <footer className="text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </footer>
          
        </div>
      </main>
    </>
  );
};

export default Projects;