import Image from "next/image";
import Card from "./Card";
import projects from "./projects";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800">
      {/* Header */}
      <header className="w-full flex flex-col items-center">
        <Card>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 drop-shadow-lg">
            Sami Askri
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center leading-relaxed">
            I’m a Computer Science Engineering student currently completing my apprenticeship as a Full-Stack Software Developer at Siemens Industry Software. In my role, I focus on developing software solutions and web applications, building reliable and efficient systems that support real-world use cases.<br /><br />
            Outside of work, I enjoy experimenting with mobile app development and personal projects that allow me to explore new technologies and expand my skills. I’m motivated by the challenge of creating meaningful applications across different platforms and by continuously growing as a developer and engineer.
          </p>
        </Card>
      </header>

      {/* Main */}
      <main className="flex flex-col gap-[32px] items-center w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
          {projects.map((project: any, index: number) => (
            <Card
              key={index}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col p-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                {project.link && (
                  <div className="mt-auto flex flex-row items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-center px-4 py-2 rounded-lg border border-blue-500 bg-white text-blue-600 dark:bg-white dark:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-100 transition font-medium mt-auto"
                    >
                      View Project
                      <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer with social icons */}
      <footer className="mt-12 flex flex-col items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Sami Askri – All rights reserved
        </p>
        <div className="flex space-x-6 text-2xl text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/ton-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ton-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ton.email@example.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}
