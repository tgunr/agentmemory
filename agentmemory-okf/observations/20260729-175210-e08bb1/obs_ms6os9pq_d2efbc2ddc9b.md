---
type: file_edit
title: Searching session stored ID in Hermes store.
description: Running git command on ~/.hermes/hermes-agent/apps/desktop.
resource: agentmemory://observation/obs_ms6os9pq_d2efbc2ddc9b
tags: ["git, grep, session", "file_edit"]
timestamp: 2026-07-29T22:59:02.314141+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 0.9
---
# Summary

The tool ran a git command to search for the session stored ID in the Hermes store.

## Facts
- Command: cd &#x26; git show 7f74b324c src/store/session.ts | grep -n \"sessionMatchesStoredId\"

## Concepts
- git, grep, session

## Files
- `~/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 7 · Confidence: 0.9_
