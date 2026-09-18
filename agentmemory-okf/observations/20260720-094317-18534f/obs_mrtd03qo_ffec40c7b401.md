---
type: CommandRun
title: Inspect OKF bundle structure and document formats
description: Verifying reserved files and sampling observation/session document frontmatter
resource: agentmemory://observation/obs_mrtd03qo_ffec40c7b401
tags: ["Open Knowledge Format (OKF)", "YAML frontmatter schema", "AI agent context management", "Markdown knowledge format", "Document schema validation", "commandrun"]
timestamp: 2026-07-20T15:08:12.140560+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

The command inspects the OKF bundle to verify that only reserved files (log.md, graph/index.md) lack frontmatter per OKF §3.1. It samples an observation document about OKF itself and a session document header, revealing the standardized YAML frontmatter schema used for both document types in the agent memory system.

## Facts
- OKF bundle located at /tmp/am_okf_bundle
- Reserved files without frontmatter per OKF §3.1: log.md, graph/index.md
- Observation docs use YAML frontmatter fields: type, title, description, resource, tags, timestamp, source, session_id, importance, confidence
- Session docs use YAML frontmatter fields: type, title, description, resource, tags, timestamp, source, session_id
- Session docs contain project path, CWD, status, observation count, started/updated timestamps
- Sample observation file: /tmp/am_okf_bundle/observations/20260720-094317-18534f/obs_mrtc51om_41bc16f1cc5e.md
- OKF uses Markdown + YAML frontmatter to standardize knowledge ingestion for AI agents

## Concepts
- Open Knowledge Format (OKF)
- YAML frontmatter schema
- AI agent context management
- Markdown knowledge format
- Document schema validation

## Files
- `/tmp/am_okf_bundle`
- `/tmp/am_okf_bundle/observations/20260720-094317-18534f/obs_mrtc51om_41bc16f1cc5e.md`

_Importance: 5 · Confidence: 1_
