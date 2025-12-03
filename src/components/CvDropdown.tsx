"use client";

import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";

export default function CvDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((o) => !o)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Open CV dropdown"
            >
                <FaFileAlt />
            </button>

            {open && (
                <div className="absolute bottom-8 left-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg overflow-hidden text-sm w-32 z-50">
                    <button
                        onClick={() => window.open("/CV_SamiAskri_EN.pdf", "_blank")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        English CV
                    </button>
                    <button
                        onClick={() => window.open("/CV_SamiAskri_FR.pdf", "_blank")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        CV Français
                    </button>
                </div>
            )}
        </div>
    );
}
