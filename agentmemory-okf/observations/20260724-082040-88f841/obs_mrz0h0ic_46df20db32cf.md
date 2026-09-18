---
type: CommandRun
title: Fix gateway: scope terminal config bridge to requested profile
description: Fix command branch state and status
resource: agentmemory://observation/obs_mrz0h0ic_46df20db32cf
tags: ["Git command", "commandrun"]
timestamp: 2026-07-24T14:04:03.152310+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 1
---
# Summary

The fix for gateway addresses a flaw in terminal config bridge by scoping the request to the profile. The change is significant as it impacts how terminal config is managed, especially when switching between profiles.

## Facts
- Git version
- Last commit hash
- Commit message

## Concepts
- Git command

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/web_server.py`
- `/Users/davec/.hermes/hermes-agent/tests/hermes_cli/test_web_server.py`

_Importance: 7 · Confidence: 1_
