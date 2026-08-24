---
type: FileRead
title: Hermes projects SKILL.md - Consolidation Audits procedure
description: Reading skill documentation for duplicate install cleanup workflows
resource: agentmemory://observation/obs_mrq877pd_f38177f4ff16
tags: ["consolidation audits", "duplicate install cleanup", "lsof CWD verification", "launchd process management", "inode-based deduplication", "ComfyUI desktop metadata", "Hermes skills system", "destructive operation safety", "fileread"]
timestamp: 2026-07-18T10:30:27.262174+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

Read the Consolidation Audits section of the Hermes projects skill documentation. This section defines a structured 9-step workflow for cleaning up duplicate AI tool installs, emphasizing safe verification (lsof over ps), launchd awareness, inode-based dedup, and strict user-approval gates before destructive operations.

## Facts
- File path: ~/.hermes/skills/productivity/projects/SKILL.md, read from offset 501
- Describes 9-step consolidation audit process for duplicate tool installs (ComfyUI, Stable-Diffusion-WebUI, llama.cpp, Ollama)
- Key technique: use lsof -p to find real CWD of bash-wrapped servers, not just ps aux
- Detect launchd-managed processes via ps -o ppid= returning 1; check ~/Library/LaunchAgents/*.plist
- Dedup strategy: compare by (filename, size) for cheap check, (filename, inode) for hardlink detection
- ComfyUI Desktop metadata preserved in .comfyui-desktop-2 marker and .snapshots/ directory
- Rule: propose consolidation plan with options, never execute destructive rm -rf without explicit go-ahead
- Background processes must use background=true parameter, not shell & (blocked by runtime)
- References reusable script at references/sidebar-bulk-registration.py for bulk project registration

## Concepts
- consolidation audits
- duplicate install cleanup
- lsof CWD verification
- launchd process management
- inode-based deduplication
- ComfyUI desktop metadata
- Hermes skills system
- destructive operation safety

## Files
- `~/.hermes/skills/productivity/projects/SKILL.md`

_Importance: 3 · Confidence: 1_
