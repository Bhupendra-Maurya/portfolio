interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Chatbot Flow Builder",
      description:
        "Built a sophisticated drag-and-drop visual flow builder application using React and React Flow. Features real-time node editing, intelligent connection validation, and comprehensive flow validation. Implemented professional-grade component architecture with production-ready code documentation and modular design patterns.",
      image: "chatbot-flow-builder.png",
      technologies: ["React", "React Flow", "JavaScript", "html/css"],
      liveLink: "https://chatbot-flow-builder-three-alpha.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/chatbot-flow-builder",
    },
    {
      title: "Calendar Journal - Infinite Scroll Cal.",
      description:
        "Built an infinite-scrolling calendar application with journal entries, search functionality, and keyboard navigation. Features continuous date flow without empty cells, real-time search filtering, modal navigation, and responsive design. Implemented with React hooks for infinite scroll, optimized performance with memoization and caching, and mobile-first responsive design with clean minimal styling.",
      image: "calendar.png",
      technologies: [
        "React",
        "TypeScript",
        "CSS3",
        "React Hooks",
        "Intersection Observer",
        "Performance Optimization",
      ],
      liveLink: "https://calendar-application-two.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/calendarApplication",
    },
    {
      title: "Prodify - Product Dashboard",
      description:
        "Built a comprehensive product management dashboard using React, TypeScript, and modern web technologies. Features full CRUD operations, real-time search and filtering, responsive design, and optimistic updates. Implemented with TanStack Query for efficient state management, shadcn/ui for polished components, and mobile-first responsive design patterns.",
      image: "prodify.png",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "TanStack Query",
        "Axios",
      ],
      liveLink: "https://prodify-neon.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/Prodify",
    },
    {
      title: "CineScope - Movie Search App",
      description:
        "React-based movie search application powered by the OMDb API. Users can search for movies, browse posters, and view detailed movie information including plot, cast, and ratings in a sleek UI.",
      image: "cinescope.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "OMDb API",
        "Lucide Icons",
      ],
      liveLink: "https://cine-scope-six.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/CineScope",
    },
    {
      title: "WorldEx - Trading Platform",
      description:
        "Developed a Binance-inspired cryptocurrency trading platform using React, Vite, and Tailwind CSS. Features include a dynamic hero section,  coin listings, news updates, and a modern, responsive UI.",
      image: "worldex.png",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "TypeScript",
        "Lucide-React",
      ],
      liveLink: "https://world-ex-zeta.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/worldEx",
    },
    {
      title: "Envelope Budgeting App",
      description:
        "A full-stack MERN application designed for personal finance management using the envelope budgeting system. It enables users to allocate income into various spending categories (envelopes), track expenses, and maintain a clear overview of their budget.",
      image: "budgetApp.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Axios",
        "CSS",
      ],
      liveLink: "https://github.com/Bhupendra-Maurya/budget-app",
      githubLink: "https://github.com/Bhupendra-Maurya/budget-app",
    },
    {
      title: "HomePro – HomeCare Hub",
      description:
        "HomePro is a responsive and visually appealing  website built using HTML, CSS, and JavaScript. The website provides an elegant interface to showcase services, testimonials, and other essential details.",
      image: "homepro.png",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      liveLink: "https://home-pro-topaz.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/homePro",
    },
    {
      title: "ShopNow - E-Commerce Platform",
      description:
        "Developed a static e-commerce website with a responsive and accessible user experience. Designed a clean, visually appealing layout adhering to modern design principles.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://shop-now-drab.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/shopNow",
    },
    {
      title: "Task Manager",
      description:
        "Developed a feature-rich task management application that enables users to add, filter, complete, and delete tasks, with statistics to track task statuses. React Context API for centralized state management.",

      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Jest", "RTL"],
      liveLink: "https://github.com/Bhupendra-Maurya/Task-Manager",
      githubLink: "https://github.com/Bhupendra-Maurya/Task-Manager",
    },
    {
      title: "Admin Dashboard",
      description:
        "Angular based Admin Dashboard for user and role management, incorporating comprehensive CRUD operations.Simulated backend operations using JSON Server for efficient local development and testing.",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "TypeScript", "Json Server"],
      liveLink: "https://github.com/Bhupendra-Maurya/admin-dashboard",
      githubLink: "https://github.com/Bhupendra-Maurya/admin-dashboard",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Featured Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
          Here are some of my recent works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group/link"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="View source on GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
