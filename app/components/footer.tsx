import React from "react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-surface-dark-elevated bg-surface-dark text-on-dark-soft py-14 sm:py-16 font-sans text-xs no-print">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-on-dark">
              <svg
                className="h-5 w-5 text-on-dark"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C12.5 7 17 11.5 22 12C17 12.5 12.5 17 12 22C11.5 17 7 12.5 2 12C7 11.5 11.5 7 12 2Z" />
              </svg>
              <span className="font-serif text-lg font-normal tracking-tight text-on-dark">
                Mahesh Ghamand
              </span>
            </div>
            <p className="text-on-dark-soft leading-relaxed pr-4">
              Software Engineer specializing in distributed storage proxies, Git transport internals, and streaming database pipelines.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-dark-elevated bg-surface-dark-soft px-2.5 py-1 text-[11px] font-mono text-accent-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-teal animate-pulse" />
                <span>Open for Engineering Roles</span>
              </span>
            </div>
          </div>

          {/* Flagship Systems */}
          <div className="space-y-3">
            <p className="font-semibold uppercase tracking-wider text-on-dark text-[11px]">
              Flagship Systems
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://s3-split.mahesh0.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  S3-Split (Storage Quotas)
                </a>
              </li>
              <li>
                <a
                  href="https://repo-backups.mahesh0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  Repo Backups (Git Bundles)
                </a>
              </li>
              <li>
                <a
                  href="https://sql-backups.mahesh0.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  SQL Backups (Streaming Dumps)
                </a>
              </li>
            </ul>
          </div>

          {/* Channels & Social */}
          <div className="space-y-3">
            <p className="font-semibold uppercase tracking-wider text-on-dark text-[11px]">
              Profiles &amp; Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:maheshghamand@gmail.com"
                  className="hover:text-on-dark transition-colors"
                >
                  maheshghamand@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/YoungMahesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  GitHub (YoungMahesh)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/YoungMahesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  LinkedIn (YoungMahesh)
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/YoungMahesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  Dev.to Articles
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/12344647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  Stack Overflow Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture & Format */}
          <div className="space-y-3">
            <p className="font-semibold uppercase tracking-wider text-on-dark text-[11px]">
              Portfolio Architecture
            </p>
            <ul className="space-y-2 text-on-dark-soft">
              <li>Single-Page Editorial System</li>
              <li>Light-Mode Warm Canvas</li>
              <li>ATS 1-Click Print Stylesheet</li>
              <li>Next.js 16 + React 19 + Tailwind v4</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-dark-elevated flex flex-col sm:flex-row items-center justify-between gap-4 text-on-dark-soft">
          <div>
            © 2026 Mahesh Ghamand. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Warm-Canvas Editorial System</span>
            <span>Beed, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
