---
type: FileRead
title: Parsing repo discovery policy for desktop projects
description: No specific context provided.
resource: agentmemory://observation/obs_msabp771_b50ad853cf35
tags: ["fileread"]
timestamp: 2026-08-01T12:03:48.776515+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 5
confidence: 0.75
---
# Summary

This hook is triggered when the desktop agent calls the read_file tool to fetch project sessions.

## Facts
- The process involves scanning repos using the Hermes config
- Calls backend endpoints to record repos based on given policies

_Importance: 5 · Confidence: 0.75_
