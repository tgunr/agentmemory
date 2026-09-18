---
type: FileRead
title: Hermes SSH Terminal Backend
description: Configure and use the terminal tool for SSH connections
resource: agentmemory://observation/obs_msr7qsd6_5ac9e8687abd
tags: ["SSH", "Hermes Agent", "GitHub Actions", "fileread"]
timestamp: 2026-08-13T07:45:09.397541+00:00
source: agentmemory
session_id: 20260813_023354_0f3faf
importance: 8
confidence: 0.9
---
# Summary

"Hermes can run its terminal tool over SSH to a remote host. Getting it working has two non-obvious traps that are easy to misconfigure and expensive to diagnose blind."

## Facts
- The config lives in `.env`, not `config.yaml`.
- Restart Hermes after editing `.env` to apply changes.

## Concepts
- SSH
- Hermes Agent
- GitHub Actions

## Files
- `/Users/davec/.hermes/config.yaml`
- `~/.env`

_Importance: 8 · Confidence: 0.9_
