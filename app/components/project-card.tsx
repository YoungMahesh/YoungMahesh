"use client";

import React, { useState } from "react";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  methodologyBadge?: string;
  tagline: string;
  liveUrl: string;
  githubUrl: string;
  invariants: string[];
  summary: string;
  highlights: string[];
  stack: string[];
  architectureTiers: {
    title: string;
    description: string;
    details: string;
  }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="rounded-xl border border-hairline bg-surface-card p-6 sm:p-8 transition-shadow hover:shadow-sm print-avoid-break">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-hairline">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink">
              {project.title}
            </h3>
            <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
              {project.subtitle}
            </span>
            {project.methodologyBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/30 px-2.5 py-0.5 text-xs font-medium text-accent-teal font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-teal shrink-0" />
                <span>{project.methodologyBadge}</span>
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-muted font-sans">
            {project.tagline}
          </p>

          {/* Print-Only ATS & PDF Links Line */}
          <div className="hidden print-only pt-1 text-[11px] font-mono text-muted space-x-3">
            <span>
              <strong>Live:</strong>{" "}
              <a href={project.liveUrl} className="underline text-ink">
                {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            </span>
            <span>•</span>
            <span>
              <strong>GitHub:</strong>{" "}
              <a href={project.githubUrl} className="underline text-ink">
                {project.githubUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            </span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2.5 shrink-0 no-print">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-on-primary transition-colors hover:bg-primary-active shadow-xs cursor-pointer"
          >
            <span>Live System</span>
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-canvas px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-surface-soft shadow-2xs cursor-pointer"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Technical Invariants Badges */}
      <div className="pt-4 pb-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-2">
          Architectural Invariants &amp; Guarantees:
        </span>
        <div className="flex flex-wrap gap-2">
          {project.invariants.map((inv, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 rounded-md bg-canvas border border-hairline px-2.5 py-1 text-xs font-medium text-ink font-mono"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-teal shrink-0" />
              <span>{inv}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Summary Narrative */}
      <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-body">
        {project.summary}
      </p>

      {/* Key Architectural Highlights */}
      <ul className="mt-4 space-y-2 border-t border-hairline/70 pt-4 text-xs sm:text-sm text-body">
        {project.highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack Chips */}
      <div className="mt-5 pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-muted mr-1.5">Technologies:</span>
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-surface-cream-strong border border-hairline/80 px-2.5 py-0.5 text-[11px] font-medium text-body"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        <button
          type="button"
          onClick={onToggle}
          className="no-print inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-active transition-colors cursor-pointer"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "Hide Architecture Deep Dive" : "Inspect Architecture Deep Dive"}</span>
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Architecture Deep Dive Panel */}
      <div className={`${isExpanded ? "block" : "hidden"} print-expanded mt-6 pt-6 border-t border-hairline space-y-6`}>
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Architecture Specification
          </span>
          <h4 className="font-serif text-xl font-normal text-ink">
            Request Lifecycle &amp; Pipelined Execution
          </h4>
        </div>

        {/* 3-Tier Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.architectureTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-hairline bg-canvas p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                  Tier {idx + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent-teal" />
              </div>
              <h5 className="font-serif text-base font-medium text-ink">
                {tier.title}
              </h5>
              <p className="text-xs text-body leading-relaxed">
                {tier.description}
              </p>
              <div className="pt-2 border-t border-hairline text-[11px] font-mono text-muted">
                {tier.details}
              </div>
            </div>
          ))}
        </div>

        {/* Code / Protocol Chrome Block (Navy Dark Surface per DESIGN.md) */}
        <div className="rounded-xl border border-surface-dark-elevated bg-surface-dark text-on-dark overflow-hidden shadow-md font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between border-b border-surface-dark-elevated bg-surface-dark-soft px-4 py-2.5 gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]/80 inline-block" />
              </div>
              <span className="text-xs font-sans text-on-dark-soft">
                {project.codeSnippet.filename}
              </span>
            </div>

            <div className="flex items-center gap-3 no-print">
              <span className="text-[11px] text-on-dark-soft uppercase tracking-wider">
                {project.codeSnippet.language}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:text-accent-amber transition-colors cursor-pointer"
              >
                <span>{copied ? "Copied" : "Copy snippet"}</span>
              </button>
            </div>
          </div>

          <pre className="p-4 bg-surface-dark-soft/90 overflow-x-auto text-[12px] leading-relaxed text-on-dark whitespace-pre select-all">
            <code>{project.codeSnippet.code}</code>
          </pre>
        </div>
      </div>
    </article>
  );
}
