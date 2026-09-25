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
              <li className="flex items-center justify-between sm:justify-start gap-2">
                <a
                  href="https://s3-split.mahesh0.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  S3-Split (Storage Quotas)
                </a>
                <a
                  href="https://github.com/YoungMahesh/s3-split"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-on-dark-soft hover:text-on-dark transition-colors"
                  title="S3-Split GitHub Repository"
                >
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>[Code]</span>
                </a>
              </li>
              <li className="flex items-center justify-between sm:justify-start gap-2">
                <a
                  href="https://repo-backups.mahesh0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  Repo Backups (Git Bundles)
                </a>
                <a
                  href="https://github.com/YoungMahesh/repo-backups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-on-dark-soft hover:text-on-dark transition-colors"
                  title="Repo Backups GitHub Repository"
                >
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>[Code]</span>
                </a>
              </li>
              <li className="flex items-center justify-between sm:justify-start gap-2">
                <a
                  href="https://sql-backups.mahesh0.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-dark transition-colors"
                >
                  SQL Backups (Streaming Dumps)
                </a>
                <a
                  href="https://github.com/YoungMahesh/sql-backups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-on-dark-soft hover:text-on-dark transition-colors"
                  title="SQL Backups GitHub Repository"
                >
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>[Code]</span>
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
