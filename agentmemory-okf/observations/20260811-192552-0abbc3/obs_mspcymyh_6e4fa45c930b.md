---
type: FileRead
title: HTML code for agent memory viewer
description: (default-src 'none', style-src 'unsafe-inline')
resource: agentmemory://observation/obs_mspcymyh_6e4fa45c930b
tags: ["fileread"]
timestamp: 2026-08-12T00:35:41.366197+00:00
source: agentmemory
session_id: 20260811_192552_0abbc3
importance: 6
confidence: 0.75
---
# Summary

The agent memory viewer's code contains strict Content Security Policy (CSP) settings that result in broken stylesheets rendering. This affects the browser's behavior when handling scripts.

## Facts
- The viewer CSP is strict.
- External stylesheets from fonts.googleapis.com were blocked, producing console CSP violations that some browsers (Windows Edge in particular) escalate into broader script-execution issues.

## Files
- `/Volumes/AI/agentmemory/src/viewer/index.html`

_Importance: 6 · Confidence: 0.75_
