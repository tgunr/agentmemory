---
type: file_edit
title: Failed Hermes window fetching
description: No ASSISTIVE_ACCESS allowed
resource: agentmemory://observation/obs_mvx1qehq_c2b636c20450
tags: ["ASSISTIVE_ACCESS", "file_edit"]
timestamp: 2026-10-31T23:42:37.787975+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

The tool, Hermes, failed to fetch the size of window 1 due to lack of ASSISTIVE_ACCESS. The error was &quot;osascript is not allowed assistive access. (-1719)&quot;.

## Facts
- Command: osascript -e &quot;tell application &quot;System Events&quot; to tell process &quot;Hermes&quot; to get {position, size} of window 1&quot; 2>&1 | tail -2

## Concepts
- ASSISTIVE_ACCESS

_Importance: 6 · Confidence: 0.9_
