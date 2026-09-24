import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-canvas py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Main Bio / Positioning Column */}
          <div className="space-y-6 lg:col-span-8 lg:pr-6">
            {/* Scoped Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-card px-3 py-1 text-xs font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Software Engineer • Backend &amp; Cloud Infrastructure</span>
            </div>

            {/* Profile Portrait & Headline Block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
              {/* Profile Portrait (Editorial Squircle, strictly excluded from ATS Print View) */}
              <div className="relative shrink-0 no-print group">
                <div className="relative h-32 w-26 sm:h-36 sm:w-28 md:h-40 md:w-32 overflow-hidden rounded-2xl border border-hairline bg-surface-card shadow-xs transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-md group-hover:border-primary/40">
                  <Image
                    src="/profile-portrait.jpg"
                    alt="Mahesh Ghamand - Profile Portrait"
                    fill
                    sizes="(max-width: 640px) 104px, (max-width: 768px) 112px, 128px"
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Main Display Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-ink">
                  Mahesh Ghamand
                </h1>
                <p className="font-serif text-2xl sm:text-3xl font-normal text-muted tracking-tight">
                  Architecting distributed storage gateways, Git transport internals, and streaming data pipelines.
                </p>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="font-sans text-base sm:text-lg leading-relaxed text-body max-w-2xl">
              Software engineer with deep focus on backend systems, protocol compliance, and cloud storage infrastructure. 
              Builds production systems with high velocity through <strong>Specification-Driven Agentic Engineering</strong>—directing autonomous AI agents under rigorous automated test suites, protocol invariants, and failure-mode validation. 
              Creator of <strong>S3-Split</strong> (SigV4 multi-tenant quota gateway), <strong>Repo Backups</strong> (sovereign native Git bundle archiving), 
              and <strong>SQL Backups</strong> (zero-disk streaming database extractors). Experienced in Go, TypeScript, Node.js, PostgreSQL, and AWS S3-compatible ecosystems.
            </p>

            {/* Quick Contact & Social Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
              <a
                href="mailto:maheshghamand@gmail.com"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-xs sm:text-sm font-medium text-on-primary transition-colors hover:bg-primary-active shadow-xs"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>maheshghamand@gmail.com</span>
              </a>

              <a
                href="https://github.com/YoungMahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-hairline bg-canvas px-4 text-xs sm:text-sm font-medium text-ink transition-colors hover:bg-surface-soft"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/YoungMahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-hairline bg-canvas px-4 text-xs sm:text-sm font-medium text-ink transition-colors hover:bg-surface-soft"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://dev.to/YoungMahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-hairline bg-canvas px-3.5 text-xs sm:text-sm font-medium text-muted hover:text-ink transition-colors hover:bg-surface-soft"
              >
                <span>Dev.to</span>
              </a>

              <a
                href="https://stackoverflow.com/users/12344647"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-hairline bg-canvas px-3.5 text-xs sm:text-sm font-medium text-muted hover:text-ink transition-colors hover:bg-surface-soft"
              >
                <span>Stack Overflow</span>
              </a>
            </div>

            {/* Print-Only Header Details */}
            <div className="hidden print-only pt-2 text-xs text-body space-y-1">
              <div className="flex flex-wrap gap-4 font-mono">
                <span><strong>Email:</strong> maheshghamand@gmail.com</span>
                <span><strong>Location:</strong> Beed, Maharashtra, India</span>
                <span><strong>GitHub:</strong> github.com/YoungMahesh</span>
                <span><strong>LinkedIn:</strong> linkedin.com/in/YoungMahesh</span>
              </div>
            </div>
          </div>

          {/* Key Systems Pillars Card */}
          <div className="w-full lg:col-span-4">
            <div className="rounded-xl border border-hairline bg-surface-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                  Core Engineering Pillars
                </span>
                <span className="h-2 w-2 rounded-full bg-accent-teal" />
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Distributed Storage Gateways</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    SigV4 protocol proxies, virtual prefix bucket partitioning, and real-time multipart byte quota enforcement.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
                    <span>Git Transport Internals</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Native Git bundle packfile generation, commit graph preservation, and cryptographic ref verification.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                    <span>In-Process Streaming Pipelines</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Zero-disk memory-bounded database extractors (PostgreSQL, MySQL, libSQL) with companion manifest sidecars.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span>Specification-Driven Agentic Delivery</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Directing autonomous AI agents under automated integration suites, concurrency stress tests, and invariant validation for rapid, reliable systems delivery.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-hairline/80 flex items-center justify-between text-[11px] font-mono text-muted">
                <span>Location: Beed, MH, India</span>
                <span className="text-success font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
