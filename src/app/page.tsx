'use client';

import cvData from '@/data/cvData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

function IconImage({
  path,
  sizeClass = 'w-5 h-5',
  alt = '',
  width = 20,
  height = 20,
}: {
  path: string;
  sizeClass?: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`${sizeClass} flex-shrink-0 flex items-center justify-center`}
    >
      <Image
        src={`/icons/${path}`}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function SvgIcon({
  path,
  sizeClass = 'w-5 h-5',
  width = 20,
  height = 20,
}: {
  path: string;
  sizeClass?: string;
  width?: number;
  height?: number;
}) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    fetch(`/icons/${path}`)
      .then((res) => res.text())
      .then((svgText) => {
        // Process SVG to ensure proper sizing
        let processedSvg = svgText;

        // Remove fixed width/height attributes
        processedSvg = processedSvg.replace(/\s+width="[^"]*"/gi, '');
        processedSvg = processedSvg.replace(/\s+height="[^"]*"/gi, '');

        // Ensure viewBox exists
        if (!processedSvg.includes('viewBox=')) {
          const widthMatch = svgText.match(/width="?(\d+)"?/i);
          const heightMatch = svgText.match(/height="?(\d+)"?/i);
          if (widthMatch && heightMatch) {
            const w = widthMatch[1];
            const h = heightMatch[1];
            processedSvg = processedSvg.replace(
              /<svg/i,
              `<svg viewBox="0 0 ${w} ${h}"`
            );
          } else {
            processedSvg = processedSvg.replace(
              /<svg/i,
              '<svg viewBox="0 0 24 24"'
            );
          }
        }

        // Add style for proper scaling
        if (!processedSvg.includes('style=')) {
          processedSvg = processedSvg.replace(
            /<svg([^>]*)>/i,
            '<svg$1 style="width: 100%; height: 100%; display: block;">'
          );
        } else {
          processedSvg = processedSvg.replace(
            /style="([^"]*)"/i,
            'style="$1; width: 100%; height: 100%; display: block;"'
          );
        }

        // Ensure preserveAspectRatio
        if (!processedSvg.includes('preserveAspectRatio=')) {
          processedSvg = processedSvg.replace(
            /<svg([^>]*)>/i,
            '<svg$1 preserveAspectRatio="xMidYMid meet">'
          );
        }

        setSvg(processedSvg);
      })
      .catch(() => setSvg(''));
  }, [path]);
  if (!svg) return null;
  return (
    <div
      className={`${sizeClass} flex-shrink-0 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// Consistent icon size for all icons
const ICON_SIZE = 20;
const ICON_SIZE_CLASS = 'w-5 h-5';

const iconMap: { [key: string]: JSX.Element } = {
  jQuery: (
    <SvgIcon
      path="jquery-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  HTML5: (
    <SvgIcon
      path="html5-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  CSS3: (
    <SvgIcon
      path="css3-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  CMake: (
    <SvgIcon
      path="cmake-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Bootstrap: (
    <SvgIcon
      path="bootstrap-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Vue.js': (
    <SvgIcon
      path="vuejs-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Redis: (
    <SvgIcon
      path="redis-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Prisma: (
    <SvgIcon
      path="prisma-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  PostCSS: (
    <SvgIcon
      path="postcss-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  PNPM: (
    <SvgIcon
      path="pnpm-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  PHPStorm: (
    <SvgIcon
      path="phpstorm-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Notion: (
    <SvgIcon
      path="notion-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Linux: (
    <SvgIcon
      path="linux-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Mac: (
    <SvgIcon
      path="apple-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Windows: (
    <SvgIcon
      path="windows11-original-wordmark.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Material UI': (
    <SvgIcon
      path="materialui-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Tailwind CSS': (
    <SvgIcon
      path="tailwindcss-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'React Router': (
    <SvgIcon
      path="reactrouter-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Redux Toolkit': (
    <SvgIcon
      path="redux-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Node.js': (
    <SvgIcon
      path="nodejs-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Nest.js': (
    <SvgIcon
      path="nestjs-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  PHP: (
    <SvgIcon
      path="php-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  TypeScript: (
    <SvgIcon
      path="typescript-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  JavaScript: (
    <SvgIcon
      path="javascript-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  GoLang: (
    <SvgIcon
      path="golang-official.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Go: (
    <SvgIcon
      path="golang-official.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Jira: (
    <SvgIcon
      path="jira-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Postman: (
    <SvgIcon
      path="postman-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Figma: (
    <SvgIcon
      path="figma-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  AWS: (
    <SvgIcon
      path="amazonwebservices-original-wordmark.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  DevOps: (
    <SvgIcon
      path="devops-2.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Nginx: (
    <SvgIcon
      path="nginx-1.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'JetBrains Tools': (
    <SvgIcon
      path="jetbrains-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  WebStorm: (
    <SvgIcon
      path="webstorm-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'VS Code': (
    <SvgIcon
      path="vscode-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  GitHub: (
    <SvgIcon
      path="github-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Git: (
    <SvgIcon
      path="git-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Express.js': (
    <SvgIcon
      path="express-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  MongoDB: (
    <SvgIcon
      path="mongodb-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  MySQL: (
    <SvgIcon
      path="mysql-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  PostgreSQL: (
    <SvgIcon
      path="postgresql-logo-svgrepo-com.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  SQLite: (
    <SvgIcon
      path="sqlite-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Next.js': (
    <SvgIcon
      path="nextjs-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'React.js': (
    <SvgIcon
      path="react-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Docker: (
    <SvgIcon
      path="docker-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Yarn: (
    <SvgIcon
      path="yarn-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Laravel: (
    <SvgIcon
      path="laravel-original.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  Vite: (
    <SvgIcon
      path="vitejs.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Shadcn UI': (
    <SvgIcon
      path="shadcn-ui-seeklogo.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'Ant Design': (
    <SvgIcon
      path="ant-design-svgrepo-com.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'TanStack Query': (
    <IconImage
      path="logo-color-banner-100.png"
      alt="TanStack Query"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'TanStack Router': (
    <IconImage
      path="logo-color-banner-100.png"
      alt="TanStack Router"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'React Hook Form': (
    <SvgIcon
      path="react-hook-form.svg"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
  'React Query': (
    <IconImage
      path="logo-color-banner-100.png"
      alt="React Query"
      sizeClass={ICON_SIZE_CLASS}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  ),
};

const { personalInfo, summary, skills, experiences, education, links } = cvData;

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-12 bg-white dark:bg-black font-[family-name:var(--font-inter)] text-black dark:text-white selection:bg-gray-300 selection:text-black dark:selection:bg-gray-700 dark:selection:text-white">
      <main className="flex flex-col gap-20 sm:gap-28 row-start-2 items-center w-full max-w-5xl px-4">
        {/* Hero/Introduction Section */}
        <section
          id="hero"
          className="w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left py-12 sm:py-20 gap-10 md:gap-16"
        >
          <div className="md:w-3/5 order-2 md:order-1">
            <p
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I&apos;m
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-500 hover:opacity-90 transition-opacity duration-300 cursor-default animate-pulse hover:animate-none">
                {personalInfo.name}
              </span>
            </h1>
            <p
              className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {personalInfo.title}
            </p>
            <div
              className="flex gap-4 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#contact"
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-base sm:text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
          <div
            className="md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Profile Picture`}
                width={280}
                height={280}
                className="relative rounded-full shadow-2xl object-cover w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 border-4 border-gray-300 dark:border-gray-700 hover:scale-110 hover:rotate-3 hover:shadow-gray-400/50 dark:hover:shadow-gray-600/50 transition-all duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="w-full py-12 sm:py-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left relative group font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white inline-block hover:scale-105 transition-transform duration-300">
              About Me
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 group-hover:w-full transition-all duration-500"></span>
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed space-y-4 animate-fade-in">
            {summary}
          </p>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="w-full py-12 sm:py-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white inline-block hover:scale-105 transition-transform duration-300">
              Experience
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 group-hover:w-full transition-all duration-500"></span>
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-400/50 border-2 border-transparent transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-black dark:text-white font-heading">
                  {exp.title} at{' '}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      {exp.company}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.period} {exp.location && `| ${exp.location}`}
                </p>
                {exp.description && (
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                )}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Key Projects:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {exp.projects.map((project, pIndex) => (
                        <li key={pIndex}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-200 dark:bg-gray-700 px-2.5 py-1 rounded-md text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="w-full py-12 sm:py-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white">
              Education
            </span>
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-400/50 border-2 border-transparent transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white font-heading">
                  {edu.degree}
                </h3>
                <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Placeholder, you might want a different structure or link to a separate page */}
        {/* <section
          id="projects"
          className="w-full py-12 sm:py-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white">
              My Projects
            </span>
            <span className="absolute bottom-[-6px] left-0 w-1/4 h-1.5 bg-black dark:bg-white transition-all duration-500 ease-out group-hover:w-1/3 group-hover:translate-x-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  Project {index === 0 ? 'Alpha' : 'Beta'} (Example)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  Detailed description of a key project, its challenges, and
                  your role.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
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
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
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
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            More project details available upon request or on my{' '}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section> */}

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full py-12 sm:py-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left relative group font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white">
              My Tech Stack
            </span>
          </h2>
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.category}
              className="mb-8"
              data-aos="fade-up"
              data-aos-delay={`${categoryIndex * 50}`}
            >
              <h3
                className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 font-heading"
                data-aos="fade-up"
                data-aos-delay={`${categoryIndex * 50 + 50}`}
              >
                {skillCategory.category}
              </h3>
              <ul className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {skillCategory.items.map((skillName, itemIndex) => (
                  <li
                    key={skillName}
                    className="flex items-center gap-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 hover:border-sky-500 dark:hover:border-sky-400"
                    data-aos="fade-up"
                    data-aos-delay={`${itemIndex * 50}`}
                  >
                    {iconMap[skillName]}
                    <span>{skillName}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-16 sm:py-24 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white inline-block">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto">
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out! <br />
            You can contact me via email or connect with me on social media.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2.5 bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span>Email Me</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {iconMap['GitHub']}
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>
      <footer
        className="row-start-3 flex flex-col gap-6 items-center justify-center text-center text-sm text-gray-600 dark:text-gray-400 py-10 border-t border-gray-300 dark:border-gray-700 w-full max-w-5xl px-4"
        data-aos="fade-up"
      >
        <div className="flex gap-x-6">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors text-lg"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors text-lg"
          >
            LinkedIn
          </a>
        </div>
        <div className="space-y-1">
          <p>{personalInfo.name}</p>
          <p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:underline"
            >
              {personalInfo.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="hover:underline"
            >
              {personalInfo.phone}
            </a>
          </p>
          <p>{personalInfo.address}</p>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
