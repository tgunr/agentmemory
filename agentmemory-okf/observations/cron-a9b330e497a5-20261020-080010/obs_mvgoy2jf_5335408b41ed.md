---
type: file_edit
title: Setup Google Workspace productivity skill
description: Initialise OAuth credentials for Google services access
resource: agentmemory://observation/obs_mvgoy2jf_5335408b41ed
tags: ["OAuth, Google Workspace, CLI wrapper", "file_edit"]
timestamp: 2026-10-20T13:00:21.717064+00:00
source: agentmemory
session_id: cron_a9b330e497a5_20261020_080010
importance: 7
confidence: 0.9
---
# Summary

The skill invokes OAuth setup for Google Workspace, presenting the user with two questions to determine the scope of services required. This process creates and downloads a JSON client secret file, which must be used in future tool calls for authentication.

## Facts
- Normally non-interactive, but step-by-step to accommodate various platforms

## Concepts
- OAuth, Google Workspace, CLI wrapper

## Files
- `references/google-workspace.md`

_Importance: 7 · Confidence: 0.9_
