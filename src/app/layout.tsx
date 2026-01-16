'use client'

import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CvDropdown from "@/components/CvDropdown";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { useEffect, useRef } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // No icon overlap logic; icons will be handled in the bio card for mobile
  const iconsRef = useRef<HTMLDivElement>(null);
  return (
    <html lang="en">
      <body>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JBYKCW2B26"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JBYKCW2B26', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <main>{children}</main>

        {/* Contact icons bottom-left */}
        <div
          ref={iconsRef}
          className="hidden sm:flex fixed bottom-5 left-5 space-x-4 text-2xl text-gray-300 dark:text-gray-300 z-[60]"
        >
          {/* Mobile overlay to hide icons when a card is open or tapped */}
          <div id="mobile-card-overlay" className="sm:hidden fixed inset-0 z-50 pointer-events-none" style={{ display: 'none' }}></div>
          <a
            href="https://github.com/Sami-Askri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sami-askri-a90a5326b"
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

          {/* CV dropdown */}
          <CvDropdown />
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
