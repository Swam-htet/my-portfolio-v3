import Image from 'next/image';

// Generic SVG Placeholders - Replace with actual/better SVGs
const svgIconWrapper = (svgString: string) => (
  <div
    dangerouslySetInnerHTML={{ __html: svgString }}
    className="w-5 h-5" // Adjust size as needed
  />
);

const skillsData = [
  {
    name: 'Laravel',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>'
    ), // Placeholder: very generic server/framework icon
  },
  {
    name: 'Docker',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v3h14V5H5zm0 5v3h14v-3H5zm0 5v3h14v-3H5z"></path></svg>'
    ), // Placeholder: generic container icon
  },
  {
    name: 'AWS',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>'
    ), // Placeholder: cloud icon
  },
  {
    name: 'React',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><ellipse cx="12" cy="12" rx="11" ry="4" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>'
    ), // Placeholder: atom-like symbol
  },
  {
    name: 'Next.js',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.17L18.19 7 12 10.17 5.81 7 12 4.17zM4 8.54l8 4.54 8-4.54V15.46l-8 4.54-8-4.54V8.54z"></path></svg>'
    ), // Placeholder: generic N/framework icon
  },
  {
    name: 'Databases (SQL/NoSQL)',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5"></path><line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" stroke-width="0.5" class="dark:stroke-gray-800 stroke-gray-100"></line><line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" stroke-width="0.5" class="dark:stroke-gray-800 stroke-gray-100"></line></svg>'
    ), // Placeholder: cylinder
  },
  {
    name: 'Express.js',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="4 6 12 13 20 6"></polyline></svg>'
    ), // Placeholder: generic server/backend icon (envelope for 'express' mail)
  },
  {
    name: 'Git',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>'
    ), // Placeholder: simple branch
  },
  {
    name: 'VS Code',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M10 20l4-16h2.5l-4 16zm-3.5-2.5l-4-4 4-4L5 8l-5 5 5 5zM20.5 17.5l4-4-4-4L21 8l5 5-5 5z"></path></svg>'
    ), // Placeholder: code brackets
  },
  {
    name: 'WebStorm',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polygon points="2 17 12 22 22 17 12 12 2 17"></polygon></svg>'
    ), // Placeholder: generic IDE/editor shape
  },
  {
    name: 'Warp CLI',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>'
    ), // Placeholder: terminal prompt
  },
  {
    name: 'Dev Tools',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M19.14,12.28a4.45,4.45,0,0,0-6.29,0L3.29,21.85a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l3.07-3.07A4.49,4.49,0,0,0,14,16.64L22.57,8.07a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0Zm-2.83,1.41a2.49,2.49,0,0,1-3.54-3.53L17,6l3.54,3.54Z"></path><path d="M16.23,2.14a1,1,0,0,0-1.08-.2L3.86,7.17a1,1,0,0,0,.16,1.9L8,8.55l3.07-3.07a4.49,4.49,0,0,1,6.36-6.36Z"></path></svg>'
    ), // Placeholder: wrench/tools
  },
  {
    name: 'Figma',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M15 2H9C6.79 2 5 3.79 5 6v3h2V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3h2V6c0-2.21-1.79-4-4-4zM9 22h6c2.21 0 4-1.79 4-4v-3h-2v3c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-3H5v3c0 2.21 1.79 4 4 4zM2 9h3v6H2zm17 0h3v6h-3z"></path></svg>'
    ), // Placeholder: generic design/layout tool icon
  },
  {
    name: 'Postman',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>'
    ), // Placeholder: generic API/request icon (info circle)
  },
  {
    name: 'Jira',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H5v-5h3v5zm5.5 0h-3v-5h3v5zm5.5 0h-3v-5h3v5z"></path></svg>'
    ), // Placeholder: generic task board/kanban icon
  },
  {
    name: 'GitHub Actions',
    icon: svgIconWrapper(
      '<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z"></path></svg>'
    ), // Placeholder: generic CI/CD / automation icon (play/steps)
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 selection:bg-indigo-300 selection:text-indigo-900">
      <main className="flex flex-col gap-20 sm:gap-28 row-start-2 items-center w-full max-w-5xl px-4">
        {/* Hero/Introduction Section */}
        <section
          id="hero"
          className="w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left py-12 sm:py-20 gap-10 md:gap-16"
        >
          <div className="md:w-3/5 order-2 md:order-1">
            <p className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 ease-in-out cursor-default">
                Your Name
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Your Title / Short Blurb (e.g., Full-Stack Developer | Building
              Digital Experiences)
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end">
            <Image
              src="/profile-placeholder.jpg"
              alt="Your Name - Profile Picture"
              width={280}
              height={280}
              className="rounded-full shadow-2xl object-cover w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 border-4 border-white dark:border-gray-700 hover:scale-105 hover:shadow-indigo-300/50 dark:hover:shadow-indigo-800/50 transition-all duration-300 ease-in-out"
              priority
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              About Me
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-indigo-500 transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            Placeholder for your detailed introduction. Talk about your journey,
            your passions, what drives you, and what you&apos;re looking for.
            You can mention your experience, key skills, and career aspirations
            here.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Experience
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-indigo-500 transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <div className="space-y-12">
            {/* Example Experience Item */}
            <div className="flex gap-6 group/item">
              <div className="mt-1 flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:bg-indigo-400 transition-all duration-300">
                C
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-gray-800 dark:text-white">
                  Job Title at Company Name
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Dates (e.g., Jan 2020 - Present)
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Responsibility or achievement 1.</li>
                  <li>Responsibility or achievement 2.</li>
                  <li>Responsibility or achievement 3.</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 group/item">
              <div className="mt-1 flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:bg-indigo-400 transition-all duration-300">
                P
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-gray-800 dark:text-white">
                  Previous Job Title at Another Company
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Dates (e.g., May 2018 - Dec 2019)
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Key accomplishment or duty.</li>
                  <li>Another key duty or achievement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Education
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-indigo-500 transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <div className="space-y-8">
            {/* Example Education Item */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                Degree Name - University Name
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Graduation Year (or Expected)
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Relevant coursework or honors (optional).
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                Certification Name - Issuing Organization
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Date Awarded
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Projects
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-indigo-500 transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Example Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Project Title 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                Short description of the project. Highlight key features and
                what problem it solves.
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  Live Demo 🔗
                </a>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium transition-colors"
                >
                  Source Code &lt;/&gt;
                </a>
              </div>
            </div>
            {/* Repeat for Project Title 2, adjusting tech stack and links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Project Title 2
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                Another interesting project. Describe its purpose and impact.
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  Live Demo 🔗
                </a>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium transition-colors"
                >
                  Source Code &lt;/&gt;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              My Tech Stack
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-indigo-500 transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <ul className="flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-start">
            {skillsData.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 hover:from-indigo-600 hover:via-purple-600 hover:to-violet-700 text-white px-4 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* The svgIconWrapper handles rendering the SVG string */}
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto">
            I&apos;m currently open to new opportunities. Feel free to reach
            out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3.5 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out inline-block"
          >
            Email Me
          </a>
        </section>
      </main>
      <footer className="row-start-3 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-center text-sm text-gray-600 dark:text-gray-400 py-10 border-t border-gray-200 dark:border-gray-800 w-full max-w-5xl">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
