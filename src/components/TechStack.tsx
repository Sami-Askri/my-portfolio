import React from "react";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaJenkins,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiKubernetes,
  SiPostgresql,
  SiFirebase,
  SiFlutter,
  SiAnsible,
  SiPython,
  SiTerraform,
  SiCplusplus,
  SiC,
  SiDart,
  SiQt,
  SiJira,
  SiSiemens,
} from "react-icons/si";

import sysml2 from "@/assets/SysML2-logo.png";

const brandColors: Record<string, string> = {
  React: "#61dafbc9",
  Php: "#777BB4",
  Dart: "#0175C2",
  "Node.js": "#68A063",
  TailwindCSS: "#38BDF8",
  Flutter: "#02569B",
  Qt: "#41CD52",
  Python: "#3776AB",
  Java: "#E76F00",
  TypeScript: "#3179c6a6",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Kubernetes: "#326CE5",
  Terraform: "#844FBA",
  Ansible: "#ee000077",
  Jenkins: "#D33833",
  PostgreSQL: "#336791",
  Firebase: "#FFCA28",
  Git: "#F05032",
  Jira: "#0052CC",
  "SysML v2": "#00457C",
  "MBSE Tools": "#0078D4",
};

const textColors: Record<string, string> = {
  React: "#000000",
  "Node.js": "#FFFFFF",
  TailwindCSS: "#000000",
  Firebase: "#000000",
  Java: "#000000",
  AWS: "#000000",

};


export default function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      techs: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <SiC style={{ fontSize: "1.15rem" }} /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Php", icon: <FaPhp /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      techs: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Qt", icon: <SiQt /> },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      techs: [
        { name: "GitLab CI/CD", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "Jenkins", icon: <FaJenkins /> },
      ],
    },
    {
      title: "Databases",
      techs: [
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Systems Engineering",
      techs: [
        {
          name: "SysML-v2",
          icon: (
            <Image
              src={sysml2}
              alt="SysML v2 logo"
              className="w-6 h-6 object-contain"
            />
          ),
        },
        {
          name: "MBSE Tools",
          icon: <SiSiemens style={{ fontSize: "2rem" }} />,
        },
      ],
    },
    {
      title: "Tools",
      techs: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Jira", icon: <SiJira /> },
      ],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-green-600">
        Technologies Stack
      </h2>

      <div className="grid wrap gap-10 md:grid-cols-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-300/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {cat.techs.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:scale-105 transition"
                  style={{
                    backgroundColor: brandColors[tech.name] || "rgba(10, 9, 9, 0.51)",
                  }}
                >
                  <span className="text-2xl flex items-center justify-center"
                    style={{color: textColors[tech.name]}}>
                    {tech.icon}
                  </span>
                  <span style={{color: textColors[tech.name]}}>{tech.name}</span>
                </div>
                // <div
                //   key={i}
                //   className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 hover:scale-105 transition"
                // >
                //   <span className="text-2xl flex items-center justify-center">
                //     {tech.icon}
                //   </span>
                //   <span>{tech.name}</span>
                // </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
