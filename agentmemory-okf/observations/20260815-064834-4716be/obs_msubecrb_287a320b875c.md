---
type: FileRead
title: Running command in temp directory
description: Fetching feature documentation from GitHub
resource: agentmemory://observation/obs_msubecrb_287a320b875c
tags: ["GitHub API", "curl command", "fileread"]
timestamp: 2026-08-15T11:50:46.290428+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 8
confidence: 1
---
# Summary

User ran terminal command to download feature documentation from GitHub and saved it as "fp.md". The command was run in a temporary directory, and the output was successfully received.

## Facts
- Tool: terminal
- Command: cd /tmp && curl -fsSL \"https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/docs/user-guide/features/fallback-providers.md\" -o fp.md 2>&1 | head; echo \"EXIT:$?\"; wc -l fp.md
- Output: EXIT:0\n     435 fp.md

## Concepts
- GitHub API
- curl command

## Files
- `/tmp/fp.md`

_Importance: 8 · Confidence: 1_
