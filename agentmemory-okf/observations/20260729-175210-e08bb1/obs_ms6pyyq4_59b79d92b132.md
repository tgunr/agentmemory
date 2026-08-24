---
type: file_edit
title: User ran hermes-agent command in the terminal
description: Sessions and Cron Jobs
resource: agentmemory://observation/obs_ms6pyyq4_59b79d92b132
tags: ["Custom session actions", "Cron Jobs", "Git commands", "file_edit"]
timestamp: 2026-07-29T23:32:14.280322+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 4
confidence: 0.9
---
# Summary

User edited custom session list actions, ran Git command in the terminal with exit code 0.

## Facts
- Tool name: terminal
- Command: cd ~/.hermes/hermes-agent/apps/desktop && git show 4ef92d2e5:apps/desktop/src/app/session/hooks/use-session-list-actions.ts 2>&1 | head -30

## Concepts
- Custom session actions
- Cron Jobs
- Git commands

## Files
- `/home/username/.hermes/hermes-agent/apps/desktop/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 4 · Confidence: 0.9_
