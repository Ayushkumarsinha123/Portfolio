import React, { useState, useRef } from 'react';

const CodeSnippet = () => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    const maxRotation = 8; // degrees
    setStyle({
      transform: `rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateY(0deg) rotateX(0deg)",
      transition: "transform 0.5s ease-in-out",
    });
  };

  const codeString = `const coder = {
    name: 'Ayush Kumar Sinha',
    skills: ['React', 'Tailwind', 'Node.js', 'Vite'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 4
        );
    }
};`;

  return (
    <div
      ref={ref}
      className="bg-[#1e1e1e]/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl shadow-green-500/10 w-full max-w-lg font-mono"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Window Controls */}
      <div className="flex items-center p-4 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Code Content */}
      <pre className="text-sm text-gray-300 overflow-x-auto p-4">
        <code
          dangerouslySetInnerHTML={{
            __html: codeString
              .replace(
                /(const|let|var|function|return|this)/g,
                '<span class="text-purple-400">$1</span>'
              )
              .replace(
                /(true|false|null)/g,
                '<span class="text-blue-400">$1</span>'
              )
              .replace(/('.*?')/g, '<span class="text-green-400">$1</span>')
              .replace(/(\w+)(?=:)/g, '<span class="text-cyan-400">$1</span>')
              .replace(
                /(\w+)(?=\()/g,
                '<span class="text-yellow-300">$1</span>'
              ),
          }}
        />
      </pre>
    </div>
  );
};

export default CodeSnippet;