---
type: file_edit
title: Grep files in Hermes profile config
description: Updated API key
resource: agentmemory://observation/obs_mrxgxn80_946f226c1ed0
tags: ["config file parsing", "file_edit"]
timestamp: 2026-07-23T12:09:20.577198+00:00
source: agentmemory
session_id: 20260723_062742_cf43a2
importance: 5
confidence: 1
---
# Summary

The 'grep' command was called to look for specific pattern in the ai config, and then updated API key found. The result matters because it involves updating a core configuration element.

## Facts
- Called 'grep' command on terminal with: grep -A 2 'apple-fm:' ~/.hermes/profiles/ai/config.yaml | head -5
- Output: apple-fm:\n    api: http://localhost:8001/v1\n    api_key: not-needed;
- Exit code was: 0

## Concepts
- config file parsing

## Files
- `~
      /home/user/.hermes/profiles/ai/config.yaml`

_Importance: 5 · Confidence: 1_
