import React from "react";
// 1. Import your profile picture from the assets folder
import profilePicture from "../assets/profile4.jpg";

/**
 * About Component
 * This component contains the "About Me" page content, now featuring a profile picture.
 */
const About = () => {
  return (
    // The 'animate-fade-in' class provides a smooth entrance animation
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 px-6 animate-fade-in"
    >
      <div className="container mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          About <span className="text-green-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-12 rounded"></div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left Column: Profile Picture */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-64 h-64 rounded-full p-1 border-2 border-green-400 shadow-lg shadow-green-500/20">
              {/* 2. Use the imported image variable here */}
              <img
                src={profilePicture}
                alt="Ayush Sinha"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="md:col-span-2 space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Hello! I'm Ayush Kumar Sinha, a 3rd-year student at Roorkee
              Institute of Technology with a strong passion for web development
              and building user-friendly digital experiences. I enjoy turning
              ideas into clean, functional, and responsive interfaces.
            </p>

            <p>
              I'm skilled in HTML, CSS, and JavaScript, and I have fair
              knowledge of the MERN stack. I love working on real-world projects
              that challenge me to think creatively and improve my development
              skills.
            </p>

            <p>
              When I'm not coding, you’ll find me playing football, sketching,
              or relaxing with some anime and movies. These hobbies keep me
              inspired and energized as I continue to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
