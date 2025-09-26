interface Experience {
  company: string;
  companyUrl?: string;
  logo?: string; // URL or local path
  role: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
  techStack?: string[];
}

const experiences: Experience[] = [
  {
    company: "Admiral India",
    companyUrl: "https://www.admiralindia.com/", 
    logo: "admiralindia.png", 
    role: "Software Developer",
    period: "July 2024 – Dec 2024",
    location: "Hybrid / India",
    description:
      "Worked on building a scalable online assessment and evaluation platform, collaborating closely with senior engineers and leading frontend efforts.",
    achievements: [
      "Developed and launched an online assessment platform using React, Node.js/Express, and Firebase, improving reliability and user experience.",
      "Led a 3-member frontend team, managing sprint planning, code reviews, and cross-functional collaboration for on-time feature delivery.",
      "Collaborated on system architecture and API design, ensuring alignment with product requirements and best practices.",
      "Implemented secure JWT authentication and integrated RESTful APIs, boosting platform security and performance.",
      "Optimized database schemas and resolved complex UI/API issues, improving stability and reducing bug reports by ~20%.",
    ],
    techStack: ["React", "Node.js", "Express", "Firebase", "REST APIs", "JWT"],
  },
  
//   {
//     company: "OpenSource Org",
//     companyUrl: "https://opensource.org",
//     logo: "/logos/opensource.png",
//     role: "Open Source Contributor",
//     period: "2021 – Present",
//     location: "Remote",
//     description:
//       "Contributed to multiple high-impact open source projects, focusing on developer tooling and documentation.",
//     achievements: [
//       "Merged 20+ PRs in major OSS projects",
//       "Wrote documentation adopted by 1,000+ devs",
//     ],
//     techStack: ["React", "TypeScript", "Jest", "MDX"],
//   },
  // Add more experiences as needed
];

const Experience = () => (
  <section className="relative py-24 sm:py-32 min-h-screen" id="experience">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-12" />

      <div className="relative border-l-2 border-cyan-800/30 pl-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 relative group">
            {/* Timeline dot */}
            <span className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 border-4 border-gray-900 shadow-lg"></span>
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-800/70 shadow-xl p-8 mb-2 backdrop-blur-xl">
              <div className="flex items-center mb-2">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full mr-4 border border-cyan-400/40 bg-white/10 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline font-mono text-base"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-2">
                <span className="mr-4">{exp.period}</span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM2 10a8 8 0 1116 0A8 8 0 012 10z" />
                  </svg>
                  {exp.location}
                </span>
              </div>
              <p className="text-gray-300 mb-3">{exp.description}</p>
              {exp.achievements && (
                <ul className="list-disc list-inside text-cyan-300 mb-3 space-y-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              )}
              {exp.techStack && (
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-700/20 to-blue-700/10 rounded-full text-xs font-mono text-cyan-300 border border-cyan-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
