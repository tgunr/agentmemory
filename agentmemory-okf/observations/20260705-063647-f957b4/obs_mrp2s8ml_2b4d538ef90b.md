---
type: CommandRun
title: Search for hermes-agent directory locations
description: Located project directories in user home and mounted AI volume
resource: agentmemory://observation/obs_mrp2s8ml_2b4d538ef90b
tags: ["directory search", "filesystem mounts", "project discovery", "commandrun"]
timestamp: 2026-07-17T15:11:04.361092+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The agent executed a shell command to locate the hermes-agent project directory across known paths, mounted volumes, and the user's home directory. It discovered the project exists in two hidden directories under /Users/davec/ rather than standard project folders.

## Facts
- External volume /Volumes/AI is mounted (apfs, /dev/disk7s4)
- hermes-agent not found in standard project paths or /Volumes/AI/hermes-agent
- Found hermes-agent at /Users/davec/.hermes-fresh/hermes-agent
- Found hermes-agent at /Users/davec/.hermes/hermes-agent

## Concepts
- directory search
- filesystem mounts
- project discovery

## Files
- `/Users/davec/.hermes-fresh/hermes-agent`
- `/Users/davec/.hermes/hermes-agent`
- `/Volumes/AI`

_Importance: 4 · Confidence: 1_
