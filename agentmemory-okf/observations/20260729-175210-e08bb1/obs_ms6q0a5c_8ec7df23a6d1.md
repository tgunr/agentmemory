---
type: file_edit
title: Fo Redacted Secret Adaptations
description: Fork Integration for Hermes Home
resource: agentmemory://observation/obs_ms6q0a5c_8ec7df23a6d1
tags: ["React hooks", "SQL migration", "auth middleware", "cross-profile pulse indicators", "tui_gateway refactoring", "file_edit"]
timestamp: 2026-07-29T23:33:15.738338+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 9
confidence: 1
---
# Summary

The `skill_view` tool was used to edit the session reference file. The changes respected key upstream changes, including moves of store atoms and updates of slash commands and GUI architecture. Key issues included type casting, manual verification, testing coverage, lessons learned, and specific pitfalls like missing timezone imports.

## Facts
- HERMES_HOME profile derivation in tui_gateway is now cleanly implemented.
- Terminal config bridge to requested profile is stable with Kept both `finally` reset and `_apply_tui_python_env`.
- /route CLI slash command works with upstream added `/shell`; merged both in.
- /project + /model picker is stable, but adapted for upstream’s $argumenode — improved command definitions.

## Concepts
- React hooks
- SQL migration
- auth middleware
- cross-profile pulse indicators
- tui_gateway refactoring

## Files
- `references/session-2026-07-29-adaptations.md`

_Importance: 9 · Confidence: 1_
