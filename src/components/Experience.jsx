import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

/**
 * TimelineGraphic Component
 * A more complex and detailed SVG animation for the timeline.
 */
const TimelineGraphic = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 200 120" className="w-full max-w-xs">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#1a202c', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#2d3748', stopOpacity: 1}} />
        </linearGradient>
      </defs>

      {/* Background with floating particles */}
      <rect width="200" height="120" fill="#111827" />
      <circle cx="40" cy="30" r="1.5" fill="#4ade80" className="particle1" />
      <circle cx="160" cy="80" r="1" fill="#4ade80" className="particle2" />
      <circle cx="80" cy="90" r="1.2" fill="#60a5fa" className="particle3" />
      <circle cx="180" cy="20" r="0.8" fill="#60a5fa" className="particle1" />
      
      {/* Laptop Base */}
      <path d="M 10 100 H 190 L 200 105 H 0 Z" fill="#2d3748" />
      <path d="M 20 98 H 180" stroke="#4a5568" strokeWidth="1" />

      {/* Laptop Screen */}
      <rect x="20" y="10" width="160" height="90" rx="5" fill="url(#screenGradient)" stroke="#4b5563" strokeWidth="2" />
      <rect x="20" y="10" width="160" height="90" rx="5" fill="none" stroke="#38bdf8" strokeWidth="0.5" filter="url(#glow)" />

      {/* Animated Code Lines */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { opacity: 0; } }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .line1 { animation: typing 1s steps(20, end) 0.5s forwards; }
          .line2 { animation: typing 1.5s steps(30, end) 1.5s forwards; }
          .line3 { animation: typing 1.2s steps(25, end) 3s forwards; }
          .line4 { animation: typing 1.8s steps(35, end) 4.2s forwards; }
          .cursor { animation: blink 1s step-end infinite; }
          .particle1 { animation: float 6s ease-in-out infinite; }
          .particle2 { animation: float 8s ease-in-out infinite 1s; }
          .particle3 { animation: float 7s ease-in-out infinite 0.5s; }
        `}
      </style>
      <text y="25" fill="#a5b4fc" fontSize="6" fontFamily="monospace">
        <tspan x="30" className="line1" style={{ whiteSpace: 'pre' }}>// Initializing timeline...</tspan>
      </text>
      <text y="40" fill="#81e6d9" fontSize="6" fontFamily="monospace">
        <tspan x="30" className="line2" style={{ whiteSpace: 'pre' }}>status: "In Progress",</tspan>
      </text>
      <text y="55" fill="#f6ad55" fontSize="6" fontFamily="monospace">
        <tspan x="30" className="line3" style={{ whiteSpace: 'pre' }}>events: ["New Role"],</tspan>
      </text>
      <text y="70" fill="#c4b5fd" fontSize="6" fontFamily="monospace">
        <tspan x="30" className="line4" style={{ whiteSpace: 'pre' }}>version: "2.0.1"</tspan>
      </text>
      
      {/* Blinking Cursor */}
      <line x1="30" y1="80" x2="33" y2="80" stroke="#6ee7b7" strokeWidth="1.5" className="cursor" />
    </svg>
  </div>
);


/**
 * TimelineItem Component
 * The main container is now 'relative' and the circle is 'absolute' to ensure perfect centering.
 */
const TimelineItem = ({ date, title, company, description, isLeft }) => {
  const Card = () => (
    <div className={`bg-gray-800/50 border border-gray-700 rounded-lg shadow-xl px-6 py-4 hover:border-green-400 transition-all duration-300 ${isLeft ? 'text-right' : 'text-left'}`}>
      <p className="mb-2 text-sm text-green-400">{date}</p>
      <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
      <p className="mb-4 text-sm font-medium text-gray-300">{company}</p>
      <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
        {description}
      </p>
    </div>
  );

  return (
    <div className="mb-8 flex justify-between items-center w-full relative">
      {/* The circle is now positioned absolutely to guarantee it's in the center */}
      <div className="z-10 flex items-center bg-green-500 shadow-xl w-8 h-8 rounded-full absolute left-1/2 -translate-x-1/2">
        <h1 className="mx-auto font-semibold text-lg text-white">
          <FaBriefcase className="mx-auto" />
        </h1>
      </div>

      {/* Left side content */}
      <div className="w-5/12">
        {isLeft ? <Card /> : <TimelineGraphic />}
      </div>
      
      {/* Right side content */}
      <div className="w-5/12">
        {!isLeft ? <Card /> : <TimelineGraphic />}
      </div>
    </div>
  );
};


/**
 * Experience Component
 * This component displays the work experience timeline.
 */
const Experience = () => {
  const experiences = [
    {
      date: '2023 - Present',
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to create seamless user experiences.'
    },
    {
      date: '2021 - 2023',
      title: 'Junior Web Developer',
      company: 'Creative Agency LLC',
      description: 'Assisted in building websites for various clients, focusing on HTML, CSS, and JavaScript. Gained experience with version control (Git) and agile development methodologies.'
    },
    {
      date: '2020 - 2021',
      title: 'Web Development Intern',
      company: 'Startup Hub',
      description: 'Learned the fundamentals of web development in a fast-paced environment. Worked on bug fixes and small feature implementations on a live project.'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-24 px-6 animate-fade-in">
      <div className="container mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Work <span className="text-green-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-16 rounded"></div>

        <div className="relative wrap overflow-hidden">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
