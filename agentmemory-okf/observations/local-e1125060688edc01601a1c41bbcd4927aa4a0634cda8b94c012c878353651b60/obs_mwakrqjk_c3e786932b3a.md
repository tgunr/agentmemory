---
type: Observation
title: Curl Command
description: Run curl command with repository APIs
resource: agentmemory://observation/obs_mwakrqjk_c3e786932b3a
tags: ["api", "curl", "bitbucket", "observation"]
timestamp: 2026-11-10T10:56:33.047279+00:00
source: agentmemory
session_id: local-e1125060688edc01601a1c41bbcd4927aa4a0634cda8b94c012c878353651b60
importance: 4
confidence: 1
---
# Summary

Attempt to retrieve Bitbucket API data via curl command resulted in errors due to deactivated workspace and API not found.

## Facts
- Time stamped: 2026-11-10T10:56:33.047279+00:00
- Tool: terminal
- curl -s -m 20 \"https://api.bitbucket.org/2.0/repositories?role=member&pagelen=100\" | head -c 2000; echo; echo \"=== anon factor workspace:\"; curl -s -m 20 \"https://api.bitbucket.org/2.0/repositories/factor?pagelen=100\" | head -c 3000

## Concepts
- api
- curl
- bitbucket

_Importance: 4 · Confidence: 1_
