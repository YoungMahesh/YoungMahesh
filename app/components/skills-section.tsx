import React from "react";

interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: { name: string; emphasis?: boolean }[];
  invariants: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Systems & Cloud Infrastructure",
    badge: "Core Systems",
    description:
      "Distributed storage proxy architecture, SigV4 protocol compliance, native Git transport mechanics, and containerized deployment workflows.",
    skills: [
      { name: "Go", emphasis: true },
      { name: "TypeScript", emphasis: true },
      { name: "Node.js", emphasis: true },
      { name: "AWS S3 / R2", emphasis: true },
      { name: "SigV4 Protocol", emphasis: true },
      { name: "Git Internals (.bundle)", emphasis: true },
      { name: "Docker" },
      { name: "Linux & Bash" },
      { name: "AES-256-GCM / KMS" },
    ],
    invariants: [
      "Zero-latency signature verification",
      "Cryptographic packfile verification",
      "Scoped read-only OAuth credentials",
    ],
  },
  {
    title: "Databases & Storage Engines",
    badge: "Data Pipelines",
    description:
      "In-process memory-bounded streaming extractors, relational schema introspection, sequence synchronization, and multi-cloud object storage.",
    skills: [
      { name: "PostgreSQL", emphasis: true },
      { name: "MySQL", emphasis: true },
      { name: "SQLite / libSQL / Turso", emphasis: true },
      { name: "SeaweedFS", emphasis: true },
      { name: "Prisma ORM" },
      { name: "Redis" },
      { name: "Streaming Gzip" },
      { name: "SQL DDL Reconstruct" },
    ],
    invariants: [
      "Zero temporary disk footprints",
      "Sub-millisecond object registry lookups",
      "Companion .manifest.json sidecars",
    ],
  },
  {
    title: "Application & Interface Architecture",
    badge: "Full-Stack Breadth",
    description:
      "Modern full-stack web applications, end-to-end type safety, responsive editorial design systems, and smart contract development.",
    skills: [
      { name: "Next.js (App Router)", emphasis: true },
      { name: "React 19", emphasis: true },
      { name: "Tailwind CSS v4", emphasis: true },
      { name: "tRPC", emphasis: true },
      { name: "REST APIs" },
      { name: "Solidity / Web3" },
      { name: "Hardhat" },
      { name: "Print/ATS Styling" },
    ],
    invariants: [
      "Strict typographic hierarchy",
      "Accessible ARIA standards",
      "End-to-end typed contracts",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-hairline bg-canvas py-14 sm:py-20 print-avoid-break">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Technical Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-ink">
            Skill Clusters &amp; Core Stack
          </h2>
          <p className="font-sans text-sm sm:text-base text-body">
            Categorized by engineering domain, emphasizing distributed storage systems, database internals, and modern application infrastructure.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-hairline bg-surface-card p-6 sm:p-7 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-hairline bg-canvas px-2.5 py-0.5 font-mono text-xs font-medium text-body">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-mono text-muted">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-ink">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className={`rounded-md border px-2.5 py-1 text-xs font-mono ${
                        s.emphasis
                          ? "bg-canvas border-hairline font-semibold text-ink"
                          : "bg-surface-cream-strong border-hairline/60 text-body"
                      }`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Invariant Highlights */}
              <div className="pt-4 border-t border-hairline space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted block">
                  Domain Invariants:
                </span>
                <ul className="space-y-1 text-xs text-muted">
                  {cat.invariants.map((inv, invIdx) => (
                    <li key={invIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-teal shrink-0" />
                      <span>{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
