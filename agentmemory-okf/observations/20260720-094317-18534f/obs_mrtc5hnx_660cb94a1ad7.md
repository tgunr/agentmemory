---
type: FileRead
title: Read Open Knowledge Format (OKF) v0.1 Specification
description: Draft spec for markdown/YAML-based AI agent knowledge representation
resource: agentmemory://observation/obs_mrtc5hnx_660cb94a1ad7
tags: ["Open Knowledge Format (OKF)", "Knowledge representation", "Markdown with YAML frontmatter", "AI agent knowledge exchange", "Knowledge Bundle", "Concept ID", "fileread"]
timestamp: 2026-07-20T14:44:23.847140+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Read the draft specification for Open Knowledge Format (OKF) v0.1, a minimal, markdown-and-YAML-based format designed to represent knowledge for AI agents. The spec defines bundles, concepts, and structural conventions to make knowledge self-describing, readable, and portable without requiring bespoke tooling.

## Facts
- OKF v0.1 is a minimal format for representing knowledge using a directory of markdown files with YAML frontmatter.
- Core entities include Knowledge Bundle (directory tree), Concept (markdown doc), and Concept ID (file path minus .md extension).
- Designed to be human-readable, agent-parseable, VCS-diffable, and portable without bespoke SDKs or central authority.
- Bundle structure supports optional index.md and log.md files, and can be distributed via git, tarball, or as a subdirectory.
- Goals include standardizing enrichment/consumption agent interactions; non-goals include fixed taxonomies or replacing domain-specific schemas.

## Concepts
- Open Knowledge Format (OKF)
- Knowledge representation
- Markdown with YAML frontmatter
- AI agent knowledge exchange
- Knowledge Bundle
- Concept ID

## Files
- `/tmp/okf_spec.md`

_Importance: 5 · Confidence: 1_
