---
type: CommandRun
title: Git command in terminal with sed filtering
description: Fetches a specific file from Git repository and filters out lines using sed.
resource: agentmemory://observation/obs_ms6p9uvu_0b5bd6ab9d0c
tags: ["Git, sed, shell scripting", "commandrun"]
timestamp: 2026-07-29T23:12:42.902914+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 8
confidence: 0.9
---
# Summary

The tool used to run a Git command with sed filtering in the terminal. This event matters as it involves code maintenance and persistence of session data in the Hermes-Agent.

## Facts
- Running the command "cd ~/.hermes/hermes-agent/apps/desktop && git show 0a75a2381:apps/desktop/src/store/session.ts 2>&1 | sed -n '565,575p'" in terminal output.

## Concepts
- Git, sed, shell scripting

_Importance: 8 · Confidence: 0.9_
