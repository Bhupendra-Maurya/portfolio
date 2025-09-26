const skillGroups = [
  {
    title: "Programming Languages",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend Development",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "FastAPI"],
  },
  {
    title: "Database",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5C4 3.34315 7.58172 2 12 2C16.4183 2 20 3.34315 20 5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
        />
      </svg>
    ),
    skills: ["MongoDB", "MySQL", "Firebase", "SQLite"],
  },
  {
    title: "Testing & Version Control",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    skills: ["Jest", "React Testing Library", "Git", "GitHub"],
  },
  {
    title: "Cloud & Other",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    skills: ["AWS", "Docker", "Jenkins"],
  },
  {
    title: "Soft Skills",
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
        />
      </svg>
    ),
    skills: [
      "Communication",
      "Leadership",
      "Time Management",
      "Critical Thinking",
      "Adaptability",
      "Problem-solving",
      "Teamwork",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-8" />
        <p className="text-gray-400 text-center mb-16 text-lg">
          Tools and Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => (
  <div className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-800/70 shadow-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 overflow-hidden backdrop-blur-xl">
    {/* Animated border glow */}
    <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 rounded-lg">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gradient-to-r from-cyan-700/20 to-blue-700/10 rounded-full text-xs font-mono text-cyan-300 border border-cyan-800/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
