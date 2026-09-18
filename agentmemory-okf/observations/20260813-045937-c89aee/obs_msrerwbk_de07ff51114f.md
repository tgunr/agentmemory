---
type: file_edit
title: MCP Connection closed from macOS TCC volume block.
description: The agent process tree lacks access to files on the TCC sandboxed volumes.
resource: agentmemory://observation/obs_msrerwbk_de07ff51114f
tags: ["file_edit"]
timestamp: 2026-08-13T11:01:58.492027+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 8
confidence: 0.75
---
# Summary

The tool skill_view documented a systemic cause of Connection closed failures when several servers share that volume. The agent cannot run on the blocked volume.

## Facts
- TCC sandbox grants file access to launchd-launched but not to Hermes.

## Files
- `/Users/davec/.../index.js`

_Importance: 8 · Confidence: 0.75_
