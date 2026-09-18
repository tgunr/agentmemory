---
type: WebFetch
title: Google Open Knowledge Format (OKF) markdown standard for AI agents
description: Research on OKF v0.1 specification launched June 12, 2026
resource: agentmemory://observation/obs_mrtc4x0t_af939e0e47bd
tags: ["Open Knowledge Format", "OKF", "markdown standard", "YAML frontmatter", "AI agent context", "webfetch"]
timestamp: 2026-07-20T14:43:57.097706+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 8
confidence: 1
---
# Summary

Google introduced OKF (Open Knowledge Format) as a minimal markdown-based standard for representing metadata, context, and curated knowledge that AI systems need. The format consists of markdown files with YAML frontmatter where each file represents one concept, designed to be simple enough that no special tooling is required - compatible with basic file operations and git workflows.

## Facts
- Google launched Open Knowledge Format (OKF) v0.1 on June 12, 2026
- OKF represents knowledge as a directory of markdown files with YAML frontmatter
- Each file represents one concept and interlinks with standard markdown links
- The only required field in YAML frontmatter is "type"
- OKF is vendor-neutral, agent- and human-friendly standard with no schema registry or central authority
- If you can cat a file, you can read OKF; if you can git clone a repo, you can use it

## Concepts
- Open Knowledge Format
- OKF
- markdown standard
- YAML frontmatter
- AI agent context

## Files
- `https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md`

_Importance: 8 · Confidence: 1_
