---
type: file_edit
title: Error packing Hermes.app
description: Packing failed due to missing required 'asar' tool
resource: agentmemory://observation/obs_mrxzywrq_243d1363cc71
tags: ["ASAR packaging issue", "file_edit"]
timestamp: 2026-07-23T21:02:12.315462+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 6
confidence: 1
---
# Summary

The attempt to execute a command on the terminal resulted in an error due to missing required 'asar' tool, which affects the installation of Hermes.app.

## Facts
- Time of observation: 2026-07-23T21:02:12.315462+00:00
- Hook triggered: post_tool_call
- Tool used: terminal
- Command executed: cd /Users/davec/.hermes/hermes-agent/apps/desktop && asar pack dist release/mac-arm64/Hermes.app/Contents/Resources/app.asar 2>&1
- Timeout: 120 seconds

## Concepts
- ASAR packaging issue

_Importance: 6 · Confidence: 1_
