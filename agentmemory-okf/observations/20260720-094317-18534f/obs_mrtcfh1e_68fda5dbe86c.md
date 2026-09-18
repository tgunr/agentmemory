---
type: CommandRun
title: Deep health check script execution
description: Session stats, OKF semantic search, and memory health metrics
resource: agentmemory://observation/obs_mrtcfh1e_68fda5dbe86c
tags: ["system health monitoring", "Open Knowledge Format", "memory pressure", "semantic search", "session tracking", "commandrun"]
timestamp: 2026-07-20T14:52:09.598804+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

Ran a deep diagnostic script revealing 111 active sessions and memory heap pressure at 89%. The script also surfaced semantic search context for Open Knowledge Format (OKF) using Markdown and YAML frontmatter, alongside recent session errors like Cloudflare bot blocks.

## Facts
- 111 total active sessions; top project /Users/davec/.hermes (37 sessions)
- Current session 20260720_094317_18534f has 21 observations including web fetch blocks and search errors
- Semantic search for "OKF" maps to Open Knowledge Format (Markdown with YAML frontmatter, LLM-wiki pattern)
- Memory heap tight at 89% (RSS 108MB); mem::compress avg time 19036.2ms

## Concepts
- system health monitoring
- Open Knowledge Format
- memory pressure
- semantic search
- session tracking

## Files
- `/tmp/am_deep.sh`

_Importance: 4 · Confidence: 1_
