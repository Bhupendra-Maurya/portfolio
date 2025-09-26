import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 min-h-screen overflow-x-hidden">
      {/* Animated SVG Pattern */}
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full animate-[bgmove_30s_linear_infinite]"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.1 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0V40H0" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Optional: Subtle Noise Overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          opacity: 0.07,
          mixBlendMode: "overlay",
        }}
      />

      {/* Navigation */}
      <nav
        className={`w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-2xl shadow-2xl border-b border-gray-800"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg select-none">
              BM
            </span>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex  items-center justify-center p-3 rounded-full bg-gray-800/70 hover:bg-gray-700/80 text-cyan-400 shadow-lg transition"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {!isMenuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } md:hidden`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-br from-gray-900/95 to-gray-800/90 rounded-2xl shadow-2xl border border-gray-800 mt-2">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink
                href="#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </MobileNavLink>
              <MobileNavLink
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>

              <MobileNavLink
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="relative px-4 py-2 text-lg font-medium text-gray-200 hover:text-cyan-400 transition group"
  >
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full"></span>
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-3 rounded-xl text-lg font-semibold text-gray-200 hover:text-cyan-400 hover:bg-gray-800/80 transition"
  >
    {children}
  </a>
);

export default App;
