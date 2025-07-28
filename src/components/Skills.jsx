import React from 'react';
// Importing a wide range of icons for various technologies
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';

/**
 * SkillBar Component
 * A reusable component to display a skill with an icon and a proficiency bar.
 */
const SkillBar = ({ icon, name, level }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-3">
        <div className="text-green-400 text-2xl">{icon}</div>
        <span className="font-semibold text-white">{name}</span>
      </div>
      <span className="text-sm font-medium text-green-400">{level}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-green-400 to-teal-500 h-2.5 rounded-full" 
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

/**
 * Skills Component
 * This component displays categorized technical skills.
 */
const Skills = () => {
  // You can customize your skills and proficiency levels here
  const frontendSkills = [
    { icon: <FaHtml5 />, name: 'HTML5', level: '95%' },
    { icon: <FaCss3Alt />, name: 'CSS3', level: '90%' },
    { icon: <SiJavascript />, name: 'JavaScript (ES6+)', level: '90%' },
    { icon: <FaReact />, name: 'React', level: '95%' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: '88%' },
    { icon: <SiVite />, name: 'Vite', level: '90%' },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, name: 'Node.js', level: '85%' },
    { icon: <SiExpress />, name: 'Express.js', level: '80%' },
    { icon: <SiMongodb />, name: 'MongoDB', level: '80%' },
  ];
  
  const tools = [
    { icon: <FaGitAlt />, name: 'Git & GitHub', level: '75%' },
    { icon: <SiPostman />, name: 'Postman', level: '80%' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-24 px-6 animate-fade-in">
      <div className="container mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Technical <span className="text-green-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-16 rounded"></div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-center text-green-400 mb-6">Frontend</h3>
            {frontendSkills.map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-center text-green-400 mb-6">Backend</h3>
            {backendSkills.map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-center text-green-400 mb-6">Tools</h3>
            {tools.map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
