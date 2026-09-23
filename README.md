<img align="right" width="130" src="./public/profile-portrait.jpg" alt="Mahesh Ghamand" style="border-radius: 14px; margin-left: 20px; margin-bottom: 20px;" />

# Mahesh Ghamand

### Software Engineer — Backend & Cloud Infrastructure

Location: Beed, Maharashtra, India • Status: **Open to Opportunities**  
Portfolio: [mahesh0.dev](https://mahesh0.dev) • [youngmahesh.vercel.app](https://youngmahesh.vercel.app)

[![Email](https://img.shields.io/badge/Email-maheshghamand%40gmail.com-0F172A?style=flat-square&logo=gmail&logoColor=FAF8F5)](mailto:maheshghamand@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-YoungMahesh-0F172A?style=flat-square&logo=github&logoColor=FAF8F5)](https://github.com/YoungMahesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-YoungMahesh-0F172A?style=flat-square&logo=linkedin&logoColor=FAF8F5)](https://www.linkedin.com/in/YoungMahesh)
[![Dev.to](https://img.shields.io/badge/Dev.to-YoungMahesh-0F172A?style=flat-square&logo=dev.to&logoColor=FAF8F5)](https://dev.to/YoungMahesh)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-12344647-0F172A?style=flat-square&logo=stackoverflow&logoColor=FAF8F5)](https://stackoverflow.com/users/12344647)

---

## Technical Positioning

Software engineer specializing in distributed backend systems, protocol compliance, and cloud storage infrastructure. Architect and builder of three production systems:

1. **S3-Split**: A high-throughput Storage Gateway enforcing real-time quotas and virtual prefix partitions on S3-compatible storage.
2. **Repo Manage**: A sovereign disaster recovery engine creating cryptographic Native Git Bundle archives from GitHub organizations.
3. **SQL Backups**: An In-Process Streaming database extraction and compression pipeline with companion metadata sidecars.

Experienced in **Go**, **TypeScript**, **Node.js**, **PostgreSQL**, and distributed cloud storage backends (**AWS S3**, **Cloudflare R2**, **MinIO**, **SeaweedFS**).

---

## Flagship Projects

### 1. S3-Split — Storage Gateway & Quotas
> Multi-tenant proxy that partitions S3-compatible storage into managed virtual prefixes with strictly enforced byte-accurate quotas.  
> **Live System:** [https://s3-split.mahesh0.dev/](https://s3-split.mahesh0.dev/)

#### Technical Invariants
- **0 Over-Allocation Leaks:** Pre-upload byte quota reservations prevent concurrent multipart upload quota breaches.
- **Bypass AWS 100-Bucket Limit:** Partitions a single physical bucket into hundreds of virtual prefix "Managed Buckets".
- **Drop-in SigV4 Compatibility:** Intercepts incoming AWS REST calls with 100% AWS SDK drop-in compatibility and zero downstream client rewrites.

#### Architectural Data Flow
```text
┌─────────────────────────┐
│   Downstream Clients    │ (AWS SDK v3 / Boto3 / AWS CLI)
│  (Custom SigV4 Client)  │
└────────────┬────────────┘
             │ HTTP PUT / GET / Multipart (Client Keys)
             ▼
┌─────────────────────────────────────────────────────────────┐
│                 S3-Split Storage Gateway                    │
│ ┌──────────────────────┐      ┌───────────────────────────┐ │
│ │ SigV4 HMAC Validator │ ───► │ PostgreSQL Quota Registry │ │
│ └──────────────────────┘      └─────────────┬─────────────┘ │
│                                             │               │
│ ┌──────────────────────┐                    ▼               │
│ │ Virtual Prefix Router│ ◄─── [Pre-Upload Quota OK?]        │
│ └──────────┬───────────┘                                    │
└────────────┼────────────────────────────────────────────────┘
             │ Upstream Forwarding (AES-256-GCM Master Keys)
             ▼
┌─────────────────────────────────────────────────────────────┐
│         Upstream Storage (AWS S3 / R2 / MinIO)              │
│       s3://physical-bucket/managed-prefix-id/...            │
└─────────────────────────────────────────────────────────────┘
```

#### Key Highlights & Stack
- **Highlights:** Maintains relational PostgreSQL object registry with continuous baseline upstream scanning; transparent multipart chunk reservation; master credentials protected by AES-256-GCM authenticated encryption at rest.
- **Stack:** `TypeScript`, `Node.js`, `AWS SDK v3`, `SigV4 Protocol`, `PostgreSQL`, `AES-256-GCM`, `Docker`.

---

### 2. Repo Manage — Sovereign GitHub Backups
> Automated Git bundle disaster recovery backups for GitHub organizations with strict read-only scoping and native restoration.  
> **Live System:** [https://repo-manage.mahesh0.dev/](https://repo-manage.mahesh0.dev/)

#### Technical Invariants
- **Zero Write Scopes (`contents:read` only):** Minimal principle of least privilege; impossible to mutate code, branches, or secrets.
- **True `.bundle` Format:** Preserves full commit graphs, parent links, branch refs, and annotated tags, unlike flat tarballs or zip archives.
- **1-Command Native Git Restoration:** Disaster recovery executed entirely via standard `git clone <bundle-file>` with zero proprietary tooling.

#### Architectural Data Flow
```text
┌─────────────────────────┐
│     GitHub Org API      │ (contents:read & metadata:read scopes)
└────────────┬────────────┘
             │ Authenticated GraphQL / REST Streams
             ▼
┌─────────────────────────────────────────────────────────────┐
│                 Headless Worker Daemon                      │
│ ┌──────────────────────┐      ┌───────────────────────────┐ │
│ │ Packfile Aggregator  │ ───► │ Commit Graph Verifier     │ │
│ └──────────┬───────────┘      └───────────────────────────┘ │
│            │ Native Git Bundle Creation (.bundle)           │
│            ▼                                                │
│ ┌──────────────────────┐                                    │
│ │ S3 Streaming Uploader│ (AES-256 KMS / SSE-S3 Encrypted)   │
│ └──────────────────────┘                                    │
└────────────┬────────────────────────────────────────────────┘
             │ Timestamped Bundle Streaming
             ▼
┌─────────────────────────┐     1-Command Restoration
│ Encrypted Object Vault  │ ─────────────────────────► $ git clone repo.bundle
└─────────────────────────┘
```

#### Key Highlights & Stack
- **Highlights:** Headless automated worker streams verified Git bundle packfiles directly to AES-256 KMS encrypted private object storage; automated rolling retention windows per repository; user-initiated Archive Purge permanently cleans S3 and DB records.
- **Stack:** `TypeScript`, `Node.js`, `Git CLI & .bundle`, `AWS S3`, `KMS / SSE-S3`, `PostgreSQL`, `GitHub OAuth App`.

---

### 3. SQL Backups — Streaming Database Protection
> Automated and scheduled SQL database backups with in-process streaming and instant companion manifest inspection.  
> **Live System:** [https://sql-backups.mahesh0.dev/](https://sql-backups.mahesh0.dev/)

#### Technical Invariants
- **100% In-Process Streaming Pipeline:** Records extracted from database cursors and compressed on-the-fly directly to object storage.
- **0 Temporary Local Disk Overhead:** Eliminates local disk staging, preventing disk exhaustion on multi-gigabyte production dumps.
- **Companion `.manifest.json` Metadata Sidecar:** Sibling manifest uploaded alongside dump for instantaneous table row, size, and schema inspection without downloading multi-gigabyte archives.

#### Architectural Data Flow
```text
┌─────────────────────────────────────────────────────────────┐
│        Target Databases (PostgreSQL / MySQL / libSQL)        │
└────────────┬────────────────────────────────────────────────┘
             │ Batched Cursor Stream (Chunked Memory Buffer)
             ▼
┌─────────────────────────────────────────────────────────────┐
│            In-Process Streaming Compression Engine          │
│ ┌──────────────────────┐      ┌───────────────────────────┐ │
│ │ Row-to-DDL Exporter  │ ───► │ In-Process Gzip Stream    │ │
│ └──────────┬───────────┘      └─────────────┬─────────────┘ │
│            │                                │               │
│            │ Schema Metadata Capture        │ Dual Pipeline │
│            ▼                                ▼               │
│ ┌──────────────────────┐      ┌───────────────────────────┐ │
│ │   .manifest.json     │      │         .sql.gz           │ │
│ └──────────┬───────────┘      └─────────────┬─────────────┘ │
└────────────┼────────────────────────────────┼───────────────┘
             │ Parallel Multipart Upload      │
             ▼                                ▼
┌─────────────────────────────────────────────────────────────┐
│        Object Storage (SeaweedFS / S3 / R2 / MinIO)         │
│          ├── backup_2026-09-23T040000Z.sql.gz               │
│          └── backup_2026-09-23T040000Z.manifest.json        │
└─────────────────────────────────────────────────────────────┘
```

#### Key Highlights & Stack
- **Highlights:** Dedicated dialect exporters for PostgreSQL (sequences, constraints), MySQL (table locks, auto-increment), and SQLite/libSQL/Turso; dual-object upload pairing `.sql.gz` with JSON schema sidecars; timezone-aware cron scheduler with automated retention pruning.
- **Stack:** `TypeScript`, `Node.js`, `PostgreSQL`, `MySQL`, `SQLite / libSQL`, `SeaweedFS / S3`, `Streaming Gzip`, `AES-256-GCM`.

---

## Skill Clusters

### Languages & Runtimes
| Technology | Core Focus & Usage |
| :--- | :--- |
| **Go** | Concurrent backend services, systems tooling, high-throughput network daemons |
| **TypeScript / Node.js** | Distributed gateways, SigV4 proxies, SDK integrations, CLI tooling |
| **SQL** | Relational data modeling, schema indexing, complex joins, cursor-based streaming |
| **Bash / Shell** | Automated disaster recovery scripting, system daemon automation, Git internals |

### Cloud & Storage Infrastructure
| Platform / Tool | Architectural Capability |
| :--- | :--- |
| **AWS S3 / S3-Compatible** | Virtual prefix routing, SigV4 authentication, multipart uploads |
| **Cloudflare R2 / MinIO / SeaweedFS** | Multi-cloud storage interoperability, self-hosted object stores |
| **Docker & Containers** | Containerized daemons, multi-stage builds, isolated development environments |
| **AWS KMS / SSE-S3** | Envelope encryption, client credential encryption, authenticated AES-256-GCM at rest |

### Systems Protocols & Internals
| Protocol / Domain | Depth & Implementation |
| :--- | :--- |
| **SigV4 Protocol** | HMAC-SHA256 signature validation, canonical request construction, credential scoping |
| **Git Transport Internals** | Packfile structure, commit DAG graph traversal, `.bundle` generation and verification |
| **Streaming Pipelines** | Memory-bounded Node.js streams, piped Gzip compression, backpressure handling |
| **HTTP / REST** | HTTP/1.1 chunked transfer encoding, streaming proxying, presigned URL lifecycles |

### Databases & Storage Engines
| Database | Architectural Context |
| :--- | :--- |
| **PostgreSQL** | Object registries, quota lookups, ACID transactions, schema introspection |
| **MySQL** | Table locking strategies, connection pooling, dialect-specific DDL extraction |
| **libSQL / Turso / SQLite** | Embedded databases, remote replication protocols, schema sequence tracking |

