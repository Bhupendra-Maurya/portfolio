import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  description: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.description,
          to_name: "Bhupendra",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({ loading: false, success: true, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "",
        description: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-8" />
        {/* <p className="text-gray-400 text-center mb-12 text-lg">
          Feel free to reach out
        </p> */}
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl border border-gray-800/70 shadow-2xl p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20 overflow-hidden backdrop-blur-xl">
            {/* Animated border glow */}
            <div className="absolute -inset-1 rounded-3xl pointer-events-none z-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="purpose"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Purpose
                </label>
                <select
                  id="purpose"
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white"
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                >
                  <option value="">Select a purpose</option>
                  <option value="job">Job Opportunity</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="project">Project Proposal</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="training">Training/Workshops</option>
                  <option value="open-source">Open Source Contribution</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {formStatus.loading ? "Sending..." : "Send Message"}
              </button>

              {formStatus.success && (
                <p className="text-green-400 text-center font-semibold">
                  Message sent successfully!
                </p>
              )}
              {formStatus.error && (
                <p className="text-red-400 text-center font-semibold">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <ContactCard
              icon={
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Email"
              value="bpmaurya24th@gmail.com"
              link="mailto:bpmaurya24th@gmail.com"
              linkLabel="bpmaurya24th@gmail.com"
            />
            <ContactCard
              icon={
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
              }
              title="GitHub"
              value="Follow my code"
              link="https://github.com/Bhupendra-Maurya"
              linkLabel="github.com/Bhupendra-Maurya"
            />
            <ContactCard
              icon={
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              }
              title="LinkedIn"
              value="Let's connect"
              link="https://www.linkedin.com/in/bhupendramaurya/"
              linkLabel="linkedin.com/in/bhupendramaurya"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  link,
  linkLabel,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  linkLabel: string;
}) => (
  <div className="relative group bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-800/70 shadow-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/20 overflow-hidden backdrop-blur-xl">
    {/* Animated border glow */}
    <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
    <div className="relative z-10 flex items-center space-x-4">
      <div className="bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-100 mb-1">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm md:text-base block font-mono"
        >
          {linkLabel}
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
