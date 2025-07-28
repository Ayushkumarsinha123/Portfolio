import React, { useState } from "react";

// Import your page components
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

// Import the background image
import backgroundImage from "./assets/background.jpeg";

/**
 * App Component
 * This is now the main router for your application.
 */
function App() {
  // State to manage which page is currently visible
  const [currentPage, setCurrentPage] = useState("home");

  const navLinks = ["HOME", "ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS"];

  // This function decides which component to render
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className="text-white min-h-screen font-sans antialiased bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* This overlay darkens the background image */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* All content is now relative to this container */}
      <div className="relative z-10">
        <header className="w-full px-6 md:px-10 py-5 flex justify-between items-center fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
          <h1
            className="text-2xl font-bold text-green-400 cursor-pointer"
            onClick={() => setCurrentPage("home")} // Go to home on click
          >
            KriyaBook
          </h1>
          <nav className="hidden md:flex space-x-8 text-gray-300">
            {navLinks.map((link) => (
              // Use buttons with onClick to change the page state
              <button
                key={link}
                onClick={() => setCurrentPage(link.toLowerCase())}
                className={`font-semibold hover:text-green-400 transition-colors duration-300 ${
                  currentPage === link.toLowerCase()
                    ? "text-green-400 border-b-2 border-green-400"
                    : ""
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </header>

        {/* The renderPage function displays the active component here */}
        <main>{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
