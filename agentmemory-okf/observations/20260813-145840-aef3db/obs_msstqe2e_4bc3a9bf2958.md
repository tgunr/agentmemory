---
type: file_edit
title: TERMINAL_CWD leak fix
description: No entry matched, retry with exact text.
resource: agentmemory://observation/obs_msstqe2e_4bc3a9bf2958
tags: ["TERMINAL_CWD leak", "file_edit"]
timestamp: 2026-08-14T10:48:28.595988+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 6
confidence: 0.9
---
# Summary

The tool was replaced due to a leek in TERMINAL_CWD, which is fixed now. The edit was triggered by PR#49153 and the fix will require verification after next reboot.

## Facts
- Sebastian's edit

## Concepts
- TERMINAL_CWD leak

_Importance: 6 · Confidence: 0.9_
