import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-4">
      {/* Footer */}
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Sami Askri – All rights reserved
      </p>

      <div className="flex space-x-6 text-2xl text-gray-600 dark:text-gray-300 mb-5">
        <a
          href="https://github.com/Sami-Askri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sami-askri-a90a5326b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:sami.askri88@gmail.com"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaEnvelope />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaFileAlt />
        </a>
      </div>
    </footer>
  );
}
