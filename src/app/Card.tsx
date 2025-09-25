import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-2xl px-8 py-8 flex flex-col items-center max-w-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
