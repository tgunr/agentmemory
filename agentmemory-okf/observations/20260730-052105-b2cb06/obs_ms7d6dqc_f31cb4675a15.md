---
type: file_edit
title: Find and print Hermes profiles
description: Searched for personal projects.db files
resource: agentmemory://observation/obs_ms7d6dqc_f31cb4675a15
tags: ["file_edit"]
timestamp: 2026-07-30T10:21:51.487767+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 7
confidence: 0.75
---
# Summary

The tool print a list of Hermes profile specific database files.

## Facts
- Command executed: find ~/.hermes/profiles -maxdepth 3 -name 'projects.db' -o -name '*.projects*' 2>/dev/null | head -20

## Files
- `/Users/davec/.hermes/profiles/personal/projects.db`
- `/Users/davec/.hermes/profiles/develop/projects.db`
- `/Users/davec/.hermes/profiles/ranch/projects.db`
- `/Users/davec/.hermes/profiles/shop/projects.db`
- `/Users/davec/.hermes/profiles/pveroot/projects.db`
- `/Users/davec/.hermes/profiles/default/projects.db`
- `/Users/davec/.hermes/profiles/ai.projects/db`
- `/Users/davec/.hermes/profiles/cc/projects.db`
- `/Users/davec/.hermes/profiles/ollama/projects.db`

_Importance: 7 · Confidence: 0.75_
