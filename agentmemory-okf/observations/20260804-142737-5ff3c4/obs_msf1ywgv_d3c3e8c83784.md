---
type: CommandRun
title: `skill_view`: Explain Hermes project roots, working directories...
description: The correct CWD must be set on launch time for Desktop chat sessions.
resource: agentmemory://observation/obs_msf1ywgv_d3c3e8c83784
tags: ["commandrun"]
timestamp: 2026-08-04T19:30:16.156273+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 7
confidence: 0.75
---
# Summary

This skill handles questions about setting the correct working directory for Hermes tools and Desktop chat sessions, including key rules and examples.

## Facts
- The directory where you run `<hermes>` or `<hermes chat>` is the filesystem tool project root.
- The initial project directory supplied at launch with `<hermes desktop --cwd <path>>` sets the Desktop app's CWD.

_Importance: 7 · Confidence: 0.75_
