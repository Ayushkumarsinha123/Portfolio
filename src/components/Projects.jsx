import React, { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectCard Component
 * A reusable card with a 3D tilt effect to showcase a single project.
 */
const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, githubUrl }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    const maxRotation = 10;
    setStyle({
      transform: `perspective(1000px) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-in-out'
    });
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-700 group"
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => <span key={tag} className="bg-green-500/20 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>)}
        </div>
        <div className="flex gap-4">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors"><FaExternalLinkAlt size={20} /></a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors"><FaGithub size={20} /></a>
        </div>
      </div>
    </div>
  );
};

/**
 * Projects Component
 * This component displays a grid of project cards.
 */
const Projects = () => {
  // You can customize your project data here
  const projectData = [
    {
      title: 'CodeDrona',
      description: 'Your AI Guru for DSA Enlightenment',
      tags: ['HTML', 'CSS', 'Javascript', 'Rest API'],
      imageUrl: '../src/assets/CodeDrona.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Ayushkumarsinha123/CodeDrona'
    },
    {
      title: 'Vytals',
      description: 'Nearby Hospitals Finder for OPD Registration',
      tags: ['React', 'Tailwind CSS', 'Vite','express.js', 'node.js', 'mongoDB'],
      imageUrl: '../src/assets/Vytals.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Ayushkumarsinha123/Vytals'
    },
    {
      title: 'Pokedex',
      description: 'This simple web app lets you search for any Pokémon.',
      tags: ['React', 'Tailwind CSS', 'API'],
      imageUrl: '../src/assets/Pokedex.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Ayushkumarsinha123/pokedex'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6 animate-fade-in">
      <div className="container mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-green-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-16 rounded"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
