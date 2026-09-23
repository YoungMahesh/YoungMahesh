"use client";

import React from "react";

export function Header() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-hairline bg-canvas/95 backdrop-blur-xs no-print">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Mahesh Ghamand Home"
        >
          {/* Radial 4-spoke asterisk brand glyph */}
          <svg
            className="h-5 w-5 text-ink transition-transform duration-200 group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C12.5 7 17 11.5 22 12C17 12.5 12.5 17 12 22C11.5 17 7 12.5 2 12C7 11.5 11.5 7 12 2Z" />
          </svg>
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xl font-normal tracking-tight text-ink sm:text-2xl">
              Mahesh Ghamand
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-surface-card border border-hairline px-2.5 py-0.5 text-[11px] font-medium text-body">
              Systems & Cloud
            </span>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs font-medium text-muted"
          aria-label="Page Navigation"
        >
          <a
            href="#projects"
            className="transition-colors hover:text-ink hover:underline underline-offset-4"
          >
            Flagship Projects
          </a>
          <a
            href="#skills"
            className="transition-colors hover:text-ink hover:underline underline-offset-4"
          >
            Technical Skills
          </a>
          <a
            href="#education"
            className="transition-colors hover:text-ink hover:underline underline-offset-4"
          >
            Education
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-ink hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* 1-click ATS Print Action */}
          <button
            type="button"
            onClick={handlePrint}
            title="Print or Save as ATS PDF"
            className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-canvas px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-surface-soft active:bg-surface-card cursor-pointer"
          >
            <svg
              className="h-3.5 w-3.5 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            <span className="hidden sm:inline">Print / Save</span>
            <span>PDF</span>
          </button>

          {/* Hosted PDF */}
          <a
            href="https://filedn.com/lKynGAEFLyJzDVbxA8PDmdk/mahesh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Legacy PDF Resume"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-ink px-2 py-1.5 transition-colors"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Hosted PDF</span>
          </a>

          {/* Primary CTA */}
          <a
            href="mailto:maheshghamand@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-1.5 text-xs font-medium text-on-primary transition-colors hover:bg-primary-active shadow-xs cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
