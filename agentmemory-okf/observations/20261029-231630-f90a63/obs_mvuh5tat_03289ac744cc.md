---
type: file_edit
title: API profiling tool usage
description: Extracting profiles, projects, and sessions from Hermes
resource: agentmemory://observation/obs_mvuh5tat_03289ac744cc
tags: ["API profiling", "file_edit"]
timestamp: 2026-10-30T04:31:12.529031+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 0.9
---
# Summary

The tool used the terminal and a custom script to extract profile and session data from Hermes. This information is relevant for testing and debugging purposes.

## Facts
- Auth token retrieved from /tmp/hprobe.token
- Curl request made to API endpoints with base64 encoded token

## Concepts
- API profiling

## Files
- `/tmp/hprobe.token`
- `/Users/davec/.hermes/profiles/*.json`
- `/Users/davec/.hermes/projects/tree.json`
- `/Users/davec/.hermes/sessions.json`

_Importance: 7 · Confidence: 0.9_
