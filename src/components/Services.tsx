import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Services I Offer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16">
          High-quality solutions for your digital needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development Service */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-lg p-4 mb-6">
              <svg
                className="w-6 h-6 text-primary"
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
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Frontend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating responsive, modern, and user-friendly interfaces using React,
              Angular, and other cutting-edge technologies.
            </p>
          </div>

          {/* Full Stack Development */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-lg p-4 mb-6">
              <svg
                className="w-6 h-6 text-primary"
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
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Full Stack Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              End-to-end application development with modern frontend frameworks and
              robust backend solutions.
            </p>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-lg p-4 mb-6">
              <svg
                className="w-6 h-6 text-primary"
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
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Cloud & DevOps
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implementing cloud solutions and DevOps practices using AWS, Docker,
              and CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
