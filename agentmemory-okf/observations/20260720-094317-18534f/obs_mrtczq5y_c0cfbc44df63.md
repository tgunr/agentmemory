---
type: file_write
title: Created OKF bridge exporter for AgentMemory
description: Python script converting AgentMemory JSON exports to Open Knowledge Format markdown bundles
resource: agentmemory://observation/obs_mrtczq5y_c0cfbc44df63
tags: ["Open Knowledge Format (OKF)", "AgentMemory export", "markdown frontmatter", "knowledge graph export", "YAML frontmatter generation", "cross-linked documents", "data format conversion", "file_write"]
timestamp: 2026-07-20T15:07:54.543687+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 6
confidence: 1
---
# Summary

A new Python script was created to bridge AgentMemory's native export format to Open Knowledge Format (OKF) v0.1. The exporter reads the official AgentMemory JSON export and produces a conformant Knowledge Bundle consisting of markdown files with YAML frontmatter, where each observation becomes a concept document cross-linked to its parent session. This enables AgentMemory knowledge to be consumed by OKF-compatible tools and systems.

## Facts
- File written: 10784 bytes to /Volumes/AI/Servers/agentmemory-kilo-hooks/okf_bridge.py
- Implements OKF v0.1 specification with YAML frontmatter and cross-linked markdown documents
- Consumes AgentMemory v0.9.27 official export JSON format
- Maps AgentMemory observation types (search, web_fetch, file_read, command_run, error, notification, other, fact, memory) to OKF types
- Groups observations by sessionId and creates both session docs and flat concept docs per observation
- Generates root index.md with progressive disclosure structure
- CLI usage: python3 okf_bridge.py --export /path/to/export.json --out /path/to/bundle [--quiet]

## Concepts
- Open Knowledge Format (OKF)
- AgentMemory export
- markdown frontmatter
- knowledge graph export
- YAML frontmatter generation
- cross-linked documents
- data format conversion

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_bridge.py`

_Importance: 6 · Confidence: 1_
