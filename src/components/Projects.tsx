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
      title: "FireSale ERP",
      description:
        "Developed a comprehensive ERP solution with 9+ modules, including CRM, Inventory, Sales, and AI-powered Insights. Built a responsive, theme-able UI with Shadcn components and Tailwind CSS, ensuring a consistent experience across devices.",
      // Integrated Google's Genkit to create an AI agent that provides automated business summaries, opportunities, and recommendations based on user-provided data.",

      image: "firesale-erp.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      liveLink: "https://fire-sale-erp.vercel.app/",
      githubLink: "https://github.com/Bhupendra-Maurya/FireSale-ERP",
    },
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
      title: "Calendar Journal",
      description:
        "Built an infinite-scrolling calendar application with journal entries, search functionality, and keyboard navigation. Features continuous date flow without empty cells, real-time search filtering, modal navigation, and responsive design. Implemented with React hooks for infinite scroll, optimized performance with memoization and caching, and mobile-first responsive design with clean minimal styling.",
      image: "calendar.png",
      technologies: ["React", "TypeScript", "CSS3"],
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
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-8" />
        {/* <p className="text-gray-400 text-center mb-12 text-lg">
          Here are some of my recent works
        </p> */}
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-800/70 shadow-xl overflow-hidden transition-all duration-300  hover:shadow-cyan-500/20 backdrop-blur-xl">
    {/* Animated border glow */}
    <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
    <div className="relative z-10 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gradient-to-r from-cyan-700/20 to-blue-700/10 rounded-full text-xs font-mono text-cyan-300 border border-cyan-800/30"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex justify-between items-center mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-300 hover:text-cyan-400 font-medium transition group/link"
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
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="View source on GitHub"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
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
  </div>
);

export default Projects;
