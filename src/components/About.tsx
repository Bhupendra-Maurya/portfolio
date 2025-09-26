const About = () => {
  return (
    <section id="about" className="relative">
      {/* Centered About Me Heading */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-100 tracking-tight mb-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Profile Image - always left on desktop */}
          {/* <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">
              <div className="rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 p-1 shadow-xl transition-all group-hover:scale-105 duration-300">
                <img
                  src="myphoto.png"
                  alt="Profile"
                  className="rounded-full w-64 h-64 object-cover border-4 border-gray-800 shadow-lg"
                />
              </div>
            </div>
          </div> */}

           {/* About Content & Feature Cards - always right on desktop */}
          <div className="flex flex-col h-full w-full items-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-200 mb-2 font-mono">
                Hi, I'm <span className="text-cyan-400">Bhupendra Maurya</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                A passionate{" "}
                <span className="font-semibold text-cyan-300">
                  Full Stack Developer
                </span>{" "}
                based in India, specializing in building exceptional digital
                experiences. With a strong foundation in both frontend and
                backend, I create efficient, scalable, and user-friendly
                solutions.
              </p>
            </div>
          </div>

                      {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-6 w-full">
              <FeatureCard
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                }
                title="Problem Solver"
                description="Analytical thinker with a knack for finding elegant solutions to complex problems."
              />
              <FeatureCard
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                }
                title="Fast Learner"
                description="Quick to adapt to new technologies and methodologies in the ever-evolving tech landscape."
              />
              <FeatureCard
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                title="Team Player"
                description="Experienced in collaborating with cross-functional teams to deliver outstanding results."
              />
            </div>
        </div>
      </div>
    </section>
  );
};

// FeatureCard Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 group hover:scale-[1.03] w-full">
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-100 mb-1">{title}</h4>
      <p className="text-gray-400 text-base">{description}</p>
    </div>
  </div>
);

export default About;