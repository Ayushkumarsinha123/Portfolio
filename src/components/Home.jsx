import React, { useState, useRef } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import CodeSnippet from "./CodeSnippet"; // We import the CodeSnippet component

/**
 * Home Component
 * This is the main landing page (hero section). It does not include the
 * main background or the header, as those are handled by App.jsx.
 */
const Home = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/ayush-kumar-sinha-1592882a8/",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Ayushkumarsinha123",
    },
    { icon: <FaTwitter size={20} />, url: "https://x.com/AyushKumar55022" },
  ];

  const leftColumnRef = useRef(null);
  const [leftColumnStyle, setLeftColumnStyle] = useState({});

  const handleLeftColumnMouseMove = (e) => {
    if (!leftColumnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      leftColumnRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    const maxRotation = 6;
    setLeftColumnStyle({
      transform: `rotateY(${x * maxRotation}deg) rotateX(${
        -y * maxRotation
      }deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleLeftColumnMouseLeave = () => {
    setLeftColumnStyle({
      transform: "rotateY(0deg) rotateX(0deg)",
      transition: "transform 0.5s ease-in-out",
    });
  };

  return (
    <section className="flex items-center justify-center min-h-screen pt-20 px-6 animate-fade-in">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Hero Text & Actions */}
        <div
          className="flex justify-center items-center"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={leftColumnRef}
            style={leftColumnStyle}
            onMouseMove={handleLeftColumnMouseMove}
            onMouseLeave={handleLeftColumnMouseLeave}
            className="flex flex-col gap-6 items-start p-4"
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Konichiwa! <br />
              <span className="flex items-center gap-4">
                This is Ayush,
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWF5cXJmYTNoejUxcmFucWR4MWE1cTcxNXJyMHJ5YnZvY2RiMG8zMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11KzOet1ElBDz2/giphy.gif"
                  alt="Typing GIF"
                  className="w-24 h-24 rounded-md object-cover inline-block"
                />
              </span>
              I'm a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                Full-Stack Developer.
              </span>
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/ayush-kumar-sinha-1592882a8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold">
                  CONTACT ME 📞
                </button>
              </a>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300 font-semibold">
                GET RESUME 📄
              </button>
            </div>
          </div>
        </div>
        {/* Right Column: Code Snippet */}
        <div
          className="hidden md:flex justify-center items-center"
          style={{ perspective: "1000px" }}
        >
          <CodeSnippet />
        </div>
      </div>
    </section>
  );
};

export default Home;
