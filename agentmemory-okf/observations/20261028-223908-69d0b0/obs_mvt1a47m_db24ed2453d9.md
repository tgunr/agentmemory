---
type: file_edit
title: Blocked command execution
description: Command on unconditional blocklist, cannot be executed via the agent
resource: agentmemory://observation/obs_mvt1a47m_db24ed2453d9
tags: ["hardline blocklist command", "file_edit"]
timestamp: 2026-10-29T04:18:53.261343+00:00
source: agentmemory
session_id: 20261028_223908_69d0b0
importance: 5
confidence: 0.9
---
# Summary

The command was blocked due to an inline command payload that exceeded the limit. The command will be saved in the cache and can be executed manually in a terminal.

## Facts
- Command: ssh pve.root ‘bash -s’
- Blocked due to oversized inline command payload

## Concepts
- hardline blocklist command

## Files
- `/Users/davec/.hermes/profiles/systems/cache/blocked-scripts/blocked-1793247533-73ac7919.sh`

_Importance: 5 · Confidence: 0.9_
