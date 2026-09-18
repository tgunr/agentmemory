---
type: file_edit
title: Vite Build Command
description: Error during frontend build
resource: agentmemory://observation/obs_mry2zwfs_770b7076b0da
tags: ["file_edit"]
timestamp: 2026-07-23T22:26:57.393434+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.85
---
# Summary

The frontend build process for the Hermes agent's desktop application failed due to a long-lived server watch process. Run the command with background=true and verify readiness before executing tests.

## Facts
- Timestamp: 2026-07-23T22:26:57.393434+00:00
- Tool: terminal
- Command: cd /Users/davec/.hermes/hermes-agent/apps/desktop && npx vite build 2>&1 | tail -20

_Importance: 5 · Confidence: 0.85_
