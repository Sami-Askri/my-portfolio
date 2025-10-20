"use client";

import { useState } from "react";
import Image from "next/image";
import CpeLogo from "@/assets/CPE-logo.png";
import SiemensLogo from "@/assets/siemens-logo.png";
import Card from "@/components/Card"; // keep your card
import projects from "./projects";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  // manage which project dialog is open
  const [openProject, setOpenProject] = useState<any | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-red-500 to-gray-100 dark:from-red-900 dark:to-gray-950">
      {/* Header */}
      <header className="w-full flex items-center justify-between mt-12 py-8 px-6 sm:px-12">
        <Card className="bg-white/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 flex-row items-center gap-6 p-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 drop-shadow-lg">
              Sami Askri
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              I’m a Computer Science Engineering student currently completing my apprenticeship as a Full-Stack Web and Software Developer at Siemens Industry Software. In my role, I focus on developing software solutions and web applications, building reliable and efficient systems that support real-world use cases, mainly focusing on Model Based System Engineering.
            </p>
          </div>
        </Card>

        {/* Logos section */}
        <div className="flex items-center gap-4 relative">
          <div className="relative -top-4">
            <Image src={CpeLogo} alt="CPE logo" width={200} height={200} />
          </div>
          <div className="text-4xl font-bold text-black-400 dark:text-black-600 select-none">
            ×
          </div>
          <div className="relative top-4">
            <Image src={SiemensLogo} alt="Siemens logo" width={200} height={200} />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col gap-[32px] items-center w-full px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 max-w-6xl">
          {projects.map((project: any, index: number) => (
            <div onClick={() => setOpenProject(project)}>
              <Card
                key={index}
                className="cursor-pointer bg-white/80 dark:bg-gray-900/80 hover:bg-gray-50 dark:hover:bg-blue-800 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col p-0"
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  className="w-full h-48 object-contain rounded-t-2xl scale-90"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                    {project.title}
                  </h2>
                </div>
              </Card>
            </div>
          ))}
          </div>

        {/* Simple custom dialog */}
        {openProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {openProject.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {openProject.description ||
                  "No description available yet. You can add one later."}
              </p>

              {openProject.screenshots && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {openProject.screenshots.map((src: string, i: number) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setOpenProject(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
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
