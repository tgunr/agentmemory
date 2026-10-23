---
type: file_edit
title: Modify adopt functionality
description: Update adopt plugin to use selected environment
resource: agentmemory://observation/obs_mvjmx1vu_852ed1f5ae2f
tags: ["process management", "file_edit"]
timestamp: 2026-10-22T14:26:53.499530+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 8
confidence: 0.9
---
# Summary

The adapt process for a newly selected dependency is updated to properly load the new environment. This ensures that changes made in one process do not affect other processes. The update impacts the adoption of a newly selected dependency generation inside a running process.

## Facts
- a new distribution path is added if a new project is selected
- a previously loaded distribution must be reloaded to maintain context

## Concepts
- process management

## Files
- `/Users/davec/.hermes/hermes-agent PM/_venv_entry.py`

_Importance: 8 · Confidence: 0.9_
