# Resume Portfolio Context

The domain glossary and language rules for Mahesh's software engineering resume and systems portfolio.

## Language

**Flagship Project**:
One of the three core infrastructure systems (S3-Split, Repo Manage, SQL Backups) engineered to prove architectural depth, protocol compliance, and reliability.
_Avoid_: Side project, hobby app, toy project

**Architecture Deep Dive**:
An expandable technical inspection view within a Flagship Project card detailing request lifecycle, invariants, and data flow.
_Avoid_: Details modal, description popup

**Storage Gateway**:
A high-throughput proxy intercepting object storage requests to enforce real-time quotas and virtual prefix partitions before upstream transfer.
_Avoid_: S3 wrapper, middleware

**Native Git Bundle**:
A cryptographically verifiable `.bundle` transport archive containing packfiles, commit graphs, tags, and branch refs restorable via standard Git.
_Avoid_: Tarball, repo zip, code dump

**In-Process Streaming**:
A memory-bounded data extraction and Gzip pipeline transferring records directly from database cursors to object storage with zero temporary disk footprint.
_Avoid_: Dump-and-upload, disk staging

**Print View**:
A dedicated ATS-compliant print-media stylesheet format triggered when the user prints or exports to PDF.
_Avoid_: PDF generator, export route

**Technical Invariant**:
A non-negotiable architectural constraint or structural guarantee preserved across all runtime execution states.
_Avoid_: Feature, spec, bullet point

**Skill Cluster**:
A domain-grouped taxonomy of technical competencies emphasizing systems engineering and data infrastructure depth.
_Avoid_: Skill list, proficiency bucket

**Profile Portrait**:
A high-fidelity editorial photograph of the engineer presented in the digital Hero view, strictly excluded from the Print View to preserve automated ATS compatibility.
_Avoid_: Avatar, headshot, selfie, picture, mugshot

**Profile README**:
The root Markdown document for the special `YoungMahesh/YoungMahesh` repository rendered publicly on Mahesh's GitHub profile, synthesizing systems engineering positioning, Flagship Projects, and Skill Clusters.
_Avoid_: Github readme, bio markdown, profile page
