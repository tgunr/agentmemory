---
type: FileRead
title: Clearing stale SSH control sockets
description: Forcing fresh backend on next command
resource: agentmemory://observation/obs_mssusy1l_6aa0f541c79a
tags: ["SSH backend caching", "fileread"]
timestamp: 2026-08-14T11:18:27.413532+00:00
source: agentmemory
session_id: 20260814_055249_05a0a4
importance: 5
confidence: 0.9
---
# Summary

A script was run in the terminal to find and remove stale SSH control sockets, forcing a fresh backend on the next command. The process was successful.

## Facts
- Found a stale sock file at /var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-ssh/4f65357d40288770.sock with 0 bytes

## Concepts
- SSH backend caching

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-ssh/4f65357d40288770.sock`

_Importance: 5 · Confidence: 0.9_
