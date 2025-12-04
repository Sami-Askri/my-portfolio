"use client";

import { useState } from "react";
import Image from "next/image";
import CpeLogo from "@/assets/CPE-logo.png";
import SiemensLogo from "@/assets/siemens-logo.png";
import Card from "@/components/Card";
import projects from "./projects";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<any | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-500 dark:from-gray-900 dark:to-gray-1000 text-gray-800 dark:text-gray-200 py-10">
      {/* Header */}
      <header className="w-full flex items-center justify-between mt-12 py-8 px-6 sm:px-12">
        <Card className="bg-gray-500/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 flex-row items-center gap-6 p-6">
          <div>
            {/* main title */}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
              Sami Askri
            </h1>

            <p className="mt-2 text-lg text-black-600 dark:text-gray-300 max-w-xl leading-relaxed">
              I’m a Computer Science Engineering student at CPE Lyon, completing a work-study program as a Software Engineer and Full-Stack Developer at Siemens Industry Software. I develop reliable and efficient web and software solutions that support real-world industrial use cases, with a focus on Model-Based Systems Engineering (MBSE).
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
        {/* Section title */}
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
          Professional experiences
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: any, index: number) => (
            <div
              onClick={() => setOpenProject(project)}
              key={index}
              className="h-full lg:last:col-start-2"
            >
              <Card className="cursor-pointer bg-gray-300/80 dark:bg-gray-900/80 hover:bg-gray-50 dark:hover:bg-blue-800 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col p-0">
                <div className="absolute top-3 left-3 w-10 h-10">
                  <Image alt="company logo" src={project.company} fill className="object-contain" />
                </div>
                <Image
                  alt={project.title}
                  src={project.image}
                  className="w-full h-48 object-contain rounded-t-2xl scale-90"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
              </Card>
            </div>
          ))}
        </div>


        {/* Project dialog */}
        {openProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {openProject.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {openProject.description ||
                  "No description available yet. You can add one later."}
              </p>
              <b>Techs used</b>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {openProject.technologies ||
                  "No techs available yet."}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenProject(null)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                >
                  Close
                </button>
                {openProject.link ? (
                  <button
                    onClick={() =>
                      window.open(openProject.link, "_blank", "noopener,noreferrer")
                    }
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition ml-3"
                  >
                    Visit Github
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </main>

      <div>
        <TechStack />
      </div>
      <Footer />
    </div>
  );
}
