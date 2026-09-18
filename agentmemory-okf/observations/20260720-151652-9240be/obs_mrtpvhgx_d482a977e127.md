---
type: FileRead
title: Bash wrapper hardcoding path detected in worktree testing
description: Hermes test command uses hardcoded Python path
resource: agentmemory://observation/obs_mrtpvhgx_d482a977e127
tags: ["Hermes worktree testing", "Unix shell scripting best practices", "fileread"]
timestamp: 2026-07-20T21:08:31.662399+00:00
source: agentmemory
session_id: 20260720_151652_9240be
importance: 5
confidence: 0.9
---
# Summary

Agentmemory update fails due to hardcoded Python path in Hermes test command. The launchd service points to an outdated Linux-user checkout, prompting changes to the configuration.

## Facts
- Python path leak in worktree testing
- Launchd wrapper points to stale Linux-user checkout instead of dev repo

## Concepts
- Hermes worktree testing
- Unix shell scripting best practices

## Files
- `/Users/davec/.hermes/hermes-agent/venv/bin/hermes`

_Importance: 5 · Confidence: 0.9_
