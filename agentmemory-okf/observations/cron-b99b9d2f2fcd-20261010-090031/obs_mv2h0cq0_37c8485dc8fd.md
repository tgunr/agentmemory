---
type: file_edit
title: Test basic browser functions with new_tab()
description: Noise while trying to load gpudojo.com in a new tab
resource: agentmemory://observation/obs_mv2h0cq0_37c8485dc8fd
tags: ["file_edit"]
timestamp: 2026-10-10T14:09:24.835544+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261010_090031
importance: 5
confidence: 0.75
---
# Summary

Running code in browser_exec resulted in an error while trying to load gpudojo.com in a new tab.

## Facts
- exit_code = 1 in browser_exec
- stderr contains SyntaxError: 'await' outside function

_Importance: 5 · Confidence: 0.75_
