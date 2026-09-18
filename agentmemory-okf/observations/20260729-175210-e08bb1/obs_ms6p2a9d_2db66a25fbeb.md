---
type: file_edit
title: Modified default project directory configurations
description: Updated settings for configured default project dir
resource: agentmemory://observation/obs_ms6p2a9d_2db66a25fbeb
tags: ["file_edit"]
timestamp: 2026-07-29T23:06:49.579286+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 0.75
---
# Summary

The terminal tool edited the default project directory configuration using Git and shell substitutions. This change affects how the Hermes Desktop app loads configurations.

## Facts
- Git commands were used to update the default project directory path
- A shell substitution was applied to the new path

## Files
- `.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 7 · Confidence: 0.75_
