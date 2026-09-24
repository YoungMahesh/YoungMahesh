"use client";

import React, { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ProjectCard, ProjectData } from "./components/project-card";
import { SkillsSection } from "./components/skills-section";
import { EducationSection } from "./components/education-section";
import { Footer } from "./components/footer";

const projectsData: ProjectData[] = [
  {
    id: "s3-split",
    title: "S3-Split",
    subtitle: "Storage Gateway & Quotas",
    methodologyBadge: "Spec-Driven Agentic Build",
    tagline:
      "Multi-tenant proxy that partitions S3-compatible storage into managed virtual prefixes with strictly enforced byte-accurate quotas.",
    liveUrl: "https://s3-split.mahesh0.dev/",
    invariants: [
      "0 Over-Allocation Leaks",
      "Bypass AWS 100-Bucket Limit",
      "Drop-in SigV4 Compatibility",
    ],
    summary:
      "S3-Split sits transparently between client applications and upstream object storage providers (AWS S3, Cloudflare R2, MinIO, Wasabi). It intercepts incoming S3 REST requests, validates SigV4 HMAC signatures, verifies real-time byte quota limits against a PostgreSQL object registry, and reserves chunk parts during multipart uploads to prevent concurrent over-allocation leaks.",
    highlights: [
      "Engineered via Specification-Driven Agentic workflows: validated SigV4 HMAC compliance and quota locks using automated integration test suites and concurrent multipart stress tests.",
      "Partitions a single physical bucket into hundreds of virtual prefix 'Managed Buckets' authenticated via scoped Client Keys (s3s_ck_...).",
      "Transparently proxies PUT, GET, DELETE, and multipart operations with 100% AWS SDK drop-in compatibility and zero client code rewrites.",
      "Maintains relational PostgreSQL object registry with continuous baseline upstream scanning for sub-millisecond quota lookups.",
      "Protects master upstream credentials using AES-256-GCM authenticated encryption at rest.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "AWS SDK v3",
      "SigV4 Protocol",
      "PostgreSQL",
      "AES-256-GCM",
      "Docker",
    ],
    architectureTiers: [
      {
        title: "Downstream Clients",
        description:
          "Applications, microservices, and data pipelines interact via official AWS SDKs, Boto3, or AWS CLI using custom gateway endpoints and assigned Client Keys.",
        details: "SigV4 Authentication • Zero Client Rewrites",
      },
      {
        title: "Proxy & Quota Engine",
        description:
          "Validates signatures, maps Managed Buckets to virtual prefixes, verifies real-time byte quotas, and locks multipart part allocations before forwarding bytes.",
        details: "Pre-Upload Check • 0 Quota Leaks",
      },
      {
        title: "Upstream Storage",
        description:
          "Physical object storage infrastructure (AWS S3, Cloudflare R2, MinIO) with transparent prefix routing and AES-256-GCM encrypted credentials.",
        details: "Multi-Cloud S3 • Baseline Scans",
      },
    ],
    codeSnippet: {
      filename: "app/storage.ts — Standard AWS SDK v3 Drop-in",
      language: "typescript",
      code: `// Drop-in AWS SDK v3 configuration with zero client changes
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "us-east-1",
  endpoint: "https://s3-split.mahesh0.dev",      // S3-Split Gateway
  credentials: {
    accessKeyId: "s3s_ck_live_9a7d2e4f1b8c",   // Scoped Client Key
    secretAccessKey: "s3s_sec_4f1b8c9a7d2e4f", // Scoped Secret Key
  },
});

// Byte-accurate storage quotas enforced transparently before writing upstream
await s3.send(
  new PutObjectCommand({
    Bucket: "marketing-assets", // Managed Bucket (Virtual Prefix)
    Key: "reports/q3-summary.pdf",
    Body: fileStream,
  })
);`,
    },
  },
  {
    id: "repo-backups",
    title: "Repo Backups",
    subtitle: "Sovereign GitHub Backups",
    methodologyBadge: "Spec-Driven Agentic Build",
    tagline:
      "Automated Git bundle disaster recovery backups for GitHub organizations with strict read-only scoping and native restoration.",
    liveUrl: "https://repo-backups.mahesh0.dev",
    invariants: [
      "Zero Write Scopes (contents:read only)",
      "True .bundle Format (Full Graphs)",
      "1-Command Native Git Restoration",
    ],
    summary:
      "Repo Backups connects GitHub organizations with strict read-only permissions to archive complete commit graphs into deterministic, point-in-time Git bundles (.bundle). Unlike flat tarballs or zip archives that discard branch pointers and tag histories, native Git bundles preserve every commit SHA, merge parent, branch ref, and annotated tag cryptographically.",
    highlights: [
      "Engineered via Specification-Driven Agentic workflows: validated packfile integrity and ref completeness via automated git bundle verify checks and round-trip clone test suites.",
      "Headless automated worker streams verified Git bundle packfiles directly to AES-256 KMS / SSE-S3 encrypted private object storage.",
      "1-command native disaster recovery: 'git clone <bundle-file>' restores all local and remote branches offline without proprietary tooling.",
      "Implements automated rolling retention windows per repository, safely pruning older bundles to control storage growth.",
      "Strict data governance: Disconnection halts backup jobs while preserving archives; user-initiated Archive Purge permanently cleans S3 and DB records.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Git CLI & .bundle",
      "AWS S3",
      "KMS / SSE-S3",
      "PostgreSQL",
      "GitHub OAuth App",
    ],
    architectureTiers: [
      {
        title: "Scoped GitHub App",
        description:
          "Installs with exclusive contents:read and metadata:read permissions on selected repos. Zero write permissions to branches, PRs, or environment secrets.",
        details: "State-signed OAuth • Zero Write Scopes",
      },
      {
        title: "Automated Bundle Streaming",
        description:
          "Headless worker authenticates with short-lived tokens, packages complete commit ancestry into canonical Git bundles, and streams to encrypted S3.",
        details: "Packfile Integrity • AES-256 KMS",
      },
      {
        title: "Independent Offline Restore",
        description:
          "Generates secure presigned download URLs. Restore full repository history and branch topologies using native git bundle verify and git clone.",
        details: "100% Offline Capable • Zero Lock-In",
      },
    ],
    codeSnippet: {
      filename: "restoration-guide.sh — Native Git Bundle Verification",
      language: "bash",
      code: `# Step 1: Download timestamped bundle via presigned URL
curl -o core-api-2026-09-22T040000Z.bundle "https://s3.amazonaws.com/vault/..."

# Step 2: Cryptographically verify packfile and ref completeness
git bundle verify core-api-2026-09-22T040000Z.bundle
# Output: The bundle records a complete commit graph. OK.

# Step 3: 1-command complete restoration with full branch trees
git clone core-api-2026-09-22T040000Z.bundle restored-core-api
# Rebuilds main, all release branches, and annotated tags natively`,
    },
  },
  {
    id: "sql-backups",
    title: "SQL Backups",
    subtitle: "Streaming Database Protection",
    methodologyBadge: "Spec-Driven Agentic Build",
    tagline:
      "Automated and scheduled SQL database backups with in-process streaming and instant companion manifest inspection.",
    liveUrl: "https://sql-backups.mahesh0.dev/",
    invariants: [
      "100% In-Process Streaming Pipeline",
      "0 Temporary Local Disk Overhead",
      "Companion .manifest.json Metadata Sidecar",
    ],
    summary:
      "SQL Backups provides enterprise-grade database backups engineered around a memory-bounded streaming architecture. It extracts database records in batched cursor streams and pipes them on-the-fly through Gzip compression directly into S3-compatible storage, completely eliminating temporary dump files and local disk exhaustion on large production databases.",
    highlights: [
      "Engineered via Specification-Driven Agentic workflows: validated zero-disk memory-bounded streaming via heap profilers and database round-trip restore integrity tests across PostgreSQL, MySQL, and libSQL.",
      "Dedicated dialect exporters for PostgreSQL (DDL, constraints, sequences), MySQL (connection pools, table locks, auto-increment), and SQLite / libSQL / Turso (sqlite_schema, sequence capture).",
      "Dual-object upload generates companion .manifest.json sidecars recording table names, row counts, and sizes for instant inspection without downloading large dumps.",
      "Native interoperability with self-hosted SeaweedFS, AWS S3, Cloudflare R2, and MinIO backends using multipart upload protocols.",
      "Timezone-aware cron scheduler with automated retention pruning and AES-256-GCM credential encryption at rest.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "SQLite / libSQL",
      "SeaweedFS / S3",
      "Streaming Gzip",
      "AES-256-GCM",
    ],
    architectureTiers: [
      {
        title: "Target Database Engines",
        description:
          "Connects to Postgres, MySQL, or remote libSQL/Turso instances with AES-256-GCM encrypted credentials and managed connection pools.",
        details: "Postgres • MySQL • libSQL/SQLite",
      },
      {
        title: "In-Process Gzip Pipeline",
        description:
          "Batched cursor rows are serialized into SQL DDL and INSERT statements, compressed on-the-fly, and uploaded without writing to server disk.",
        details: "Memory-Bounded Stream • Zero Disk Footprint",
      },
      {
        title: "S3 Storage & Sidecar Manifest",
        description:
          "Dual object upload stores the compressed .sql.gz dump alongside a companion .manifest.json metadata sidecar for instant schema inspection.",
        details: ".sql.gz + .manifest.json Sibling Keys",
      },
    ],
    codeSnippet: {
      filename: "backup-stream.sql & manifest.json — Companion Schema Output",
      language: "sql",
      code: `-- Direct in-process streaming backup: remote libSQL / Turso SQLite
PRAGMA foreign_keys = OFF;
BEGIN TRANSACTION;
CREATE TABLE "users" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "email" TEXT NOT NULL UNIQUE,
  "created_at" TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);
INSERT INTO "sqlite_sequence" ("name", "seq") VALUES ('users', 4281);
INSERT INTO "users" ("id", "email") VALUES (1, 'admin@example.com');
COMMIT;

/* Companion .manifest.json generated alongside:
{
  "engine": "libsql",
  "tables": [{ "name": "users", "rows": 4281 }],
  "uncompressedBytes": 1428570,
  "checksum": "sha256:7a4f912c4e..."
}
*/`,
    },
  },
];

