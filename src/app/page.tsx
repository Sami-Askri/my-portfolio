
import Image from "next/image";
import Card from "./Card";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800">
      <header className="w-full flex flex-col items-center">
        <Card>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 drop-shadow-lg">Sami Askri</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 max-w-xl text-center leading-relaxed">
            I’m a Computer Science Engineering student currently completing my apprenticeship as a Full-Stack Software Developer at Siemens Industry Software. In my role, I focus on developing software solutions and web applications, building reliable and efficient systems that support real-world use cases.<br /><br />
            Outside of work, I enjoy experimenting with mobile app development and personal projects that allow me to explore new technologies and expand my skills. I’m motivated by the challenge of creating meaningful applications across different platforms and by continuously growing as a developer and engineer.
          </p>
        </Card>
      </header>
      <main className="flex flex-col gap-[32px] items-center w-full">
        {/* Portfolio content goes here */}
        <Card>
          <p className="text-gray-700 dark:text-gray-300">
            test
          </p>
        </Card>
      </main>
    </div>
  );
}
