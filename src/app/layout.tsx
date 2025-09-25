import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        {/* Icônes de contact en bas à gauche */}
        <div className="fixed bottom-5 left-5 flex space-x-4 text-2xl text-gray-600 dark:text-gray-300">
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
      </body>
    </html>
  );
}