export default function Home() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllExpanded = projectsData.every((p) => expandedProjects[p.id]);

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedProjects({});
    } else {
      const all: Record<string, boolean> = {};
      projectsData.forEach((p) => {
        all[p.id] = true;
      });
      setExpandedProjects(all);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink selection:bg-primary/20 selection:text-ink">
      {/* Sticky Editorial Header */}
      <Header />

      <main className="flex-1">
        {/* Editorial Hero Bio & Positioning */}
        <Hero />

        {/* Flagship Projects Section */}
        <section
          id="projects"
          className="scroll-mt-20 border-b border-hairline bg-canvas py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Section Header with Expand/Collapse All Master Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-hairline pb-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  Systems Proof of Work
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-ink">
                  Flagship Distributed Systems &amp; Tooling
                </h2>
                <p className="font-sans text-sm sm:text-base text-body">
                  High-performance infrastructure applications engineered with strict failure guarantees, protocol compliance, and zero vendor lock-in.
                </p>
              </div>

              {/* Master Toggle */}
              <button
                type="button"
                onClick={toggleAll}
                className="no-print inline-flex items-center gap-2 rounded-md border border-hairline bg-surface-card px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-surface-cream-strong cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
              >
                <span>{isAllExpanded ? "Collapse All Deep Dives" : "Expand All Deep Dives"}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isAllExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Project Cards Stack */}
            <div className="space-y-8">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={!!expandedProjects[project.id]}
                  onToggle={() => toggleProject(project.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Clusters Section */}
        <SkillsSection />

        {/* Education & Continuous Foundations Section */}
        <EducationSection />
      </main>

      {/* Dark Navy Editorial Footer */}
      <Footer />
    </div>
  );
}
