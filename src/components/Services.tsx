const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services I Offer
          </span>
        </h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-8" />
        <p className="text-gray-400 text-center mb-16 text-lg">
          High-quality solutions for your digital needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend Development */}
          <ServiceCard
            icon={
              <svg
                className="w-7 h-7 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Frontend Development"
            description="Creating responsive, modern, and user-friendly interfaces using React, Angular, and other cutting-edge technologies."
          />

          {/* Full Stack Development */}
          <ServiceCard
            icon={
              <svg
                className="w-7 h-7 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            title="Full Stack Development"
            description="End-to-end application development with modern frontend frameworks and robust backend solutions."
          />

          {/* Cloud & DevOps */}
          <ServiceCard
            icon={
              <svg
                className="w-7 h-7 text-cyan-400"
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
            }
            title="Cloud & DevOps"
            description="Implementing cloud solutions and DevOps practices using AWS, Docker, and CI/CD pipelines."
          />
        </div>
      </div>
    </section>
  );
};

// ServiceCard Component
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-800/70 shadow-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 overflow-hidden backdrop-blur-xl">
    {/* Animated border glow */}
    <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
    <div className="relative z-10 flex flex-col items-start">
      <div className="w-14 h-14 bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-100">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default Services;
