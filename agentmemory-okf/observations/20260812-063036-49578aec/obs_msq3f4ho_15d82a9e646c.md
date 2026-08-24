---
type: file_write
title: Scaffolding/Non-Instruction Markers in SKILL.md
description: No instruction intended
resource: agentmemory://observation/obs_msq3f4ho_15d82a9e646c
tags: ["file_write"]
timestamp: 2026-08-12T12:56:20.600115+00:00
source: agentmemory
session_id: 20260812_063036_49578aec
importance: 6
confidence: 0.75
---
# Summary

During the skill manage tool call, the write_file action was performed on the references/scaffolding-markers.md file. The content included scaffolding markers that are not instructions but rather nonInstruction Markers. These were not intended to be executed by the user but were instead part of the skill Manage behavior.

## Facts
- This turns scaffolding markers into instructions without user intent.
- The file contains a redirect, interruption, or gateway shutdown message.

## Files
- `references/scaffolding-markers.md`

_Importance: 6 · Confidence: 0.75_
